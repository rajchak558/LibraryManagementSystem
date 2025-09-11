import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./styles/LoginPage.css";

function LoginPage({ role: propRole }) {
  const [username, setID] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(propRole || "Member"); // default role

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = { username, password, role };

    try {
      const response = await fetch("http://localhost:8080/user/log-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error("Invalid login");
      }

      // Read response as text first (to handle plain token or JSON)
      const text = await response.text();

      let data;
      try {
        data = JSON.parse(text); // Try to parse as JSON
      } catch {
        data = { token: text }; // Treat response as a token string if not JSON
      }

      console.log("Response from backend:", data);

      alert(data.message || "Login successful!");

      // Navigate based on role with optional token in state
      if (role === "Staff") {
        navigate("/staff/dashboard", { state: { profileName: username, token: data.token } });
      } else if (role === "Member") {
        navigate("/member/dashboard", { state: { profileName: username, token: data.token } });
      } else {
        navigate("/login-intimation");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="page-container">
      <Header />
      <div className="login-box">
        <h2>{role} Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setID(e.target.value)} // Correct setter here
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Role Dropdown */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="role-dropdown"
            required
          >
            <option value="Member">Member</option>
            <option value="Staff">Staff</option>
          </select>

          <button type="submit">Login</button>
        </form>
        <br />
        <div className="signup-link">
          <span>Don't have an account? </span>
          <Link to="/signup" className="signup-btn">
            Sign Up
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
