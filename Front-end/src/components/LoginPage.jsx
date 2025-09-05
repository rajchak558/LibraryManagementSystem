import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./styles/LoginPage.css";
import { Link } from "react-router-dom";


function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [staffRole, setStaffRole] = useState(""); // For staff dropdown

  const location = useLocation();
  const navigate = useNavigate();

  const role = location.state?.role || "User";

  // Function to encode data to Base64
  const encodeBase64 = (str) => {
    return btoa(unescape(encodeURIComponent(str)));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Encode credentials before sending
    const encodedEmail = encodeBase64(email);
    const encodedPassword = encodeBase64(password);

    console.log(`Logging in as ${role}`);
    console.log("Encoded Email:", encodedEmail);
    console.log("Encoded Password:", encodedPassword);

    if (role === "Staff") {
      if (!staffRole) {
        alert("Please select a Staff Role before logging in.");
        return;
      }
      navigate("/staff/dashboard", { state: { profileName: email, staffRole } });
    } else if (role === "Member") {
      navigate("/member/dashboard", { state: { profileName: email } });
    } else {
      alert("Redirecting to Member Dashboard (not implemented yet)");
    }
  };

  return (
    <div className="page-container">
      <Header />
      <div className="login-box">
        <h2>{role} Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {/* Show dropdown only if Staff login */}
          {role === "Staff" && (
            <select
              value={staffRole}
              onChange={(e) => setStaffRole(e.target.value)}
              className="role-dropdown"
              required
            >
              <option value="">Select Role</option>
              <option value="Librarian">Librarian</option>
              <option value="Assistant">Assistant</option>
              <option value="Manager">Manager</option>
            </select>
          )}

          <button type="submit">Login</button>
        </form>
          <br></br>
        <div className="signup-link">
          <span>Don't have an account? </span>
          <Link to="/signup" className="signup-btn">Sign Up</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
