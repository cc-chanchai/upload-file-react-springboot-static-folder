import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import UploadFiles from './component/UploadFiles'

function App() {
    return(
      <div className="container" style={{ width: "600px"}}>
        <div style={{ margin: "20px"}}>
          <h3>React SpringBoot Upload File</h3>
        </div>
        <UploadFiles />
      </div>
    )
  }

export default App;
