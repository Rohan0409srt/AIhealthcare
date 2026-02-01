import "../CSS/DoctorDashboard.css";

function DoctorDashboard() {
  const doctorEmail = localStorage.getItem("doctorAuth");

  const handleLogout = () => {
    localStorage.removeItem("doctorAuth");
    window.location.href = "/doctor-login";
  };

  return (
    <div className="doctor-dashboard-container">
      <div className="doctor-dashboard-card">
        <h2>Doctor Dashboard</h2>
        <p>Welcome, {doctorEmail}</p>

        <div className="doctor-actions">
          <button>View Patients</button>
          <button>View Patient Documents</button>
          <button>View ECG Alerts</button>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default DoctorDashboard;
