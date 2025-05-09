import React, { useState, useEffect } from 'react';
import { Mic, FileText, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ContractChecklist  from '@/components/ContractChecklist';

interface QuestionFormProps {
  question?: string;
  category: string;
  sectionType: string;
  inputType: string;
  purpose: string;
  options?: string[];
  tableHeaders?: string[];
  sampleRows?: string[][];
  suggestions?: string[];
  hideNumber?: boolean;
  showNavigation?: boolean;
  onNext: (answer: string) => void;
  onPrevious: () => void;
  onGenerate?: () => void;
  isLastQuestion: boolean;
  isFirstQuestion: boolean;
  onAddAnnexure?: (questionNumber: number, question: string, answer: string) => void;
}

const QuestionForm: React.FC<QuestionFormProps> = ({ 
  question, 
  category,
  sectionType,
  inputType,
  purpose,
  options = [],
  tableHeaders = [],
  sampleRows = [],
  suggestions = [], 
  hideNumber = false,
  showNavigation = true,
  onNext,
  onPrevious,
  onGenerate,
  isLastQuestion,
  isFirstQuestion,
  onAddAnnexure
}) => {
  const [answer, setAnswer] = useState('');
  const [tableData, setTableData] = useState<string[][]>(sampleRows || []);
  const [checkboxValues, setCheckboxValues] = useState<string[]>([]);
  const [showPurpose, setShowPurpose] = useState(false);
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    setTableData(sampleRows || []);
  }, [sampleRows]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputType === 'table') {
      onNext(JSON.stringify(tableData));
    } else {
      onNext(answer);
    }
    setAnswer('');
    setTableData(sampleRows || []);
    setCheckboxValues([]);
    // Update completed sections
    setCompletedSections(prev => new Set(prev).add(sectionType));
  };

  const handleSuggestionClick = (suggestion: string) => {
    setAnswer(suggestion);
  };

  const handleAddAnnexure = () => {
    if (onAddAnnexure) {
      if (inputType === 'table') {
        onAddAnnexure(0, question, JSON.stringify(tableData));
      } else if (inputType === 'checkboxes') {
        onAddAnnexure(0, question, JSON.stringify(checkboxValues));
      } else {
        onAddAnnexure(0, question, answer);
      }
      toast.success("Added to annexure");
    }
  };

  // Table input handlers
  const handleTableChange = (rowIdx: number, colIdx: number, value: string) => {
    setTableData(prev => {
      const updated = prev.map(r => [...r]);
      updated[rowIdx][colIdx] = value;
      return updated;
    });
  };

  // Checkbox input handler
  const handleCheckboxChange = (option: string) => {
    setCheckboxValues(prev =>
      prev.includes(option)
        ? prev.filter(v => v !== option)
        : [...prev, option]
    );
  };

  // Yes/No handler
  const handleYesNo = (val: string) => {
    setAnswer(val);
  };

  // Dropdown handler
  const handleDropdown = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAnswer(e.target.value);
  };

  // Render input based on inputType
  let inputField = null;
  if (inputType === 'text') {
    inputField = (
      <Input
        value={answer}
        onChange={e => setAnswer(e.target.value)}
        placeholder="Type your answer here..."
        className="flex-1"
      />
    );
  } else if (inputType === 'number') {
    inputField = (
      <Input
        type="number"
        value={answer}
        onChange={e => setAnswer(e.target.value)}
        placeholder="Enter a number"
        className="flex-1"
      />
    );
  } else if (inputType === 'date') {
    inputField = (
      <Input
        type="date"
        value={answer}
        onChange={e => setAnswer(e.target.value)}
        className="flex-1"
      />
    );
  } else if (inputType === 'textarea') {
    inputField = (
      <textarea
        value={answer}
        onChange={e => setAnswer(e.target.value)}
        placeholder="Type your answer here..."
        className="flex-1 border rounded-md px-3 py-2 min-h-[80px]"
      />
    );
  } else if (inputType === 'dropdown') {
    inputField = (
      <select
        value={answer}
        onChange={handleDropdown}
        className="flex-1 border rounded-md px-3 py-2"
      >
        <option value="">Select an option</option>
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    );
  } else if (inputType === 'yesno') {
    inputField = (
      <div className="flex gap-4">
        {options.map(opt => (
          <Button
            key={opt}
            type="button"
            variant={answer === opt ? "default" : "outline"}
            className={answer === opt ? "bg-[#5D5E80] text-white" : "border-gray-300"}
            onClick={() => handleYesNo(opt)}
          >
            {opt}
          </Button>
        ))}
      </div>
    );
  } else if (inputType === 'checkboxes') {
    inputField = (
      <div className="flex flex-wrap gap-3">
        {options.map(opt => (
          <label key={opt} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={checkboxValues.includes(opt)}
              onChange={() => handleCheckboxChange(opt)}
            />
            {opt}
          </label>
        ))}
      </div>
    );
  } else if (inputType === 'table') {
    inputField = (
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-md">
          <thead>
            <tr>
              {tableHeaders.map((header, idx) => (
                <th key={idx} className="px-4 py-2 bg-[#edeafd] text-[#5D5E80] text-left">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIdx) => (
              <tr key={rowIdx}>
                {row.map((cell, colIdx) => (
                  <td key={colIdx} className="px-4 py-2 border">
                    <Input
                      value={cell}
                      onChange={e => handleTableChange(rowIdx, colIdx, e.target.value)}
                      className="w-full"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      {/* <ContractChecklist items={Array.from(completedSections).map(section => ({
        id: section,
        title: section,
        isCompleted: true,
        type: 'section'
      }))} title="Completed Sections" /> */}
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-lg text-gray-800">
          {question}
      </h2>
        <TooltipProvider>
          <Tooltip open={showPurpose} onOpenChange={setShowPurpose}>
            <TooltipTrigger asChild>
              <button type="button" onClick={() => setShowPurpose(v => !v)} className="ml-2 text-[#5D5E80]">
                <Info className="h-5 w-5" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="right" className="max-w-xs">
              <div className="text-sm text-gray-700 whitespace-pre-line">
                {purpose}
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      {suggestions.length > 0 && (
        <div className="mb-4 flex flex-wrap text-gray-700 gap-2">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => setAnswer(suggestion)}
              className="bg-[#edeafd] px-4 py-2 rounded-md text-sm hover:bg-[#d1d0e7] transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="flex items-center gap-2">
          {inputField}
          {inputType === 'text' && (
          <Button type="button" variant="outline" size="icon" className="shrink-0 border-indigo-400">
            <Mic className="h-4 w-4" />
          </Button>
          )}
        </div>
        {showNavigation && (
          <div className="flex justify-end items-center gap-3 mt-6">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleAddAnnexure}
                    className="flex items-center gap-2"
                  >
                    <FileText className="h-4 border-indigo-300 w-4" />
                    Add to annexure
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Click to add this question and answer to the annexure section for future reference</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            {!isFirstQuestion && (
              <Button 
                type="button"
                onClick={onPrevious}
                variant="outline"
                className="border-gray-300 hover:bg-gray-500 hover:text-white"
              >
                Previous
              </Button>
            )}
          {isLastQuestion ? (
            <Button 
              type="button" 
              onClick={() => onGenerate && onGenerate()}
                className="bg-[#5D5E80] text-white hover:bg-[#47486a]"
            >
              Generate contract
            </Button>
          ) : (
            <Button 
              type="submit"
                className="bg-[#5D5E80] text-white hover:bg-[#47486a]"
            >
              Next
            </Button>
          )}
        </div>
        )}
      </form>
    </div>
  );
};

export default QuestionForm;

