import React from 'react';
import './Attendance_settings.css'; // Create styles for the component

const AttendanceSettings = () => {
  const roles = [
    {
      name: 'Admin',
      attendanceTypes: ['Present (P)', 'Late (L)', 'Half Day (F)', 'Half Day Second Shift (SH)'],
    },
    {
      name: 'Accountant',
      attendanceTypes: ['Present (P)', 'Late (L)', 'Half Day (F)', 'Half Day Second Shift (SH)'],
    },
    {
      name: 'Doctor',
      attendanceTypes: ['Present (P)', 'Late (L)', 'Half Day (F)', 'Half Day Second Shift (SH)'],
    },
    {
      name: 'Radiologist',
      attendanceTypes: ['Present (P)', 'Late (L)', 'Half Day (F)', 'Half Day Second Shift (SH)'],
    },
    {
      name: 'Nurse',
      attendanceTypes: ['Present (P)', 'Late (L)', 'Half Day (F)', 'Half Day Second Shift (SH)'],
    },
    // Add more roles as needed
  ];

  return (
    <div className="attendance-settings-container">
      <h1>Attendance Settings</h1>
      {roles.map((role, index) => (
        <div className="role-container" key={index}>
          <div className="role-header">
            <h2>Role: {role.name}</h2>
            <button className="update-button">Update</button>
          </div>
          <table className="attendance-table">
            <thead>
              <tr>
                <th>Attendance Type</th>
                <th>Entry From (hh:mm:ss)</th>
                <th>Entry Upto (hh:mm:ss)</th>
                <th>Total Hour</th>
              </tr>
            </thead>
            <tbody>
              {role.attendanceTypes.map((type, idx) => (
                <tr key={idx}>
                  <td>{type}</td>
                  <td>
                    <input type="time" className="time-input" />
                  </td>
                  <td>
                    <input type="time" className="time-input" />
                  </td>
                  <td>
                    <input type="time" className="time-input" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default AttendanceSettings;
