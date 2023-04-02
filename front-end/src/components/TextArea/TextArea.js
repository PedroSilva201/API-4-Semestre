import React from 'react';
import './TextArea.css';

const TextArea = ({ value, onChange, title, ...rest }) => {
  return (
    <div className="textarea-wrapper">
      <label className='label-text'>Descrição</label>
      <textarea
        value={value}
        onChange={onChange}
        placeholder="Dê mais detalhes sobre sua solicitação"
        className="textarea"
        {...rest}
      />
    </div>
  );
};

export default TextArea;
