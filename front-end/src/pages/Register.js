import React from 'react';
import './Register.css';
import Header from '../components/Header/Header';
import Input from '../components/Inputs/Input';
import InputRadius from '../components/Inputs/InputRadius/InputRadius';
import Select from '../components/Select/Select';
import FileInput from '../components/Inputs/FileInput/FileInput';
import ButtonSave from '../components/Button/ButtonSave/ButtonSave';
import TextArea from '../components/TextArea/TextArea';

function App() {
  return (
    <html>
      <body>
        <div className='aligments'>

          <Header/>

          <div className='margem'>

              <h1 className='title'>Novo Feature/Hotfix</h1>
              
              <div className="nanana" style={{ display: 'flex', flexDirection: 'row' }}>

                  <div className='teste'>
                    <InputRadius />

                    <Input id="input1" name="primeiroInput" className="form-input" title="Título" placeholder="Insira um título para a feature ou hotfix" />
                    
                    <TextArea id="my-textarea"/>

                    <Select title="Interessados" className="my-select" id="my-select"options={[    
                            { value: 'Usuario-A', label: 'Usuário A' },
                            { value: 'Usuario-B', label: 'Usuário B' },
                            { value: 'Usuario-C', label: 'Usuário C' },        ]}
                    />
                  </div>

                  <FileInput/>
                  
              </div>
                
              <ButtonSave/>

          </div>
        </div>
      </body>
    </html>

  );
}

export default App;
