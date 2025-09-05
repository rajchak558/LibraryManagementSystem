// components/MemberDashboard.jsx
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
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
import "./styles/MemberDashboard.css";

function MemberDashboard() {
    const location = useLocation();
    const navigate = useNavigate();
    const [showBorrowedBooks, setShowBorrowedBooks] = useState(false);
    const profileName = location.state?.profileName || "Member User";

    // ✅ Define logout function
    const handleLogout = () => {
        navigate("/", { replace: true }); // send user back to login page
    };

    return (
        <div className="page-container">
            <Header />

            <div className="member-dashboard">
                {/* Sidebar */}
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
                    {/* Top: Welcome Section */}
                    <div className="dashboard-header">
                        <h2>Welcome back, {profileName} 👋</h2>
                        <p>Here’s what’s happening with your library account today.</p>
                    </div>

                    {/* Quick Stats */}
                    <div className="quick-stats">
                        {/* Books Borrowed (toggleable) */}
                        <button
                            className="bttn-card"
                            onClick={() => setShowBorrowedBooks(!showBorrowedBooks)}
                        >
                            <BookOpen size={34} />
                            <h3>3</h3>
                            <p>Books Borrowed</p>
                        </button>

                        {/* Pending Fines */}
                        <div className="stat-card">
                            <Wallet size={34} />
                            <h3>₹50</h3>
                            <p>Pending Fines</p>
                        </div>

                        {/* Total Borrowed */}
                        <div className="stat-card">
                            <LayoutDashboard size={34} />
                            <h3>12</h3>
                            <p>Total Borrowed</p>
                        </div>
                    </div>

                    {/* Conditionally show Borrowed Books */}
                    {showBorrowedBooks && (
                        <div className="section borrowed-books">
                            <h3>📖 Currently Borrowed Books</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>ISBN</th>
                                        <th>Title</th>
                                        <th>Author</th>
                                        <th>Borrowed Date</th>
                                        <th>Due Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>978-0132350884</td>
                                        <td>Clean Code</td>
                                        <td>Robert C. Martin</td>
                                        <td>Aug 15, 2025</td>
                                        <td>Sep 15, 2025</td>
                                        <td>
                                            <span className="status on-time">On Time</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>978-0262033848</td>
                                        <td>Introduction to Algorithms</td>
                                        <td>Cormen</td>
                                        <td>Aug 20, 2025</td>
                                        <td>Sep 10, 2025</td>
                                        <td>
                                            <span className="status overdue">Overdue</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Alerts Section */}
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
