import React, { useState } from 'react';
import './Email_settings.css';

const Email_settings = () => {
  const [emailEngine, setEmailEngine] = useState('sendMail');

  const handleSave = () => {
    console.log('Selected Email Engine:', emailEngine);
    // Add logic to save the selected email engine
  };

  return (
    <div className="email-settings-container">
      <h1>Email Settings</h1>
      <div className="form-group1">
        <label htmlFor="email-engine">Email Engine:</label>
        <select
          id="email-engine"
          value={emailEngine}
          onChange={(e) => setEmailEngine(e.target.value)}
        >
          <option value="sendMail">sendMail</option>
          <option value="SMTP">SMTP</option>
        </select>
      </div>
      <button className="save-button" onClick={handleSave}>
        SAVE
      </button>
    </div>
  );
};

export default Email_settings;
