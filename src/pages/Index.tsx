import React, { useState, useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';
import ContractChecklist from '@/components/ContractChecklist';
import ComplianceInfo from '@/components/ComplianceScore';
import ProgressBar from '@/components/ProgressBar';
import QuestionForm from '@/components/QuestionForm';
import ContractPreview from '@/components/ContractPreview';

import {
  questions as allQuestions,
  contractSections,
  calculateComplianceScore,
  generateContractHTML,
  getCompletedSections,
  Question
} from '@/data/questions';

interface AnnexureItem {
  questionNumber: number;
  question: string;
  answer: string;
}

const Index = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contractContent, setContractContent] = useState<string>('');
  const [checklistItems, setChecklistItems] = useState<Array<{
    id: string;
    title: string;
    isCompleted: boolean;
    type: string;
  }>>([]);
  const [annexureItems, setAnnexureItems] = useState<AnnexureItem[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const questions = allQuestions;
  const currentQuestion = questions[currentIdx];

  // Auto-scroll to the current question
  useEffect(() => {
    if (questionRefs.current[0]) {
      questionRefs.current[0]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [currentIdx]);

  // Initialize checklist items
  useEffect(() => {
    const items = contractSections.map((section, index) => ({
      id: `section-${index}`,
      title: section,
      isCompleted: false,
      type: section
    }));
    setChecklistItems(items);
  }, []);

  // Update checklist when answers change
  useEffect(() => {
     if (Object.keys(answers).length === 0) return;

  // Find all section types that have at least one answered question
  const completedSections = new Set<string>();
  Object.keys(answers).forEach(key => {
    const questionId = parseInt(key);
    const question = questions.find(q => q.id === questionId);
    if (question && answers[key]) {
      completedSections.add(question.sectionType); // Use sectionType instead of category
    }
  });

  // Update checklist items based on completed sections
  setChecklistItems(prevItems =>
    prevItems.map(item => ({
      ...item,
      isCompleted: completedSections.has(item.type) // Match sectionType with checklist item type
    }))
  );
    
    // Generate contract preview as answers are provided
    const generatedContract = generateContractHTML(answers);
    setContractContent(generatedContract);
  }, [answers]);

  const handleAnswerSubmit = (answer: string | string[][]) => {
    // Convert all answers to strings
    const formattedAnswer = Array.isArray(answer) ? JSON.stringify(answer) : answer;
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: formattedAnswer }));
    setTimeout(() => setCurrentIdx(idx => Math.min(idx + 1, questions.length - 1)), 100);
  };

  const handlePrevious = () => {
    setCurrentIdx(idx => Math.max(idx - 1, 0));
  };

  // 
  const handleGenerateContract = async () => {
    try {
      // Format questions and answers together
      const formattedData = Object.entries(answers).map(([key, value]) => {
        const questionId = key.startsWith('Q') ? key.substring(1) : key;
        const question = questions.find(q => q.id === parseInt(questionId));
        return {
          id: parseInt(questionId),
          text: question?.text || '',
          category: question?.category || '',
          input_type: question?.input_type || '',
          answer: value
        };
      });

      console.log('Sending data to backend:', formattedData);

      const response = await fetch("http://localhost:8000/generate-contract", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ questions_answers: formattedData })
      });

      if (!response.ok) throw new Error("Failed to generate contract");

      const data = await response.json();
      console.log('Received contract from backend:', data.contract_text);
      
      // Set the contract content directly
      setContractContent(data.contract_text);
      
      toast.success("Contract generated successfully!");
    } catch (err) {
      console.error('Error generating contract:', err);
      toast.error("Failed to generate contract");
    }
  };

  const handleDownload = () => {
    // Create a Blob with the contract HTML
    const blob = new Blob([`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employment Agreement</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: #f5f5f5;
          }
          .contract-container {
            background: white;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          h1, h2, h3 {
            color: #2c3e50;
            text-align: center;
          }
          h1 {
            border-bottom: 2px solid #3498db;
            padding-bottom: 10px;
            margin-bottom: 30px;
          }
          h2 {
            color: #3498db;
            margin-top: 30px;
            border-bottom: 1px solid #eee;
            padding-bottom: 10px;
          }
          p {
            text-align: justify;
            margin: 15px 0;
          }
          .section {
            margin-bottom: 30px;
          }
          .signature-block {
            margin-top: 50px;
            display: flex;
            justify-content: space-between;
          }
          .signature-line {
            border-top: 1px solid #000;
            width: 200px;
            margin-top: 50px;
          }
          @media print {
            body {
              background: white;
              padding: 0;
            }
            .contract-container {
              box-shadow: none;
              padding: 20px;
            }
          }
        </style>
      </head>
      <body>
        <div class="contract-container">
          ${contractContent}
        </div>
      </body>
      </html>
    `], { type: 'text/html' });
    
    // Create a temporary link to download the blob
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Employment_Agreement.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    toast.success("Contract downloaded successfully!");
  };

  const handleAddAnnexure = (questionNumber: number, question: string, answer: string) => {
    setAnnexureItems(prev => [...prev, { questionNumber, question, answer }]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          {/* <Logo /> */}
            <div className="flex items-center space-x-2">
    <Logo />
    <span className="text-secondary font-national-park text-3xl">Draftifi</span>
  </div>
          {/* {contractContent && (
            <Button variant="outline" onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" /> Download
            </Button>
          )}
              <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300">
      <img
        src="/path-to-profile-icon.png" // Replace with the path to your profile icon
        alt="Profile"
        className="w-8 h-8 rounded-full"
      />
    </button> */}
    <div className="flex items-center space-x-4">
    {/* {contractContent && (
      <Button variant="outline" onClick={handleDownload}>
        <Download className="mr-2 h-4 w-4" /> Download
      </Button>
    )} */}
    {/* Profile Icon */}
 <div className="flex items-center mr-19 space-x-3">
  {/* Dashboard Button */}
  <button
    className="flex items-center mr-19 gap-2 px-4 py-2 mr-30 rounded-full bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200 ease-in-out"
    aria-label="Go to Dashboard"
    title="Dashboard"
    onClick={() => navigate('/dashboard')} // Navigate t
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-gray-700"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 9.75L12 3l9 6.75M4.5 10.5V19.5a.75.75 0 00.75.75h4.5V15a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v5.25h4.5a.75.75 0 00.75-.75V10.5"
      />
    </svg>
    <span className="text-sm font-medium text-gray-800">Dashboard</span>
  </button>

  {/* Profile Button */}
  <button
    className="flex items-center mr-20 justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200 ease-in-out"
    aria-label="Open user profile"
    title="User Profile"
  >
    <div className="relative">
      <img
        src="https://avatars.githubusercontent.com/u/583231?v=4"
        alt="User Profile"
        className="w-9 h-9 rounded-full object-cover border-2 border-gray-300"
        onError={(e) => {
          e.currentTarget.src = "https://via.placeholder.com/150";
        }}
      />
      <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
    </div>
  </button>
</div>

  </div>
        </header>

        {/* <h2 className="text-2xl font-semibold mb-6">Start a fresh contract</h2> */}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <ContractChecklist classname = "text-gray-900"
              items={checklistItems} 
              title="Employment Agreement Structure" 
            />
            <ComplianceInfo 
              improvementAreas={[
                "Consider adding more specific payment terms",
                "Include dispute resolution procedures",
                "Specify termination conditions"
              ]}
              missingClauses={[
                "Force Majeure clause",
                "Confidentiality agreement",
                "Intellectual property rights"
              ]}
              potentialRisks={[
                "Unclear delivery timelines",
                "Insufficient liability protection",
                "Vague scope of work"
              ]}
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Category above Progress Bar */}
            <div className="mb-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#edeafd] text-[#5D5E80] font-medium text-sm">
                {currentQuestion.category}
              </span>
            </div>
            {/* Progress Bar */}
            <ProgressBar 
              currentStep={currentIdx + 1} 
              totalSteps={questions.length} 
            />
            {/* Render only the current question */}
            <div ref={el => (questionRefs.current[0] = el)}>
              <QuestionForm
                question={currentQuestion.text}
                category={currentQuestion.category}
                inputType={currentQuestion.input_type}
                purpose={currentQuestion.purpose}
                options={currentQuestion.options}
                tableHeaders={currentQuestion.table_headers}
                sampleRows={currentQuestion.sample_rows}
                suggestions={currentQuestion.suggestions}
                onNext={handleAnswerSubmit}
                onPrevious={handlePrevious}
                onGenerate={handleGenerateContract}
                isLastQuestion={currentIdx === questions.length - 1}
                isFirstQuestion={currentIdx === 0}
                onAddAnnexure={handleAddAnnexure}
                hideNumber={true}
                showNavigation={true}
              />
            </div>
            {/* Contract Preview */}
            <ContractPreview 
              answers={answers}
              onBack={() => {
                setCurrentIdx(0);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
