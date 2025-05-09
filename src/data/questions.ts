export interface Question {
  id: number;
  text: string;
  category: string;
  input_type: string;
  purpose: string;
  suggestions?: string[];
  options?: string[];
  table_headers?: string[];
  sample_rows?: string[][];
  followupFor?: number;
  fields?: {
    id: string;
    label: string;
    type: string;
    required: boolean;
  }[];
  sectionType: string;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "What is the legal name of the company?",
    category: "Company Information",
    input_type: "text",
    purpose: "Identifies the employer for legal documentation.",
    suggestions: ["TechTrend Innovations Pvt. Ltd.", "GlobalSoft Solutions LLP", "NexGen Enterprises Ltd."],
    sectionType: "Preamble"
  },
  {
    id: 2,
    text: "What is the company's registered address?",
    category: "Company Information",
    input_type: "text",
    purpose: "Specifies jurisdiction and contact details.",
    suggestions: ["123, IT Park, Whitefield, Bengaluru, Karnataka", "456, Cyber City, Gurugram, Haryana", "789, MIDC, Andheri East, Mumbai, Maharashtra"],
    sectionType: "Preamble"
  },
  {
    id: 3,
    text: "What is the employee's full name?",
    category: "Employee Information",
    input_type: "text",
    purpose: "Identifies the employee in the contract.",
    suggestions: ["Amit Kumar Sharma", "Priya S. Menon", "Rahul V. Patel"],
    sectionType: "Preamble"
  },
  {
    id: 4,
    text: "What is the employee's residential address?",
    category: "Employee Information",
    input_type: "text",
    purpose: "Required for legal and tax purposes.",
    suggestions: ["Flat 101, Green Avenue, Koramangala, Bengaluru", "House No. 23, Lake Road, Baner, Pune", "A-12, Rose Gardens, Vasant Kunj, New Delhi"],
    sectionType: "Recitals"
  },
  {
    id: 5,
    text: "What is the job title of the position?",
    category: "Job Details",
    input_type: "text",
    purpose: "Defines the employee's role.",
    suggestions: ["Senior Software Engineer", "Quality Assurance Analyst", "Product Manager"],
    sectionType: "Definitions"
  },
  {
    id: 6,
    text: "Which department will the employee be working in?",
    category: "Job Details",
    input_type: "text",
    purpose: "Clarifies organizational placement.",
    suggestions: ["Software Development", "Quality Assurance", "Customer Support"],
    sectionType: "Operative Clauses"
  },
  {
    id: 7,
    text: "What are the key responsibilities and duties of the role?",
    category: "Job Details",
    input_type: "textarea",
    purpose: "Outlines expectations and deliverables.",
    suggestions: ["Develop and maintain web applications using Java and React", "Conduct quality testing and ensure product reliability", "Manage client communications and project timelines"],
    sectionType: "Operative Clauses"
  },
  {
    id: 8,
    text: "What is the start date of employment?",
    category: "Job Details",
    input_type: "date",
    purpose: "Marks the contract's effective date.",
    sectionType: "Recitals"
  },
  {
    id: 9,
    text: "Is this a permanent position or a fixed-term contract?",
    category: "Job Details",
    input_type: "dropdown",
    options: ["Permanent", "Fixed-term"],
    purpose: "Determines employment duration.",
    suggestions: ["Permanent", "Fixed-term"],
    sectionType: "Operative Clauses"
  },
  {
    id: 10,
    text: "If fixed-term, what is the end date?",
    category: "Job Details",
    input_type: "date",
    purpose: "Determines employment duration.",
    followupFor: 9,
    sectionType: "Operative Clauses"
  },
  {
    id: 11,
    text: "Is there a probation period?",
    category: "Job Details",
    input_type: "yesno",
    options: ["Yes", "No"],
    purpose: "Clarifies trial period terms, common in IT for assessing fit.",
    sectionType: "Special Contract Clauses"
  },
  {
    id: 12,
    text: "If yes, how long is the probation period?",
    category: "Job Details",
    input_type: "text",
    purpose: "Clarifies trial period terms, common in IT for assessing fit.",
    followupFor: 11,
    suggestions: ["3 months", "6 months", "90 days"],
    sectionType: "Special Contract Clauses"
  },
  {
    id: 13,
    text: "Can the probation period be extended?",
    category: "Job Details",
    input_type: "yesno",
    options: ["Yes", "No"],
    purpose: "Clarifies trial period terms, common in IT for assessing fit.",
    followupFor: 11,
    sectionType: "Special Contract Clauses"
  },
  {
    id: 14,
    text: "If yes, under what conditions?",
    category: "Job Details",
    input_type: "text",
    purpose: "Clarifies trial period terms, common in IT for assessing fit.",
    followupFor: 11,
    suggestions: ["Unsatisfactory performance", "Need for additional training", "Project-specific requirements"],
    sectionType: "Special Contract Clauses"
  },
  {
    id: 15,
    text: "What is the annual gross salary?",
    category: "Compensation",
    input_type: "number",
    purpose: "Establishes base compensation.",
    suggestions: ["1200000", "1800000", "2500000"],
    sectionType: "Financial Terms & Payment Structure"
  },
  {
    id: 16,
    text: "How often is the salary paid?",
    category: "Compensation",
    input_type: "dropdown",
    options: ["Monthly", "Bi-weekly", "Weekly"],
    purpose: "Specifies payment frequency.",
    suggestions: ["Monthly", "Bi-weekly"],
    sectionType: "Financial Terms & Payment Structure"
  },
  {
    id: 17,
    text: "Are there any bonuses or incentives?",
    category: "Compensation",
    input_type: "yesno",
    options: ["Yes", "No"],
    purpose: "Captures additional compensation details.",
    sectionType: "Financial Terms & Payment Structure"
  },
  {
    id: 18,
    text: "If yes, please describe:",
    category: "Compensation",
    input_type: "text",
    purpose: "Captures additional compensation details.",
    followupFor: 17,
    suggestions: ["Performance-based bonus up to 10% of annual salary", "Project completion incentive", "Annual retention bonus"],
    sectionType: "Financial Terms & Payment Structure"
  },
  {
    id: 19,
    text: "What benefits are provided?",
    category: "Compensation",
    input_type: "checkboxes",
    options: ["Health insurance", "Life insurance", "Retirement plans", "Stock options", "Others (specify)"],
    purpose: "Details employee benefits, enhancing attractiveness of the role.",
    suggestions: ["Health insurance", "Retirement plans", "Paid time off"],
    sectionType: "Financial Terms & Payment Structure"
  },
  {
    id: 20,
    text: "Please provide the salary structure details:",
    category: "Compensation",
    input_type: "table",
    table_headers: ["Component", "Amount (INR)"],
    sample_rows: [
      ["Basic Salary", ""],
      ["House Rent Allowance", ""],
      ["Conveyance Allowance", ""],
      ["Medical Allowance", ""],
      ["Other Allowances", ""],
      ["Provident Fund (Employee)", ""],
      ["Provident Fund (Employer)", ""],
      ["Other Deductions", ""]
    ],
    purpose: "Ensures transparency in salary structure, compliant with Employees' Provident Funds Act.",
    sectionType: "Financial Terms & Payment Structure"
  },
  {
    id: 21,
    text: "Please provide the leave structure details:",
    category: "Compensation",
    input_type: "table",
    table_headers: ["Leave Type", "Days"],
    sample_rows: [
      ["Vacation Leave", ""],
      ["Sick Leave", ""],
      ["Maternity Leave", ""],
      ["Paternity Leave", ""],
      ["Other Leaves", ""]
    ],
    purpose: "Aligns with Maternity Benefit Act and company policies.",
    sectionType: "Financial Terms & Payment Structure"
  },
  {
    id: 22,
    text: "What are the standard working hours per day/week?",
    category: "Working Conditions",
    input_type: "text",
    purpose: "Sets expectations for work schedule.",
    suggestions: ["9:00 AM to 6:00 PM, 40 hours/week", "10:00 AM to 7:00 PM, 45 hours/week", "8:30 AM to 5:30 PM, 40 hours/week"],
    sectionType: "Operative Clauses"
  },
  {
    id: 23,
    text: "Where is the primary work location?",
    category: "Working Conditions",
    input_type: "text",
    purpose: "Clarifies workplace, important for hybrid roles.",
    suggestions: ["Electronic City, Bengaluru", "Hinjewadi IT Park, Pune", "Fully Remote"],
    sectionType: "Operative Clauses"
  },
  {
    id: 24,
    text: "Is remote work allowed?",
    category: "Working Conditions",
    input_type: "yesno",
    options: ["Yes", "No"],
    purpose: "Reflects modern IT work trends.",
    sectionType: "Operative Clauses"
  },
  {
    id: 25,
    text: "If yes, under what conditions?",
    category: "Working Conditions",
    input_type: "text",
    purpose: "Reflects modern IT work trends.",
    followupFor: 24,
    suggestions: ["2 days per week from home", "Full-time remote with monthly office visits", "Remote with prior manager approval"],
    sectionType: "Operative Clauses"
  },
  {
    id: 26,
    text: "Does the employee agree to assign all intellectual property rights created during employment to the company?",
    category: "Intellectual Property",
    input_type: "yesno",
    options: ["Yes", "No"],
    purpose: "Protects company IP, critical for IT firms under Copyright Act, 1957.",
    sectionType: "Risk Management Clauses"
  },
  {
    id: 27,
    text: "What types of information are considered confidential?",
    category: "Confidentiality",
    input_type: "text",
    purpose: "Ensures protection of sensitive information.",
    suggestions: ["Client data, proprietary software code, business strategies", "Trade secrets, financial data, product roadmaps", "Customer lists, internal processes, R&D plans"],
    sectionType: "Risk Management Clauses"
  },
  {
    id: 28,
    text: "Is there a non-compete clause?",
    category: "Restrictive Covenants",
    input_type: "yesno",
    options: ["Yes", "No"],
    purpose: "Balances company protection with legal enforceability under Indian Contract Act, Section 27.",
    sectionType: "Risk Management Clauses"
  },
  {
    id: 29,
    text: "If yes, what is the duration after employment ends?",
    category: "Restrictive Covenants",
    input_type: "text",
    purpose: "Balances company protection with legal enforceability under Indian Contract Act, Section 27.",
    followupFor: 28,
    suggestions: ["6 months", "1 year", "2 years"],
    sectionType: "Risk Management Clauses"
  },
  {
    id: 30,
    text: "What is the geographic scope?",
    category: "Restrictive Covenants",
    input_type: "text",
    purpose: "Balances company protection with legal enforceability under Indian Contract Act, Section 27.",
    followupFor: 28,
    suggestions: ["Within India", "Within Karnataka", "Global"],
    sectionType: "Risk Management Clauses"
  },
  {
    id: 31,
    text: "Which competitors are specifically restricted?",
    category: "Restrictive Covenants",
    input_type: "text",
    purpose: "Balances company protection with legal enforceability under Indian Contract Act, Section 27.",
    followupFor: 28,
    suggestions: ["Infosys, TCS, Wipro", "Accenture, Cognizant", "Direct competitors in IT services"],
    sectionType: "Risk Management Clauses"
  },
  {
    id: 32,
    text: "Is there a non-solicit clause?",
    category: "Restrictive Covenants",
    input_type: "yesno",
    options: ["Yes", "No"],
    purpose: "Prevents poaching of clients or staff.",
    sectionType: "Risk Management Clauses"
  },
  {
    id: 33,
    text: "If yes, what are the restrictions?",
    category: "Restrictive Covenants",
    input_type: "text",
    purpose: "Prevents poaching of clients or staff.",
    followupFor: 32,
    suggestions: ["No soliciting clients for 1 year", "No hiring company employees for 2 years", "No client contact post-employment"],
    sectionType: "Risk Management Clauses"
  },
  {
    id: 34,
    text: "What is the notice period required for resignation by the employee?",
    category: "Termination",
    input_type: "text",
    purpose: "Aligns with industry norms (typically 90 days in IT).",
    suggestions: ["30 days", "60 days", "90 days"],
    sectionType: "Termination & Exit Clauses"
  },
  {
    id: 35,
    text: "What is the notice period required for termination by the employer?",
    category: "Termination",
    input_type: "text",
    purpose: "Ensures fair transition, per Industrial Disputes Act.",
    suggestions: ["30 days", "60 days", "90 days"],
    sectionType: "Termination & Exit Clauses"
  },
  {
    id: 36,
    text: "Under what grounds can the employer terminate the employment without notice?",
    category: "Termination",
    input_type: "text",
    purpose: "Defines immediate termination conditions.",
    suggestions: ["Gross misconduct, fraud, or theft", "Breach of confidentiality", "Repeated performance failures"],
    sectionType: "Termination & Exit Clauses"
  },
  {
    id: 37,
    text: "Which country's laws will govern the contract?",
    category: "Dispute Resolution",
    input_type: "text",
    purpose: "Establishes legal framework.",
    suggestions: ["India", "State of Karnataka", "State of Maharashtra"],
    sectionType: "Boilerplate Clauses"
  },
  {
    id: 38,
    text: "In which jurisdiction will disputes be resolved?",
    category: "Dispute Resolution",
    input_type: "text",
    purpose: "Specifies court or arbitration location.",
    suggestions: ["Bengaluru, Karnataka", "Mumbai, Maharashtra", "New Delhi"],
    sectionType: "Boilerplate Clauses"
  },
  {
    id: 39,
    text: "Do you want to include an arbitration clause?",
    category: "Dispute Resolution",
    input_type: "yesno",
    options: ["Yes", "No"],
    purpose: "Offers faster dispute resolution, common in Indian contracts.",
    sectionType: "Boilerplate Clauses"
  },
  {
    id: 40,
    text: "If yes, please specify the details:",
    category: "Dispute Resolution",
    input_type: "text",
    purpose: "Offers faster dispute resolution, common in Indian contracts.",
    followupFor: 39,
    suggestions: ["Arbitration in Bengaluru under Arbitration and Conciliation Act, 1996", "Single arbitrator in Mumbai", "Arbitration with Indian Council of Arbitration"],
    sectionType: "Boilerplate Clauses"
  },
  {
    id: 41,
    text: "Is there a bond period for the employee?",
    category: "Additional Considerations",
    input_type: "yesno",
    options: ["Yes", "No"],
    purpose: "For freshers, IT companies often include a bond period (e.g., 2 years) with a penalty for early resignation.",
    sectionType: "Special Contract Clauses"
  },
  {
    id: 42,
    text: "If yes, what is the duration?",
    category: "Additional Considerations",
    input_type: "text",
    purpose: "For freshers, IT companies often include a bond period (e.g., 2 years) with a penalty for early resignation.",
    followupFor: 41,
    suggestions: ["1 year", "2 years", "18 months"],
    sectionType: "Special Contract Clauses"
  },
  {
    id: 43,
    text: "What is the penalty for breaking the bond?",
    category: "Additional Considerations",
    input_type: "number",
    purpose: "For freshers, IT companies often include a bond period (e.g., 2 years) with a penalty for early resignation.",
    followupFor: 41,
    suggestions: ["150000", "200000", "Training & Relocation cost"],
    sectionType: "Special Contract Clauses"
  }
];

