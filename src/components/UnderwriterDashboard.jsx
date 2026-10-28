import React, { useState } from 'react';
import { 
  CheckSquare, 
  Search, 
  Filter, 
  Eye, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  ShieldAlert, 
  FileText, 
  UserCheck, 
  DollarSign, 
  RefreshCw 
} from 'lucide-react';

export default function UnderwriterDashboard({ applications, onUpdateApplicationStatus }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [selectedApp, setSelectedApp] = useState(null);
  const [underwriterNote, setUnderwriterNote] = useState('');

  // Filtering Logic
  const filteredApps = applications.filter(app => {
    const matchesSearch = app.applicantName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.occupation.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (statusFilter === 'ALL') return matchesSearch;
    if (statusFilter === 'FRAUD') return matchesSearch && app.fraudFlags && app.fraudFlags.length > 0;
    return matchesSearch && app.status === statusFilter;
  });

  // Key KPI Metrics
  const totalApps = applications.length;
  const approvedCount = applications.filter(a => a.status === 'APPROVED').length;
  const pendingReviewCount = applications.filter(a => a.status === 'MANUAL_REVIEW').length;
  const rejectedCount = applications.filter(a => a.status === 'REJECTED').length;
  const fraudCount = applications.filter(a => a.fraudFlags && a.fraudFlags.length > 0).length;

  const handleAction = (newStatus) => {
    if (!selectedApp) return;
    onUpdateApplicationStatus(selectedApp.id, newStatus, underwriterNote);
    setSelectedApp(null);
    setUnderwriterNote('');
  };

  return (
    <div className="underwriter-container">
      {/* Header */}
      <div className="uw-header">
        <div>
          <h1 className="uw-title">
            <CheckSquare className="text-cyan inline-icon" /> Underwriter Manual Review Portal
          </h1>
          <p className="uw-subtitle">
            Bank risk management hub: Evaluate manual review cases, inspect financial dossiers, and resolve fraud flags.
          </p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid-4 kpi-row">
        <div className="glass-card kpi-card">
          <span className="kpi-label">Total Applications</span>
          <span className="kpi-value">{totalApps}</span>
          <span className="kpi-sub font-mono">Processed in system</span>
        </div>

        <div className="glass-card kpi-card border-approved">
          <span className="kpi-label">Auto-Approved</span>
          <span className="kpi-value text-emerald">{approvedCount}</span>
          <span className="kpi-sub">{Math.round((approvedCount / totalApps) * 100 || 0)}% Approval Rate</span>
        </div>

        <div className="glass-card kpi-card border-review">
          <span className="kpi-label">Pending Manual Review</span>
          <span className="kpi-value text-amber">{pendingReviewCount}</span>
          <span className="kpi-sub">Human oversight needed</span>
        </div>

        <div className="glass-card kpi-card border-fraud">
          <span className="kpi-label">Fraud Flags Triggered</span>
          <span className="kpi-value text-rose">{fraudCount}</span>
          <span className="kpi-sub">High anomaly cases</span>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="glass-card table-controls">
        <div className="search-box">
          <Search size={18} className="search-icon text-muted" />
          <input 
            type="text" 
            placeholder="Search by Applicant Name, ID, or Occupation..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <Filter size={16} className="text-muted" />
          <span className="filter-label">Filter Status:</span>
          <button 
            className={`filter-btn ${statusFilter === 'ALL' ? 'active' : ''}`}
            onClick={() => setStatusFilter('ALL')}
          >
            All ({totalApps})
          </button>
          <button 
            className={`filter-btn ${statusFilter === 'MANUAL_REVIEW' ? 'active' : ''}`}
            onClick={() => setStatusFilter('MANUAL_REVIEW')}
          >
            Manual Review ({pendingReviewCount})
          </button>
          <button 
            className={`filter-btn ${statusFilter === 'APPROVED' ? 'active' : ''}`}
            onClick={() => setStatusFilter('APPROVED')}
          >
            Approved ({approvedCount})
          </button>
          <button 
            className={`filter-btn ${statusFilter === 'REJECTED' ? 'active' : ''}`}
            onClick={() => setStatusFilter('REJECTED')}
          >
            Rejected ({rejectedCount})
          </button>
          <button 
            className={`filter-btn ${statusFilter === 'FRAUD' ? 'active' : ''}`}
            onClick={() => setStatusFilter('FRAUD')}
          >
            Fraud Alerts ({fraudCount})
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="glass-card table-card">
        <div className="table-responsive">
          <table className="custom-table">
            <thead>
              <tr>
                <th>App ID</th>
                <th>Applicant</th>
                <th>Monthly Income</th>
                <th>Credit Score</th>
                <th>Requested Amount</th>
                <th>Risk Score</th>
                <th>Fraud Anomaly</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredApps.length === 0 ? (
                <tr>
                  <td colSpan={9} className="no-records">
                    No loan applications match your current filter query.
                  </td>
                </tr>
              ) : (
                filteredApps.map((app) => (
                  <tr key={app.id} className={app.status === 'MANUAL_REVIEW' ? 'row-highlight' : ''}>
                    <td className="font-mono text-cyan font-bold">{app.id}</td>
                    <td>
                      <div className="applicant-cell">
                        <span className="applicant-name">{app.applicantName}</span>
                        <span className="applicant-occ">{app.occupation}</span>
                      </div>
                    </td>
                    <td className="font-mono">${app.monthlyIncome.toLocaleString()}</td>
                    <td>
                      <span className={`font-bold ${app.creditScore >= 720 ? 'text-emerald' : app.creditScore >= 640 ? 'text-amber' : 'text-rose'}`}>
                        {app.creditScore}
                      </span>
                    </td>
                    <td className="font-mono">${app.requestedAmount.toLocaleString()}</td>
                    <td>
                      <span className={`risk-pill risk-${app.riskScore <= 35 ? 'low' : app.riskScore <= 65 ? 'med' : 'high'}`}>
                        {app.riskScore} / 100
                      </span>
                    </td>
                    <td>
                      {app.fraudFlags && app.fraudFlags.length > 0 ? (
                        <span className="fraud-tag">
                          <ShieldAlert size={14} /> {app.fraudFlags.length} Flag(s)
                        </span>
                      ) : (
                        <span className="text-muted" style={{ fontSize: '0.8rem' }}>Clean</span>
                      )}
                    </td>
                    <td>
                      <span className={`badge badge-${app.status.toLowerCase().replace('_', '-')}`}>
                        {app.status.replace('_', ' ')}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-secondary btn-sm" onClick={() => setSelectedApp(app)}>
                        <Eye size={15} />
                        <span>Inspect</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Underwriter Inspection Drawer / Modal */}
      {selectedApp && (
        <div className="modal-overlay" onClick={() => setSelectedApp(null)}>
          <div className="modal-content uw-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="uw-modal-title">
                <h2>Financial Dossier & Underwriter Review</h2>
                <span className="font-mono text-cyan">{selectedApp.id} - {selectedApp.applicantName}</span>
              </div>
              <span className={`badge badge-${selectedApp.status.toLowerCase().replace('_', '-')}`}>
                {selectedApp.status.replace('_', ' ')}
              </span>
            </div>

            <div className="modal-body">
              {/* Profile summary */}
              <div className="grid-3 dossier-grid">
                <div className="dossier-card">
                  <span className="d-label">Occupation</span>
                  <span className="d-value">{selectedApp.occupation}</span>
                </div>
                <div className="dossier-card">
                  <span className="d-label">Monthly Income</span>
                  <span className="d-value font-mono">${selectedApp.monthlyIncome.toLocaleString()}</span>
                </div>
                <div className="dossier-card">
                  <span className="d-label">Credit Score</span>
                  <span className="d-value font-mono">{selectedApp.creditScore}</span>
                </div>
                <div className="dossier-card">
                  <span className="d-label">Requested Loan</span>
                  <span className="d-value font-mono">${selectedApp.requestedAmount.toLocaleString()} ({selectedApp.tenureMonths} mos)</span>
                </div>
                <div className="dossier-card">
                  <span className="d-label">Monthly Debt Payments</span>
                  <span className="d-value font-mono">${selectedApp.existingLiabilities.toLocaleString()}</span>
                </div>
                <div className="dossier-card">
                  <span className="d-label">Monthly Savings</span>
                  <span className="d-value font-mono">${selectedApp.monthlySavings.toLocaleString()}</span>
                </div>
              </div>

              {/* Fraud Warning Box in Modal */}
              {selectedApp.fraudFlags && selectedApp.fraudFlags.length > 0 && (
                <div className="modal-fraud-panel">
                  <h4><ShieldAlert className="text-rose" size={18} /> Active Fraud / Anomaly Warnings:</h4>
                  <ul>
                    {selectedApp.fraudFlags.map((flag, idx) => (
                      <li key={idx}>{flag}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* AI Risk Score Factors */}
              <div className="xai-modal-box">
                <h4>AI Risk Drivers & Explainability (XAI)</h4>
                <div className="xai-modal-list">
                  {selectedApp.xaiFactors && selectedApp.xaiFactors.map((f, i) => (
                    <div key={i} className={`x-item ${f.positive ? 'pos' : 'neg'}`}>
                      <span>{f.factor}</span>
                      <span className="font-mono">{f.impact}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Underwriter Note & Action Input */}
              <div className="uw-action-section">
                <h4>Underwriter Decision & Notes Log</h4>
                <textarea
                  className="input-field uw-textarea"
                  rows={3}
                  placeholder="Enter underwriter evaluation comments or justification for decision override..."
                  value={underwriterNote}
                  onChange={(e) => setUnderwriterNote(e.target.value)}
                />

                <div className="uw-buttons-row">
                  <button className="btn btn-success" onClick={() => handleAction('APPROVED')}>
                    <CheckCircle2 size={18} />
                    <span>Approve Loan</span>
                  </button>
                  <button className="btn btn-danger" onClick={() => handleAction('REJECTED')}>
                    <XCircle size={18} />
                    <span>Reject Loan</span>
                  </button>
                  <button className="btn btn-secondary" onClick={() => handleAction('MANUAL_REVIEW')}>
                    <AlertTriangle size={18} className="text-amber" />
                    <span>Request More Documents</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .underwriter-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .uw-title {
          font-size: 1.75rem;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .uw-subtitle {
          color: var(--text-secondary);
          font-size: 0.92rem;
        }

        .kpi-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }

        .kpi-card {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .border-approved { border-left: 4px solid var(--color-approved); }
        .border-review { border-left: 4px solid var(--color-review); }
        .border-fraud { border-left: 4px solid var(--color-fraud); }

        .kpi-label { font-size: 0.8rem; color: var(--text-secondary); font-weight: 600; }
        .kpi-value { font-size: 2rem; font-weight: 800; font-family: var(--font-mono); color: #fff; }
        .kpi-sub { font-size: 0.75rem; color: var(--text-muted); }

        .table-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .search-box {
          position: relative;
          min-width: 320px;
        }

        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
        }

        .search-input {
          width: 100%;
          padding: 0.65rem 1rem 0.65rem 2.5rem;
          background: rgba(12, 17, 29, 0.9);
          border: 1px solid var(--border-glass);
          border-radius: 10px;
          color: #fff;
          font-size: 0.88rem;
          outline: none;
        }
        .search-input:focus { border-color: var(--accent-cyan); }

        .filter-group {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .filter-label { font-size: 0.8rem; color: var(--text-muted); margin-right: 0.25rem; }

        .filter-btn {
          background: transparent;
          border: 1px solid var(--border-glass);
          color: var(--text-secondary);
          padding: 0.4rem 0.75rem;
          border-radius: 8px;
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn:hover { background: rgba(255, 255, 255, 0.05); color: #fff; }
        .filter-btn.active { background: rgba(0, 242, 254, 0.15); border-color: var(--accent-cyan); color: var(--accent-cyan); }

        .custom-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.88rem;
        }

        .custom-table th {
          padding: 1rem;
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.8rem;
          border-bottom: 1px solid var(--border-glass);
          text-transform: uppercase;
        }

        .custom-table td {
          padding: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }

        .row-highlight {
          background: rgba(245, 158, 11, 0.03);
        }

        .applicant-cell { display: flex; flex-direction: column; }
        .applicant-name { font-weight: 700; color: #fff; }
        .applicant-occ { font-size: 0.78rem; color: var(--text-secondary); }

        .risk-pill {
          padding: 0.2rem 0.5rem;
          border-radius: 6px;
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.8rem;
        }
        .risk-low { background: rgba(16, 185, 129, 0.15); color: #10b981; }
        .risk-med { background: rgba(245, 158, 11, 0.15); color: #f59e0b; }
        .risk-high { background: rgba(239, 68, 68, 0.15); color: #ef4444; }

        .fraud-tag {
          color: var(--color-fraud);
          background: var(--color-fraud-bg);
          padding: 0.25rem 0.6rem;
          border-radius: 6px;
          font-weight: 700;
          font-size: 0.75rem;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
        }

        .no-records {
          text-align: center;
          padding: 3rem;
          color: var(--text-muted);
        }

        .uw-modal {
          max-width: 820px;
        }

        .dossier-grid {
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .dossier-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          padding: 0.85rem;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
        }

        .d-label { font-size: 0.75rem; color: var(--text-muted); }
        .d-value { font-size: 1rem; font-weight: 700; color: #fff; }

        .modal-fraud-panel {
          background: var(--color-fraud-bg);
          border: 1px solid rgba(236, 72, 153, 0.4);
          padding: 1rem;
          border-radius: 10px;
          margin-bottom: 1.25rem;
        }

        .modal-fraud-panel h4 {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-fraud);
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .modal-fraud-panel ul {
          padding-left: 1.25rem;
          font-size: 0.85rem;
          color: #fce7f3;
        }

        .xai-modal-box {
          background: rgba(0, 0, 0, 0.25);
          padding: 1rem;
          border-radius: 10px;
          border: 1px solid var(--border-glass);
          margin-bottom: 1.5rem;
        }

        .xai-modal-box h4 { font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.5rem; }

        .xai-modal-list {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .x-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.82rem;
          padding: 0.4rem 0.75rem;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.02);
        }
        .x-item.pos { border-left: 3px solid #10b981; }
        .x-item.neg { border-left: 3px solid #ef4444; }

        .uw-action-section h4 {
          font-size: 0.9rem;
          color: #fff;
          margin-bottom: 0.65rem;
        }

        .uw-textarea {
          width: 100%;
          resize: vertical;
          margin-bottom: 1rem;
        }

        .uw-buttons-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          justify-content: flex-end;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
}
