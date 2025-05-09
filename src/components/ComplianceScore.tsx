import React from 'react';
import { AlertCircle, CheckCircle2, AlertTriangle } from 'lucide-react';

interface ComplianceInfoProps {
  improvementAreas: string[];
  missingClauses: string[];
  potentialRisks: string[];
}

const ComplianceInfo: React.FC<ComplianceInfoProps> = ({
  improvementAreas,
  missingClauses,
  potentialRisks
}) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Contract Analysis</h3>
      
      {/* Improvement Areas */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-500 mb-2 flex items-center gap-2">
          <AlertCircle className="h-4 w-4 text-blue-500" />
          Areas of Improvement
        </h4>
        <ul className="space-y-2">
          {improvementAreas.map((area, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
              <span className="text-blue-500">•</span>
              {area}
            </li>
          ))}
        </ul>
      </div>
          
      {/* Missing Clauses */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-500 mb-2 flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-amber-500" />
          Missing Clauses
        </h4>
        <ul className="space-y-2">
          {missingClauses.map((clause, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
              <span className="text-amber-500">•</span>
              {clause}
            </li>
          ))}
        </ul>
          </div>

      {/* Potential Risks */}
      <div>
        <h4 className="text-sm font-medium text-gray-500 mb-2 flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-red-500" />
          Potential Risks
        </h4>
        <ul className="space-y-2">
          {potentialRisks.map((risk, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
              <span className="text-red-500">•</span>
              {risk}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ComplianceInfo;
