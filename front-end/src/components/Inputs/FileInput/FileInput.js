import React, { useRef, useState } from 'react';
import './FileInput.css';

function FileInput(props) {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    setFiles([...files, ...Array.from(event.target.files)]);
  };

  const handleRemoveFile = (fileName) => {
    setFiles(files.filter(file => file.name !== fileName));
  }

  return (
    <div className="right-column">
      <div className="file-input-wrapper">
        <div className='file-content'>
          <div className={props.className}>
            <h2>Adicionar Arquivos</h2>
            <p>Supported files: "PNG, TIFF, JPG"</p>
            <button onClick={handleButtonClick} className="file-input-button">
              Enviar
            </button>
            <input
              type="file"
              className="file-input"
              ref={fileInputRef}
              multiple
              onChange={handleFileChange}
              accept="image/png,image/tiff,image/jpeg"
            />
          </div>
        </div>
      </div>
      <ul>
      {files.map((file) => (
        <li className='name-file' key={file.name}>
          <img src='/images/icon-file.svg' alt="icon-file" />
          <p className="file-name">{file.name}</p>
          <img src='/images/icon-remove-black.svg' alt="icon-remove" onClick={() => handleRemoveFile(file.name)} />
        </li>
      ))}
      </ul>
    </div>
  );
}

export default FileInput;
