import React, { useState } from "react";
import "./Backuprestore.css";
import "./Front_cms_settings.css";

const FrontCMSSettings = () => {
  const [formData, setFormData] = useState({
    frontCMS: false,
    onlineAppointment: false,
    sidebar: false,
    rtlMode: false,
    sidebarOptions: {
      news: true,
      complain: true,
    },
    facebookURL: "",
    twitterURL: "",
    youtubeURL: "",
    googlePlusURL: "",
    linkedInURL: "",
    instagramURL: "",
    pinterestURL: "",
    footerText: "",
    googleAnalytics: "",
  });

  const handleToggle = (field) => {
    setFormData((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (field) => {
    setFormData((prev) => ({
      ...prev,
      sidebarOptions: { ...prev.sidebarOptions, [field]: !prev.sidebarOptions[field] },
    }));
  };

  return (
    <div className="front-cms-container">
      <h1>Front CMS Settings</h1>
      <div className="front-cms-grid">
        <div className="left-section">
          <div className="toggle-group">
            <label>Front CMS</label>
            <input
              type="checkbox"
              checked={formData.frontCMS}
              onChange={() => handleToggle("frontCMS")}
            />
          </div>
          <div className="toggle-group">
            <label>Online Appointment</label>
            <input
              type="checkbox"
              checked={formData.onlineAppointment}
              onChange={() => handleToggle("onlineAppointment")}
            />
          </div>
          <div className="toggle-group">
            <label>Sidebar</label>
            <input
              type="checkbox"
              checked={formData.sidebar}
              onChange={() => handleToggle("sidebar")}
            />
          </div>
          <div className="toggle-group">
            <label>Language RTL Text Mode</label>
            <input
              type="checkbox"
              checked={formData.rtlMode}
              onChange={() => handleToggle("rtlMode")}
            />
          </div>
          <div className="checkbox-group">
            <label>Sidebar Option</label>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={formData.sidebarOptions.news}
                  onChange={() => handleCheckboxChange("news")}
                />
                News
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={formData.sidebarOptions.complain}
                  onChange={() => handleCheckboxChange("complain")}
                />
                Complain
              </label>
            </div>
          </div>
          <div className="file-upload">
            <label>Logo (369px X 76px)</label>
            <input type="file" />
          </div>
          <div className="file-upload">
            <label>Favicon (32px X 32px)</label>
            <input type="file" />
          </div>
          <div className="text-input">
            <label>Footer Text</label>
            <textarea
              name="footerText"
              value={formData.footerText}
              onChange={handleInputChange}
              rows="2"
            ></textarea>
          </div>
          <div className="text-input">
            <label>Google Analytics</label>
            <textarea
              name="googleAnalytics"
              value={formData.googleAnalytics}
              onChange={handleInputChange}
              rows="3"
            ></textarea>
          </div>
        </div>
        <div className="right-section">
          <div className="text-input">
            <label>Facebook URL</label>
            <input
              type="text"
              name="facebookURL"
              value={formData.facebookURL}
              onChange={handleInputChange}
            />
          </div>
          <div className="text-input">
            <label>Twitter URL</label>
            <input
              type="text"
              name="twitterURL"
              value={formData.twitterURL}
              onChange={handleInputChange}
            />
          </div>
          <div className="text-input">
            <label>Youtube URL</label>
            <input
              type="text"
              name="youtubeURL"
              value={formData.youtubeURL}
              onChange={handleInputChange}
            />
          </div>
          <div className="text-input">
            <label>Google Plus URL</label>
            <input
              type="text"
              name="googlePlusURL"
              value={formData.googlePlusURL}
              onChange={handleInputChange}
            />
          </div>
          <div className="text-input">
            <label>LinkedIn URL</label>
            <input
              type="text"
              name="linkedInURL"
              value={formData.linkedInURL}
              onChange={handleInputChange}
            />
          </div>
          <div className="text-input">
            <label>Instagram URL</label>
            <input
              type="text"
              name="instagramURL"
              value={formData.instagramURL}
              onChange={handleInputChange}
            />
          </div>
          <div className="text-input">
            <label>Pinterest URL</label>
            <input
              type="text"
              name="pinterestURL"
              value={formData.pinterestURL}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontCMSSettings;
