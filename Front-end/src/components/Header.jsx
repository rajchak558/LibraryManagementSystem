import { Link, useNavigate } from "react-router-dom";

function Header({ isDashboard = false }) {
  const navigate = useNavigate();

  const handleSignOut = (e) => {
    e.preventDefault();
    navigate("/login-intimation"); // redirect to LoginIntimation page
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">📚BiblioPhile's Hub</div>
        <nav className="nav-links">
          {isDashboard ? (
            <>
              <Link to="/">Home</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/login-intimation" onClick={handleSignOut}>
                Sign Out
              </Link>
            </>
          ) : (
            <>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/login-intimation">Login</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
