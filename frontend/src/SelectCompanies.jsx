import { useState } from 'react';
import './SelectCompanies.css';

const companies = [
  {
    id: 1,
    name: 'Stripe',
    description: 'Payment Processing',
    category: 'FinTech',
    categoryColor: '#7fd0ff',
    region: 'North America',
    fundingStage: 'Series H',
    dataQuality: 95,
    estTime: '~3 min',
    priority: true,
    selected: true,
  },
  {
    id: 2,
    name: 'Canva',
    description: 'Design Platform',
    category: 'SaaS',
    categoryColor: '#7fd0ff',
    region: 'Asia Pacific',
    fundingStage: 'Series F',
    dataQuality: 92,
    estTime: '~4 min',
    priority: true,
    selected: true,
  },
  {
    id: 3,
    name: 'Notion',
    description: 'Productivity Software',
    category: 'SaaS',
    categoryColor: '#7fd0ff',
    region: 'North America',
    fundingStage: 'Series C',
    dataQuality: 78,
    estTime: '~5 min',
    priority: true,
    selected: true,
  },
  {
    id: 4,
    name: 'Discord',
    description: 'Communication Platform',
    category: 'SaaS',
    categoryColor: '#7fd0ff',
    region: 'North America',
    fundingStage: 'Series H',
    dataQuality: 45,
    estTime: '~8 min',
    priority: false,
    selected: false,
  },
  {
    id: 5,
    name: 'Zoom',
    description: 'Video Conferencing',
    category: 'SaaS',
    categoryColor: '#7fd0ff',
    region: 'North America',
    fundingStage: 'Public',
    dataQuality: 98,
    estTime: '~2 min',
    priority: true,
    selected: true,
  },
  {
    id: 6,
    name: 'Shopify',
    description: 'E-commerce Platform',
    category: 'commerce',
    categoryColor: '#7fd0ff',
    region: 'North America',
    fundingStage: 'Public',
    dataQuality: 96,
    estTime: '~3 min',
    priority: true,
    selected: true,
  },
  {
    id: 7,
    name: 'XAI',
    description: 'Artificial Intelligence',
    category: 'AI/ML',
    categoryColor: '#34d399',
    region: 'North America',
    fundingStage: 'Private',
    dataQuality: 72,
    estTime: '~6 min',
    priority: true,
    selected: true,
  },
  {
    id: 8,
    name: 'Peloton',
    description: 'Fitness Technology',
    category: 'HealthTech',
    categoryColor: '#7fd0ff',
    region: 'North America',
    fundingStage: 'Public',
    dataQuality: 88,
    estTime: '~4 min',
    priority: false,
    selected: false,
  },
];

const CollapsibleChatSidebar = ({ collapsed, onToggle }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <aside className={`select-chat-sidebar ${collapsed ? 'collapsed' : ''}`}>
      <button className="select-chat-sidebar__toggle" onClick={onToggle} aria-label="Toggle sidebar">
        <span className={collapsed ? '→' : '←'} />
      </button>
      {!collapsed && (
        <>
          <div className="select-chat-sidebar__header">
            <div className="select-chat-sidebar__status">Analyzing: financial_analysis.xlsx</div>
          </div>
          <div className="select-chat-sidebar__messages">
            <div className="select-chat-message select-chat-message--ai">
              <div className="select-chat-message__avatar">AI</div>
              <div className="select-chat-message__content">
                <p>
                  I'd be happy to help you analyze your Excel file. I can see you've uploaded a file.
                  Let me examine the data structure and provide insights.
                </p>
                <span className="select-chat-message__time">5 minutes ago</span>
              </div>
            </div>
            <div className="select-chat-message select-chat-message--user">
              <div className="select-chat-message__content">
                <p>
                  Can you summarize revenue trends and identify any outliers in the funding data?
                </p>
                <span className="select-chat-message__time">4 minutes ago</span>
              </div>
            </div>
            <div className="select-chat-message select-chat-message--ai">
              <div className="select-chat-message__avatar">AI</div>
              <div className="select-chat-message__content">
                <p>I'm analyzing your data step by step. Here's the current progress:</p>
                <div className="select-chat-message__tasks">
                  <div className="select-chat-message__task completed">
                    <span className="select-chat-message__task-check">✓</span>
                    <span>Parsing file structure</span>
                  </div>
                  <div className="select-chat-message__task completed">
                    <span className="select-chat-message__task-check">✓</span>
                    <span>Enriching company data</span>
                  </div>
                  <div className="select-chat-message__task in-progress">
                    <span className="select-chat-message__task-spinner" />
                    <span>Generating insights</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="select-chat-sidebar__input">
            <input
              type="text"
              placeholder="Message AI Agent..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="select-chat-sidebar__send" aria-label="Send message">
              <span className="select-chat-sidebar__send-icon" />
            </button>
          </div>
        </>
      )}
    </aside>
  );
};

