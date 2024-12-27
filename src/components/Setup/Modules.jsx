import React, { useState } from 'react';
import './Backuprestore.css';
import './Modules.css'; // Add additional styles for the table

const Modules = () => {
  // Array of module names
  const moduleNames = [
    'Billing',
    'Appointment',
    'OPD',
    'IPD',
    'Pharmacy',
    'Pathology',
    'Radiology',
    'Blood Bank',
    'Ambulance',
    'Front Office',
    'Birth Death Record',
    'Duty Roster',
    'Annual Calendar',
    'Referral',
    'TPA Management',
    'Income',
    'Expense',
    'Messaging',
    'Inventory',
  ];

  // State to manage toggle status for each module
  const [toggles, setToggles] = useState(
    moduleNames.reduce((acc, name) => ({ ...acc, [name]: true }), {})
  );

  // Toggle handler
  const handleToggle = (name) => {
    setToggles((prevToggles) => ({
      ...prevToggles,
      [name]: !prevToggles[name],
    }));
  };

  return (
    <div className="modules-container">
  <h1>Modules</h1>
  <div className="modules-table-container">
    <table className="modules-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {moduleNames.map((name) => (
          <tr key={name}>
            <td>{name}</td>
            <td>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={toggles[name]}
                  onChange={() => handleToggle(name)}
                />
                <span className="slider round"></span>
              </label>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
};

export default Modules;
