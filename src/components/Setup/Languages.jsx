import React, { useState } from 'react';
import './Languages.css';

const Languages = () => {
  const [languages, setLanguages] = useState([
    { sno: 1, language: 'English', countryCode: 'US', isRTL: false },
    { sno: 2, language: 'Arabic', countryCode: 'SA', isRTL: true },
    { sno: 3, language: 'France', countryCode: 'FR', isRTL: true },
    { sno: 4, language: 'Afghanistan', countryCode: 'AF', isRTL: true },
    { sno: 5, language: 'Albania', countryCode: 'AL', isRTL: true },
    { sno: 6, language: 'Andorra', countryCode: 'AD', isRTL: true },
    { sno: 7, language: 'Angola', countryCode: 'AO', isRTL: true },
    { sno: 8, language: 'Argentina', countryCode: 'AR', isRTL: true },
    { sno: 9, language: 'Armenia', countryCode: 'AM', isRTL: true },
    { sno: 10, language: 'Australia', countryCode: 'AU', isRTL: true },
    { sno: 11, language: 'Austria', countryCode: 'AT', isRTL: true },
    { sno: 12, language: 'Azerbaijan', countryCode: 'AZ', isRTL: true },
    { sno: 13, language: 'Bahamas', countryCode: 'BS', isRTL: true },
    { sno: 14, language: 'Bahrain', countryCode: 'BH', isRTL: true },
    { sno: 15, language: 'Bangladesh', countryCode: 'BD', isRTL: true },
    { sno: 16, language: 'Barbados', countryCode: 'BB', isRTL: true },
    { sno: 17, language: 'Belarus', countryCode: 'BY', isRTL: true },
    { sno: 18, language: 'Belgium', countryCode: 'BE', isRTL: true },
    { sno: 19, language: 'Belize', countryCode: 'BZ', isRTL: true },
    { sno: 20, language: 'Benin', countryCode: 'BJ', isRTL: true },
    { sno: 21, language: 'Bhutan', countryCode: 'BT', isRTL: true },
    { sno: 22, language: 'Bolivia', countryCode: 'BO', isRTL: true },
    { sno: 23, language: 'Brazil', countryCode: 'BR', isRTL: true },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newLanguage, setNewLanguage] = useState({
    language: '',
    countryCode: '',
    isRTL: false,
  });

  const handleAddLanguage = () => {
    if (!newLanguage.language || !newLanguage.countryCode)
      return alert('Please fill out all fields');
    setLanguages([
      ...languages,
      {
        ...newLanguage,
        sno: languages.length + 1,
        isRTL: newLanguage.isRTL,
        isEnabled: false,
      },
    ]);
    setNewLanguage({ language: '', countryCode: '', isRTL: false });
    setShowForm(false);
  };

  const handleCheckboxChange = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index].isRTL = !updatedLanguages[index].isRTL;
    setLanguages(updatedLanguages);
  };

  return (
    <div className='languages-container'>
      <div className='header'>
        <h1>Languages</h1>
        <button className='add-button' onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Close Form' : 'Add Language'}
        </button>
      </div>

      {showForm && (
        <div className='form-modal'>
          <div className='form-content'>
            <h2>Add New Language</h2>
            <input
              type='text'
              placeholder='Language Name'
              value={newLanguage.language}
              onChange={(e) =>
                setNewLanguage({ ...newLanguage, language: e.target.value })
              }
            />
            <input
              type='text'
              placeholder='Country Code'
              value={newLanguage.countryCode}
              onChange={(e) =>
                setNewLanguage({ ...newLanguage, countryCode: e.target.value })
              }
            />
            <label>
              RTL
              <input
                type='checkbox'
                checked={newLanguage.isRTL}
                onChange={(e) =>
                  setNewLanguage({ ...newLanguage, isRTL: e.target.checked })
                }
              />
            </label>
            <button className='submit-button' onClick={handleAddLanguage}>
              Add
            </button>
          </div>
        </div>
      )}

      <div className='table-container'>
        <table className='languages-table'>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Language</th>
              <th>Country Code</th>
              <th>Is RTL</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {languages.map((lang, index) => (
              <tr key={index}>
                <td>{lang.sno}</td>
                <td>
                  <span className='language-info'>
                    <img
                      src={`https://flagcdn.com/w40/${lang.countryCode.toLowerCase()}.png`}
                      alt={`${lang.language} flag`}
                      className='flag-icon'
                    />
                    {lang.language}
                  </span>
                </td>
                <td>{lang.countryCode}</td>
                <td>
                  <input
                    type='checkbox'
                    checked={lang.isRTL}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </td>
                <td>
                  <button className='toggle-button'>
                    {lang.isRTL ? 'Disable' : 'Enable'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Languages;
