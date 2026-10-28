// ==========================================================================
// Smart Loan Approval System - Core AI Risk Engine & Mock Dataset
// ==========================================================================

export const INITIAL_APPLICATIONS = [
  {
    id: "APP-9082",
    applicantName: "Sophia Martinez",
    email: "sophia.m@example.com",
    occupation: "Senior Software Engineer",
    monthlyIncome: 12500,
    creditScore: 785,
    existingLiabilities: 1800,
    monthlySavings: 4500,
    requestedAmount: 45000,
    tenureMonths: 36,
    spendingBehaviorScore: 88, // 0-100 (high = disciplined)
    pastDefaults: 0,
    onTimePaymentRatio: 99,
    submissionDate: "2026-10-04 14:22",
    status: "APPROVED",
    riskScore: 12, // Lower is safer
    riskLevel: "Low",
    fraudFlags: [],
    xaiFactors: [
      { factor: "High Credit Score (785)", impact: "+35 pts Safety", positive: true },
      { factor: "Low Debt-to-Income Ratio (14.4%)", impact: "+28 pts Safety", positive: true },
      { factor: "Strong Monthly Savings ($4,500)", impact: "+22 pts Safety", positive: true },
      { factor: "Zero Past Loan Defaults", impact: "+15 pts Safety", positive: true }
    ],
    underwriterNotes: "Auto-approved by AI System. Clean financial history."
  },
  {
    id: "APP-8741",
    applicantName: "Marcus Vance",
    email: "marcus.vance@techcorp.io",
    occupation: "Product Designer",
    monthlyIncome: 7200,
    creditScore: 655,
    existingLiabilities: 3100,
    monthlySavings: 800,
    requestedAmount: 35000,
    tenureMonths: 48,
    spendingBehaviorScore: 54,
    pastDefaults: 1,
    onTimePaymentRatio: 84,
    submissionDate: "2026-10-04 16:05",
    status: "MANUAL_REVIEW",
    riskScore: 52,
    riskLevel: "Moderate",
    fraudFlags: ["Minor Income Benchmark Variance (+15% above median)"],
    xaiFactors: [
      { factor: "Moderate Credit Score (655)", impact: "-18 pts Risk", positive: false },
      { factor: "Elevated DTI Ratio (43.0%)", impact: "-25 pts Risk", positive: false },
      { factor: "Previous Late Payment Record", impact: "-15 pts Risk", positive: false },
      { factor: "Stable Employment Sector", impact: "+12 pts Safety", positive: true }
    ],
    underwriterNotes: "Requires review: DTI is borderline at 43%. Requested proof of bonus income."
  },
  {
    id: "APP-7639",
    applicantName: "Elena Rostova",
    email: "elena.r@fintech-global.net",
    occupation: "Data Analyst",
    monthlyIncome: 6500,
    creditScore: 720,
    existingLiabilities: 2100,
    monthlySavings: 1900,
    requestedAmount: 28000,
    tenureMonths: 24,
    spendingBehaviorScore: 76,
    pastDefaults: 0,
    onTimePaymentRatio: 96,
    submissionDate: "2026-10-04 11:45",
    status: "MANUAL_REVIEW",
    riskScore: 38,
    riskLevel: "Moderate",
    fraudFlags: ["Device/IP Location Discrepancy", "Rapid Application Resubmission (2x in 24h)"],
    xaiFactors: [
      { factor: "Good Credit Score (720)", impact: "+24 pts Safety", positive: true },
      { factor: "Healthy Savings Buffer ($1,900/mo)", impact: "+18 pts Safety", positive: true },
      { factor: "Unusual Device Fingerprint", impact: "-30 pts Fraud Alert", positive: false }
    ],
    underwriterNotes: "High risk flag triggered due to location mismatch. Underwriter verification requested."
  },
  {
    id: "APP-6120",
    applicantName: "Arthur Pendelton",
    email: "arthur.p@freelance-art.org",
    occupation: "Independent Artist",
    monthlyIncome: 3200,
    creditScore: 540,
    existingLiabilities: 2400,
    monthlySavings: 150,
    requestedAmount: 50000,
    tenureMonths: 60,
    spendingBehaviorScore: 32,
    pastDefaults: 3,
    onTimePaymentRatio: 68,
    submissionDate: "2026-10-03 19:10",
    status: "REJECTED",
    riskScore: 88,
    riskLevel: "Critical Risk",
    fraudFlags: [],
    xaiFactors: [
      { factor: "Low Credit Score (540)", impact: "-42 pts Risk", positive: false },
      { factor: "Extreme DTI Ratio (75.0%)", impact: "-38 pts Risk", positive: false },
      { factor: "Multiple Past Defaults (3)", impact: "-35 pts Risk", positive: false },
      { factor: "Low Monthly Savings ($150)", impact: "-15 pts Risk", positive: false }
    ],
    underwriterNotes: "Auto-rejected: Severe DTI ratio and history of defaults exceeds bank risk tolerance."
  },
  {
    id: "APP-5904",
    applicantName: "Derek Sterling",
    email: "derek.sterling99@tempmail.com",
    occupation: "Consultant (Self-Reported)",
    monthlyIncome: 24000,
    creditScore: 610,
    existingLiabilities: 1200,
    monthlySavings: 300,
    requestedAmount: 85000,
    tenureMonths: 36,
    spendingBehaviorScore: 40,
    pastDefaults: 1,
    onTimePaymentRatio: 78,
    submissionDate: "2026-10-04 17:50",
    status: "MANUAL_REVIEW",
    riskScore: 74,
    riskLevel: "High Risk",
    fraudFlags: [
      "Potential Synthetic Identity Pattern",
      "Extreme Income Exaggeration (+280% vs Occupation Benchmark)",
      "High Discretionary Cash Drain"
    ],
    xaiFactors: [
      { factor: "Unverified High Income Claim", impact: "-45 pts Fraud Risk", positive: false },
      { factor: "Disproportionate Requested Amount ($85k)", impact: "-30 pts Risk", positive: false },
      { factor: "Low Liquid Savings relative to Income", impact: "-25 pts Risk", positive: false }
    ],
    underwriterNotes: "FLAGGED FOR POTENTIAL FRAUD. Income documentation and tax filings mandated."
  }
];