export const contractSections = [
  "Preamble",
  "Recitals",
  "Definitions",
  "Operative Clauses",
  "Financial Terms & Payment Structure",
  "Risk Management Clauses",
  "Special Contract Clauses",
  "Boilerplate Clauses",
  "Termination & Exit Clauses",
  "Signature & Execution"
];

export function getCompletedSections(answers: Record<string, string>): string[] {
  const completedSections = new Set<string>();
  
  Object.keys(answers).forEach(key => {
    const questionId = key;
    const question = questions.find(q => q.id === parseInt(questionId));
    
    if (question && answers[questionId]) {
      completedSections.add(question.category);
    }
  });
  
  return Array.from(completedSections);
}

export function calculateComplianceScore(answers: Record<string, string>): number {
  const answeredCount = Object.values(answers).filter(answer => answer && answer.trim() !== '').length;
  return Math.round((answeredCount / questions.length) * 100);
}

// export function generateContractHTML(answers: Record<string, string>): string {
//   if (Object.keys(answers).length === 0) {
//     return '';
//   }
  
//   let contract = '<div class="contract">';
  
//   // Header
//   contract += '<div class="header">';
//   contract += `<h3>${answers["1"] || 'COMPANY NAME'}</h3>`;
//   contract += `<p>${answers["2"] || 'COMPANY ADDRESS'}</p>`;
//   contract += '</div>';
  
