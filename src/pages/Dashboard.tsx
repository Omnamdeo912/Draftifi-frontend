
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleCreateNew = () => {
    navigate('/draft');
  };

  const handleUpload = () => {
    // In a real app, this would trigger a file upload dialog
    // For now, we'll just navigate to the draft page
    navigate('/draft');
  };

  return (
    <div className="min-h-screen bg-gray-300 text-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center">
          <Logo />
        </div>
        
        <div className="max-w-3xl mx-auto mt-8">
          <h1 className="text-4xl font-bold text-center">Welcome to Draftifi</h1>
          <p className="mt-4 text-center text-gray-900">
            Welcome to Draftifi! We make contracts easier. Get smart clause suggestions, understand your contract's
            meaning, and check if it's correctly formatted. Create a new draft or upload your existing drafts or
            templates to understand and draft it better.
          </p>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-draftifi-blue" />
                </div>
              </div>
              <h2 className="text-xl font-semibold text-center">Create new draft</h2>
              <p className="mt-2 text-gray-500 text-center">Start a fresh contract</p>
              <div className="mt-8">
                <Button 
                  className="w-full" 
                  onClick={handleCreateNew}
                >
                  Create
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Upload className="w-6 h-6 text-draftifi-blue" />
                </div>
              </div>
              <h2 className="text-xl font-semibold text-center">Upload existing draft</h2>
              <p className="mt-2 text-gray-500 text-center">Access your saved contracts, upload any draft to continue working on</p>
              <div className="mt-8">
                <Button 
                  className="w-full" 
                  onClick={handleUpload}
                >
                  Upload
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
