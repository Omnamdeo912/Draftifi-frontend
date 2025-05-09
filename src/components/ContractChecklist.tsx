import React from 'react';
import { Check } from 'lucide-react';

export interface ChecklistItem {
  id: string;
  title: string;
  isCompleted: boolean;
  sectionType: string;
}

interface ContractChecklistProps {
  items: ChecklistItem[];
  title: string;
}

const ContractChecklist: React.FC<ContractChecklistProps> = ({ items, title }) => {
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} className="flex items-center gap-2">
            <div className={`w-5 h-5 flex items-center justify-center rounded border ${
              item.isCompleted 
                ? 'bg-draftifi-blue border-draftifi-blue text-white' 
                : 'border-gray-300'
            }`}>
              {item.isCompleted && <Check className="w-3 h-3" />}
            </div>
            <span className={item.isCompleted ? 'text-black' : 'text-gray-500'}>
              {item.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContractChecklist;