import { useState } from 'react';
import './AnalysisResults.css';

const companies = [
  {
    company: 'Stripe',
    revenue: '$7.4B',
    marketCap: '$95B',
    industry: 'FinTech',
    founded: '2010',
    location: 'San Francisco',
    ceo: 'Patrick Collison',
  },
  {
    company: 'Canva',
    revenue: '$1.7B',
    marketCap: '$40B',
    industry: 'Design',
    founded: '2013',
    location: 'Sydney',
    ceo: 'Melanie Perkins',
  },
  {
    company: 'Notion',
    revenue: '$343M',
    marketCap: '$10B',
    industry: 'Productivity',
    founded: '2016',
    location: 'San Francisco',
    ceo: 'Ivan Zhao',
  },
  {
    company: 'Discord',
    revenue: '$445M',
    marketCap: '$15B',
    industry: 'Communication',
    founded: '2015',
    location: 'San Francisco',
    ceo: 'Jason Citron',
  },
  {
    company: 'Figma',
    revenue: '$400M',
    marketCap: '$20B',
    industry: 'Design',
    founded: '2012',
    location: 'San Francisco',
    ceo: 'Dylan Field',
  },
  {
    company: 'Slack',
    revenue: '$902M',
    marketCap: '$27.7B',
    industry: 'Communication',
    founded: '2009',
    location: 'San Francisco',
    ceo: 'Stewart Butterfield',
  },
  {
    company: 'Zoom',
    revenue: '$4.1B',
    marketCap: '$24.5B',
    industry: 'Video Conferencing',
    founded: '2011',
    location: 'San Jose',
    ceo: 'Eric Yuan',
  },
  {
    company: 'Airbnb',
    revenue: '$8.4B',
    marketCap: '$74B',
    industry: 'Travel',
    founded: '2008',
    location: 'San Francisco',
    ceo: 'Brian Chesky',
  },
  {
    company: 'Uber',
    revenue: '$31.9B',
    marketCap: '$90B',
    industry: 'Transportation',
    founded: '2009',
    location: 'San Francisco',
    ceo: 'Dara Khosrowshahi',
  },
  {
    company: 'SpaceX',
    revenue: '$8.0B',
    marketCap: '$137B',
    industry: 'Aerospace',
    founded: '2002',
    location: 'Hawthorne',
    ceo: 'Elon Musk',
  },
  {
    company: 'ByteDance',
    revenue: '$85B',
    marketCap: '$220B',
    industry: 'Social Media',
    founded: '2012',
    location: 'Beijing',
    ceo: 'Shou Zi Chew',
  },
  {
    company: 'XAI',
    revenue: '$2.0B',
    marketCap: '$86B',
    industry: 'AI',
    founded: '2015',
    location: 'San Francisco',
    ceo: 'Sam Altman',
  },
  {
    company: 'Pilot AI',
    revenue: '$850M',
    marketCap: '$18.4B',
    industry: 'AI',
    founded: '2021',
    location: 'San Francisco',
    ceo: 'Dario Amodei',
  },
];

