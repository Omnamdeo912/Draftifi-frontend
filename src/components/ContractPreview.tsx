import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { generateContract, ContractResponse } from '../services/api';
import { Pencil } from 'lucide-react';
import { generateContractHTML } from '../data/questions';

interface ContractPreviewProps {
  answers: Record<number, string>;
  onBack: () => void;
}

const ContractPreview: React.FC<ContractPreviewProps> = ({ answers, onBack }) => {
  const [contract, setContract] = useState<ContractResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState('');

  const handleGenerateContract = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await generateContract(answers);
      setContract(response);
      setEditedText(response.contract_text);
    } catch (err) {
      setError('Failed to generate contract. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateDummyContract = () => {
    const contractHTML = generateContractHTML(answers);
    setContract({
      contract_text: contractHTML,
      compliance_score: 0,
      areas_of_improvement: [],
      legal_compliance: { missing_clauses: [], risks: [] }
    });
    setEditedText(contractHTML);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (contract) {
      setContract({
        ...contract,
        contract_text: editedText
      });
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    if (contract) {
      setEditedText(contract.contract_text);
      setIsEditing(false);
    }
  };
  return (
    <div className="p-10 bg-white rounded-lg w-full shadow-xl border border-gray-200">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">EMPLOYMENT CONTRACT</h2>
        <p className="text-lg italic">This EMPLOYMENT CONTRACT (this "Agreement") dated this 12th day of May, 2025</p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-300 text-red-800 px-5 py-4 rounded mb-8">
          {error}
        </div>
      )}

      {!contract && (
        <div className="space-y-6">
          <button
            onClick={handleGenerateContract}
            disabled={loading}
            className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 disabled:opacity-50 transition-colors duration-200"
          >
            {loading ? 'Generating...' : 'Generate Contract'}
          </button>
          <button
            onClick={handleGenerateDummyContract}
            className="ml-4 bg-gray-700 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Generate Dummy Contract (Test)
          </button>
        </div>
      )}

      {contract && (
        <div className="mt-8">
          <div className="mb-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-inner border border-gray-300">
              {isEditing ? (
                <div className="space-y-6">
                  <textarea
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    className="w-full h-96 p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="flex justify-end gap-6">
                    <button
                      onClick={handleCancel}
                      className="px-8 py-3 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="px-8 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              ) : (
                <div style={{ wordWrap: 'break-word', overflowWrap: 'break-word', textAlign: 'justify' }}
                     dangerouslySetInnerHTML={{ __html: contract.contract_text }} />
              )}
            </div>
          </div>
        </div>
      )}

      <button
        onClick={onBack}
        className="mt-8 bg-gray-700 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
      >
        Back to Questions
      </button>
    </div>
  );
};

export default ContractPreview;
