
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./styles/StaffDashboard.css";
import {
  User,
  BookOpen,
  Wallet,
  Lock,
  Settings,
  HelpCircle,
  LogOut,
  LayoutDashboard,
} from "lucide-react";

function StaffDashboard() {
  const location = useLocation();
  const navigate = useNavigate();

  const profileName = location.state?.profileName || "Unknown Staff";
  const staffRole = location.state?.staffRole || "Role not specified";

  // ✅ FIX: handleLogout added
  const handleLogout = () => {
    navigate("/login"); // or any logout route
  };

  return (
    <div className="dashboard-page">
      <Header />

      {/* Wrapper for sidebar + main content */}
      <div className="dashboard-container">
        <aside className="member-dashboard-sidebar">
          <h2>{profileName}</h2>
          <button className="edit-profile">
            <User size={18} /> Edit Profile
          </button>

          <h3>
            <LayoutDashboard size={22} /> Dashboard
          </h3>

          <div className="menu">
            <h3>Menu</h3>
            <ul>
              <li>
                <BookOpen size={18} /> Borrowing History
              </li>
              <li>
                <Wallet size={18} /> Fines
              </li>
              <li>
                <Lock size={18} /> Change Password
              </li>
            </ul>
          </div>

          <div className="preferences">
            <h3>Preferences</h3>
            <ul>
              <li>
                <Settings size={18} /> Account
              </li>
              <li>
                <HelpCircle size={18} /> Help & Support
              </li>
              <li>
                <button className="logout-btn" onClick={handleLogout}>
                  <LogOut size={18} /> Log Out
                </button>
              </li>
            </ul>
          </div>
        </aside>

        <main className="main-content">
          <h2>Staff Dashboard</h2>
          <p>
            Welcome, <strong>{profileName}</strong>! You are logged in as:{" "}
            <strong>{staffRole}</strong>
          </p>
          <p>Here you will manage books, members, and other staff tasks.</p>

          {/* Transparent boxes */}
          <div className="dashboard-boxes">
            <div
              className="dashboard-box"
              onClick={() => navigate("/staff/managemembers")}
            >
              <h4>Manage Members</h4>
              <br />
              <h6>Edit every detail of members</h6>
            </div>

            <div
              className="dashboard-box"
              onClick={() => navigate("/staff/managebooks")}
            >
              <h4>Manage Store</h4>
              <br />
              <h6>Edit the details of books</h6>
            </div>

            <div className="dashboard-box">
              <h4>Manage Monetary</h4>
              <br />
              <h6>Edit monetary issues</h6>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}


export default StaffDashboard;