//   // Date and Employee Address
//   contract += `<p>${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>`;
//   contract += `<p>${answers["3"] || 'EMPLOYEE NAME'}<br>${answers["4"] || 'EMPLOYEE ADDRESS'}</p>`;
  
//   // Subject
//   contract += '<p><strong>Subject: Offer of Employment</strong></p>';
  
//   // Body
//   contract += `<p>Dear ${answers["3"] || 'EMPLOYEE NAME'},</p>`;
//   contract += `<p>We are pleased to offer you the position of ${answers["5"] || 'POSITION'} at ${answers["1"] || 'COMPANY NAME'}, effective ${answers["8"] || 'START DATE'}. Your compensation will be as per the salary structure detailed below.</p>`;
  
//   // Salary Structure Table
//   contract += '<p><strong>Salary Structure:</strong></p>';
//   contract += '<table class="salary-table">';
//   contract += '<tr><th>Component</th><th>Amount (INR)</th></tr>';
  
//   const salaryStructure = answers["20"] ? JSON.parse(answers["20"]) : [];
//   salaryStructure.forEach((row: string[]) => {
//     if (row[0] && row[1]) {
//       contract += `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`;
//     }
//   });
  
//   contract += '</table>';
  
//   // Additional Terms
//   contract += `<p>Your base location will be ${answers["23"] || 'LOCATION'}, and your employment will be governed by the terms and conditions set forth in Annexure A attached herewith.</p>`;
//   contract += `<p>You will be required to sign a Confidentiality and Non-Disclosure Agreement on your joining date.</p>`;
//   contract += '<p>Please sign and return a copy of this letter to indicate your acceptance of this offer.</p>';
//   contract += `<p>Sincerely,<br>AUTHORIZED SIGNATORY<br>${answers["1"] || 'COMPANY NAME'}</p>`;
  
