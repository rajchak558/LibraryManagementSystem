import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./styles/LoginPage.css";

function Entity() {
  const location = useLocation();
  const navigate = useNavigate();

  // username and role come from navigation state
  const { username, role } = location.state || {};

  // get token from localStorage
  const token = localStorage.getItem("token");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  async function handleEntity(event) {
    event.preventDefault();

    if (!token) {
      alert("Authentication token missing. Please login again.");
      navigate("/login-intimation");
      return;
    }

    try {
      // Use backticks for template string interpolation
      const url =`http://localhost:8080/entity/save-entity?token=${token}`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
                },
    body: JSON.stringify({ name, email, phone }),
            });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Failed to save entity data");
  }
  console.log(response);
  alert("Entity created!");

  if (role === "Staff") {
    navigate("/staff/dashboard", { state: { profileName: username, token } });
  } else if (role === "Member") {
    navigate("/member/dashboard", { state: { profileName: username, token } });
  } else {
    navigate("/login-intimation");
  }
} catch (error) {
  alert("Error: " + error.message);
}
    }

return (
  <div className="page-container">
    <Header />
    <div className="login-box">
      <h2>Enter Details</h2>
      <p>Signed up as: <strong>{username}</strong></p>
      <form onSubmit={handleEntity}>
        <input
          type="text" placeholder="Name" value={name}
          onChange={(e) => setName(e.target.value)} required
        />
        <input
          type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} required
        />
        <input
          type="tel" placeholder="Phone" value={phone}
          onChange={(e) => setPhone(e.target.value)} required
        />
        <button type="submit">Save Entity</button>
      </form>
    </div>
    <Footer />
  </div>
);
}

export default Entity;