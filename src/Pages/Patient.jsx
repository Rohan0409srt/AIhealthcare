import { useState, useEffect } from "react";
import "../CSS/Patient.css";

function PatientLogin() {
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

  const patients = JSON.parse(localStorage.getItem("patients")) || [];

  const validPatient = patients.find(
    (p) =>
      p.email === email.trim() &&
      p.password === password.trim()
  );

  if (!validPatient) {
    alert("Invalid email or password");
    return;
  }

  localStorage.setItem("patientAuth", email.trim());
window.location.href = "/patient-documents";

};


  return (
    <div className="patient-login-container">
      <div className="patient-login-card">
        <h2>Patient Login</h2>
        <p>Access your health records securely</p>

        <input
          type="email"
          placeholder="Patient Email"
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

        {/* REGISTER LINK */}
        <p style={{ marginTop: "12px", fontSize: "14px" }}>
          New patient?{" "}
          <span
            style={{
              color: "#16a34a",
              cursor: "pointer",
              fontWeight: "600",
            }}
            onClick={() => (window.location.href = "/patient-register")}
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
}

export default PatientLogin;