const SelectCompanies = ({ onBack }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [companyList, setCompanyList] = useState(companies);
  const selectedCount = companyList.filter((c) => c.selected).length;

  const toggleCompany = (id) => {
    setCompanyList((list) =>
      list.map((company) => (company.id === id ? { ...company, selected: !company.selected } : company))
    );
  };

  const selectAll = () => {
    setCompanyList((list) => list.map((company) => ({ ...company, selected: true })));
  };

  const deselectAll = () => {
    setCompanyList((list) => list.map((company) => ({ ...company, selected: false })));
  };

  const getQualityColor = (quality) => {
    if (quality >= 90) return '#34d399';
    if (quality >= 70) return '#fbbf24';
    return '#f87171';
  };

  return (
    <div className="select-shell">
      <CollapsibleChatSidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <main className="select-main">
        <header className="select-header">
          <div className="select-header__left">
            <button className="select-header__back" onClick={onBack} aria-label="Back">
              ←
            </button>
            <div className="select-header__titles">
              <h1 className="select-header__title">Select Companies for Research</h1>
              <p className="select-header__subtitle">Choose which companies to include in your analysis</p>
            </div>
          </div>
          <div className="select-header__actions">
            <button className="select-header__save">Save Selection</button>
            <button className="select-header__run">
              <span className="select-header__run-icon" />
              Run Research
            </button>
          </div>
        </header>

        <div className="select-summary">
          <div className="select-summary__left">
            <span className="select-summary__item">Total Companies: 250</span>
            <span className="select-summary__item">
              <span className="select-summary__icon">✓</span>
              Selected: {selectedCount}
            </span>
            <span className="select-summary__item">
              <span className="select-summary__icon">⏱</span>
              Est. Time: ~25 min
            </span>
          </div>
          <div className="select-summary__right">
            <button className="select-summary__link" onClick={selectAll}>
              Select All
            </button>
            <span className="select-summary__divider">|</span>
            <button className="select-summary__link" onClick={deselectAll}>
              Deselect All
            </button>
          </div>
        </div>

        <div className="select-filters">
          <span className="select-filters__label">Filters:</span>
          <select className="select-filters__dropdown">
            <option>All Categories</option>
            <option>SaaS</option>
            <option>FinTech</option>
            <option>AI/ML</option>
          </select>
          <select className="select-filters__dropdown">
            <option>All Regions</option>
            <option>North America</option>
            <option>Asia Pacific</option>
            <option>Europe</option>
          </select>
          <select className="select-filters__dropdown">
            <option>All Funding Stages</option>
            <option>Series A</option>
            <option>Series B</option>
            <option>Public</option>
          </select>
          <select className="select-filters__dropdown">
            <option>Data Completeness</option>
            <option>High (90%+)</option>
            <option>Medium (70-90%)</option>
            <option>Low (&lt;70%)</option>
          </select>
          <div className="select-filters__search">
            <input type="text" placeholder="Search companies..." />
            <span className="select-filters__search-icon" />
          </div>
          <button className="select-filters__sort" aria-label="Sort and filter">
            <span className="icon-filter" />
          </button>
        </div>

        <div className="select-table-wrapper">
          <table className="select-table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Company</th>
                <th>Category</th>
                <th>Region</th>
                <th>Funding Stage</th>
                <th>Data Quality</th>
                <th>Est. Time</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              {companyList.map((company) => (
                <tr key={company.id} className={company.selected ? 'selected' : ''}>
                  <td>
                    <input
                      type="checkbox"
                      checked={company.selected}
                      onChange={() => toggleCompany(company.id)}
                    />
                  </td>
                  <td>
                    <div className="select-table__company">
                      <div className="select-table__company-name">{company.name}</div>
                      <div className="select-table__company-desc">{company.description}</div>
                    </div>
                  </td>
                  <td>
                    <span
                      className="select-table__tag"
                      style={{ '--tag-color': company.categoryColor }}
                    >
                      {company.category}
                    </span>
                  </td>
                  <td>{company.region}</td>
                  <td>{company.fundingStage}</td>
                  <td>
                    <div className="select-table__quality">
                      <div className="select-table__quality-bar">
                        <div
                          className="select-table__quality-fill"
                          style={{
                            width: `${company.dataQuality}%`,
                            background: getQualityColor(company.dataQuality),
                          }}
                        />
                      </div>
                      <span className="select-table__quality-text">{company.dataQuality}%</span>
                    </div>
                  </td>
                  <td>{company.estTime}</td>
                  <td>
                    <button
                      className={`select-table__star ${company.priority ? 'active' : ''}`}
                      aria-label="Toggle priority"
                    >
                      ★
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <footer className="select-footer">
          <div className="select-footer__left">
            Showing 8 of 250 companies
            <button className="select-footer__link">Load More</button>
          </div>
          <div className="select-footer__right">
            <button className="select-footer__back">Back to Upload</button>
            <button className="select-footer__continue">
              Continue with {selectedCount} Companies →
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default SelectCompanies;
