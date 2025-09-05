import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./styles/LoginPage.css"; // reuse same css

function SignUp() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("Member"); // default Member

  const navigate = useNavigate();

  // Function to encode data to Base64
  const encodeBase64 = (str) => {
    return btoa(unescape(encodeURIComponent(str)));
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Encode all data before sending to backend
    const userData = {
      id: encodeBase64(id),
      name: encodeBase64(name),
      email: encodeBase64(email),
      phone: encodeBase64(phone),
      address: encodeBase64(address),
      password: encodeBase64(password),
      role: encodeBase64(role),
    };

    console.log("Encoded Signup Data:", userData);

    // 🚀 Example: Send to backend (POST API)
    // fetch("/api/signup", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(userData),
    // });

    // Redirect to login page with role info
    navigate("/login", { state: { role } });
  };

  return (
    <div className="page-container">
      <Header />
      <div className="login-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="User ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="role-dropdown"
            required
          >
            <option value="Member">Member</option>
            <option value="Staff">Staff</option>
          </select>

          <button type="submit">Sign Up</button>
        </form>

        <div className="signup-link">
          <span>Already have an account?</span>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/login");
            }}
            className="signup-btn"
          >
            Login
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
