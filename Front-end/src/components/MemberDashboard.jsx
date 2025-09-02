// components/AdminDashboard.jsx
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { User, BookOpen, Wallet, Lock, Settings, HelpCircle, LogOut, LayoutDashboard } from "lucide-react";
import "./styles/MemberDashboard.css";

function MemberDashboard() {
    const location = useLocation();
    const profileName = location.state?.profileName || "Member User";

    return (
        <div className="page-container">
            <Header />

            <div className="member-dashboard">
                {/* Sidebar */}
                <aside className="member-dashboard-sidebar">
                              <button className="edit-profile">
                                <User size={18} /> Edit Profile
                            </button>
                    <h3><LayoutDashboard size={22}/>Dashboard</h3>
                    
                <div className="menu">
                    <h3>Menu</h3>
                    <ul>
                    <li><BookOpen size={18} /> Borrowing History</li>
                    <li><Wallet size={18} /> Fines</li>
                    <li><Lock size={18} /> Change Password</li>
                    </ul>
                </div>

                <div className="preferences">
                    <h3>Preferences</h3>
                    <ul>
                    <li><Settings size={18} /> Account</li>
                    <li><HelpCircle size={18} /> Help & Support</li>
                    <li><LogOut size={18} /> Log Out</li>
                    </ul>
                </div>
                </aside>

                <main className="main-content">
                    <h2>Welcome, <strong>{profileName}</strong> 🎉</h2>
                    <p>Here you can view your borrowing history, check fines, and manage your account preferences with ease.</p>
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default MemberDashboard;