import React from 'react';
import FileUpload from './components/FileUpload';
import './App.css';
import CreateArchive from './components/createArchive';
import LocalizeEntry from './components/importModule';


const App = () => (
  <div className='container mt-4'>
    <h4 className='display-4 text-center mb-4'>
      <i className='fa fa-download' /> Download Entry For Localization
    </h4>
    
    <CreateArchive />
    <br></br>
    <br></br>
    <br></br>
    <h4 className='display-4 text-center mb-4'>
      <i className='fa fa-upload' /> Upload Localized Zip File
    </h4>

    <FileUpload />
    <h4 className='display-4 text-center mb-4'>
      <i className='fa fa-globe' /> Localize Entry
    </h4>

    <LocalizeEntry />
  </div>
);

export default App;
