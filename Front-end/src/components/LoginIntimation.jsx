import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useNavigate } from "react-router-dom";
import "./styles/LoginIntimation.css";

function LoginIntimation() {
  const navigate = useNavigate();

  return (
    <div className="login-intimation">
      <Header />

      <main className="main-content">
        <h2>Login Portal</h2>
        <p>Please choose your login type</p>

        <div className="login-options">
          <div className="login-card">
            <h3>Member Login</h3>
            <button
              className="login-btn"
              onClick={() => navigate("/login/member", { state: { role: "Member" } })}
            >
              Login as Member
            </button>
          </div>

          <div className="login-card">
            <h3>Admin Login</h3>
            <button
              className="login-btn"
              onClick={() => navigate("/login/admin", { state: { role: "Admin" } })}
            >
              Login as Admin
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default LoginIntimation;