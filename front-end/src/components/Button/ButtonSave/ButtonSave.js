import React, { useRef } from 'react';
import './ButtonSave.css';

function ButtonSave(props) {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="button-save">
      <button onClick={handleButtonClick} className="file-button">
        Salvar
      </button>
      <input type="submit" className="file-input" ref={fileInputRef} />
    </div>
  );
}

export default ButtonSave;
