import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      {/* LEFT: LOGO */}
      <div className="logo">❤️ AI HeartCare</div>

      {/* RIGHT: NAV + BUTTONS */}
      <div className="nav-right">
        <ul className="nav-links">
          <li onClick={() => navigate("/")}>Home</li>
          <li>About</li>
        </ul>

        {/* ADMIN LOGIN BUTTON */}
       <div className="login-dropdown">
        <span className="login-text">Login</span>
        <div className="dropdown-menu">
          <div className="dropdown-item" onClick={() => navigate("/doctor-login")}>
            Doctor Login
          </div>
          <div className="dropdown-item" onClick={()=>navigate("/patient-login")}
          >
            Patient Login
          </div>
        </div>

       </div>
      </div>
    </nav>
  );
}

export default Navbar;
