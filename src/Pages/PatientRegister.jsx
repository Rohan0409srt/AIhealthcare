import { useState, useEffect } from "react";
import "../CSS/PatientRegister.css";

function PatientRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let result = "";
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(result);
    setCaptchaInput("");
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleRegister = () => {
    if (!name || !email || !password) {
      alert("All fields required");
      return;
    }

    if (captchaInput !== captcha) {
      alert("Captcha incorrect");
      generateCaptcha();
      return;
    }

    const patients = JSON.parse(localStorage.getItem("patients")) || [];

    const alreadyExists = patients.find((p) => p.email === email);
    if (alreadyExists) {
      alert("Patient already registered");
      return;
    }

    patients.push({ name, email, password });
    localStorage.setItem("patients", JSON.stringify(patients));

    alert("Registration successful. Please login.");
    window.location.href = "/patient-login";
  };

  return (
    <div className="patient-register-container">
      <div className="patient-register-card">
        <h2>Patient Registration</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="captcha-wrapper">
          <div className="captcha-text">{captcha}</div>
          <button onClick={generateCaptcha}>↻</button>
        </div>

        <input
          type="text"
          placeholder="Enter captcha"
          value={captchaInput}
          onChange={(e) => setCaptchaInput(e.target.value)}
        />

        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}

export default PatientRegister;
