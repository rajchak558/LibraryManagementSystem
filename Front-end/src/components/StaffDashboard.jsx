import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./styles/StaffDashboard.css"; // CSS file

function StaffDashboard() {
  const location = useLocation();
  const profileName = location.state?.profileName || "Unknown Staff";
  const staffRole = location.state?.staffRole || "Role not specified";

  return (
    <div className="dashboard-page">
      <Header />
      <div className="member-dashboard">{/* Sidebar can go here later */}</div>

      <main className="main-content">
        <h2>Staff Dashboard</h2>
        <p>
          Welcome, <strong>{profileName}</strong>! You are logged in as:{" "}
          <strong>{staffRole}</strong>
        </p>
        <p>Here you will manage books, members, and other staff tasks.</p>

        {/* Transparent boxes */}
        <div className="dashboard-boxes">
          <div className="dashboard-box">
            <h4>Manage Members</h4><br></br>
            <h6>Edit every detail of members</h6></div>
          <div className="dashboard-box">
            <h4>Manage Store</h4><br></br>
            <h6>Edit the details of books</h6></div>
          <div className="dashboard-box">
            <h4>Manage Monetary</h4><br></br>
            <h6>Edit monetary issues</h6>
            <h6></h6></div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default StaffDashboard;