//   // Annexure A
//   contract += '<div class="section">';
//   contract += '<h3>ANNEXURE A</h3>';
//   contract += '<h4>TERMS AND CONDITIONS OF EMPLOYMENT</h4>';
//   contract += '<ol>';
  
//   // Notice Period
//   const noticePeriod = answers["34"] || '1 month';
//   contract += `<li><strong>Notice Period</strong><br>The employment can be terminated by either party by giving ${noticePeriod} notice in writing or payment of salary in lieu of notice period. In case you do not serve the notice period, the Company reserves the right to adjust any dues payable to you, including but not limited to salary for the notice period not served, against the notice period.</li>`;
  
//   // Company Assets
//   contract += `<li><strong>Company Assets</strong><br>You will be responsible for the safe keeping and return in good condition and order of all Company property, which may be in your use, custody, or charge. In the event of loss or damage to any such property, the Company reserves the right to recover the cost of such loss or damage from you.</li>`;
  
//   // Working Hours
//   const workingHours = answers["22"] || '9:30 AM to 9:30 PM';
//   contract += `<li><strong>Working Hours</strong><br>Your normal working hours will be ${workingHours}. You may be required to work overtime as per the needs of the business, without additional compensation. All inventions, improvements, or discoveries made by you during your employment shall belong to the Company.</li>`;
  
