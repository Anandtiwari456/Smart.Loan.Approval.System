import React from 'react';
import { 
  Sliders, 
  ShieldCheck, 
  AlertTriangle, 
  Cpu, 
  Save, 
  RotateCcw,
  Sparkles,
  Zap
} from 'lucide-react';

export default function ModelSettings({ modelConfig, setModelConfig }) {
  const handleThresholdChange = (field, val) => {
    setModelConfig(prev => ({
      ...prev,
      [field]: Number(val)
    }));
  };

  const handleSensitivityChange = (val) => {
    setModelConfig(prev => ({
      ...prev,
      fraudSensitivity: val
    }));
  };

  const handleReset = () => {
    setModelConfig({
      approvalThreshold: 35,
      reviewWindow: 65,
      fraudSensitivity: 'MEDIUM'
    });
  };

  // Calculate simulated workload impact based on current sliders
  const estimatedAutoApprovalRatio = Math.round((modelConfig.approvalThreshold / 100) * 100 * 1.4);
  const estimatedManualWorkloadRatio = Math.round(((modelConfig.reviewWindow - modelConfig.approvalThreshold) / 100) * 100 * 1.2);
  const estimatedRejectionRatio = Math.max(0, 100 - estimatedAutoApprovalRatio - estimatedManualWorkloadRatio);

  return (
    <div className="settings-container">
      <div className="set-header">
        <div>
          <h1 className="set-title">
            <Sliders className="text-cyan inline-icon" /> AI Model Policy & Threshold Tuning
          </h1>
          <p className="set-subtitle">
            Calibrate decision boundaries, risk tolerance levels, and fraud sensitivity for the automated credit engine.
          </p>
        </div>

        <button className="btn btn-secondary btn-sm" onClick={handleReset}>
          <RotateCcw size={15} />
          <span>Reset Defaults</span>
        </button>
      </div>

      <div className="grid-2 set-grid">
        {/* Sliders Card */}
        <div className="glass-card config-card">
          <div className="c-title">
            <Cpu size={18} className="text-cyan" />
            <h3>Decision Boundary Cutoffs</h3>
          </div>

          <div className="form-group">
            <label className="form-label">
              <span>Auto-Approval Upper Cutoff Score (Score ≤ Threshold)</span>
              <span className="val-display text-emerald font-mono">{modelConfig.approvalThreshold} / 100</span>
            </label>
            <p className="field-hint">
              Applications with risk score at or below this threshold are instantly auto-approved without human underwriter intervention.
            </p>
            <input 
              type="range" 
              min="15" 
              max="50" 
              step="1"
              className="range-slider"
              value={modelConfig.approvalThreshold}
              onChange={(e) => handleThresholdChange('approvalThreshold', e.target.value)}
            />
          </div>

          <div className="form-group" style={{ marginTop: '1.5rem' }}>
            <label className="form-label">
              <span>Manual Review Window Ceiling ({modelConfig.approvalThreshold + 1} - {modelConfig.reviewWindow})</span>
              <span className="val-display text-amber font-mono">{modelConfig.reviewWindow} / 100</span>
            </label>
            <p className="field-hint">
              Applications scoring between {modelConfig.approvalThreshold + 1} and {modelConfig.reviewWindow} are routed to the Underwriter Queue. Scores above {modelConfig.reviewWindow} are auto-rejected.
            </p>
            <input 
              type="range" 
              min={modelConfig.approvalThreshold + 10} 
              max="85" 
              step="1"
              className="range-slider"
              value={modelConfig.reviewWindow}
              onChange={(e) => handleThresholdChange('reviewWindow', e.target.value)}
            />
          </div>

          <div className="form-group" style={{ marginTop: '1.5rem' }}>
            <label className="form-label">Fraud Rule Sensitivity Matrix</label>
            <div className="sensitivity-options">
              {['LOW', 'MEDIUM', 'HIGH', 'STRICT'].map((level) => (
                <button
                  key={level}
                  type="button"
                  className={`sens-btn ${modelConfig.fraudSensitivity === level ? 'active' : ''}`}
                  onClick={() => handleSensitivityChange(level)}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live Workload Impact Simulator */}
        <div className="glass-card impact-card glass-card-glow">
          <div className="c-title">
            <Sparkles size={18} className="text-cyan" />
            <h3>Simulated Portfolio Impact</h3>
          </div>

          <p className="impact-desc">
            Estimated application routing based on current policy thresholds:
          </p>

          <div className="impact-meters">
            <div className="meter-row">
              <div className="m-info">
                <span>Estimated Straight-Through Processing (STP Auto-Approved):</span>
                <span className="m-pct text-emerald font-mono">{estimatedAutoApprovalRatio}%</span>
              </div>
              <div className="meter-track">
                <div className="meter-fill bg-emerald" style={{ width: `${estimatedAutoApprovalRatio}%` }}></div>
              </div>
            </div>

            <div className="meter-row">
              <div className="m-info">
                <span>Estimated Underwriter Workload (Manual Review Queue):</span>
                <span className="m-pct text-amber font-mono">{estimatedManualWorkloadRatio}%</span>
              </div>
              <div className="meter-track">
                <div className="meter-fill bg-amber" style={{ width: `${estimatedManualWorkloadRatio}%` }}></div>
              </div>
            </div>

            <div className="meter-row">
              <div className="m-info">
                <span>Estimated Auto-Rejection Ratio:</span>
                <span className="m-pct text-rose font-mono">{estimatedRejectionRatio}%</span>
              </div>
              <div className="meter-track">
                <div className="meter-fill bg-rose" style={{ width: `${estimatedRejectionRatio}%` }}></div>
              </div>
            </div>
          </div>

          <div className="policy-summary">
            <h4>Current Active Policy Rules</h4>
            <ul>
              <li>Auto-Approval Threshold: <b>Score ≤ {modelConfig.approvalThreshold}</b></li>
              <li>Underwriter Review Window: <b>Score {modelConfig.approvalThreshold + 1} to {modelConfig.reviewWindow}</b></li>
              <li>Auto-Rejection Boundary: <b>Score &gt; {modelConfig.reviewWindow}</b></li>
              <li>Fraud Anomaly Profile: <b>{modelConfig.fraudSensitivity} Sensitivity</b></li>
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .settings-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .set-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .set-title {
          font-size: 1.75rem;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .set-subtitle {
          color: var(--text-secondary);
          font-size: 0.92rem;
        }

        .set-grid {
          gap: 1.5rem;
        }

        .c-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--border-glass);
        }

        .c-title h3 { font-size: 1.1rem; color: #fff; }

        .field-hint {
          font-size: 0.78rem;
          color: var(--text-secondary);
          margin-bottom: 0.4rem;
        }

        .sensitivity-options {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        .sens-btn {
          flex: 1;
          padding: 0.6rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: 8px;
          color: var(--text-secondary);
          font-weight: 700;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .sens-btn:hover { background: rgba(255, 255, 255, 0.08); color: #fff; }

        .sens-btn.active {
          background: rgba(0, 242, 254, 0.15);
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
        }

        .impact-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .impact-meters {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .meter-row {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .m-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.82rem;
          color: #fff;
          font-weight: 600;
        }

        .meter-track {
          height: 8px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
          overflow: hidden;
        }

        .meter-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 0.3s ease;
        }

        .policy-summary {
          background: rgba(0, 0, 0, 0.3);
          padding: 1rem;
          border-radius: 10px;
          border: 1px solid var(--border-glass);
        }

        .policy-summary h4 {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }

        .policy-summary ul {
          padding-left: 1.25rem;
          font-size: 0.82rem;
          color: #fff;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
      `}</style>
    </div>
  );
}
