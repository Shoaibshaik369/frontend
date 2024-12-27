import React from 'react';
import './Notifications_settings.css';

const NotificationsSettings = () => {
  const notificationEvents = [
    {
      event: 'OPD Patient Registration',
      options: { email: true, sms: false, mobileApp: true },
      sampleMessage:
        'Dear {{patient_name}} your OPD Registration at Smart Hospital is successful on date {{appointment_date}} with Patient Id {{patient_id}} and OPD No {{opdno}}',
    },
    {
      event: 'IPD Patient Registration',
      options: { email: true, sms: false, mobileApp: true },
      sampleMessage:
        'Dear {{patient_name}} your IPD Registration at Smart Hospital is successful with Patient Id {{patient_id}} and IPD No {{ipd_no}}',
    },
    {
      event: 'IPD Patient Discharge',
      options: { email: true, sms: false, mobileApp: true },
      sampleMessage:
        'IPD Patient {{patient_name}} is now discharged from Smart Hospital. Total bill amount is {{currency_symbol}}{{total_amount}}. Total paid amount is {{currency_symbol}}{{paid_amount}}. Total balance bill amount is {{currency_symbol}}{{balance_amount}}',
    },
    {
      event: 'Login Credential',
      options: { email: true, sms: false, mobileApp: false },
      sampleMessage:
        'Hello {{display_name}} your Smart Hospital login details are Url: {{url}} Username: {{username}} Password: {{password}}',
    },
    {
      event: 'Appointment Approved',
      options: { email: true, sms: false, mobileApp: true },
      sampleMessage:
        'Dear {{patient_name}} your appointment with {{staff_name}} {{staff_surname}} is confirmed on {{date}} with appointment no: {{appointment_no}}',
    },
    {
      event: 'Live Meeting',
      options: { email: true, sms: false, mobileApp: false },
      sampleMessage:
        'Dear staff, your live meeting {{title}} has been scheduled on {{date}} for the duration of {{duration}} minute.',
    },
    {
      event: 'Live Consult',
      options: { email: true, sms: false, mobileApp: true },
      sampleMessage:
        'Dear patient, your live consultation {{title}} has been scheduled on {{date}} for the duration of {{duration}} minute.',
    },
  ];

  return (
    <div className="notifications-settings">
      <h1>Notification Settings</h1>
      <table className="notification-table">
        <thead>
          <tr>
            <th>Event</th>
            <th>Option</th>
            <th>Sample Message</th>
          </tr>
        </thead>
        <tbody>
          {notificationEvents.map((event, index) => (
            <tr key={index}>
              <td>{event.event}</td>
              <td>
                <label>
                  <input type="checkbox" checked={event.options.email} readOnly /> Email
                </label>
                <label>
                  <input type="checkbox" checked={event.options.sms} readOnly /> SMS
                </label>
                <label>
                  <input type="checkbox" checked={event.options.mobileApp} readOnly /> Mobile App
                </label>
              </td>
              <td>{event.sampleMessage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NotificationsSettings;