//   // Confidentiality
//   const confidentialInfo = answers["27"] || 'client data, proprietary software code, business strategies';
//   contract += `<li><strong>Confidentiality</strong><br>You agree not to disclose any confidential information, including but not limited to ${confidentialInfo}, during or after your employment, except as required by your duties.</li>`;
  
//   // Intellectual Property
//   const ipRights = answers["26"] || 'Yes';
//   if (ipRights.toLowerCase() === 'yes') {
//     contract += `<li><strong>Intellectual Property</strong><br>All intellectual property created by you during your employment shall belong to the Company, and you agree to assign all rights to the Company.</li>`;
//   }
  
//   // Probation Period
//   if (answers["11"] && answers["11"].toLowerCase() === 'yes') {
//     const probationPeriod = answers["12"] || '6 months';
//     contract += `<li><strong>Probation Period</strong><br>You will be on probation for ${probationPeriod}. During this period, employment may be terminated by either party with 7 days' notice or payment in lieu thereof.</li>`;
//   }
  
//   // Leave
//   contract += `<li><strong>Leave</strong><br>You will be entitled to leaves as per the Company's leave policy and applicable labor laws.</li>`;
  
//   // Non-Compete
//   if (answers["28"] && answers["28"].toLowerCase() === 'yes') {
//     const nonCompeteDuration = answers["29"] || '1 year';
//     const nonCompeteScope = answers["30"] || 'within India';
//     const competitors = answers["31"] || 'direct competitors';
//     contract += `<li><strong>Non-Compete</strong><br>For a period of ${nonCompeteDuration} after termination of employment, you shall not engage in any business activity with ${competitors} within ${nonCompeteScope}.</li>`;
//   }
  
//   // Non-Solicit
//   if (answers["32"] && answers["32"].toLowerCase() === 'yes') {
//     const nonSolicitRestrictions = answers["33"] || 'no soliciting clients or employees for 1 year';
//     contract += `<li><strong>Non-Solicitation</strong><br>${nonSolicitRestrictions}.</li>`;
//   }
  
//   // Bond Period
//   if (answers["41"] && answers["41"].toLowerCase() === 'yes') {
//     const bondDuration = answers["42"] || '2 years';
//     const bondPenalty = answers["43"] || '150000';
//     contract += `<li><strong>Bond Period</strong><br>You are required to serve the Company for a minimum period of ${bondDuration}. If you leave before completing this period, you will be liable to pay INR ${bondPenalty} to the Company.</li>`;
//   }
  
//   // Conflict of Interest
//   contract += `<li><strong>Conflict of Interest</strong><br>You must promptly report any business relationships or conflicts involving family or close relatives that may affect your duties.</li>`;
  
//   // Withholding Taxes
//   contract += `<li><strong>Withholding Taxes</strong><br>All compensation is subject to applicable taxes as per the Indian Income Tax Act.</li>`;
  
//   contract += '</ol>';
//   contract += '</div>';
  
//   // Acceptance
//   contract += '<div class="section acceptance">';
//   contract += `<p>I, ${answers["3"] || 'EMPLOYEE NAME'}, accept the offer of employment on the terms and conditions set forth above.</p>`;
//   contract += '<p>Signature: ____________________</p>';
//   contract += '<p>Date: ____________________</p>';
//   contract += '<p>Place: ____________________</p>';
//   contract += '</div>';
  
//   contract += '</div>';
//   return contract;
// }

