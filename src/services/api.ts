import { Question } from '../data/questions';

const API_BASE_URL = 'http://localhost:8000';

export interface ContractResponse {
  contract_text: string;
  compliance_score: number;
  areas_of_improvement: string[];
  legal_compliance: {
    missing_clauses: string[];
    risks: string[];
  };
}

export const generateContract = async (answers: Record<number, string>): Promise<ContractResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/generate-contract`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ answers }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error generating contract:', error);
    throw error;
  }
}; 