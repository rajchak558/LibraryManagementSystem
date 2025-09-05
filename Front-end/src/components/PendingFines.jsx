import React from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./styles/MemberDashboard.css"; // shared sidebar/dashboard styles
import Sidebar from "./Sidebar";
import "./styles/PendingFines.css";    

function PendingFines() {
  const location = useLocation();
  const profileName =
  location.state?.profileName || localStorage.getItem("profileName") || "Member User";
  const navigate = useNavigate();
  const fines = [
    {
      isbn: "978-0132350884",
      title: "Clean Code",
      author: "Robert C. Martin",
      borrowedDate: "2025-08-15",
    //   returnDate: "2025-09-15",
      status: "Overdue",
      fine: 50,
    },
    {
      isbn: "978-0262033848",
      title: "Introduction to Algorithms",
      author: "Cormen",
      borrowedDate: "2025-08-20",
    //   returnDate: "2025-09-10",
      status: "Returned",
      fine: 0,
    },
    {
      isbn: "978-1491950296",
      title: "Site Reliability Engineering",
      author: "Betsy Beyer",
      borrowedDate: "2025-07-05",
    //   returnDate: "2025-07-20",
      status: "Overdue",
      fine: 100,
    },
  ];

  return (
<div className="page-container">
      <Header />
    <div className="member-dashboard">
      {/* Sidebar */}
          <Sidebar profileName={profileName} />

      {/* Main Content */}
      <main className="main-content2">
        <div className="pending-fines-container">
        <div className="dashboard-header-mid">
          <h2>Pending Fines</h2>
          <p>Track and manage your fines</p>
        </div>

        {/* Fine Cards */}
        <div className="fines-list">
          {fines.map((fine, index) => (
            <div key={index} className="fine-card">
              <h3>{fine.title}</h3>
              <p><strong>Author:</strong> {fine.author}</p>
              <p><strong>ISBN:</strong> {fine.isbn}</p>
              <p><strong>Borrowed:</strong> {fine.borrowedDate}</p>
              {/* <p><strong>Return:</strong> {fine.returnDate}</p> */}
              <p className={`status ${fine.status.toLowerCase()}`}>
                {fine.status}
              </p>
              {fine.fine > 0 && (
                <p className="fine-amount">Fine: ₹{fine.fine}</p>
              )}
            </div>
          ))}
        </div>
        </div>
      </main>
    </div>
    <Footer />
</div>
  );
}

export default PendingFines;
