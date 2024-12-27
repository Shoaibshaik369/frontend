import React, { useState } from 'react';
import './Backuprestore.css'; // Include CSS for your global styles
import './Captcha_settings.css'; // New CSS for Captcha Settings styles

const CaptchaSettings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([
    { id: 1, name: 'User Login', enabled: false },
    { id: 2, name: 'Staff Login', enabled: false },
    { id: 3, name: 'Online Appointment', enabled: false },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handleToggle = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, enabled: !item.enabled } : item
      )
    );
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="captcha-container">
      <h1>Captcha Settings</h1>
      <div className="captcha-search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="captcha-toolbar">
        <button>📋</button>
        <button>📄</button>
        <button>📤</button>
        <button>🖨️</button>
      </div>
      <table className="captcha-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={item.enabled}
                    onChange={() => handleToggle(item.id)}
                  />
                  <span className="slider"></span>
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="captcha-pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          &lt;
        </button>
        <span>
          Page {currentPage} of {Math.ceil(filteredData.length / itemsPerPage)}
        </span>
        <button
          disabled={currentPage === Math.ceil(filteredData.length / itemsPerPage)}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CaptchaSettings;
