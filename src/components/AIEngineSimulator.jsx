import React, { useState } from 'react';
import { 
  Cpu, 
  Sliders, 
  ShieldAlert, 
  Zap, 
  HelpCircle, 
  Layers, 
  BarChart, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle,
  Activity
} from 'lucide-react';
import { evaluateLoanApplication } from '../data/mockData';

export default function AIEngineSimulator({ modelConfig }) {
  const [params, setParams] = useState({
    monthlyIncome: 8000,
    creditScore: 680,
    existingLiabilities: 2500,
    monthlySavings: 1500,
    requestedAmount: 35000,
    tenureMonths: 36,
    spendingBehaviorScore: 65,
    pastDefaults: 1,
    onTimePaymentRatio: 90
  });

  const evaluation = evaluateLoanApplication(params, modelConfig);

  const handleSlider = (key, val) => {
    setParams(prev => ({ ...prev, [key]: Number(val) }));
  };

  return (
    <div className="simulator-container">
      <div className="sim-header">
        <div>
          <h1 className="sim-title">
            <Cpu className="text-cyan inline-icon" /> AI Risk Engine Simulator & XAI Playground
          </h1>
          <p className="sim-subtitle">
            Manipulate applicant risk variables in real time to test AI decision boundaries, feature importance (XAI), and fraud trigger matrix.
          </p>
        </div>
      </div>

      <div className="sim-grid">
        {/* Left Column: Interactive Parameters Panel */}
        <div className="glass-card sim-controls-card">
          <div className="ctrl-header">
            <Sliders size={18} className="text-cyan" />
            <h3>Input Feature Vectors</h3>
          </div>

          <div className="form-group">
            <label className="form-label">
              <span>Credit Score (FICO)</span>
              <span className={`val-display ${params.creditScore >= 720 ? 'text-emerald' : params.creditScore >= 640 ? 'text-amber' : 'text-rose'}`}>
                {params.creditScore}
              </span>
            </label>
            <input 
              type="range" 
              min="300" 
              max="850" 
              step="5"
              className="range-slider"
              value={params.creditScore} 
              onChange={(e) => handleSlider('creditScore', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              <span>Monthly Net Income</span>
              <span className="val-display">${params.monthlyIncome.toLocaleString()}</span>
            </label>
            <input 
              type="range" 
              min="1500" 
              max="35000" 
              step="500"
              className="range-slider"
              value={params.monthlyIncome} 
              onChange={(e) => handleSlider('monthlyIncome', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              <span>Existing Monthly Debt Payments</span>
              <span className="val-display">${params.existingLiabilities.toLocaleString()}</span>
            </label>
            <input 
              type="range" 
              min="0" 
              max="15000" 
              step="250"
              className="range-slider"
              value={params.existingLiabilities} 
              onChange={(e) => handleSlider('existingLiabilities', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              <span>Requested Loan Principal</span>
              <span className="val-display text-cyan">${params.requestedAmount.toLocaleString()}</span>
            </label>
            <input 
              type="range" 
              min="5000" 
              max="120000" 
              step="2500"
              className="range-slider"
              value={params.requestedAmount} 
              onChange={(e) => handleSlider('requestedAmount', e.target.value)}
            />
          </div>

          <div className="grid-2">
            <div className="form-group">
              <label className="form-label">
                <span>Monthly Savings</span>
                <span className="val-display">${params.monthlySavings.toLocaleString()}</span>
              </label>
              <input 
                type="range" 
                min="0" 
                max="10000" 
                step="250"
                className="range-slider"
                value={params.monthlySavings} 
                onChange={(e) => handleSlider('monthlySavings', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <span>Past Loan Defaults</span>
                <span className="val-display text-rose">{params.pastDefaults}</span>
              </label>
              <input 
                type="range" 
                min="0" 
                max="4" 
                step="1"
                className="range-slider"
                value={params.pastDefaults} 
                onChange={(e) => handleSlider('pastDefaults', e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              <span>Spending Behavior Discipline Index ({params.spendingBehaviorScore}/100)</span>
            </label>
            <input 
              type="range" 
              min="10" 
              max="100" 
              step="2"
              className="range-slider"
              value={params.spendingBehaviorScore} 
              onChange={(e) => handleSlider('spendingBehaviorScore', e.target.value)}
            />
          </div>
        </div>

        {/* Right Column: AI Output Dashboard */}
        <div className="sim-outputs">
          {/* Main Decision Banner Card */}
          <div className="glass-card output-main-card glass-card-glow">
            <div className="out-grid">
              {/* Radial Risk Score Gauge */}
              <div className="gauge-box">
                <div className="gauge-ring">
                  <div className={`gauge-arc score-${evaluation.status.toLowerCase()}`}>
                    <span className="gauge-val">{evaluation.riskScore}</span>
                    <span className="gauge-sub">Risk Score Index</span>
                  </div>
                </div>
              </div>

              {/* Decision Box */}
              <div className="decision-info-box">
                <div className="dec-status-header">
                  {evaluation.status === 'APPROVED' && <CheckCircle2 size={32} className="text-emerald" />}
                  {evaluation.status === 'MANUAL_REVIEW' && <AlertTriangle size={32} className="text-amber" />}
                  {evaluation.status === 'REJECTED' && <XCircle size={32} className="text-rose" />}
                  <div>
                    <div className="dec-title">AI Decision Prediction</div>
                    <div className={`dec-badge badge-${evaluation.status.toLowerCase().replace('_', '-')}`}>
                      {evaluation.status.replace('_', ' ')}
                    </div>
                  </div>
                </div>

                <div className="ratio-grid">
                  <div className="r-item">
                    <span className="r-label">DTI Ratio:</span>
                    <span className={`r-val ${evaluation.dtiRatio > 45 ? 'text-rose' : 'text-emerald'}`}>
                      {evaluation.dtiRatio}%
                    </span>
                  </div>
                  <div className="r-item">
                    <span className="r-label">Risk Grade:</span>
                    <span className="r-val">{evaluation.riskLevel}</span>
                  </div>
                  <div className="r-item">
                    <span className="r-label">Auto-Approval Cutoff:</span>
                    <span className="r-val font-mono">Score ≤ {modelConfig.approvalThreshold}</span>
                  </div>
                  <div className="r-item">
                    <span className="r-label">Manual Review Window:</span>
                    <span className="r-val font-mono">{modelConfig.approvalThreshold + 1} - {modelConfig.reviewWindow}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Explainable AI (XAI) Feature Importance Matrix */}
          <div className="glass-card xai-card">
            <div className="xai-header">
              <Activity className="text-cyan" size={18} />
              <h3>Explainable AI (XAI) Feature Importance</h3>
            </div>
            <p className="xai-desc">
              Quantitative breakdown of score weightings calculated by the machine learning risk model:
            </p>

            <div className="xai-grid">
              {evaluation.xaiFactors.map((factor, index) => (
                <div key={index} className={`xai-bar-card ${factor.positive ? 'positive' : 'negative'}`}>
                  <div className="xai-bar-info">
                    <span className="xai-factor-title">{factor.factor}</span>
                    <span className="xai-factor-weight">{factor.impact}</span>
                  </div>
                  <div className="xai-progress-track">
                    <div 
                      className={`xai-progress-fill ${factor.positive ? 'bg-emerald' : 'bg-rose'}`}
                      style={{ width: `${Math.min(100, Math.abs(parseInt(factor.impact) || 20) * 2.5)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fraud Anomaly Matrix */}
          <div className="glass-card fraud-card">
            <div className="fraud-header">
              <ShieldAlert className={evaluation.fraudFlags.length > 0 ? "text-rose" : "text-emerald"} size={20} />
              <h3>Fraud & Anomaly Detection Matrix</h3>
            </div>

            {evaluation.fraudFlags.length === 0 ? (
              <div className="no-fraud-msg">
                <CheckCircle2 size={20} className="text-emerald" />
                <span>Zero fraud anomalies detected. Application passes integrity & identity benchmarks.</span>
              </div>
            ) : (
              <div className="fraud-flags-wrapper">
                {evaluation.fraudFlags.map((flag, i) => (
                  <div key={i} className="fraud-flag-alert">
                    <AlertTriangle size={18} className="text-rose" />
                    <span>{flag}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .simulator-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .sim-title {
          font-size: 1.75rem;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .sim-subtitle {
          color: var(--text-secondary);
          font-size: 0.92rem;
        }

        .sim-grid {
          display: grid;
          grid-template-columns: 420px 1fr;
          gap: 1.5rem;
        }

        @media (max-width: 1024px) {
          .sim-grid {
            grid-template-columns: 1fr;
          }
        }

        .sim-controls-card {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .ctrl-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-glass);
        }

        .sim-outputs {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .out-grid {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 1.5rem;
          align-items: center;
        }

        @media (max-width: 640px) {
          .out-grid {
            grid-template-columns: 1fr;
          }
        }

        .gauge-box {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .gauge-ring {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.4);
          padding: 8px;
          border: 1px solid var(--border-glass);
        }

        .gauge-arc {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 4px solid transparent;
          transition: all 0.3s ease;
        }

        .score-approved { border-color: var(--color-approved); box-shadow: 0 0 20px rgba(16, 185, 129, 0.3); }
        .score-manual_review { border-color: var(--color-review); box-shadow: 0 0 20px rgba(245, 158, 11, 0.3); }
        .score-rejected { border-color: var(--color-rejected); box-shadow: 0 0 20px rgba(239, 68, 68, 0.3); }

        .gauge-val {
          font-size: 2.5rem;
          font-weight: 800;
          font-family: var(--font-mono);
          color: #fff;
          line-height: 1;
        }

        .gauge-sub {
          font-size: 0.65rem;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .dec-status-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .dec-title {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .dec-badge {
          display: inline-block;
          margin-top: 0.25rem;
          font-size: 1rem;
          padding: 0.4rem 1rem;
        }

        .ratio-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.85rem;
          background: rgba(0, 0, 0, 0.25);
          padding: 1rem;
          border-radius: 12px;
          border: 1px solid var(--border-glass);
        }

        .r-item {
          display: flex;
          flex-direction: column;
        }
        .r-label { font-size: 0.75rem; color: var(--text-muted); }
        .r-val { font-size: 0.95rem; font-weight: 700; color: #fff; }

        /* XAI Styling */
        .xai-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.35rem;
        }

        .xai-desc {
          font-size: 0.82rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .xai-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .xai-bar-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass);
          border-radius: 10px;
          padding: 0.75rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .xai-bar-card.positive { border-left: 4px solid var(--color-approved); }
        .xai-bar-card.negative { border-left: 4px solid var(--color-rejected); }

        .xai-bar-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .xai-factor-weight { font-family: var(--font-mono); font-size: 0.8rem; }

        .xai-progress-track {
          height: 5px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 3px;
          overflow: hidden;
        }

        .xai-progress-fill {
          height: 100%;
          border-radius: 3px;
          transition: width 0.3s ease;
        }
        .bg-emerald { background: var(--color-approved); }
        .bg-rose { background: var(--color-rejected); }

        .fraud-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .no-fraud-msg {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.88rem;
          color: #fff;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 0.85rem 1rem;
          border-radius: 10px;
        }

        .fraud-flags-wrapper {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .fraud-flag-alert {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.85rem;
          color: #fce7f3;
          background: rgba(236, 72, 153, 0.12);
          border: 1px solid rgba(236, 72, 153, 0.3);
          padding: 0.75rem 1rem;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
