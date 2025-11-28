import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Settings.css';

function Settings() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  
  // Profile settings
  const [fullName, setFullName] = useState('John Doe');
  const [email, setEmail] = useState('john@company.com');
  const [phone, setPhone] = useState('+1 (555) 123-4567');
  const [company, setCompany] = useState('Acme Corporation');
  const [role, setRole] = useState('Product Manager');
  
  // Notification settings
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [weeklyReport, setWeeklyReport] = useState(true);
  const [projectUpdates, setProjectUpdates] = useState(true);
  
  // Security settings
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Appearance settings
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');

  const handleSaveProfile = (e) => {
    e.preventDefault();
    console.log('Saving profile:', { fullName, email, phone, company, role });
    alert('Profile updated successfully!');
  };

  const handleSavePassword = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Changing password');
    alert('Password changed successfully!');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleSaveNotifications = () => {
    console.log('Saving notifications');
    alert('Notification preferences saved!');
  };

  const handleSaveAppearance = () => {
    console.log('Saving appearance');
    alert('Appearance settings saved!');
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <button className="settings-back-btn" onClick={() => navigate('/app')}>
          ← Back to Dashboard
        </button>
        <h1 className="settings-title">Settings</h1>
        <p className="settings-subtitle">Manage your account settings and preferences</p>
      </div>

      <div className="settings-content">
        <aside className="settings-sidebar">
          <nav className="settings-nav">
            <button
              className={`settings-nav-item ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              <span className="nav-icon">👤</span>
              Profile
            </button>
            <button
              className={`settings-nav-item ${activeTab === 'security' ? 'active' : ''}`}
              onClick={() => setActiveTab('security')}
            >
              <span className="nav-icon">🔒</span>
              Security
            </button>
            <button
              className={`settings-nav-item ${activeTab === 'notifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('notifications')}
            >
              <span className="nav-icon">🔔</span>
              Notifications
            </button>
            <button
              className={`settings-nav-item ${activeTab === 'appearance' ? 'active' : ''}`}
              onClick={() => setActiveTab('appearance')}
            >
              <span className="nav-icon">🎨</span>
              Appearance
            </button>
            <button
              className={`settings-nav-item ${activeTab === 'billing' ? 'active' : ''}`}
              onClick={() => setActiveTab('billing')}
            >
              <span className="nav-icon">💳</span>
              Billing
            </button>
          </nav>
        </aside>

        <main className="settings-main">
          {activeTab === 'profile' && (
            <div className="settings-section">
              <h2 className="section-title">Profile Information</h2>
              <p className="section-description">Update your personal information and profile details</p>

              <form onSubmit={handleSaveProfile}>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-input"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-input"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Company</label>
                    <input
                      type="text"
                      className="form-input"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>

                  <div className="form-group full-width">
                    <label className="form-label">Role</label>
                    <input
                      type="text"
                      className="form-input"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn-primary">Save Changes</button>
                  <button type="button" className="btn-secondary">Cancel</button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="settings-section">
              <h2 className="section-title">Security Settings</h2>
              <p className="section-description">Manage your password and security preferences</p>

              <div className="settings-card">
                <h3 className="card-title">Two-Factor Authentication</h3>
                <p className="card-description">
                  Add an extra layer of security to your account
                </p>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={twoFactorAuth}
                    onChange={(e) => setTwoFactorAuth(e.target.checked)}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              <form onSubmit={handleSavePassword} className="password-form">
                <h3 className="card-title">Change Password</h3>
                <div className="form-group">
                  <label className="form-label">Current Password</label>
                  <input
                    type="password"
                    className="form-input"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Enter current password"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">New Password</label>
                  <input
                    type="password"
                    className="form-input"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Confirm New Password</label>
                  <input
                    type="password"
                    className="form-input"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                  />
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn-primary">Update Password</button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="settings-section">
              <h2 className="section-title">Notification Preferences</h2>
              <p className="section-description">Choose how you want to receive notifications</p>

              <div className="settings-card">
                <div className="notification-item">
                  <div>
                    <h4 className="notification-title">Email Notifications</h4>
                    <p className="notification-description">Receive updates via email</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={emailNotifications}
                      onChange={(e) => setEmailNotifications(e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>

                <div className="notification-item">
                  <div>
                    <h4 className="notification-title">Push Notifications</h4>
                    <p className="notification-description">Receive push notifications on your device</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={pushNotifications}
                      onChange={(e) => setPushNotifications(e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>

                <div className="notification-item">
                  <div>
                    <h4 className="notification-title">Weekly Report</h4>
                    <p className="notification-description">Get a weekly summary of your projects</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={weeklyReport}
                      onChange={(e) => setWeeklyReport(e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>

                <div className="notification-item">
                  <div>
                    <h4 className="notification-title">Project Updates</h4>
                    <p className="notification-description">Get notified when projects are updated</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={projectUpdates}
                      onChange={(e) => setProjectUpdates(e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>

              <div className="form-actions">
                <button onClick={handleSaveNotifications} className="btn-primary">
                  Save Preferences
                </button>
              </div>
            </div>
          )}

          {activeTab === 'appearance' && (
            <div className="settings-section">
              <h2 className="section-title">Appearance Settings</h2>
              <p className="section-description">Customize how Eudox AI looks for you</p>

              <div className="form-group">
                <label className="form-label">Theme</label>
                <select
                  className="form-input"
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="auto">Auto (System)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Language</label>
                <select
                  className="form-input"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value="en">English</option>
                  <option value="zh">中文</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                </select>
              </div>

              <div className="form-actions">
                <button onClick={handleSaveAppearance} className="btn-primary">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === 'billing' && (
            <div className="settings-section">
              <h2 className="section-title">Billing & Subscription</h2>
              <p className="section-description">Manage your subscription and payment methods</p>

              <div className="settings-card">
                <div className="billing-plan">
                  <div className="plan-info">
                    <h3 className="plan-name">Pro Plan</h3>
                    <p className="plan-price">$49/month</p>
                    <p className="plan-description">Access to all premium features</p>
                  </div>
                  <button className="btn-secondary">Manage Subscription</button>
                </div>
              </div>

              <div className="settings-card">
                <h3 className="card-title">Payment Method</h3>
                <div className="payment-method">
                  <div className="card-icon">💳</div>
                  <div>
                    <p className="payment-type">Visa ending in 4242</p>
                    <p className="payment-expiry">Expires 12/2025</p>
                  </div>
                  <button className="btn-secondary">Update</button>
                </div>
              </div>

              <div className="settings-card">
                <h3 className="card-title">Billing History</h3>
                <div className="billing-history">
                  <div className="billing-item">
                    <div>
                      <p className="billing-date">November 1, 2025</p>
                      <p className="billing-status">Paid</p>
                    </div>
                    <p className="billing-amount">$49.00</p>
                  </div>
                  <div className="billing-item">
                    <div>
                      <p className="billing-date">October 1, 2025</p>
                      <p className="billing-status">Paid</p>
                    </div>
                    <p className="billing-amount">$49.00</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Settings;

