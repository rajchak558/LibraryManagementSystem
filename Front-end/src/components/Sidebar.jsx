// components/Sidebar.jsx
import { useNavigate } from "react-router-dom";
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
// import "./styles/MemberDashboard.css";
import "./styles/Sidebar.css";

export default function Sidebar({ profileName = "Member User" }) {
  const navigate = useNavigate();

  return (
    <aside className="member-dashboard-sidebar">
       <div className="profile-section">
        <h2>{profileName}</h2>
   
      <button className="edit-profile">
        <User size={18} /> Edit Profile
      </button>
</div>
      <div className="menu-section">
        <h2>
          <LayoutDashboard size={22} /> Dashboard
        </h2>
        <h3>Menu</h3>
        <ul>
          <li onClick={() => navigate("/total-borrowed")}>
            <BookOpen size={18} /> Borrowing History
          </li>
          <li onClick={() => navigate("/pending-fines")}>
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
          <li onClick={() => navigate("/")}>
            <LogOut size={18} /> Log Out
          </li>
        </ul>
      </div>
    </aside>
  );
}
