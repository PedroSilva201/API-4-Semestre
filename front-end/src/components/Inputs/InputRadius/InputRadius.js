import React, { useState } from 'react';
import './InputRadius.css'

function InputRadius() {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <button
        className={`input-option ${selectedOption === 'option1' ? 'selected' : ''}`}
        onClick={() => handleOptionClick('option1')}
      >
        Feature
      </button>
      <button
        className={`input-option ${selectedOption === 'option2' ? 'selected' : ''}`}
        onClick={() => handleOptionClick('option2')}
      >
        Hotfix
      </button>
    </div>
  );
}

export default InputRadius;
