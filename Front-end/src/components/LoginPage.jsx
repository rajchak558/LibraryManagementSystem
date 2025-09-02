import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./styles/LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const role = location.state?.role || "User"; // default if not passed

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Logging in as ${role} with:`, email, password);
    // Add API call or authentication logic here
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
          <button type="submit">Login</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
