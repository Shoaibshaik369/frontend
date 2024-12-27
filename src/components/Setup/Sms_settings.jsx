import React, { useState } from "react";
import './Sms_Settings.css';

const SmsSettings = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [status, setStatus] = useState('Disabled');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      gateway_name: 'Clickatell', // Or dynamically set based on selected gateway
      username: username,
      password: password,
      api_key: apiKey,
      status: status
    };

    fetch('http://localhost:5000/settings/sms/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        alert('Settings saved successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to save settings!');
      });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-xl font-semibold mb-4">SMS Setting</h1>
        <div className="border-b mb-4">
          <ul className="flex space-x-4">
            <li className="border-b-2 border-blue-500 pb-2">
              <a href="#" className="text-blue-500">
                Clickatell SMS Gateway
              </a>
            </li>
            {/* Additional gateways */}
          </ul>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Clickatell Username<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Clickatell Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Clickatell Api Key<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Status
            </label>
            <select
              className="w-full border border-gray-300 p-2 rounded"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>Disabled</option>
              <option>Enabled</option>
            </select>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <img
                src="https://hospital.gtechxchange.com/backend/images/clickatell.png"
                alt="Clickatell logo"
                className="inline-block"
              />
              <a
                href="https://www.clickatell.com"
                className="text-blue-500 ml-2"
              >
                https://www.clickatell.com
              </a>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              <i className="fas fa-save mr-2"></i>Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SmsSettings;
