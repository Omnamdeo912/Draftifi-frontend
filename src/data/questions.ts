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

export function generateContractHTML(answers: Record<string, string>): string {
  if (Object.keys(answers).length === 0) {
    return '';
  }
  
  let contract = '<div class="contract">';
  
  // Header
  contract += '<div class="header">';
  contract += `<h3>${answers["1"] || 'COMPANY NAME'}</h3>`;
  contract += `<p>${answers["2"] || 'COMPANY ADDRESS'}</p>`;
  contract += '</div>';
  
  // Date and Employee Address
  contract += `<p>${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>`;
  contract += `<p>${answers["3"] || 'EMPLOYEE NAME'}<br>${answers["4"] || 'EMPLOYEE ADDRESS'}</p>`;
  
  // Subject
  contract += '<p><strong>Subject: Offer of Employment</strong></p>';
  
  // Body
  contract += `<p>Dear ${answers["3"] || 'EMPLOYEE NAME'},</p>`;
  contract += `<p>We are pleased to offer you the position of ${answers["5"] || 'POSITION'} at ${answers["1"] || 'COMPANY NAME'}, effective ${answers["8"] || 'START DATE'}. Your compensation will be as per the salary structure detailed below.</p>`;
  
  // Salary Structure Table
  contract += '<p><strong>Salary Structure:</strong></p>';
  contract += '<table class="salary-table">';
  contract += '<tr><th>Component</th><th>Amount (INR)</th></tr>';
  
  const salaryStructure = answers["20"] ? JSON.parse(answers["20"]) : [];
  salaryStructure.forEach((row: string[]) => {
    if (row[0] && row[1]) {
      contract += `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`;
    }
  });
  
  contract += '</table>';
  
  // Additional Terms
  contract += `<p>Your base location will be ${answers["23"] || 'LOCATION'}, and your employment will be governed by the terms and conditions set forth in Annexure A attached herewith.</p>`;
  contract += `<p>You will be required to sign a Confidentiality and Non-Disclosure Agreement on your joining date.</p>`;
  contract += '<p>Please sign and return a copy of this letter to indicate your acceptance of this offer.</p>';
  contract += `<p>Sincerely,<br>AUTHORIZED SIGNATORY<br>${answers["1"] || 'COMPANY NAME'}</p>`;
  
  // Annexure A
  contract += '<div class="section">';
  contract += '<h3>ANNEXURE A</h3>';
  contract += '<h4>TERMS AND CONDITIONS OF EMPLOYMENT</h4>';
  contract += '<ol>';
  
  // Notice Period
  const noticePeriod = answers["34"] || '1 month';
  contract += `<li><strong>Notice Period</strong><br>The employment can be terminated by either party by giving ${noticePeriod} notice in writing or payment of salary in lieu of notice period. In case you do not serve the notice period, the Company reserves the right to adjust any dues payable to you, including but not limited to salary for the notice period not served, against the notice period.</li>`;
  
  // Company Assets
  contract += `<li><strong>Company Assets</strong><br>You will be responsible for the safe keeping and return in good condition and order of all Company property, which may be in your use, custody, or charge. In the event of loss or damage to any such property, the Company reserves the right to recover the cost of such loss or damage from you.</li>`;
  
  // Working Hours
  const workingHours = answers["22"] || '9:30 AM to 9:30 PM';
  contract += `<li><strong>Working Hours</strong><br>Your normal working hours will be ${workingHours}. You may be required to work overtime as per the needs of the business, without additional compensation. All inventions, improvements, or discoveries made by you during your employment shall belong to the Company.</li>`;
  
  // Confidentiality
  const confidentialInfo = answers["27"] || 'client data, proprietary software code, business strategies';
  contract += `<li><strong>Confidentiality</strong><br>You agree not to disclose any confidential information, including but not limited to ${confidentialInfo}, during or after your employment, except as required by your duties.</li>`;
  
  // Intellectual Property
  const ipRights = answers["26"] || 'Yes';
  if (ipRights.toLowerCase() === 'yes') {
    contract += `<li><strong>Intellectual Property</strong><br>All intellectual property created by you during your employment shall belong to the Company, and you agree to assign all rights to the Company.</li>`;
  }
  
  // Probation Period
  if (answers["11"] && answers["11"].toLowerCase() === 'yes') {
    const probationPeriod = answers["12"] || '6 months';
    contract += `<li><strong>Probation Period</strong><br>You will be on probation for ${probationPeriod}. During this period, employment may be terminated by either party with 7 days' notice or payment in lieu thereof.</li>`;
  }
  
  // Leave
  contract += `<li><strong>Leave</strong><br>You will be entitled to leaves as per the Company's leave policy and applicable labor laws.</li>`;
  
  // Non-Compete
  if (answers["28"] && answers["28"].toLowerCase() === 'yes') {
    const nonCompeteDuration = answers["29"] || '1 year';
    const nonCompeteScope = answers["30"] || 'within India';
    const competitors = answers["31"] || 'direct competitors';
    contract += `<li><strong>Non-Compete</strong><br>For a period of ${nonCompeteDuration} after termination of employment, you shall not engage in any business activity with ${competitors} within ${nonCompeteScope}.</li>`;
  }
  
  // Non-Solicit
  if (answers["32"] && answers["32"].toLowerCase() === 'yes') {
    const nonSolicitRestrictions = answers["33"] || 'no soliciting clients or employees for 1 year';
    contract += `<li><strong>Non-Solicitation</strong><br>${nonSolicitRestrictions}.</li>`;
  }
  
  // Bond Period
  if (answers["41"] && answers["41"].toLowerCase() === 'yes') {
    const bondDuration = answers["42"] || '2 years';
    const bondPenalty = answers["43"] || '150000';
    contract += `<li><strong>Bond Period</strong><br>You are required to serve the Company for a minimum period of ${bondDuration}. If you leave before completing this period, you will be liable to pay INR ${bondPenalty} to the Company.</li>`;
  }
  
  // Conflict of Interest
  contract += `<li><strong>Conflict of Interest</strong><br>You must promptly report any business relationships or conflicts involving family or close relatives that may affect your duties.</li>`;
  
  // Withholding Taxes
  contract += `<li><strong>Withholding Taxes</strong><br>All compensation is subject to applicable taxes as per the Indian Income Tax Act.</li>`;
  
  contract += '</ol>';
  contract += '</div>';
  
  // Acceptance
  contract += '<div class="section acceptance">';
  contract += `<p>I, ${answers["3"] || 'EMPLOYEE NAME'}, accept the offer of employment on the terms and conditions set forth above.</p>`;
  contract += '<p>Signature: ____________________</p>';
  contract += '<p>Date: ____________________</p>';
  contract += '<p>Place: ____________________</p>';
  contract += '</div>';
  
  contract += '</div>';
  return contract;
}