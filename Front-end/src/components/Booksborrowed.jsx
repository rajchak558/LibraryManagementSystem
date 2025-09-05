// components/Booksborrowed.jsx
// import { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Header from "./Header";
// import Footer from "./Footer";
// import Sidebar from "./Sidebar";
// import "./styles/MemberDashboard.css";
// import "./styles/TotalBorrowed.css";
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

// function Booksborrowed () {
//       const location = useLocation();
//       const [showBorrowedBooks, setShowBorrowedBooks] = useState(false);
//       //const profileName = location.state?.profileName || "Member User";
//       const profileName =
//       location.state?.profileName || localStorage.getItem("profileName") || "Member User";
//       const navigate = useNavigate();
// }
// return (
//     <div className="page-container">
//         <Header />

//       <div className="member-dashboard">
//         {/* Sidebar (reused) */}
//         <Sidebar profileName={profileName} />

//         </div>
//     </div>
// );

// components/BorrowedBooks.jsx
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import "./styles/MemberDashboard.css"; // reuse styles
import "./styles/Borrowedbooks.css";
function BorrowedBooks() {
  const location = useLocation();
  const profileName =
    location.state?.profileName || localStorage.getItem("profileName") || "Member User";
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <Header />
      <div className="member-1">
        <Sidebar profileName={profileName} />

        <main className="main-content3">
          <div className="dashboard-header-main">
            <h2>📖 Currently Borrowed Books</h2>
            <p>Here’s a list of books you are currently borrowing.</p>
          </div>

          <div className="section borrowed-books">
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
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default BorrowedBooks;
