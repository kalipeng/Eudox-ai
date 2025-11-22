import { useState } from 'react';
import './ChatPage.css';

const projects = [
  { id: 1, name: 'North America SaaS Companies', color: '#7fd0ff', active: true },
  { id: 2, name: 'Healthcare Tech Startups', color: '#a78bfa', active: false },
  { id: 3, name: 'Fintech Innovations', color: '#fbbf24', active: false },
  { id: 4, name: 'AI & ML Companies', color: '#34d399', active: false },
  { id: 5, name: 'E-commerce Platforms', color: '#f472b6', active: false },
  { id: 6, name: 'SaaS B2B Tools', color: '#60a5fa', active: false },
];

const ChatSidebar = ({ onBack }) => (
  <aside className="chat-sidebar">
    <h2 className="chat-sidebar__title">Chat</h2>

    <div className="chat-sidebar__search">
      <input
        type="text"
        placeholder="Search Project"
        className="chat-sidebar__search-input"
      />
      <span className="chat-sidebar__search-icon" />
    </div>

    <div className="chat-sidebar__tabs">
      <button className="chat-sidebar__tab active">Active(07)</button>
      <button className="chat-sidebar__tab">On Hold(03)</button>
      <button className="chat-sidebar__tab">Closed(02)</button>
    </div>

    <button className="chat-sidebar__add-project">
      Add a New Project <span>→</span>
    </button>

    <div className="chat-sidebar__projects">
      {projects.map((project) => (
        <button
          key={project.id}
          className={`chat-sidebar__project ${project.active ? 'active' : ''}`}
        >
          <span
            className="chat-sidebar__project-dot"
            style={{ background: project.color }}
          />
          <span>{project.name}</span>
          <span>›</span>
        </button>
      ))}
    </div>

    <div className="chat-sidebar__process">
      <h4 className="chat-sidebar__process-title">Research Process</h4>
      <div className="chat-sidebar__steps">
        <div className="chat-sidebar__step completed">
          <span className="chat-sidebar__step-check">✓</span>
          <span>1 Upload Data</span>
        </div>
        <div className="chat-sidebar__step completed">
          <span className="chat-sidebar__step-check">✓</span>
          <span>2 Select Companies</span>
        </div>
        <div className="chat-sidebar__step active">
          <span className="chat-sidebar__step-number">3</span>
          <span>3 Configure Research</span>
        </div>
        <div className="chat-sidebar__step">
          <span className="chat-sidebar__step-number">4</span>
          <span>4 Run Analysis</span>
        </div>
      </div>
    </div>

    <div className="chat-sidebar__bottom-icons">
      <button className="chat-sidebar__bottom-icon" aria-label="Grid">
        <span className="chat-sidebar__icon-grid" />
      </button>
      <button className="chat-sidebar__bottom-icon" aria-label="Chat">
        <span className="chat-sidebar__icon-chat" />
      </button>
      <button className="chat-sidebar__bottom-icon" aria-label="Settings">
        <span className="chat-sidebar__icon-settings" />
      </button>
    </div>
  </aside>
);

