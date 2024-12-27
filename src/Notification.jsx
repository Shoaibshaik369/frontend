import React from 'react';

const Notification = () => {
  // Sample notification records
  const notifications = [
    { id: 1, type: 'Info', message: 'You have a new message.' },
    { id: 2, type: 'Warning', message: 'Your account will expire soon.' },
    { id: 3, type: 'Success', message: 'Your password was updated successfully.' },
    { id: 4, type: 'Error', message: 'Failed to process your request.' },
  ];

  return (
    <div style={styles.hd}>
      <h2>Notifications</h2>

      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.headerRow}>
              <th style={styles.headerCell}>ID</th>
              <th style={styles.headerCell}>Type</th>
              <th style={styles.headerCell}>Message</th>
            </tr>
          </thead>
          <tbody>
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <tr key={notification.id} style={styles.row}>
                  <td style={styles.cell}>{notification.id}</td>
                  <td style={styles.cell}>{notification.type}</td>
                  <td style={styles.cell}>{notification.message}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" style={styles.noRecord}>
                  No notifications available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Inline styles for the component
const styles = {
  tableContainer: {
    marginTop: '2rem',
    overflowX: 'auto',
  },
  hd: {
    marginTop: '3.5rem',
    marginLeft: '20.5rem'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    border: '1px solid #ddd',
  },
  headerRow: {
    backgroundColor: '#f4f4f4',
  },
  headerCell: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  row: {
    borderBottom: '1px solid #ddd',
  },
  cell: {
    border: '1px solid #ddd',
    padding: '8px',
  },
  noRecord: {
    textAlign: 'center',
    padding: '10px',
    color: '#999',
  },
};

export default Notification;
