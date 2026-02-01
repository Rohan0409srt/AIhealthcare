import { useState, useEffect } from "react";
import "../CSS/Doctor.css";

function DoctorLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  // generate alphanumeric captcha
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

  const handleLogin = () => {
  if (!email || !password) {
    alert("Please enter email and password");
    return;
  }

  if (captchaInput !== captcha) {
    alert("Captcha does not match");
    generateCaptcha();
    return;
  }

  // get demo doctors
  const doctors = JSON.parse(localStorage.getItem("doctors")) || [];

  const doctor = doctors.find(
    (d) =>
      d.email === email.trim() &&
      d.password === password.trim()
  );

  if (!doctor) {
    alert("Invalid doctor credentials");
    return;
  }

  // login success
  localStorage.setItem("doctorAuth", doctor.email);
  localStorage.setItem("doctorId", doctor.doctorId);

  window.location.href = "/doctor-dashboard";
};

  return (
    <div className="doctor-login-container">
      <div className="doctor-login-card">
        <h2>Doctor Login</h2>
        <p>Authorized medical professionals only</p>

        <input
          type="email"
          placeholder="Doctor Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* CAPTCHA */}
        <div className="captcha-wrapper">
          <div className="captcha-text">{captcha}</div>

          <button
            type="button"
            className="refresh-btn"
            onClick={generateCaptcha}
          >
            ↻
          </button>
        </div>

        <input
          type="text"
          placeholder="Enter captcha exactly as shown"
          value={captchaInput}
          onChange={(e) => setCaptchaInput(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default DoctorLogin;
