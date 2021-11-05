import React from "react";

import UploadFiles from "./components/Upload-files.component";
import "./App.css";


function FilesPrueba() {
  return (
    <div className="container" style={{ width: "600px" }}>
      <div style={{ margin: "20px" }}>
        <h3>bezkoder.com</h3>
        <h4>React upload Files</h4>
      </div>

      <UploadFiles/>
    </div>
  );
}

export default FilesPrueba;