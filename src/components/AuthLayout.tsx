import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background pattern anchored to center-bottom */}
      <div
        className="absolute inset-0 bg-no-repeat bg-bottom bg-contain opacity-65 pointer-events-none"
        style={{
          backgroundImage: `url('/assets/Draftifi-onboarding-background.png')`,
        }}
      />

      {/* Content directly on background */}
      <div className="relative z-10 text-center flex flex-col items-center space-y-6">
        <div className="mb-4">
          <img src="/assets/Draftifi-logo.png" alt="Draftifi Logo" className="h-12 md:h-16" />
        </div>
        {subtitle && (
          <p className="text-gray-600">{subtitle}</p>
        )}
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
