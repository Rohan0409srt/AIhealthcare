import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";



import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home";

// ADMIN

// DOCTOR
import DoctorLogin from "./Pages/Doctor.jsx";
import PatientLogin from "./Pages/Patient.jsx";
import PatientRegister from "./Pages/PatientRegister.jsx";
import PatientDocuments from "./Pages/PatientDocuments.jsx";
import DoctorDashboard from "./Pages/DoctorDashboard.jsx";
import { initDemoDoctor } from "./utils/initDoctorData.js";



function App() {
  useEffect(() => {
    initDemoDoctor();
  }, []);
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/patient-login" element={<PatientLogin/>}/>
        <Route path="/patient-register" element={<PatientRegister />} />
        <Route path="/patient-documents"element={<PatientDocuments />}/>
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />



      </Routes>
   </Router>

  );
}

export default App;
