// components/AdminDashboard.jsx
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function StaffDashboard() {
  const location = useLocation();
  const profileName = location.state?.profileName || "Staff User";

  return (
    <div className="page-container">
      <Header />
      <main className="main-content">
        <h2>Staff Dashboard</h2>
        <p>Welcome, <strong>{profileName}</strong> 🎉</p>
      </main>
      <Footer />
    </div>
  );
}

export default StaffDashboard;