const ChatPage = ({ onBack, onNavigateToSelect, onNavigateToResults }) => {
  const [inputValue, setInputValue] = useState('');
  const [showLogs, setShowLogs] = useState(true);

  const enrichedData = [
    { company: 'Stripe', revenue: '$7.4B', employees: '4,000+', funding: 'Series H', status: 'complete' },
    { company: 'Canva', revenue: '$1.7B', employees: '3,500+', funding: 'Series F', status: 'complete' },
    { company: 'Notion', revenue: '$343M', employees: '450+', funding: 'Series C', status: 'pending' },
    { company: 'Discord', revenue: '$445M', employees: '600+', funding: 'Series H', status: 'pending' },
  ];

  return (
    <div className="chat-shell">
      <ChatSidebar onBack={onBack} />
      <main className="chat-main">
        <header className="chat-header">
          <div className="chat-header__left">
            <button className="chat-header__back" onClick={onBack} aria-label="Back">
              ←
            </button>
            <div className="chat-header__titles">
              <h1 className="chat-header__title">Tech Startups Q4 2024</h1>
              <div className="chat-header__subtitle">
                <span>M&A Research</span>
                <span className="chat-header__divider">•</span>
                <button className="chat-header__iteration">
                  Iteration 2 <span>⌄</span>
                </button>
              </div>
            </div>
          </div>
          <div className="chat-header__actions">
            <button className="chat-header__download">
              <span className="chat-header__download-icon" />
              <span>Download</span>
            </button>
            <button className="chat-header__menu" aria-label="More options">
              <span className="icon-dots" />
            </button>
          </div>
        </header>

        <div className="chat-content">
          <div className="chat-message chat-message--ai">
            <div className="chat-message__avatar">AI</div>
            <div className="chat-message__content">
              <p>
                Welcome to your Tech Startups Q4 2024 research project! I can see you've uploaded
                a list of 250 companies. To get started, please select which companies you'd like
                me to research first, or I can begin with all companies in your uploaded file.
              </p>
              <div className="chat-message__file">
                <div className="chat-message__file-icon">
                  <span className="chat-message__file-icon-inner" />
                </div>
                <div className="chat-message__file-info">
                  <div className="chat-message__file-name">tech_startups_q4_2024.xlsx</div>
                  <div className="chat-message__file-count">250 companies</div>
                </div>
              </div>
              <p className="chat-message__question">What would you like me to research?</p>
              <div className="chat-message__actions">
                <button
                  className="chat-message__button chat-message__button--primary"
                  onClick={() => onNavigateToSelect && onNavigateToSelect()}
                >
                  All 250 companies
                </button>
                <button
                  className="chat-message__button chat-message__button--secondary"
                  onClick={() => onNavigateToSelect && onNavigateToSelect()}
                >
                  Custom selection
                </button>
              </div>
            </div>
          </div>

          <div className="chat-message chat-message--user">
            <div className="chat-message__content">
              <p>
                Please analyze the uploaded list of 250 tech startups and enrich the data with revenue,
                employee count, funding rounds, and market position for each company.
              </p>
              <span className="chat-message__time">2 minutes ago</span>
            </div>
          </div>

          <div className="chat-message chat-message--ai">
            <div className="chat-message__avatar">AI</div>
            <div className="chat-message__content">
              <p>
                I'll analyze your tech startup list and enrich it with the requested data. Let me
                process this systematically:
              </p>
              <div className="chat-message__tasks">
                <div className="chat-message__task completed">
                  <span className="chat-message__task-check">✓</span>
                  <span>File uploaded and parsed</span>
                </div>
                <div className="chat-message__task in-progress">
                  <div className="chat-message__task-progress">
                    <span>Enriching company data</span>
                    <div className="chat-message__progress-bar">
                      <div
                        className="chat-message__progress-fill"
                        style={{ width: '74%' }}
                      />
                    </div>
                    <span className="chat-message__progress-text">185/250 - 74%</span>
                  </div>
                </div>
                <div className="chat-message__task">
                  <span className="chat-message__task-number">3</span>
                  <span>Generating insights</span>
                </div>
              </div>
            </div>
          </div>

          <div className="chat-message chat-message--ai">
            <div className="chat-message__avatar">AI</div>
            <div className="chat-message__content">
              <p>Here's the current progress on your research:</p>
              <div className="chat-message__table-preview">
                <div className="chat-message__table-header">
                  <h4 className="chat-message__table-title">Preview: Tech_Startups_Enriched.xlsx</h4>
                  <span className="chat-message__table-badge">Processing: 74%</span>
                </div>
                <table className="chat-message__table">
                  <thead>
                    <tr>
                      <th>Company</th>
                      <th>Revenue</th>
                      <th>Employees</th>
                      <th>Funding</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {enrichedData.map((row, idx) => (
                      <tr key={idx}>
                        <td>{row.company}</td>
                        <td>{row.revenue}</td>
                        <td>{row.employees}</td>
                        <td>{row.funding}</td>
                        <td>
                          {row.status === 'complete' ? (
                            <span className="chat-message__status-icon chat-message__status-icon--complete">✓</span>
                          ) : (
                            <span className="chat-message__status-icon chat-message__status-icon--pending">ⓘ</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="chat-message__table-actions">
                  <button
                    className="chat-message__table-button"
                    onClick={() => onNavigateToResults && onNavigateToResults()}
                  >
                    View Full Table
                  </button>
                  <button
                    className="chat-message__table-button chat-message__table-button--primary"
                    onClick={() => onNavigateToResults && onNavigateToResults()}
                  >
                    Download Excel
                  </button>
                </div>
                <div className="chat-message__logs">
                  <button
                    className="chat-message__logs-toggle"
                    onClick={() => setShowLogs(!showLogs)}
                  >
                    {showLogs ? '▼' : '▶'} Execution Logs
                  </button>
                  {showLogs && (
                    <div className="chat-message__logs-content">
                      <div className="chat-message__log-item completed">
                        <span className="chat-message__log-icon">✓</span>
                        <span className="chat-message__log-time">[14:32:15]</span>
                        <span>API: Company data fetched for Stripe</span>
                      </div>
                      <div className="chat-message__log-item completed">
                        <span className="chat-message__log-icon">✓</span>
                        <span className="chat-message__log-time">[14:32:16]</span>
                        <span>API: Revenue data enriched - $7.4B ARR confirmed from SEC filings</span>
                      </div>
                      <div className="chat-message__log-item completed">
                        <span className="chat-message__log-icon">✓</span>
                        <span className="chat-message__log-time">[14:32:17]</span>
                        <span>API: Employee count verified - 4,000+ employees from LinkedIn data</span>
                      </div>
                      <div className="chat-message__log-item processing">
                        <span className="chat-message__log-icon">→</span>
                        <span className="chat-message__log-time">[14:32:18]</span>
                        <span>Processing: Canva funding data lookup from Crunchbase</span>
                      </div>
                      <div className="chat-message__log-item completed">
                        <span className="chat-message__log-icon">✓</span>
                        <span className="chat-message__log-time">[14:32:19]</span>
                        <span>API: Canva Series F - $200M raised at $40B valuation</span>
                      </div>
                      <div className="chat-message__log-item warning">
                        <span className="chat-message__log-icon">▲</span>
                        <span className="chat-message__log-time">[14:32:20]</span>
                        <span>Rate limit: Waiting 1s before next request to Crunchbase API</span>
                      </div>
                      <div className="chat-message__log-item processing">
                        <span className="chat-message__log-icon">→</span>
                        <span className="chat-message__log-time">[14:32:21]</span>
                        <span>Processing: Notion market position analysis using Gartner data</span>
                      </div>
                      <div className="chat-message__log-item completed">
                        <span className="chat-message__log-icon">✓</span>
                        <span className="chat-message__log-time">[14:32:22]</span>
                        <span>API: Notion classified as "Productivity Software Leader" - Magic Quadrant position confirmed</span>
                      </div>
                      <div className="chat-message__log-item processing">
                        <span className="chat-message__log-icon">→</span>
                        <span className="chat-message__log-time">[14:32:23]</span>
                        <span>Processing: Discord revenue estimation from multiple sources</span>
                      </div>
                      <div className="chat-message__log-item warning">
                        <span className="chat-message__log-icon">▲</span>
                        <span className="chat-message__log-time">[14:32:24]</span>
                        <span>Warning: Discord revenue data incomplete - using estimates from industry reports</span>
                      </div>
                      <div className="chat-message__log-item processing">
                        <span className="chat-message__log-icon">→</span>
                        <span className="chat-message__log-time">[14:32:25]</span>
                        <span>Batch processing: Companies 186-200 - fetching funding rounds</span>
                      </div>
                      <div className="chat-message__log-item processing">
                        <span className="chat-message__log-icon">→</span>
                        <span className="chat-message__log-time">[14:32:26]</span>
                        <span>Queue: 65 companies remaining in processing pipeline</span>
                      </div>
                      <div className="chat-message__log-item completed">
                        <span className="chat-message__log-icon">✓</span>
                        <span className="chat-message__log-time">[14:32:27]</span>
                        <span>API: Airbnb data enrichment complete - $8.4B revenue, 6,800 employees</span>
                      </div>
                      <div className="chat-message__log-item processing">
                        <span className="chat-message__log-icon">→</span>
                        <span className="chat-message__log-time">[14:32:28]</span>
                        <span>Processing: Uber market position and competitive analysis</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="chat-footer">
          <button className="chat-footer__attach" aria-label="Attach file">
            <span className="chat-footer__attach-icon" />
          </button>
          <input
            type="text"
            className="chat-footer__input"
            placeholder="@ Ask a follow-up question or request modifications..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="chat-footer__send" aria-label="Send message">
            <span className="chat-footer__send-icon" />
          </button>
        </footer>
      </main>
    </div>
  );
};

export default ChatPage;
