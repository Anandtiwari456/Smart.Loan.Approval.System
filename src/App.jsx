import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ApplicantPortal from './components/ApplicantPortal';
import AIEngineSimulator from './components/AIEngineSimulator';
import UnderwriterDashboard from './components/UnderwriterDashboard';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import ModelSettings from './components/ModelSettings';
import { INITIAL_APPLICATIONS } from './data/mockData';

export default function App() {
  const [activeTab, setActiveTab] = useState('apply');
  const [applications, setApplications] = useState(INITIAL_APPLICATIONS);
  
  // System Model Configuration
  const [modelConfig, setModelConfig] = useState({
    approvalThreshold: 35,
    reviewWindow: 65,
    fraudSensitivity: 'MEDIUM'
  });

  // Calculate pending manual reviews
  const pendingReviewCount = applications.filter(a => a.status === 'MANUAL_REVIEW').length;

  const handleAddNewApplication = (newApp) => {
    setApplications(prev => [newApp, ...prev]);
  };

  const handleUpdateStatus = (appId, newStatus, underwriterNote) => {
    setApplications(prev => prev.map(app => {
      if (app.id === appId) {
        return {
          ...app,
          status: newStatus,
          underwriterNotes: underwriterNote 
            ? `${underwriterNote} [Updated by Underwriter]` 
            : `Status manually updated to ${newStatus} by Underwriter.`
        };
      }
      return app;
    }));
  };

  const handleSeedDemoData = () => {
    setApplications(INITIAL_APPLICATIONS);
  };

  return (
    <div className="app-container">
      {/* Top Navbar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        pendingReviewCount={pendingReviewCount}
        onSeedDemoData={handleSeedDemoData}
      />

      {/* Main Content Area based on Active Tab */}
      <main className="main-content">
        {activeTab === 'apply' && (
          <ApplicantPortal 
            onSubmitApplication={handleAddNewApplication}
            modelConfig={modelConfig}
          />
        )}

        {activeTab === 'simulator' && (
          <AIEngineSimulator 
            modelConfig={modelConfig}
          />
        )}

        {activeTab === 'underwriter' && (
          <UnderwriterDashboard 
            applications={applications}
            onUpdateApplicationStatus={handleUpdateStatus}
          />
        )}

        {activeTab === 'analytics' && (
          <AnalyticsDashboard 
            applications={applications}
          />
        )}

        {activeTab === 'settings' && (
          <ModelSettings 
            modelConfig={modelConfig}
            setModelConfig={setModelConfig}
          />
        )}
      </main>

      {/* Footer Branding */}
      <footer className="app-footer">
        <div className="footer-inner">
          <p>© 2026 CrediMind AI Engine. Built for Automated Banking & Risk Governance.</p>
          <div className="footer-links">
            <span>Model v2.4</span>
            <span>•</span>
            <span>Real-time XAI Active</span>
            <span>•</span>
            <span>Compliance Mode: Active</span>
          </div>
        </div>
      </footer>

      <style>{`
        .app-footer {
          border-top: 1px solid var(--border-glass);
          background: rgba(7, 9, 14, 0.9);
          padding: 1.25rem;
          margin-top: auto;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .footer-inner {
          max-width: 1440px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .footer-links {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      `}</style>
    </div>
  );
}
