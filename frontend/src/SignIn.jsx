import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement actual authentication logic
    console.log('Sign in:', { email, password, rememberMe });
    // Navigate to the main app after sign in
    navigate('/app');
  };

  const handleGoogleSignIn = () => {
    // TODO: Implement Google OAuth
    console.log('Sign in with Google');
  };

  const handleMicrosoftSignIn = () => {
    // TODO: Implement Microsoft OAuth
    console.log('Sign in with Microsoft');
  };

  return (
    <div className="signin-container">
      <div className="signin-left">
        <div className="signin-left-content">
          <div className="signin-brand-container">
            <img src="/logo/logo-small.svg" alt="Eudox AI Logo" className="signin-logo" />
            <h1 className="signin-brand">Eudox AI</h1>
          </div>
          <h2 className="signin-welcome">Welcome Back to Eudox AI</h2>
          <div className="signin-preview">
            <div className="preview-mockup">
              <div className="mockup-header">
                <div className="mockup-status">
                  <span className="status-icon">⏳</span>
                  <span>Generating Insights</span>
                </div>
              </div>
              <div className="mockup-content">
                <div className="mockup-title">
                  <span className="check-icon">✓</span>
                  <span>Analysis Complete! Here's your enriched dataset:</span>
                </div>
                <div className="mockup-file">
                  <span className="file-icon">📄</span>
                  <div className="file-info">
                    <div className="file-name">Tech_Startups_Enriched_Complete.xlsx</div>
                    <div className="file-meta">250 companies • 6 data points per company</div>
                  </div>
                  <button className="complete-badge">Complete</button>
                  <span className="file-size">2.3 MB</span>
                </div>
                <div className="mockup-stats">
                  <div className="stat-item">
                    <div className="stat-value">250</div>
                    <div className="stat-label">Companies</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">100%</div>
                    <div className="stat-label">Complete</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">$2.1T</div>
                    <div className="stat-label">Total Value</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">847K</div>
                    <div className="stat-label">Employees</div>
                  </div>
                </div>
                <table className="mockup-table">
                  <thead>
                    <tr>
                      <th>Company</th>
                      <th>Revenue</th>
                      <th>Employees</th>
                      <th>Funding</th>
                      <th>Valuation</th>
                      <th>Market Position</th>
                      <th>Growth Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Stripe</td>
                      <td>$7.4B</td>
                      <td>8,000+</td>
                      <td>Series H</td>
                      <td>$95B</td>
                      <td><span className="badge badge-market">Market Leader</span></td>
                      <td>+38%</td>
                    </tr>
                    <tr>
                      <td>Canva</td>
                      <td>$1.7B</td>
                      <td>3,500+</td>
                      <td>Series F</td>
                      <td>$40B</td>
                      <td><span className="badge badge-rising">Rising Player</span></td>
                      <td>+42%</td>
                    </tr>
                    <tr>
                      <td>Notion</td>
                      <td>$343M</td>
                      <td>450+</td>
                      <td>Series C</td>
                      <td>$10B</td>
                      <td><span className="badge badge-stage">Category Leader</span></td>
                      <td>+103%</td>
                    </tr>
                  </tbody>
                </table>
                <div className="mockup-footer">+ 247 more companies with complete data</div>
                <div className="mockup-actions">
                  <button className="download-btn">📥 Download Complete Excel</button>
                  <button className="view-btn">View in Browser</button>
                  <span className="updated-time">Last updated: Just now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="signin-right">
        <div className="signin-form-container">
          <h2 className="signin-title">Welcome Back</h2>
          <p className="signin-subtitle">Sign in to access your Eudox AI dashboard</p>

          <form onSubmit={handleSubmit} className="signin-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="john@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className="form-input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember me</span>
              </label>
              <a href="#forgot" className="forgot-link">Forgot password?</a>
            </div>

            <button type="submit" className="signin-button">
              Sign In
            </button>
          </form>

          <div className="signin-divider">
            <span>Or continue with</span>
          </div>

          <div className="social-buttons">
            <button
              type="button"
              className="social-button"
              onClick={handleGoogleSignIn}
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </button>
            <button
              type="button"
              className="social-button"
              onClick={handleMicrosoftSignIn}
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="#f35325" d="M11.4 11.4H2V2h9.4z"/>
                <path fill="#81bc06" d="M22 11.4h-9.4V2H22z"/>
                <path fill="#05a6f0" d="M11.4 22H2v-9.4h9.4z"/>
                <path fill="#ffba08" d="M22 22h-9.4v-9.4H22z"/>
              </svg>
              Microsoft
            </button>
          </div>

          <div className="signin-footer">
            <p>Don't have an account? <a href="#signup" className="signup-link">Start free trial</a></p>
          </div>

          <div className="security-notice">
            <span className="security-icon">🔒</span>
            <div>
              <strong>Secure Login</strong>
              <p>Your data is protected with enterprise-grade security and encryption.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

