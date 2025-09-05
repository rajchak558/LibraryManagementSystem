// components/TotalBorrowed.jsx
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import "./styles/MemberDashboard.css";
import "./styles/TotalBorrowed.css";
// import {
//   User,
//   BookOpen,
//   Wallet,
//   Lock,
//   Settings,
//   HelpCircle,
//   LogOut,
//   LayoutDashboard,
// } from "lucide-react";
import "./styles/MemberDashboard.css"; // Reuse same CSS

function TotalBorrowed() {
  const location = useLocation();
  const [showBorrowedBooks, setShowBorrowedBooks] = useState(false);
  //const profileName = location.state?.profileName || "Member User";
  const profileName =
  location.state?.profileName || localStorage.getItem("profileName") || "Member User";
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <Header />

      <div className="member-dashboard">
        {/* Sidebar (reused) */}
        <Sidebar profileName={profileName} />
        {/* <aside className="member-dashboard-sidebar">
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
              <li onClick={() => navigate("/borrowing-history")}>
                <BookOpen size={18} /> Borrowing History
              </li>
              <li onClick={() => navigate("/fines")}>
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
        </aside> */}

        {/* Main Content */}
        <main className="main-content">
          <div className="dashboard-header">
            <h2>Total Borrowed Books 📚</h2>
            <p>Here’s the complete history of books you have borrowed.</p>
          </div>

          <div className="section borrowed-books">
           

            <div className="table-container">
               <h3>📖 All Borrowed Books</h3>
            <table>
              <thead>
                <tr>
                  <th>ISBN</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Borrowed Date</th>
                  <th>Returned Date</th>
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
                    <span className="status on-time">Returned</span>
                  </td>
                </tr>
                <tr>
                  <td>978-0262033848</td>
                  <td>Introduction to Algorithms</td>
                  <td>Cormen</td>
                  <td>Aug 20, 2025</td>
                  <td>-</td>
                  <td>
                    <span className="status overdue">Overdue</span>
                  </td>
                </tr>
                <tr>
                  <td>978-0131103627</td>
                  <td>The C Programming Language</td>
                  <td>Kernighan & Ritchie</td>
                  <td>July 05, 2025</td>
                  <td>July 25, 2025</td>
                  <td>
                    <span className="status on-time">Returned</span>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default TotalBorrowed;
