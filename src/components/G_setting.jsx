import React, { useState, useEffect } from 'react';
import './G_setting.css';

const G_setting = () => {
  const [formData, setFormData] = useState({
    hospitalName: '',
    hospitalCode: '',
    address: '',
    phone: '',
    email: '',
    language: 'english',
    dateTime: '',
    timeZone: 'utc',
  });

  const [isUpdate, setIsUpdate] = useState(false); // Track whether it's an update
  const [updateId, setUpdateId] = useState(null); // Track the ID for updating

  // Update form if we're editing existing settings
  useEffect(() => {
    if (isUpdate && updateId) {
      fetch(`http://localhost:5000/settings/general/${updateId}`)
        .then(response => response.json())
        .then(data => {
          if (data) {
            setFormData(data);
          }
        })
        .catch(err => console.error('Failed to fetch settings:', err));
    }
  }, [isUpdate, updateId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isUpdate
      ? `http://localhost:5000/settings/general/${updateId}`
      : 'http://localhost:5000/settings/general';
    const method = isUpdate ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(isUpdate ? 'Settings updated successfully!' : 'Settings saved successfully!');

        // Update the latestId in localStorage if it's a new record
        if (!isUpdate) {
          localStorage.setItem('latestId', result.id || (parseInt(localStorage.getItem('latestId') || '0') + 1));
        }

        setFormData({
          hospitalName: '',
          hospitalCode: '',
          address: '',
          phone: '',
          email: '',
          language: 'english',
          dateTime: '',
          timeZone: 'utc',
        });
        setIsUpdate(false);
        setUpdateId(null);

        // Refresh the page
        window.location.reload();
      } else {
        console.error('Error response:', result);
        alert(`Failed to save settings: ${result.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert(`An error occurred while saving settings: ${error.message}`);
    }
  };

  return (
    <div className='sho'>
      <div className='he'>
        <h1>General Settings</h1>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="hospitalName">Hospital Name</label>
                <input
                  type="text"
                  id="hospitalName"
                  name="hospitalName"
                  value={formData.hospitalName}
                  onChange={handleInputChange}
                  placeholder="Enter hospital name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="hospitalCode">Hospital Code</label>
                <input
                  type="text"
                  id="hospitalCode"
                  name="hospitalCode"
                  value={formData.hospitalCode}
                  onChange={handleInputChange}
                  placeholder="Enter hospital code"
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Enter hospital address"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter phone number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter email address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="language">Language</label>
                <select
                  id="language"
                  name="language"
                  value={formData.language}
                  onChange={handleInputChange}
                >
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                  <option value="french">French</option>
                  <option value="german">German</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="dateTime">Date & Time</label>
                <input
                  type="datetime-local"
                  id="dateTime"
                  name="dateTime"
                  value={formData.dateTime}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="timeZone">Time Zone</label>
                <select
                  id="timeZone"
                  name="timeZone"
                  value={formData.timeZone}
                  onChange={handleInputChange}
                >
                  <option value="utc">UTC</option>
                  <option value="pst">PST</option>
                  <option value="est">EST</option>
                  <option value="gmt">GMT</option>
                </select>
              </div>
            </div>
            <div className="button-container">
              <button type="submit" className="submit-btn">
                {isUpdate ? 'Update' : 'Save'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default G_setting;
