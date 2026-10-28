import React, { useState, useMemo } from 'react';
import { 
  FileText, 
  DollarSign, 
  CreditCard, 
  Building2, 
  TrendingUp, 
  UploadCloud, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  ShieldAlert, 
  ArrowRight, 
  Sparkles,
  RefreshCw,
  FileCheck
} from 'lucide-react';
import { evaluateLoanApplication } from '../data/mockData';

export default function ApplicantPortal({ onSubmitApplication, modelConfig }) {
  // Form State
  const [formData, setFormData] = useState({
    applicantName: "Alexander Vance",
    email: "alexander.vance@innovate.co",
    occupation: "Senior Financial Manager",
    monthlyIncome: 9500,
    creditScore: 745,
    existingLiabilities: 2200,
    monthlySavings: 3100,
    requestedAmount: 35000,
    tenureMonths: 36,
    spendingBehaviorScore: 82,
    pastDefaults: 0,
    onTimePaymentRatio: 98
  });

  // Mock Upload state
  const [documentUploaded, setDocumentUploaded] = useState(false);
  const [isScanningDoc, setIsScanningDoc] = useState(false);

  // Result Modal State
  const [evaluationResult, setEvaluationResult] = useState(null);

  // Live real-time evaluation preview as user types
  const liveEvaluation = useMemo(() => {
    return evaluateLoanApplication(formData, modelConfig);
  }, [formData, modelConfig]);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSimulateDocUpload = () => {
    setIsScanningDoc(true);
    setTimeout(() => {
      setIsScanningDoc(false);
      setDocumentUploaded(true);
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = evaluateLoanApplication(formData, modelConfig);
    const newApp = {
      id: `APP-${Math.floor(1000 + Math.random() * 9000)}`,
      ...formData,
      submissionDate: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: result.status,
      riskScore: result.riskScore,
      riskLevel: result.riskLevel,
      fraudFlags: result.fraudFlags,
      xaiFactors: result.xaiFactors,
      underwriterNotes: result.status === 'APPROVED' 
        ? 'Auto-Approved by AI Engine upon instant submission.' 
        : result.status === 'MANUAL_REVIEW'
        ? 'Submitted for human underwriter review due to borderline risk or flags.'
        : 'Auto-Rejected by AI Engine based on risk policy thresholds.'
    };

    setEvaluationResult({ app: newApp, result });
    onSubmitApplication(newApp);
  };

  const fillQuickPreset = (presetType) => {
    if (presetType === 'prime') {
      setFormData({
        applicantName: "Eleanor Vance",
        email: "eleanor.v@techcorp.com",
        occupation: "Lead Cloud Architect",
        monthlyIncome: 14000,
        creditScore: 810,
        existingLiabilities: 1500,
        monthlySavings: 5500,
        requestedAmount: 40000,
        tenureMonths: 36,
        spendingBehaviorScore: 92,
        pastDefaults: 0,
        onTimePaymentRatio: 100
      });
    } else if (presetType === 'borderline') {
      setFormData({
        applicantName: "Julian Croft",
        email: "j.croft@designstudio.io",
        occupation: "UX Consultant",
        monthlyIncome: 6200,
        creditScore: 645,
        existingLiabilities: 2800,
        monthlySavings: 650,
        requestedAmount: 30000,
        tenureMonths: 48,
        spendingBehaviorScore: 58,
        pastDefaults: 1,
        onTimePaymentRatio: 86
      });
    } else if (presetType === 'fraud') {
      setFormData({
        applicantName: "Victor Krum",
        email: "victor99@guerrillamail.biz",
        occupation: "Independent Trader",
        monthlyIncome: 25000,
        creditScore: 590,
        existingLiabilities: 1100,
        monthlySavings: 200,
        requestedAmount: 90000,
        tenureMonths: 24,
        spendingBehaviorScore: 30,
        pastDefaults: 2,
        onTimePaymentRatio: 72
      });
    }
  };

  return (
    <div className="applicant-portal-container">
      {/* Header section */}
      <div className="portal-header">
        <div>
          <h1 className="portal-title">Smart Loan Application Portal</h1>
          <p className="portal-subtitle">
            Complete your financial profile for instant AI-assisted evaluation and risk assessment.
          </p>
        </div>
        
        {/* Preset Selector */}
        <div className="preset-buttons">
          <span className="preset-label">Test Profiles:</span>
          <button className="btn-preset btn-prime" onClick={() => fillQuickPreset('prime')}>
            Prime Applicant
          </button>
          <button className="btn-preset btn-borderline" onClick={() => fillQuickPreset('borderline')}>
            Borderline Review
          </button>
          <button className="btn-preset btn-fraud" onClick={() => fillQuickPreset('fraud')}>
            High Risk / Fraud Flag
          </button>
        </div>
      </div>

      <div className="portal-grid">
        {/* Left Column: Form Inputs */}
        <form onSubmit={handleSubmit} className="glass-card form-card">
          <div className="section-heading">
            <Building2 className="section-icon text-cyan" />
            <h2>1. Personal & Employment Information</h2>
          </div>

          <div className="grid-2">
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input 
                type="text" 
                className="input-field" 
                value={formData.applicantName} 
                onChange={(e) => handleChange('applicantName', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input 
                type="email" 
                className="input-field" 
                value={formData.email} 
                onChange={(e) => handleChange('email', e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Primary Occupation / Sector</label>
            <input 
              type="text" 
              className="input-field" 
              value={formData.occupation} 
              onChange={(e) => handleChange('occupation', e.target.value)}
              required
            />
          </div>

          <div className="section-heading" style={{ marginTop: '1.5rem' }}>
            <DollarSign className="section-icon text-cyan" />
            <h2>2. Income & Liabilities Profile</h2>
          </div>

          <div className="grid-2">
            <div className="form-group">
              <label className="form-label">
                Monthly Net Income ($)
                <span className="val-display">${formData.monthlyIncome.toLocaleString()}</span>
              </label>
              <input 
                type="range" 
                min="1500" 
                max="30000" 
                step="500"
                className="range-slider"
                value={formData.monthlyIncome}
                onChange={(e) => handleChange('monthlyIncome', Number(e.target.value))}
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Credit Score (300 - 850)
                <span className={`val-display ${formData.creditScore >= 720 ? 'text-emerald' : formData.creditScore >= 650 ? 'text-amber' : 'text-rose'}`}>
                  {formData.creditScore}
                </span>
              </label>
              <input 
                type="range" 
                min="300" 
                max="850" 
                step="5"
                className="range-slider"
                value={formData.creditScore}
                onChange={(e) => handleChange('creditScore', Number(e.target.value))}
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Existing Monthly Debt Payments ($)
                <span className="val-display">${formData.existingLiabilities.toLocaleString()}</span>
              </label>
              <input 
                type="range" 
                min="0" 
                max="12000" 
                step="200"
                className="range-slider"
                value={formData.existingLiabilities}
                onChange={(e) => handleChange('existingLiabilities', Number(e.target.value))}
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Monthly Savings & Liquid Buffer ($)
                <span className="val-display">${formData.monthlySavings.toLocaleString()}</span>
              </label>
              <input 
                type="range" 
                min="0" 
                max="10000" 
                step="250"
                className="range-slider"
                value={formData.monthlySavings}
                onChange={(e) => handleChange('monthlySavings', Number(e.target.value))}
              />
            </div>
          </div>

          <div className="section-heading" style={{ marginTop: '1.5rem' }}>
            <CreditCard className="section-icon text-cyan" />
            <h2>3. Requested Loan & Repayment Parameters</h2>
          </div>

          <div className="grid-2">
            <div className="form-group">
              <label className="form-label">
                Requested Loan Amount ($)
                <span className="val-display font-bold text-cyan">${formData.requestedAmount.toLocaleString()}</span>
              </label>
              <input 
                type="range" 
                min="5000" 
                max="100000" 
                step="2500"
                className="range-slider"
                value={formData.requestedAmount}
                onChange={(e) => handleChange('requestedAmount', Number(e.target.value))}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Loan Term / Duration</label>
              <select 
                className="select-field" 
                value={formData.tenureMonths}
                onChange={(e) => handleChange('tenureMonths', Number(e.target.value))}
              >
                <option value={12}>12 Months (1 Year)</option>
                <option value={24}>24 Months (2 Years)</option>
                <option value={36}>36 Months (3 Years)</option>
                <option value={48}>48 Months (4 Years)</option>
                <option value={60}>60 Months (5 Years)</option>
              </select>
            </div>
          </div>

          {/* Additional Behavior Parameters */}
          <div className="grid-2">
            <div className="form-group">
              <label className="form-label">
                Past Loan Defaults Count
              </label>
              <select 
                className="select-field"
                value={formData.pastDefaults}
                onChange={(e) => handleChange('pastDefaults', Number(e.target.value))}
              >
                <option value={0}>0 (Clean History)</option>
                <option value={1}>1 Default (Historical)</option>
                <option value={2}>2 Defaults</option>
                <option value={3}>3+ Severe Defaults</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">
                Spending Discipline Rating ({formData.spendingBehaviorScore}/100)
              </label>
              <input 
                type="range" 
                min="20" 
                max="100" 
                step="2"
                className="range-slider"
                value={formData.spendingBehaviorScore}
                onChange={(e) => handleChange('spendingBehaviorScore', Number(e.target.value))}
              />
            </div>
          </div>

          {/* Document Verification Simulator */}
          <div className="doc-upload-box">
            <div className="doc-header">
              <UploadCloud className="text-cyan" size={24} />
              <div>
                <div className="doc-title">Income & Identity Verification (AI OCR)</div>
                <div className="doc-sub">Upload Paystub / Tax Form for automated OCR validation</div>
              </div>
            </div>
            
            {documentUploaded ? (
              <div className="doc-success">
                <FileCheck size={20} className="text-emerald" />
                <span>Documents verified via AI OCR: <b>Tax Form W-2 & 3 Months Bank Statements</b></span>
              </div>
            ) : (
              <button 
                type="button" 
                className="btn btn-secondary btn-sm"
                onClick={handleSimulateDocUpload}
                disabled={isScanningDoc}
              >
                {isScanningDoc ? (
                  <>
                    <RefreshCw className="spin" size={16} />
                    <span>Scanning documents with AI...</span>
                  </>
                ) : (
                  <span>Simulate Document OCR Verification</span>
                )}
              </button>
            )}
          </div>

          {/* Submit Action */}
          <div style={{ marginTop: '2rem' }}>
            <button type="submit" className="btn btn-primary submit-btn">
              <Sparkles size={18} />
              <span>Submit Application for Instant AI Decision</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </form>

        {/* Right Column: Real-Time AI Score Gauge Preview */}
        <div className="live-preview-column">
          <div className="glass-card preview-card glass-card-glow">
            <div className="preview-header">
              <div className="live-chip">
                <span className="live-pulse"></span>
                LIVE AI PREVIEW
              </div>
              <h3 className="preview-title">Instant Eligibility Engine</h3>
            </div>

            {/* Risk Gauge Visual */}
            <div className="gauge-wrapper">
              <div className={`score-circle ${liveEvaluation.riskScore < 35 ? 'circle-approved' : liveEvaluation.riskScore <= 65 ? 'circle-review' : 'circle-rejected'}`}>
                <div className="score-number">{liveEvaluation.riskScore}</div>
                <div className="score-max">/ 100 Risk Index</div>
              </div>
              <div className="risk-level-badge">
                Status: <span className={`status-text ${liveEvaluation.status.toLowerCase()}`}>{liveEvaluation.status.replace('_', ' ')}</span>
              </div>
            </div>

            {/* Financial Ratio Breakdown */}
            <div className="metrics-box">
              <div className="metric-row">
                <span className="m-title">Debt-To-Income (DTI):</span>
                <span className={`m-val ${liveEvaluation.dtiRatio > 45 ? 'text-rose' : 'text-emerald'}`}>
                  {liveEvaluation.dtiRatio}%
                </span>
              </div>
              <div className="metric-row">
                <span className="m-title">Estimated Monthly Payment:</span>
                <span className="m-val text-cyan font-mono">
                  ${Math.round((formData.requestedAmount / formData.tenureMonths) * 1.08).toLocaleString()}/mo
                </span>
              </div>
              <div className="metric-row">
                <span className="m-title">Past Default Risk Factor:</span>
                <span className="m-val">{formData.pastDefaults === 0 ? 'Zero Risk' : `${formData.pastDefaults} Default(s)`}</span>
              </div>
            </div>

            {/* Fraud Anomaly Warning Panel */}
            {liveEvaluation.fraudFlags.length > 0 && (
              <div className="fraud-warning-box">
                <div className="fraud-title">
                  <ShieldAlert size={16} />
                  <span>Fraud Anomaly Triggers ({liveEvaluation.fraudFlags.length})</span>
                </div>
                <ul className="fraud-list">
                  {liveEvaluation.fraudFlags.map((flag, idx) => (
                    <li key={idx}>{flag}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* XAI Factors Summary */}
            <div className="xai-mini-panel">
              <h4>Key AI Drivers (XAI)</h4>
              <div className="xai-factors-list">
                {liveEvaluation.xaiFactors.map((item, idx) => (
                  <div key={idx} className={`xai-factor-item ${item.positive ? 'positive' : 'negative'}`}>
                    <span>{item.factor}</span>
                    <span className="xai-weight">{item.impact}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decision Modal upon Form Submit */}
      {evaluationResult && (
        <div className="modal-overlay" onClick={() => setEvaluationResult(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-icon-wrapper">
                {evaluationResult.app.status === 'APPROVED' ? (
                  <CheckCircle2 size={36} className="text-emerald" />
                ) : evaluationResult.app.status === 'MANUAL_REVIEW' ? (
                  <AlertTriangle size={36} className="text-amber" />
                ) : (
                  <XCircle size={36} className="text-rose" />
                )}
              </div>
              <div>
                <h2>Loan Application Decision Certificate</h2>
                <div className="app-id-tag">Application ID: {evaluationResult.app.id}</div>
              </div>
            </div>

            <div className="modal-body">
              <div className="decision-banner">
                <span className="d-label">AI Decision Result:</span>
                <span className={`badge badge-${evaluationResult.app.status.toLowerCase().replace('_', '-')}`}>
                  {evaluationResult.app.status.replace('_', ' ')}
                </span>
              </div>

              <div className="grid-2 modal-stats">
                <div className="m-stat-card">
                  <span className="m-label">Applicant Name</span>
                  <span className="m-value">{evaluationResult.app.applicantName}</span>
                </div>
                <div className="m-stat-card">
                  <span className="m-label">Loan Amount</span>
                  <span className="m-value">${evaluationResult.app.requestedAmount.toLocaleString()}</span>
                </div>
                <div className="m-stat-card">
                  <span className="m-label">Risk Score Index</span>
                  <span className="m-value font-mono">{evaluationResult.app.riskScore} / 100</span>
                </div>
                <div className="m-stat-card">
                  <span className="m-label">Assigned Risk Level</span>
                  <span className="m-value">{evaluationResult.app.riskLevel}</span>
                </div>
              </div>

              <div className="notes-box">
                <h4>System Explanation & Next Steps:</h4>
                <p>{evaluationResult.app.underwriterNotes}</p>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-primary" onClick={() => setEvaluationResult(null)}>
                Acknowledge & Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .applicant-portal-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .portal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .portal-title {
          font-size: 1.75rem;
          background: linear-gradient(135deg, #ffffff, var(--accent-cyan));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .portal-subtitle {
          color: var(--text-secondary);
          font-size: 0.92rem;
        }

        .preset-buttons {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.03);
          padding: 0.4rem 0.75rem;
          border-radius: 12px;
          border: 1px solid var(--border-glass);
        }

        .preset-label {
          font-size: 0.78rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .btn-preset {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.35rem 0.65rem;
          border-radius: 8px;
          border: 1px solid transparent;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-prime {
          background: rgba(16, 185, 129, 0.15);
          color: var(--color-approved);
          border-color: rgba(16, 185, 129, 0.3);
        }
        .btn-prime:hover { background: rgba(16, 185, 129, 0.3); }

        .btn-borderline {
          background: rgba(245, 158, 11, 0.15);
          color: var(--color-review);
          border-color: rgba(245, 158, 11, 0.3);
        }
        .btn-borderline:hover { background: rgba(245, 158, 11, 0.3); }

        .btn-fraud {
          background: rgba(239, 68, 68, 0.15);
          color: var(--color-rejected);
          border-color: rgba(239, 68, 68, 0.3);
        }
        .btn-fraud:hover { background: rgba(239, 68, 68, 0.3); }

        .portal-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 1.5rem;
        }

        @media (max-width: 1024px) {
          .portal-grid {
            grid-template-columns: 1fr;
          }
        }

        .form-card {
          padding: 2rem;
        }

        .section-heading {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--border-glass);
        }

        .section-heading h2 {
          font-size: 1.1rem;
          color: #fff;
        }

        .val-display {
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--accent-cyan);
        }

        .text-emerald { color: #10b981; }
        .text-amber { color: #f59e0b; }
        .text-rose { color: #ef4444; }

        .doc-upload-box {
          background: rgba(0, 242, 254, 0.03);
          border: 1px dashed rgba(0, 242, 254, 0.25);
          border-radius: 12px;
          padding: 1.25rem;
          margin-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .doc-header {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .doc-title {
          font-size: 0.92rem;
          font-weight: 700;
          color: #fff;
        }

        .doc-sub {
          font-size: 0.78rem;
          color: var(--text-secondary);
        }

        .doc-success {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: #fff;
          background: rgba(16, 185, 129, 0.1);
          padding: 0.65rem 1rem;
          border-radius: 8px;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .submit-btn {
          width: 100%;
          padding: 1rem;
          font-size: 1.05rem;
        }

        /* Live Preview Card */
        .preview-card {
          position: sticky;
          top: 90px;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .preview-header {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .live-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          color: var(--accent-cyan);
          background: rgba(0, 242, 254, 0.1);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          width: fit-content;
        }

        .live-pulse {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 6px var(--accent-cyan);
        }

        .gauge-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem 0;
        }

        .score-circle {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 4px solid var(--border-glass);
          box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5);
          transition: all 0.3s ease;
        }

        .circle-approved {
          border-color: var(--color-approved);
          box-shadow: 0 0 25px rgba(16, 185, 129, 0.3);
        }

        .circle-review {
          border-color: var(--color-review);
          box-shadow: 0 0 25px rgba(245, 158, 11, 0.3);
        }

        .circle-rejected {
          border-color: var(--color-rejected);
          box-shadow: 0 0 25px rgba(239, 68, 68, 0.3);
        }

        .score-number {
          font-size: 2.2rem;
          font-weight: 800;
          font-family: var(--font-mono);
          line-height: 1;
          color: #fff;
        }

        .score-max {
          font-size: 0.65rem;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .risk-level-badge {
          margin-top: 0.75rem;
          font-size: 0.88rem;
          font-weight: 600;
        }

        .status-text {
          font-weight: 800;
          text-transform: uppercase;
        }
        .status-text.approved { color: var(--color-approved); }
        .status-text.manual_review { color: var(--color-review); }
        .status-text.rejected { color: var(--color-rejected); }

        .metrics-box {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 10px;
          padding: 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 0.82rem;
        }

        .metric-row {
          display: flex;
          justify-content: space-between;
        }

        .m-title { color: var(--text-secondary); }
        .m-val { font-weight: 600; }

        .fraud-warning-box {
          background: var(--color-fraud-bg);
          border: 1px solid rgba(236, 72, 153, 0.4);
          border-radius: 10px;
          padding: 0.85rem;
        }

        .fraud-title {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-fraud);
          margin-bottom: 0.4rem;
        }

        .fraud-list {
          padding-left: 1.25rem;
          font-size: 0.78rem;
          color: #fce7f3;
        }

        .xai-mini-panel h4 {
          font-size: 0.82rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }

        .xai-factors-list {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .xai-factor-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.78rem;
          padding: 0.35rem 0.5rem;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.03);
        }

        .xai-factor-item.positive { border-left: 3px solid #10b981; }
        .xai-factor-item.negative { border-left: 3px solid #ef4444; }

        .xai-weight { font-weight: 700; }

        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }

        /* Modal specific */
        .modal-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-glass);
        }

        .app-id-tag {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--text-secondary);
        }

        .modal-body {
          padding: 1.5rem 0;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .decision-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.04);
          padding: 1rem;
          border-radius: 12px;
          border: 1px solid var(--border-glass);
        }

        .m-stat-card {
          background: rgba(255, 255, 255, 0.02);
          padding: 0.85rem;
          border-radius: 10px;
          border: 1px solid var(--border-glass);
          display: flex;
          flex-direction: column;
        }

        .m-label { font-size: 0.75rem; color: var(--text-muted); }
        .m-value { font-size: 1.1rem; font-weight: 700; color: #fff; }

        .notes-box {
          background: rgba(0, 242, 254, 0.05);
          border-left: 4px solid var(--accent-cyan);
          padding: 1rem;
          border-radius: 8px;
          font-size: 0.88rem;
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          padding-top: 1rem;
          border-top: 1px solid var(--border-glass);
        }
      `}</style>
    </div>
  );
}
