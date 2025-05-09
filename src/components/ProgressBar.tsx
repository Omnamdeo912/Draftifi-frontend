
import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  // Calculate the progress percentage
  const progress = (currentStep / totalSteps) * 100;
  
  return (
    <div className="w-full relative">
      {/* Floating pill label */}
      <div
        className="absolute -top-8 z-10 px-3 py-0.5 text-sm font-medium text-primary bg-white border border-accent rounded-md shadow-sm transition-all transform -translate-x-1/2"
        style={{
          left: `${progress}%`, // perfectly centered using transform
        }}
      >
        {currentStep} of {totalSteps}
      </div>
      
      {/* Progress bar container */}
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="h-2.5 rounded-full" 
          style={{ 
            width: `${progress}%`,
            background: 'linear-gradient(to right, #6A80C0, #5E5D80)'
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
