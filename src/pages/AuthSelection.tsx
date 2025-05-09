
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AuthLayout from '@/components/AuthLayout';

const AuthSelection = () => {
  const navigate = useNavigate();

  const handleFirstTimeUser = () => {
    navigate('/signup');
  };

  const handleExistingUser = () => {
    navigate('/login');
  };

  return (
    <AuthLayout 
      title="Draftifi" 
      subtitle="Your intelligent contract drafting tool"
    >
       <div className="mt-8 flex justify-center">
       <div
    className="absolute inset-0 bg-no-repeat bg-contain bg-right opacity-20 pointer-events-none"
    style={{
      backgroundImage: `url('/assets/Draftifi-1stpage-sample.png')`,
    }}
  />
  </div>
      <div className="mt-16 space-y-4">
        <Button
          className="w-full bg-primary hover:bg-primary/90 text-white h-12 font-medium text-base"
          onClick={handleFirstTimeUser}
        >
          I'm a first time user
        </Button>
        <Button
          className="w-full bg-secondary hover:bg-secondary/90 text-white h-12 font-medium text-base"
          onClick={handleExistingUser}
        >
          Log in as an existing user
        </Button>
      </div>
    </AuthLayout>
  );
};

export default AuthSelection;