const AnalysisResults = ({ onBack }) => {
  const [inputValue, setInputValue] = useState('');
  const [showRightSidebar, setShowRightSidebar] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="results-shell">
      <aside className={`results-sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <button
          className="results-sidebar__toggle"
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          aria-label="Toggle sidebar"
        >
          {sidebarCollapsed ? '→' : '←'}
        </button>
        {!sidebarCollapsed && (
          <>
            <div className="results-sidebar__file">
              <div className="results-sidebar__file-icon">📊</div>
              <div className="results-sidebar__file-name">Tech_Startups_Enriched_Complete.xlsx</div>
            </div>

        <div className="results-sidebar__summary">
          <div className="results-sidebar__summary-header">
            <span className="results-sidebar__summary-check">✓</span>
            <h3 className="results-sidebar__summary-title">
              Analysis Complete! Your dataset is ready. Here's the summary.
            </h3>
          </div>
          <div className="results-sidebar__tasks">
            <div className="results-sidebar__task completed">
              <span className="results-sidebar__task-check">✓</span>
              <span>245 companies processed successfully</span>
            </div>
            <div className="results-sidebar__task completed">
              <span className="results-sidebar__task-check">✓</span>
              <span>Revenue data enriched for all entries</span>
            </div>
            <div className="results-sidebar__task completed">
              <span className="results-sidebar__task-check">✓</span>
              <span>Market positioning analysis completed</span>
            </div>
            <div className="results-sidebar__task completed">
              <span className="results-sidebar__task-check">✓</span>
              <span>Funding round data verified</span>
            </div>
          </div>
        </div>

        <div className="results-sidebar__processing">
          <h4 className="results-sidebar__processing-title">Processing Summary</h4>
          <div className="results-sidebar__processing-stats">
            <div className="results-sidebar__processing-stat">
              <span>Total companies:</span>
              <span className="results-sidebar__processing-value">250</span>
            </div>
            <div className="results-sidebar__processing-stat">
              <span>Successfully enriched:</span>
              <span className="results-sidebar__processing-value">245</span>
            </div>
            <div className="results-sidebar__processing-stat">
              <span>Data completeness:</span>
              <span className="results-sidebar__processing-value">98%</span>
            </div>
            <div className="results-sidebar__processing-stat">
              <span>Processing time:</span>
              <span className="results-sidebar__processing-value">4m 32s</span>
            </div>
          </div>
          <div className="results-sidebar__processing-time">2 minutes ago</div>
        </div>

        <div className="results-sidebar__chat">
          <div className="results-sidebar__message results-sidebar__message--user">
            <p>Show me top funded companies only</p>
            <span className="results-sidebar__message-time">1 minute ago</span>
          </div>
          <div className="results-sidebar__message results-sidebar__message--ai">
            <div className="results-sidebar__message-wrapper">
              <div className="results-sidebar__message-avatar">AI</div>
              <div className="results-sidebar__message-content">
                <p>
                  I've filtered the results to show companies with funding above $100M. The table now
                  displays 42 top-funded companies.
                </p>
                <div className="results-sidebar__message-cards">
                  <div className="results-sidebar__message-card">
                    <div className="results-sidebar__message-card-label">Avg Funding</div>
                    <div className="results-sidebar__message-card-value">$287M</div>
                  </div>
                  <div className="results-sidebar__message-card">
                    <div className="results-sidebar__message-card-label">Top Sector</div>
                    <div className="results-sidebar__message-card-value">FinTech</div>
                  </div>
                </div>
                <span className="results-sidebar__message-time">30 seconds ago</span>
              </div>
            </div>
          </div>
          <div className="results-sidebar__message results-sidebar__message--user">
            <p>Can you identify potential acquisition targets based on growth metrics?</p>
            <span className="results-sidebar__message-time">Just now</span>
          </div>
        </div>

        <div className="results-sidebar__input">
          <button className="results-sidebar__input-attach" aria-label="Attach file">
            📎
          </button>
          <input
            type="text"
            placeholder="Ask follow-up questions"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="results-sidebar__input-send" aria-label="Send message">
            ✈
          </button>
        </div>
          </>
        )}
      </aside>

      <main className="results-main">
        <header className="results-header">
          <div className="results-header__left">
            <button className="results-header__back" onClick={onBack} aria-label="Back">
              ←
            </button>
            <div className="results-header__titles">
              <h1 className="results-header__title">Tech Startups Q4 2024 - Analysis Results</h1>
              <div className="results-header__meta">
                <span>187 companies enriched</span>
                <span className="results-header__divider">•</span>
                <span>Analysis complete</span>
                <span className="results-header__divider">•</span>
                <span>Generated 2 hours ago</span>
              </div>
            </div>
          </div>
        </header>

        <div className="results-menu">
          <button className="results-menu__item">File</button>
          <button className="results-menu__item">Home</button>
          <button className="results-menu__item active">Insert</button>
          <button className="results-menu__item">Page Layout</button>
          <button className="results-menu__item">Formulas</button>
          <button className="results-menu__item">Data</button>
          <button className="results-menu__item">Review</button>
          <button className="results-menu__item">View</button>
        </div>

        <div className="results-toolbar">
          <button className="results-toolbar__button" aria-label="Paste">📋</button>
          <button className="results-toolbar__button" aria-label="Cut">✂</button>
          <button className="results-toolbar__button" aria-label="Copy">📄</button>
          <div className="results-toolbar__divider" />
          <select className="results-toolbar__select">
            <option>Arial</option>
            <option>Calibri</option>
            <option>Times New Roman</option>
          </select>
          <select className="results-toolbar__select">
            <option>11</option>
            <option>12</option>
            <option>14</option>
          </select>
        </div>

        <div className="results-table-wrapper">
          <div className="results-table-container">
            <table className="results-table">
              <thead>
                <tr>
                  <th className="results-table__col-header">Company Name</th>
                  <th className="results-table__col-header">Revenue</th>
                  <th className="results-table__col-header">Market Cap</th>
                  <th className="results-table__col-header">Industry</th>
                  <th className="results-table__col-header">Founded</th>
                  <th className="results-table__col-header">Location</th>
                  <th className="results-table__col-header">CEO</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((row, idx) => (
                  <tr key={idx} className={idx === 0 ? 'selected' : ''}>
                    <td>{row.company}</td>
                    <td>{row.revenue}</td>
                    <td>{row.marketCap}</td>
                    <td>{row.industry}</td>
                    <td>{row.founded}</td>
                    <td>{row.location}</td>
                    <td>{row.ceo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="results-footer">
          <div className="results-footer__tabs">
            <button className="results-footer__tab active">Sheet1</button>
            <button className="results-footer__tab">Sheet2</button>
            <button className="results-footer__tab">Sheet3</button>
            <button className="results-footer__tab-add">+</button>
          </div>
          <div className="results-footer__status">
            <span>15 items selected</span>
            <span>Sum: $162.7B</span>
            <span>Average: $10.8B</span>
            <span>Count: 15</span>
          </div>
          <div className="results-footer__save">
            <span>Last saved: 2 minutes ago</span>
            <span>Auto-save enabled</span>
          </div>
        </div>
      </main>

      {showRightSidebar && (
        <aside className="results-insights">
          <div className="results-insights__header">
            <div className="results-insights__header-content">
              <h3 className="results-insights__title">Data Analysis</h3>
              <p className="results-insights__subtitle">Comprehensive insights</p>
            </div>
            <button
              className="results-insights__close"
              onClick={() => setShowRightSidebar(false)}
              aria-label="Close panel"
            >
              ×
            </button>
          </div>

          <div className="results-insights__section">
            <h4 className="results-insights__section-title">Quick Stats</h4>
            <div className="results-insights__stats">
              <div className="results-insights__stat">
                <span className="results-insights__stat-label">Total Companies</span>
                <span className="results-insights__stat-value">15</span>
              </div>
              <div className="results-insights__stat">
                <span className="results-insights__stat-label">Total Revenue</span>
                <span className="results-insights__stat-value">$162.7B</span>
              </div>
              <div className="results-insights__stat">
                <span className="results-insights__stat-label">Avg Employees</span>
                <span className="results-insights__stat-value">14,567</span>
              </div>
              <div className="results-insights__stat">
                <span className="results-insights__stat-label">Avg Valuation</span>
                <span className="results-insights__stat-value">$56.2B</span>
              </div>
            </div>
          </div>

          <div className="results-insights__section">
            <h4 className="results-insights__section-title">Industry Breakdown</h4>
            <div className="results-insights__breakdown">
              <div className="results-insights__breakdown-item">
                <div className="results-insights__breakdown-header">
                  <span>FinTech</span>
                  <span>25%</span>
                </div>
                <div className="results-insights__breakdown-bar">
                  <div className="results-insights__breakdown-fill" style={{ width: '25%' }} />
                </div>
              </div>
              <div className="results-insights__breakdown-item">
                <div className="results-insights__breakdown-header">
                  <span>AI/ML</span>
                  <span>20%</span>
                </div>
                <div className="results-insights__breakdown-bar">
                  <div className="results-insights__breakdown-fill" style={{ width: '20%' }} />
                </div>
              </div>
              <div className="results-insights__breakdown-item">
                <div className="results-insights__breakdown-header">
                  <span>Communication</span>
                  <span>20%</span>
                </div>
                <div className="results-insights__breakdown-bar">
                  <div className="results-insights__breakdown-fill" style={{ width: '20%' }} />
                </div>
              </div>
              <div className="results-insights__breakdown-item">
                <div className="results-insights__breakdown-header">
                  <span>Design</span>
                  <span>13%</span>
                </div>
                <div className="results-insights__breakdown-bar">
                  <div className="results-insights__breakdown-fill" style={{ width: '13%' }} />
                </div>
              </div>
              <div className="results-insights__breakdown-item">
                <div className="results-insights__breakdown-header">
                  <span>Other</span>
                  <span>22%</span>
                </div>
                <div className="results-insights__breakdown-bar">
                  <div className="results-insights__breakdown-fill" style={{ width: '22%' }} />
                </div>
              </div>
            </div>
          </div>

          <div className="results-insights__section">
            <h4 className="results-insights__section-title">Funding Stage Distribution</h4>
            <div className="results-insights__breakdown">
              <div className="results-insights__breakdown-item">
                <div className="results-insights__breakdown-header">
                  <span>Public</span>
                  <span>40%</span>
                </div>
                <div className="results-insights__breakdown-bar">
                  <div className="results-insights__breakdown-fill" style={{ width: '40%', background: '#62e2d8' }} />
                </div>
              </div>
              <div className="results-insights__breakdown-item">
                <div className="results-insights__breakdown-header">
                  <span>Private</span>
                  <span>27%</span>
                </div>
                <div className="results-insights__breakdown-bar">
                  <div className="results-insights__breakdown-fill" style={{ width: '27%', background: '#4dc8ff' }} />
                </div>
              </div>
              <div className="results-insights__breakdown-item">
                <div className="results-insights__breakdown-header">
                  <span>Series H</span>
                  <span>13%</span>
                </div>
                <div className="results-insights__breakdown-bar">
                  <div className="results-insights__breakdown-fill" style={{ width: '13%', background: '#a78bfa' }} />
                </div>
              </div>
              <div className="results-insights__breakdown-item">
                <div className="results-insights__breakdown-header">
                  <span>Other</span>
                  <span>20%</span>
                </div>
                <div className="results-insights__breakdown-bar">
                  <div className="results-insights__breakdown-fill" style={{ width: '20%', background: '#fbbf24' }} />
                </div>
              </div>
            </div>
          </div>

          <div className="results-insights__section">
            <h4 className="results-insights__section-title">Growth Rate Analysis</h4>
            <div className="results-insights__growth">
              <div className="results-insights__growth-stat">
                <span className="results-insights__growth-label">Average Growth Rate</span>
                <span className="results-insights__growth-value">42%</span>
              </div>
              <div className="results-insights__growth-range">
                <span>Min: 15%</span>
                <div className="results-insights__growth-bar">
                  <div className="results-insights__growth-fill" style={{ width: '42%' }} />
                </div>
                <span>Max: 120%</span>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default AnalysisResults;
