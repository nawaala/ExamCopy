import React, { useState } from 'react';
import './WebsiteAccessibility.css';
import axios from 'axios';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const AccessibilityOptions = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(opt => opt !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleSave = () => {
    // Send the selected options to the backend
    axios.post('http://localhost:8000/Accessibility/accessibility', { selectedOptions })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };


  return (
    <div className="accessibility-options">
      <Header/>
      <h2 className='accessibility-title'>Website Accessibility</h2>
      <p>Select preferences below:</p>
      <div className="options-container">
        <div className="option">
          <label>
            <input
              type="checkbox"
              checked={selectedOptions.includes('Option 1')}
              onChange={() => handleOptionChange('Option 1')}
            />
            Option 1
          </label>
        </div>
        <div className="option">
          <label>
            <input
              type="checkbox"
              checked={selectedOptions.includes('Option 2')}
              onChange={() => handleOptionChange('Option 2')}
            />
            Option 2
          </label>
        </div>
        <div className="option">
          <label>
            <input
              type="checkbox"
              checked={selectedOptions.includes('Option 3')}
              onChange={() => handleOptionChange('Option 3')}
            />
            Option 3
          </label>
        </div>
        <div className="option">
          <label>
            <input
              type="checkbox"
              checked={selectedOptions.includes('Option 4')}
              onChange={() => handleOptionChange('Option 4')}
            />
            Option 4
          </label>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <button className="save-button" onClick={handleSave}>Save</button>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer/>
    </div>
  );
};

export default AccessibilityOptions;