export function generateContractHTML(answers: Record<string, string>): string {
  if (Object.keys(answers).length === 0) {
    return '';
  }

  // Initialize clause counter
  let clauseNumber = 1;

  // Helper function to get the next clause number and increment the counter
  const getNextClauseNumber = () => clauseNumber++;

  // Track presence of optional sections to adjust clause numbers
  const hasProbation = answers["11"]?.toLowerCase() === 'yes';
  const hasBonuses = answers["17"]?.toLowerCase() === 'yes';
  const hasRemoteWork = answers["24"]?.toLowerCase() === 'yes';
  const hasIPAssignment = answers["26"]?.toLowerCase() === 'yes';
  const hasNonCompete = answers["28"]?.toLowerCase() === 'yes';
  const hasNonSolicit = answers["32"]?.toLowerCase() === 'yes';
  const hasBondPeriod = answers["41"]?.toLowerCase() === 'yes';

  let contract = `
    <div class="contract" style="font-family: Times New Roman, serif; max-width: 800px; margin: 0 auto; line-height: 1.6;">
      <h1 style="text-align: center; font-size: 16pt; text-transform: uppercase; margin-bottom: 20px;">Employment Contract</h1>
      
      <p style="text-align: justify;">
        <strong>THIS EMPLOYMENT CONTRACT</strong> (this “Agreement”) dated this 
        ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
      </p>

      <p style="text-align: justify; margin-top: 20px;"><strong>BETWEEN:</strong></p>
      <p style="text-align: justify;">
        <strong>${answers["1"] || 'COMPANY NAME'} of ${answers["2"] || 'COMPANY ADDRESS'}</strong><br>
        (the “Employer”)<br>
        <strong>OF THE FIRST PART</strong>
      </p>

      <p style="text-align: justify; margin-top: 10px;"><strong>- AND -</strong></p>
      <p style="text-align: justify;">
        <strong>${answers["3"] || 'EMPLOYEE NAME'} of ${answers["4"] || 'EMPLOYEE ADDRESS'}</strong><br>
        (the “Employee”)<br>
        <strong>OF THE SECOND PART</strong>
      </p>

      <div class="section" style="margin-top: 30px;">
        <h2 style="font-size: 14pt; text-transform: uppercase;">Background</h2>
        <p style="text-align: justify;">
          <strong>A.</strong> The Employer is of the opinion that the Employee has the necessary qualifications, 
          experience, and abilities to assist and benefit the Employer in its business.
        </p>
        <p style="text-align: justify;">
          <strong>B.</strong> The Employer desires to employ the Employee, and the Employee has agreed to accept and 
          enter such employment upon the terms and conditions set out in this Agreement.
        </p>
      </div>

      <p style="text-align: justify; margin-top: 20px;">
        <strong>IN CONSIDERATION OF</strong> the matters described above and of the mutual benefits and obligations set 
        forth in this Agreement, the receipt and sufficiency of which consideration is hereby acknowledged, the parties to 
        this Agreement agree as follows:
      </p>

      <div class="section" style="margin-top: 30px;">
        <h2 style="font-size: 14pt; text-transform: uppercase;">Commencement Date and Term</h2>
        <p style="text-align: justify;">
          <strong>${getNextClauseNumber()}.</strong> The Employee will commence ${answers["9"]?.toLowerCase() || 'permanent'} full-time 
          employment with the Employer on the ${answers["8"] || 'START DATE'} (the “Commencement Date”).
        </p>
        ${hasProbation ? `
        <p style="text-align: justify;">
          <strong>${getNextClauseNumber()}.</strong> The Employee must successfully complete a probationary period of 
          ${answers["12"] || 'PROBATION PERIOD'} (the “Probationary Period”) beginning on the Commencement Date. At any 
          time during the Probationary Period, as and where permitted by law, the Employer will have the right to terminate 
          employment without any notice or compensation to the Employee other than wages owed for hours of work already 
          completed.
        </p>` : ''}
      </div>

      <div class="section" style="margin-top: 30px;">
        <h2 style="font-size: 14pt; text-transform: uppercase;">Job Title and Description</h2>
        <p style="text-align: justify;">
          <strong>${getNextClauseNumber()}.</strong> The initial job title of the Employee 
          will be the following: ${answers["5"] || 'POSITION'}. The initial job duties the Employee will be expected to 
          perform will be the following: ${answers["7"] || 'KEY RESPONSIBILITIES'}.
        </p>
        <p style="text-align: justify;">
          <strong>${getNextClauseNumber()}.</strong> The Employee agrees to be employed on 
          the terms and conditions set out in this Agreement. The Employee agrees to be subject to the general supervision 
          of and act pursuant to the orders, advice, and direction of the Employer.
        </p>
        <p style="text-align: justify;">
          <strong>${getNextClauseNumber()}.</strong> The Employee will perform any and all 
          duties as requested by the Employer that are reasonable and that are customarily performed by a person holding a 
          similar position in the industry or business of the Employer.
        </p>
      </div>

      <div class="section" style="margin-top: 30px;">
        <h2 style="font-size: 14pt; text-transform: uppercase;">Employee Remuneration</h2>
        <p style="text-align: justify;">
          <strong>${getNextClauseNumber()}.</strong> Remuneration paid to the Employee for the 
          services rendered by the Employee as required by this Agreement (the “Remuneration”) will include a salary of ₹
          ${answers["15"] || 'ANNUAL SALARY'} per year.
        </p>
        <p style="text-align: justify;">
          <strong>${getNextClauseNumber()}.</strong> This Remuneration will be payable 
          ${answers["16"]?.toLowerCase() || 'monthly'} while this Agreement is in force. The Employer is entitled to deduct 
          from the Employee’s Remuneration, or from any other remuneration in whatever form, any applicable deductions and 
          remittances as required by law.
        </p>
        ${hasBonuses ? `
        <p style="text-align: justify;">
          <strong>${getNextClauseNumber()}.</strong> The Employee may be eligible for 
          additional remuneration in the form of bonuses or incentives as follows: ${answers["18"] || 'BONUS DETAILS'}. Such 
          additional remuneration will rest in the sole discretion of the Employer.
        </p>` : `
        <p style="text-align: justify;">
          <strong>${getNextClauseNumber()}.</strong> The Employee understands and agrees that 
          any additional remuneration paid to the Employee in the form of bonuses or other similar incentive remuneration will 
          rest in the sole discretion of the Employer and that the Employee will not earn or accrue any right to incentive 
          remuneration by reason of the Employee’s employment.
        </p>`}
      </div>

      <div class="section" style="margin-top: 30px;">
        <h2 style="font-size: 14pt; text-transform: uppercase;">Salary Structure</h2>
        <p style="text-align: justify;">
          <strong>${getNextClauseNumber()}.</strong> The Employee’s salary structure is as follows:
        </p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
          <tr style="border-bottom: 1px solid #000;">
            <th style="text-align: left; padding: 5px;">Component</th>
            <th style="text-align: left; padding: 5px;">Amount (INR)</th>
          </tr>
          ${(() => {
            const salaryStructure = answers["20"] ? JSON.parse(answers["20"]) : [];
            return salaryStructure.map((row: string[]) => {
              if (row[0] && row[1]) {
                return `
                  <tr style="border-bottom: 1px solid #ddd;">
                    <td style="padding: 5px;">${row[0]}</td>
                    <td style="padding: 5px;">${row[1]}</td>
                  </tr>`;
              }
              return '';
            }).join('');
          })()}
        </table>
      </div>

      <div class="section" style="margin-top: 30px;">
        <h2 style="font-size: 14pt; text-transform: uppercase;">Place of Work</h2>
        <p style="text-align: justify;">
          <strong>${getNextClauseNumber()}.</strong> The Employee’s primary place of work will be at the following location: ${answers["23"] || 'LOCATION'}.
        </p>
        ${hasRemoteWork ? `
        <p style="text-align: justify;">
          <strong>${getNextClauseNumber()}.</strong> The Employee may work remotely under the following conditions: ${answers["25"] || 'REMOTE WORK CONDITIONS'}.
        </p>` : ''}
      </div>

      <div class="section" style="margin-top: 30px;">
        <h2 style="font-size: 14pt; text-transform: uppercase;">Time of Work</h2>
        <p style="text-align: justify;">
          <strong>${getNextClauseNumber()}.</strong> The Employee’s normal hours of work, including breaks, (“Normal Hours of Work”) are as follows: ${answers["22"] || 'WORKING HOURS'}.
        </p>
      </div>

      <div class="section" style="margin-top: 30px;">
        <h2 style="font-size: 14pt; text-transform: uppercase;">Annual Leave</h2>
        <p style="text-align: justify;">
          <strong>${getNextClauseNumber()}.</strong> The Employee will be entitled to leaves as detailed below, or as entitled by law, whichever is greater:
        </p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
          <tr style="border-bottom: 1px solid #000;">
            <th style="text-align: left; padding: 5px;">Leave Type</th>
            <th style="text-align: left; padding: 5px;">Days</th>
          </tr>
          ${(() => {
            const leaveStructure = answers["21"] ? JSON.parse(answers["21"]) : [];
            return leaveStructure.map((row: string[]) => {
              if (row[0] && row[1]) {
                return `
                  <tr style="border-bottom: 1px solid #ddd;">
                    <td style="padding: 5px;">${row[0]}</td>
                    <td style="padding: 5px;">${row[1]}</td>
                  </tr>`;
              }
              return '';
            }).join('');
          })()}
        </table>
      </div>

      <div class="section" style="margin-top: 30px;">
        <h2 style="font-size: 14pt; text-transform: uppercase;">Confidential Information</h2>
        <p style="text-align: justify;">
          <strong>${getNextClauseNumber()}.</strong> The Employee acknowledges that, in any position the Employee may hold, in and as a result of the Employee’s employment by the Employer, the Employee will, or may be making use of, acquiring, or adding to information which is confidential to the Employer (the “Confidential Information”) and the Confidential Information is the exclusive property of the Employer. The Confidential Information includes: ${answers["27"] || 'CONFIDENTIAL INFORMATION TYPES'}.
        </p>
        <p style="text-align: justify;">
          <strong>${getNextClauseNumber()}.</strong> The Employee agrees not to divulge, reveal, report, or use, for any purpose, any of the Confidential Information which the Employee has obtained or which was disclosed to the Employee by the Employer as a result of the Employee’s employment by the Employer.
        </p>
      </div>

      <div class="section" style="margin-top: 30px;">
        <h2 style="font-size: 14pt; text-transform: uppercase;">Intellectual Property</h2>
        ${hasIPAssignment ? `
        <p style="text-align: justify;">
          <strong>${getNextClauseNumber()}.</strong> The Employee agrees to assign all intellectual property rights created during employment to the Employer. All intellectual property created by the Employee during the term of employment shall remain the exclusive property of the Employer.
        </p>` : ''}
      </div>

      <div class="section" style="margin-top: 30px;">
        <h2 style="font-size: 14pt; text-transform: uppercase;">Non-Compete and Non-Solicitation</h2>
        ${hasNonCompete ? `
        <p style="text-align: justify;">
          <strong>${getNextClauseNumber()}.</strong> For a period of ${answers["29"] || 'NON-COMPETE DURATION'} after termination of employment, the Employee shall not engage in any business activity with ${answers["31"] || 'COMPETITORS'} within ${answers["30"] || 'GEOGRAPHIC SCOPE'}.
        </p>` : ''}
        ${hasNonSolicit ? `
        <p style="text-align: justify;">
          <strong>${getNextClauseNumber()}.</strong> The Employee agrees that during the Employee’s term of employment with the Employer and for a period as specified, the Employee will not in any way, directly or indirectly: ${answers["33"] || 'NON-SOLICIT RESTRICTIONS'}.
        </p>` : ''}
      </div>

      <div class="section" style="margin-top: 30px;">
        <h2 style="font-size: 14pt; text-transform: uppercase;">Termination of Employment</h2>
        <p style="text-align: justify;">
          <strong>${getNextClauseNumber()}.</strong> Where there is just cause for termination, such as ${answers["36"] || 'TERMINATION GROUNDS'}, the Employer may terminate the Employee’s employment without notice, as permitted by law.
        </p>
        <p style="text-align: justify;">
          <strong>${getNextClauseNumber()}.</strong> The Employee and the Employer agree that reasonable and sufficient notice of termination of employment by the Employer is ${answers["35"] || 'NOTICE PERIOD EMPLOYER'} or any minimum notice required by law, whichever is greater.
        </p>
        <p style="text-align: justify;">
          <strong>${getNextClauseNumber()}.</strong> If the Employee wishes to terminate this employment with the Employer, the Employee will provide the Employer with ${answers["34"] || 'NOTICE PERIOD EMPLOYEE'} or the minimum required by law, whichever is greater.
        </p>
      </div>

      ${hasBondPeriod ? `
      <div class="section" style="margin-top: 30px;">
        <h2 style="font-size: 14pt; text-transform: uppercase;">Bond Period</h2>
        <p style="text-align: justify;">
          <strong>${getNextClauseNumber()}.</strong> The Employee is required to serve the Employer for a minimum period of ${answers["42"] || 'BOND DURATION'}. If the Employee leaves before completing this period, the Employee will be liable to pay INR ${answers["43"] || 'BOND PENALTY'} to the Employer.
        </p>
      </div>` : ''}

      <div class="section" style="margin-top: 30px;">
        <h2 style="font-size: 14pt; text-transform: uppercase;">Governing Law</h2>
        <p style="text-align: justify;">
          <strong>${getNextClauseNumber()}.</strong> This Agreement will be construed in accordance with and governed by the laws of ${answers["37"] || 'GOVERNING LAW'}.
        </p>
      </div>

      <div class="section" style="margin-top: 30px;">
        <h2 style="font-size: 14pt; text-transform: uppercase;">Signature & Execution</h2>
        <p style="text-align: justify;">
          <strong>IN WITNESS WHEREOF</strong>, the parties have duly affixed their signatures under hand and seal on this 
          ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}.
        </p>
        <p style="margin-top: 40px;"><strong>EMPLOYER:</strong></p>
        <p>${answers["1"] || 'COMPANY NAME'}</p>
        <p>Per: _________________________ (SEAL)</p>
        <p style="margin-top: 40px;"><strong>EMPLOYEE:</strong></p>
        <p>${answers["3"] || 'EMPLOYEE NAME'}</p>
        <p>____________________________</p>
      </div>

      <p style="text-align: center; margin-top: 50px; font-size: 10pt;">©2002-2025 LawDepot.com®</p>
    </div>
  `;

  return contract;
}