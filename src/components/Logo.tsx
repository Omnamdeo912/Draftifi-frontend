
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" stroke="#6A80C0" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="16" stroke="#6A80C0" strokeWidth="1.5" strokeDasharray="2 2" />
        <path d="M32 16L16 32" stroke="#6A80C0" strokeWidth="2" />
        <path d="M24 14L34 24" stroke="#6A80C0" strokeWidth="2" />
        <path d="M14 24L24 34" stroke="#6A80C0" strokeWidth="2" />
        <circle cx="24" cy="24" r="2" fill="#5E5D80" />
      </svg>
    </div>
  );
};

export default Logo;
