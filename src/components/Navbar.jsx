import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  FileText, 
  CheckSquare, 
  BarChart3, 
  Sliders, 
  Zap, 
  Sparkles 
} from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, pendingReviewCount, onSeedDemoData }) {
  const navItems = [
    { id: 'apply', label: 'Apply for Loan', icon: FileText },
    { id: 'simulator', label: 'AI Risk Engine', icon: Cpu },
    { 
      id: 'underwriter', 
      label: 'Manual Review Queue', 
      icon: CheckSquare,
      badge: pendingReviewCount > 0 ? pendingReviewCount : null
    },
    { id: 'analytics', label: 'Risk Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Model Tuning', icon: Sliders }
  ];

  return (
    <header className="navbar-container">
      <div className="navbar-inner">
        {/* Logo & Brand Identity */}
        <div className="nav-brand" onClick={() => setActiveTab('apply')}>
          <div className="logo-icon-wrapper">
            <ShieldCheck className="logo-icon" />
            <span className="pulse-dot"></span>
          </div>
          <div className="brand-text">
            <div className="brand-title">
              CrediMind <span className="ai-tag"><Sparkles size={12} /> AI</span>
            </div>
            <div className="brand-subtitle">Automated Loan Risk Engine v2.4</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="nav-tabs">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                className={`nav-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTab(item.id)}
              >
                <Icon size={18} />
                <span>{item.label}</span>
                {item.badge !== null && item.badge !== undefined && (
                  <span className="nav-badge">{item.badge}</span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Header Controls */}
        <div className="nav-actions">
          <button className="btn btn-secondary btn-sm" onClick={onSeedDemoData} title="Reset to Sample Applications">
            <Zap size={15} className="text-cyan" />
            <span>Load Demo Data</span>
          </button>
        </div>
      </div>

      <style>{`
        .navbar-container {
          background: rgba(11, 15, 25, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .navbar-inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0.85rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          cursor: pointer;
        }

        .logo-icon-wrapper {
          position: relative;
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(0, 242, 254, 0.15), rgba(124, 58, 237, 0.25));
          border: 1px solid rgba(0, 242, 254, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.2);
        }

        .pulse-dot {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 10px;
          height: 10px;
          background-color: #10b981;
          border-radius: 50%;
          border: 2px solid #07090e;
          box-shadow: 0 0 8px #10b981;
          animation: pulseGlow 2s infinite;
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }

        .brand-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          line-height: 1.1;
        }

        .ai-tag {
          font-size: 0.65rem;
          background: linear-gradient(135deg, var(--accent-cyan), var(--accent-purple));
          color: #000;
          padding: 0.15rem 0.45rem;
          border-radius: 6px;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 2px;
          text-transform: uppercase;
        }

        .brand-subtitle {
          font-size: 0.72rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .nav-tabs {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(18, 24, 38, 0.6);
          padding: 0.35rem;
          border-radius: 14px;
          border: 1px solid var(--border-glass);
        }

        .nav-tab-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 1rem;
          border-radius: 10px;
          border: none;
          background: transparent;
          color: var(--text-secondary);
          font-family: var(--font-main);
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
        }

        .nav-tab-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        .nav-tab-btn.active {
          color: #fff;
          background: linear-gradient(135deg, rgba(0, 242, 254, 0.15), rgba(79, 70, 229, 0.25));
          border: 1px solid rgba(0, 242, 254, 0.3);
          box-shadow: 0 4px 12px rgba(0, 242, 254, 0.1);
        }

        .nav-badge {
          background: var(--color-review);
          color: #000;
          font-size: 0.7rem;
          font-weight: 800;
          padding: 0.1rem 0.45rem;
          border-radius: 999px;
        }

        .btn-sm {
          padding: 0.5rem 0.85rem;
          font-size: 0.82rem;
        }

        .text-cyan {
          color: var(--accent-cyan);
        }

        @media (max-width: 1024px) {
          .nav-tabs span {
            display: none;
          }
          .nav-tab-btn {
            padding: 0.55rem;
          }
        }
      `}</style>
    </header>
  );
}
