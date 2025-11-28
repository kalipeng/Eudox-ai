import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import ChatPage from './ChatPage';
import SelectCompanies from './SelectCompanies';
import AnalysisResults from './AnalysisResults';

const baseCard = {
  title: 'North America SaaS Companies',
  tags: ['M&A Research', 'Healthcare Service'],
  metrics: [
    { label: 'Total Companies', value: '32' },
    { label: 'Data Quality', value: '95%' },
    { label: 'Time to window', value: '19 days' },
  ],
  status: 'Complete',
  updatedAt: '2h ago',
};

const cardData = Array.from({ length: 6 }, (_, index) => ({
  ...baseCard,
  id: `card-${index}`,
}));

const ProjectCard = ({ title, tags, metrics, status, updatedAt, onClick }) => (
  <article className="project-card" onClick={onClick} style={{ cursor: 'pointer' }}>
    <div className="project-card__tags">
      {tags.map((tag) => (
        <span key={tag} className="project-card__tag">
          {tag}
        </span>
      ))}
    </div>
    <h3 className="project-card__title">{title}</h3>
    <div className="project-card__thumbnail" />
    <div className="project-card__meta">
      <span>{updatedAt}</span>
      <button aria-label="Project options" className="icon-button" onClick={(e) => e.stopPropagation()}>
        <span className="icon-dots" />
      </button>
    </div>
    <div className="project-card__stats">
      {metrics.map((metric) => (
        <div key={metric.label} className="project-card__stat">
          <span className="project-card__stat-label">{metric.label}</span>
          <span className="project-card__stat-value">{metric.value}</span>
        </div>
      ))}
    </div>
    <footer className="project-card__footer">{status}</footer>
  </article>
);

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      <div className="sidebar__top">
        <button className="sidebar__home" aria-label="Return to home">
          <span className="sidebar__home-dot" />
        </button>
        <nav className="sidebar__nav">
          <button aria-label="Overview" className="sidebar__nav-item active" />
          <button aria-label="Messages" className="sidebar__nav-item" />
          <button
            aria-label="Settings"
            className="sidebar__nav-item"
            onClick={() => navigate('/settings')}
          />
        </nav>
      </div>
    </aside>
  );
};

function Dashboard() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  if (currentPage === 'results') {
    return <AnalysisResults onBack={() => setCurrentPage('chat')} />;
  }

  if (currentPage === 'select') {
    return <SelectCompanies onBack={() => setCurrentPage('chat')} />;
  }

  if (currentPage === 'chat') {
    return (
      <ChatPage
        onBack={() => setCurrentPage('home')}
        onNavigateToSelect={() => setCurrentPage('select')}
        onNavigateToResults={() => setCurrentPage('results')}
      />
    );
  }

  return (
    <div className="app-shell">
      <Sidebar />
      <main className="app-main">
        <header className="page-header">
          <div className="page-header__top">
            <div className="page-header__titles">
              <button className="return-button">← Home</button>
              <h1 className="page-title">Deal scouring</h1>
              <p className="page-subtitle">
                Each project is the deep workspace for signals, synthesis, and diligence agents.
              </p>
            </div>
          </div>
          <div className="page-header__bottom">
            <div className="tab-group" role="tablist">
              <button className="tab active" role="tab" aria-selected="true">
                Tasks
              </button>
              <button className="tab" role="tab" aria-selected="false">
                Files
              </button>
            </div>
            <div className="header-buttons">
              <button className="primary-button" onClick={() => setDrawerOpen(true)}>
                + New Project
              </button>
              <button className="filter-button" aria-label="Filter projects">
                <span className="icon-filter" />
              </button>
            </div>
          </div>
        </header>

        <section className="content">
          <div className="cards-grid">
            {cardData.map((card) => (
              <ProjectCard key={card.id} {...card} onClick={() => setCurrentPage('chat')} />
            ))}
          </div>
        </section>
      </main>
      <NewProjectDrawer open={isDrawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
}

export default Dashboard;

const NewProjectDrawer = ({ open, onClose }) => {
  if (!open) {
    return null;
  }

  return (
    <div className="drawer-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <aside className="drawer" onClick={(event) => event.stopPropagation()}>
        <header className="drawer__header">
          <button className="drawer__back" onClick={onClose} aria-label="Back to project list">
            ←
          </button>
          <h2 className="drawer__title">Create New Project</h2>
        </header>

        <section className="drawer__section">
          <h3 className="drawer__section-title">Project Information</h3>
          <div className="drawer__grid">
            <label className="drawer__field">
              <span className="drawer__label">Project Name</span>
              <input
                className="drawer__input"
                placeholder="e.g., North America SaaS Companies Q4 2025"
                type="text"
              />
            </label>
            <label className="drawer__field">
              <span className="drawer__label">Select Agent</span>
              <div className="drawer__select">
                <select defaultValue="M&A Research">
                  <option>M&A Research</option>
                  <option>Healthcare Service</option>
                  <option>Private Equity</option>
                </select>
                <span className="drawer__select-icon">⌄</span>
              </div>
            </label>
          </div>
        </section>

        <section className="drawer__section">
          <h3 className="drawer__section-title">Upload Target List</h3>
          <div className="upload-card">
            <div className="upload-card__icon">
              <span className="upload-card__cloud" />
            </div>
            <h4 className="upload-card__headline">Drop your Excel file here</h4>
            <p className="upload-card__helper">
              Upload your Excel (.xlsx) file containing target companies
            </p>
            <button className="upload-card__button" type="button">
              Choose File
            </button>
          </div>
        </section>

        <section className="drawer__section">
          <h3 className="drawer__section-title">Research Instructions</h3>
          <div className="drawer__textarea-wrapper">
            <textarea
              className="drawer__textarea"
              placeholder="Analyze each company's revenue, funding rounds, valuation, and employee size."
              rows={4}
            />
            <button className="drawer__send" type="button" aria-label="Submit instructions">
              <span className="drawer__send-icon" />
            </button>
          </div>
        </section>
      </aside>
    </div>
  );
};

