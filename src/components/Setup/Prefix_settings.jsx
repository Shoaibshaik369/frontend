import React, { useState } from 'react';
import './Backuprestore.css';
import './Prefix_settings.css'; // Additional CSS for styles

const PrefixSettings = () => {
  // Define the fields and their default values
  const prefixFields = [
    { label: 'IPD No', key: 'ipdNo', defaultValue: 'IPDN' },
    { label: 'OPD No', key: 'opdNo', defaultValue: 'OPDN' },
    { label: 'IPD Prescription', key: 'ipdPrescription', defaultValue: 'IPDP' },
    { label: 'OPD Prescription', key: 'opdPrescription', defaultValue: 'OPDP' },
    { label: 'Appointment', key: 'appointment', defaultValue: 'APPN' },
    { label: 'Pharmacy Bill', key: 'pharmacyBill', defaultValue: 'PHAB' },
    { label: 'Operation Reference No', key: 'operationRefNo', defaultValue: 'OTRN' },
    { label: 'Blood Bank Bill', key: 'bloodBankBill', defaultValue: 'BLBB' },
    { label: 'Ambulance Call Bill', key: 'ambulanceCallBill', defaultValue: 'AMCB' },
    { label: 'Radiology Bill', key: 'radiologyBill', defaultValue: 'RADB' },
    { label: 'Pathology Bill', key: 'pathologyBill', defaultValue: 'PATB' },
    { label: 'OPD Checkup Id', key: 'opdCheckupId', defaultValue: 'OCID' },
    { label: 'Pharmacy Purchase No', key: 'pharmacyPurchaseNo', defaultValue: 'PHPN' },
    { label: 'Transaction ID', key: 'transactionId', defaultValue: 'TRID' },
    { label: 'Birth Record Reference No', key: 'birthRecordRefNo', defaultValue: 'BRRN' },
    { label: 'Death Record Reference No', key: 'deathRecordRefNo', defaultValue: 'DRRN' },
  ];

  // Initialize state with default values
  const [prefixes, setPrefixes] = useState(
    prefixFields.reduce((acc, field) => ({ ...acc, [field.key]: field.defaultValue }), {})
  );

  // Update state when input changes
  const handleChange = (key, value) => {
    setPrefixes((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="prefix-container">
      <h1>Prefix Settings</h1>
      <div className="prefix-scroll-container">
        {prefixFields.map((field) => (
          <div key={field.key} className="prefix-row">
            <label className="prefix-label">{field.label}</label>
            <input
              className="prefix-input"
              type="text"
              value={prefixes[field.key]}
              onChange={(e) => handleChange(field.key, e.target.value)}
            />
          </div>
        ))}
      </div>
      <button className="prefix-save-button">Save</button>
    </div>
  );
};

export default PrefixSettings;
