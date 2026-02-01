import { useState } from "react";
import "../CSS/Patient.css";

function PatientDocuments() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const handleUpload = () => {
    if (files.length === 0) {
      alert("Please select at least one document");
      return;
    }

    // demo: save file names only
    const uploadedDocs = files.map((file) => file.name);
    localStorage.setItem("patientDocuments", JSON.stringify(uploadedDocs));

    alert("Documents uploaded successfully (demo)");
  };

  return (
    <div className="patient-login-container">
      <div className="patient-login-card">
        <h2>Upload Patient Documents</h2>
        <p>Please upload your medical reports</p>

        <input
          type="file"
          multiple
          onChange={handleFileChange}
        />

        <ul style={{ textAlign: "left", marginTop: "10px" }}>
          {files.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>

        <button onClick={handleUpload} style={{ marginTop: "15px" }}>
          Upload Documents
        </button>
      </div>
    </div>
  );
}

export default PatientDocuments;

