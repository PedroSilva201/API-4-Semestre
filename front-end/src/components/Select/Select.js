import React, { useState } from 'react';
import './Select.css';

function Select(props) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  function handleOptionSelect(event) {
    const selectedOption = event.target.value;
    setSelectedOptions([...selectedOptions, selectedOption]);
  }

  function handleOptionRemove(indexToRemove) {
    const updatedOptions = selectedOptions.filter((_, index) => index !== indexToRemove);
    setSelectedOptions(updatedOptions);
  }

  return (
    <div className="select-container-options">
      <label className='label-select' htmlFor={props.id}>{props.title}</label>
      <select id={props.id} className={props.className} onChange={handleOptionSelect}>
        {props.options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className='options-order'>
        {selectedOptions.map((option, index) => (
          <div key={option} className="selected-option">
            <span>{option}</span>
            <button className="button-remove" onClick={() => handleOptionRemove(index)}>
              <img src='/images/icon-remove-white.svg' alt="icon-remove" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Select;
