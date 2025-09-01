// components/HomePage.jsx
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
//  import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage">
      <Header />

      <main className="main-content">
        <h1>Welcome to  Library</h1>
        <p>
          This is the gateway to your knowedge, anytime anywhere.. Here learning is made simple with easy access to 
          books at your fingertips.. A smarter way to discover , borrow and grow ... All in one place
          your library;
          
        </p>

        <div className="button-group">
          <button className="main-btn">User's Area</button>
          <button className="main-btn">Catalog</button>
          <button className="main-btn">Notice</button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
