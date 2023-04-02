import React from 'react';
import './Input.css'

function Input(props) {
  return (
    <div className="form-group">
      <div className="form-header">
        <label className='title-input' htmlFor={props.id}>{props.title}</label>
      </div>
      <div className="form-input-container">
        <input type="text" id={props.id} name={props.name} className="form-input" placeholder={props.placeholder} />
      </div>
    </div>
  );
}

export default Input;


