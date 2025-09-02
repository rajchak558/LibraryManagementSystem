// components/HomePage.jsx
import { useNavigate } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
//import "./styles/HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <Header />

      <main className="main-content">
        <h1>Welcome to Library</h1>
        <p>
          This is the gateway to your knowledge, anytime anywhere... A smarter
          way to discover, borrow and grow — all in one place, your library.
        </p>

        <div className="button-group">
          <button className="main-btn">User's Area</button>
          {/* ✅ Navigate on click */}
          <button className="main-btn" onClick={() => navigate("/catalog")}>
            Catalog
          </button>
          <button className="main-btn">Notice</button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;