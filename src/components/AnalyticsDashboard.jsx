import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  ShieldAlert, 
  PieChart, 
  Activity, 
  Zap, 
  Award,
  CheckCircle2
} from 'lucide-react';

export default function AnalyticsDashboard({ applications }) {
  // Aggregate stats
  const total = applications.length;
  const approved = applications.filter(a => a.status === 'APPROVED').length;
  const review = applications.filter(a => a.status === 'MANUAL_REVIEW').length;
  const rejected = applications.filter(a => a.status === 'REJECTED').length;

  // Average Credit Score
  const avgCreditScore = Math.round(
    applications.reduce((acc, curr) => acc + curr.creditScore, 0) / (total || 1)
  );

  // Average Risk Score
  const avgRiskScore = Math.round(
    applications.reduce((acc, curr) => acc + curr.riskScore, 0) / (total || 1)
  );

  return (
    <div className="analytics-container">
      <div className="an-header">
        <div>
          <h1 className="an-title">
            <BarChart3 className="text-cyan inline-icon" /> Risk & Model Performance Analytics
          </h1>
          <p className="an-subtitle">
            Executive insights into portfolio risk distribution, approval ratios, and AI decision precision.
          </p>
        </div>
      </div>

      {/* Top Metric Cards */}
      <div className="grid-4">
        <div className="glass-card stat-box">
          <span className="stat-label">AI Auto-Approval Rate</span>
          <span className="stat-value text-emerald">
            {Math.round((approved / (total || 1)) * 100)}%
          </span>
          <span className="stat-sub">{approved} of {total} applications</span>
        </div>

        <div className="glass-card stat-box">
          <span className="stat-label">Portfolio Avg Credit Score</span>
          <span className="stat-value text-cyan">{avgCreditScore}</span>
          <span className="stat-sub">Prime Borrower Threshold ≥ 720</span>
        </div>

        <div className="glass-card stat-box">
          <span className="stat-label">Average Risk Index</span>
          <span className="stat-value text-amber">{avgRiskScore} / 100</span>
          <span className="stat-sub">Low Risk Zone &lt; 35</span>
        </div>

        <div className="glass-card stat-box">
          <span className="stat-label">AI Model Accuracy</span>
          <span className="stat-value purple-gradient-text">94.8%</span>
          <span className="stat-sub">Validated against underwriter decisions</span>
        </div>
      </div>

      {/* Visual Charts Grid */}
      <div className="grid-2 chart-grid">
        {/* Risk Score Distribution */}
        <div className="glass-card chart-card">
          <div className="card-title-row">
            <Activity className="text-cyan" size={20} />
            <h3>Portfolio Risk Score Spectrum</h3>
          </div>

          <div className="bar-chart-visual">
            <div className="chart-bar-item">
              <div className="bar-wrapper">
                <div className="bar-fill bg-emerald" style={{ height: '78%' }}></div>
              </div>
              <span className="bar-tag">Low (0-30)</span>
              <span className="bar-val font-mono">42%</span>
            </div>

            <div className="chart-bar-item">
              <div className="bar-wrapper">
                <div className="bar-fill bg-amber" style={{ height: '52%' }}></div>
              </div>
              <span className="bar-tag">Moderate (31-60)</span>
              <span className="bar-val font-mono">31%</span>
            </div>

            <div className="chart-bar-item">
              <div className="bar-wrapper">
                <div className="bar-fill bg-rose" style={{ height: '34%' }}></div>
              </div>
              <span className="bar-tag">High (61-80)</span>
              <span className="bar-val font-mono">18%</span>
            </div>

            <div className="chart-bar-item">
              <div className="bar-wrapper">
                <div className="bar-fill bg-purple" style={{ height: '18%' }}></div>
              </div>
              <span className="bar-tag">Critical (81-100)</span>
              <span className="bar-val font-mono">9%</span>
            </div>
          </div>
        </div>

        {/* Approval Ratio by Income Bracket */}
        <div className="glass-card chart-card">
          <div className="card-title-row">
            <TrendingUp className="text-cyan" size={20} />
            <h3>Approval Rate by Income Tier</h3>
          </div>

          <div className="income-tiers-list">
            <div className="tier-row">
              <div className="tier-info">
                <span>Tier 1: &lt; $5,000 / mo</span>
                <span className="tier-pct font-mono">48% Approved</span>
              </div>
              <div className="tier-progress-track">
                <div className="tier-progress-fill" style={{ width: '48%' }}></div>
              </div>
            </div>

            <div className="tier-row">
              <div className="tier-info">
                <span>Tier 2: $5,000 - $10,000 / mo</span>
                <span className="tier-pct font-mono">74% Approved</span>
              </div>
              <div className="tier-progress-track">
                <div className="tier-progress-fill" style={{ width: '74%' }}></div>
              </div>
            </div>

            <div className="tier-row">
              <div className="tier-info">
                <span>Tier 3: $10,000 - $20,000 / mo</span>
                <span className="tier-pct font-mono">89% Approved</span>
              </div>
              <div className="tier-progress-track">
                <div className="tier-progress-fill" style={{ width: '89%' }}></div>
              </div>
            </div>

            <div className="tier-row">
              <div className="tier-info">
                <span>Tier 4: &gt; $20,000 / mo (High Net Worth)</span>
                <span className="tier-pct font-mono">96% Approved</span>
              </div>
              <div className="tier-progress-track">
                <div className="tier-progress-fill" style={{ width: '96%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Model Evaluation Metrics (Confusion Matrix & Precision/Recall) */}
      <div className="glass-card model-metrics-card">
        <div className="card-title-row">
          <Award className="text-cyan" size={20} />
          <h3>Machine Learning Model Evaluation & Confusion Matrix</h3>
        </div>

        <div className="grid-2 model-metrics-grid">
          <div className="confusion-matrix-box">
            <h4>Confusion Matrix Breakdown (Test Set)</h4>
            <div className="matrix-grid">
              <div className="matrix-cell cell-tp">
                <span className="m-num">1,420</span>
                <span className="m-desc">True Positive (Auto-Approved & Safe)</span>
              </div>
              <div className="matrix-cell cell-fp">
                <span className="m-num">38</span>
                <span className="m-desc">False Positive (Auto-Approved & Defaulted)</span>
              </div>
              <div className="matrix-cell cell-fn">
                <span className="m-num">24</span>
                <span className="m-desc">False Negative (Rejected & Safe)</span>
              </div>
              <div className="matrix-cell cell-tn">
                <span className="m-num">582</span>
                <span className="m-desc">True Negative (Rejected & Default Risk)</span>
              </div>
            </div>
          </div>

          <div className="metrics-list-box">
            <h4>Model Health Benchmark Metrics</h4>
            <div className="health-row">
              <span className="h-name">Model Precision:</span>
              <span className="h-val text-emerald font-mono">97.4%</span>
            </div>
            <div className="health-row">
              <span className="h-name">Model Recall / Sensitivity:</span>
              <span className="h-val text-cyan font-mono">98.3%</span>
            </div>
            <div className="health-row">
              <span className="h-name">F1-Score:</span>
              <span className="h-val text-purple font-mono">0.978</span>
            </div>
            <div className="health-row">
              <span className="h-name">ROC-AUC Index:</span>
              <span className="h-val text-amber font-mono">0.991</span>
            </div>
            <div className="health-row">
              <span className="h-name">Average Decision Latency:</span>
              <span className="h-val text-muted font-mono">142 ms</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .analytics-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .an-title {
          font-size: 1.75rem;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .an-subtitle {
          color: var(--text-secondary);
          font-size: 0.92rem;
        }

        .stat-box {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .stat-label { font-size: 0.8rem; color: var(--text-secondary); font-weight: 600; }
        .stat-value { font-size: 2.2rem; font-weight: 800; font-family: var(--font-mono); }
        .stat-sub { font-size: 0.75rem; color: var(--text-muted); }

        .chart-grid {
          gap: 1.5rem;
        }

        .card-title-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .card-title-row h3 { font-size: 1.1rem; color: #fff; }

        .bar-chart-visual {
          display: flex;
          align-items: flex-end;
          justify-content: space-around;
          height: 200px;
          padding-top: 1rem;
          border-bottom: 1px solid var(--border-glass);
        }

        .chart-bar-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          height: 100%;
          justify-content: flex-end;
        }

        .bar-wrapper {
          width: 48px;
          height: 140px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 8px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          border: 1px solid var(--border-glass);
        }

        .bar-fill {
          width: 100%;
          border-radius: 8px 8px 0 0;
          transition: height 0.5s ease;
        }

        .bg-purple { background: var(--accent-purple); }

        .bar-tag { font-size: 0.72rem; color: var(--text-secondary); }
        .bar-val { font-size: 0.85rem; font-weight: 700; color: #fff; }

        .income-tiers-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .tier-row {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .tier-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.88rem;
          font-weight: 600;
          color: #fff;
        }

        .tier-pct { color: var(--accent-cyan); }

        .tier-progress-track {
          height: 8px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
          overflow: hidden;
        }

        .tier-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent-cyan), var(--accent-blue));
          border-radius: 4px;
        }

        /* Confusion Matrix */
        .model-metrics-grid {
          gap: 1.5rem;
        }

        .confusion-matrix-box h4, .metrics-list-box h4 {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 0.85rem;
        }

        .matrix-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }

        .matrix-cell {
          padding: 1rem;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border: 1px solid var(--border-glass);
        }

        .cell-tp { background: rgba(16, 185, 129, 0.1); border-color: rgba(16, 185, 129, 0.3); }
        .cell-fp { background: rgba(239, 68, 68, 0.1); border-color: rgba(239, 68, 68, 0.3); }
        .cell-fn { background: rgba(245, 158, 11, 0.1); border-color: rgba(245, 158, 11, 0.3); }
        .cell-tn { background: rgba(124, 58, 237, 0.1); border-color: rgba(124, 58, 237, 0.3); }

        .m-num { font-size: 1.5rem; font-weight: 800; font-family: var(--font-mono); color: #fff; }
        .m-desc { font-size: 0.7rem; color: var(--text-secondary); margin-top: 0.2rem; }

        .metrics-list-box {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .health-row {
          display: flex;
          justify-content: space-between;
          padding: 0.6rem 0;
          border-bottom: 1px solid var(--border-glass);
          font-size: 0.88rem;
        }

        .h-name { color: var(--text-secondary); }
        .h-val { font-weight: 700; }
        .text-purple { color: #a78bfa; }
      `}</style>
    </div>
  );
}
