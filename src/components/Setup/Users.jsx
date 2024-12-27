import React, { useState } from 'react';
import './Backuprestore.css';
import './Users.css';

const Users = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [tab, setTab] = useState('Patient'); // To toggle between 'Patient' and 'Staff'

  const filteredData = []; // Simulating no data available

  return (
    <div className="users-container">
      <h1>Users</h1>
      <div className="users-tabs">
        <button
          className={tab === 'Patient' ? 'active' : ''}
          onClick={() => setTab('Patient')}
        >
          Patient
        </button>
        <button
          className={tab === 'Staff' ? 'active' : ''}
          onClick={() => setTab('Staff')}
        >
          Staff
        </button>
      </div>
      <div className="users-search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="users-toolbar">
        <select>
          <option value="100">100</option>
          <option value="50">50</option>
          <option value="25">25</option>
        </select>
        <button>📋</button>
        <button>📄</button>
        <button>📤</button>
        <button>🖨️</button>
      </div>
      <table className="users-table">
        <thead>
          <tr>
            <th>Patient Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Mobile Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length === 0 ? (
            <tr>
              <td colSpan="5" className="no-data">
                <div className="no-data-container">
                  <p className="no-data-text">No data available in table</p>
                  <div className="icon-container">
                    <img
                      src="https://smart-hospital.in/shappresource/images/addnewitem.svg" // Replace this with your icon/image URL
                      alt="No data"
                    />
                  </div>
                  <p className="add-new-text">
                    &larr; Add new record or search with different criteria.
                  </p>
                </div>
              </td>
            </tr>
          ) : (
            filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.patientId}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.mobileNumber}</td>
                <td>
                  {/* Placeholder for actions */}
                  <button>Action</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="users-pagination">
        <span>Records: 0 to 0 of 0</span>
        <div className="pagination-controls">
          <button>&lt;</button>
          <button>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Users;