// ==========================================================================
// AI Evaluation Function Algorithm
// ==========================================================================

export function evaluateLoanApplication(data, modelConfig = { approvalThreshold: 35, reviewWindow: 65, fraudSensitivity: "MEDIUM" }) {
  const {
    monthlyIncome = 5000,
    creditScore = 700,
    existingLiabilities = 1500,
    monthlySavings = 1000,
    requestedAmount = 20000,
    tenureMonths = 36,
    spendingBehaviorScore = 70,
    pastDefaults = 0,
    onTimePaymentRatio = 95
  } = data;

  // 1. Debt-To-Income (DTI) Ratio Calculation
  const dtiRatio = (existingLiabilities / Math.max(monthlyIncome, 1)) * 100;
  
  // 2. Base Risk Calculation (0 to 100)
  let riskScore = 50; // Neutral baseline

  // Credit Score Component (-30 to +35)
  if (creditScore >= 780) riskScore -= 30;
  else if (creditScore >= 720) riskScore -= 20;
  else if (creditScore >= 660) riskScore -= 5;
  else if (creditScore >= 580) riskScore += 18;
  else riskScore += 38;

  // DTI Component
  if (dtiRatio < 20) riskScore -= 15;
  else if (dtiRatio < 35) riskScore -= 5;
  else if (dtiRatio < 50) riskScore += 15;
  else riskScore += 35;

  // Past Defaults & Payment History
  riskScore += (pastDefaults * 18);
  if (onTimePaymentRatio < 80) riskScore += 18;
  else if (onTimePaymentRatio > 95) riskScore -= 10;

  // Savings Buffer & Spending Behavior
  const monthsOfBuffer = (monthlySavings * 12) / Math.max(requestedAmount, 1);
  if (monthsOfBuffer > 0.5) riskScore -= 10;
  if (spendingBehaviorScore > 80) riskScore -= 10;
  else if (spendingBehaviorScore < 40) riskScore += 12;

  // Clamp Risk Score to [0, 100]
  riskScore = Math.min(100, Math.max(0, Math.round(riskScore)));

  // 3. Fraud Anomaly Detection Rules
  const fraudFlags = [];
  
  // Rule A: Income vs Occupation anomaly
  if (monthlyIncome > 18000 && spendingBehaviorScore < 45 && monthlySavings < 500) {
    fraudFlags.push("Extreme Income vs Liquid Savings Discrepancy");
  }
  
  // Rule B: Synthetic identity & credit imbalance
  if (pastDefaults > 0 && monthlyIncome > 20000 && creditScore < 620) {
    fraudFlags.push("High Income / Low Credit / Past Default Anomaly Pattern");
  }

  // Rule C: Excessive Loan Request vs Income Capability
  const annualIncome = monthlyIncome * 12;
  if (requestedAmount > annualIncome * 1.5) {
    fraudFlags.push("Over-leveraged Loan Request (>150% Annual Income)");
  }

  // 4. Decision Classifier logic based on threshold config
  let status = "APPROVED";
  let riskLevel = "Low";

  if (fraudFlags.length > 0) {
    status = "MANUAL_REVIEW";
    riskLevel = riskScore > 70 ? "Critical Risk" : "High Risk";
  } else if (riskScore <= modelConfig.approvalThreshold) {
    status = "APPROVED";
    riskLevel = riskScore <= 20 ? "Very Low" : "Low";
  } else if (riskScore <= modelConfig.reviewWindow) {
    status = "MANUAL_REVIEW";
    riskLevel = "Moderate";
  } else {
    status = "REJECTED";
    riskLevel = "High / Critical";
  }

  // 5. Explainable AI (XAI) Feature Importance Matrix
  const xaiFactors = [];
  
  if (creditScore >= 720) {
    xaiFactors.push({ factor: `Strong Credit Score (${creditScore})`, impact: "+30 pts Safety", positive: true });
  } else if (creditScore < 620) {
    xaiFactors.push({ factor: `Low Credit Score (${creditScore})`, impact: "-32 pts Risk", positive: false });
  }

  if (dtiRatio <= 30) {
    xaiFactors.push({ factor: `Low DTI Ratio (${dtiRatio.toFixed(1)}%)`, impact: "+25 pts Safety", positive: true });
  } else if (dtiRatio > 45) {
    xaiFactors.push({ factor: `Elevated DTI Ratio (${dtiRatio.toFixed(1)}%)`, impact: "-28 pts Risk", positive: false });
  }

  if (pastDefaults === 0) {
    xaiFactors.push({ factor: "Impeccable Default History (0)", impact: "+15 pts Safety", positive: true });
  } else {
    xaiFactors.push({ factor: `${pastDefaults} Prior Default Record(s)`, impact: `-${pastDefaults * 18} pts Risk`, positive: false });
  }

  if (spendingBehaviorScore >= 75) {
    xaiFactors.push({ factor: `Disciplined Spending Behavior (${spendingBehaviorScore}/100)`, impact: "+12 pts Safety", positive: true });
  } else if (spendingBehaviorScore < 50) {
    xaiFactors.push({ factor: `High Discretionary Spending Drain (${spendingBehaviorScore}/100)`, impact: "-15 pts Risk", positive: false });
  }

  return {
    riskScore,
    riskLevel,
    status,
    dtiRatio: parseFloat(dtiRatio.toFixed(1)),
    fraudFlags,
    xaiFactors,
    evaluatedAt: new Date().toISOString()
  };
}
