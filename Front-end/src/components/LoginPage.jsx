import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./styles/LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const role = location.state?.role || "User"; // default role

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Logging in as ${role} with:`, email, password);

    // Example authentication logic
    if (role === "Admin") {
      navigate("/admin/dashboard", { state: { profileName: email } });
    } else {
      alert("Redirecting to Member Dashboard (not implemented yet)");
      // navigate("/member/dashboard", { state: { profileName: email } });
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
          <button type="submit">Login</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
