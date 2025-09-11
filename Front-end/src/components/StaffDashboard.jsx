import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./styles/StaffDashboard.css";

function StaffDashboard() {
  const location = useLocation();
  const navigate = useNavigate();

  const profileName = location.state?.profileName || "Unknown Staff";

  const handleSignOut = () => {
    navigate("/login-intimation");
  };

  return (
    <div className="dashboard-page">
      <Header isDashboard={true} onSignOut={handleSignOut} />

      <div className="dashboard-container">
        <main className="main-content">
          <br />
          <h2>Staff Dashboard</h2>
          <p>
            Welcome, <strong>{profileName}</strong>!
          </p>
          <p>Here you will manage books, members, and other staff tasks.</p>

          <div className="dashboard-boxes">
            <div
              className="dashboard-box"
              onClick={() => navigate("/staff/managemembers")}
            >
              <h4>Manage Members</h4>
              <h6>Edit every detail of members</h6>
            </div>

            <div
              className="dashboard-box"
              onClick={() => navigate("/staff/managebooks")}
            >
              <h4>Manage Store</h4>
              <h6>Edit the details of books</h6>
            </div>

            <div className="dashboard-box">
              <h4>Manage Monetary</h4>
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
