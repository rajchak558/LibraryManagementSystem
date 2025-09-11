import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import "./styles/MemberDashboard.css";
import { BookOpen, Wallet, LayoutDashboard } from "lucide-react";

function MemberDashboard() {
  const location = useLocation();
  const navigate = useNavigate();

  const profileName = location.state?.profileName || "Member User";

  // Store name for refresh persistence
  if (location.state?.profileName) {
    localStorage.setItem("profileName", location.state.profileName);
  }

  const handleSignOut = () => {
    navigate("/login-intimation");
  };

  return (
    <div className="page-container">
      <Header isDashboard={true} onSignOut={handleSignOut} />

      <div className="member-1">
        <Sidebar profileName={profileName} />

        <main className="main-content1">
          <div className="dashboard-header-main">
            <h2>Welcome back, {profileName} 👋</h2>
            <p>Here’s what’s happening with your library account today.</p>
          </div>

          <div className="quick-stats">
            <div
              className="stat-card"
              onClick={() => navigate("/borrowed-books")}
              style={{ cursor: "pointer" }}
            >
              <BookOpen size={34} />
              <h3>3</h3>
              <p>Books Borrowed</p>
            </div>

            <div
              className="stat-card"
              onClick={() => navigate("/pending-fines")}
              style={{ cursor: "pointer" }}
            >
              <Wallet size={34} />
              <h3>₹50</h3>
              <p>Pending Fines</p>
            </div>

            <div
              className="stat-card"
              onClick={() => navigate("/total-borrowed")}
              style={{ cursor: "pointer" }}
            >
              <LayoutDashboard size={34} />
              <h3>12</h3>
              <p>Total Borrowed</p>
            </div>
          </div>

          <div className="alerts">
            <h3>⏳ Alerts</h3>
            <div className="alert-card">
              <p>⚠️ “Data Structures in Java” is due in 2 days!</p>
            </div>
            <div className="alert-card">
              <p>📕 “System Design Basics” is overdue by 1 day!</p>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default MemberDashboard;
