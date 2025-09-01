// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Common pages
import HomePage from "./components/HomePage.jsx";
/*
import LoginPage from "./components/LoginPage.jsx";
import Dashboard from "./components/Dashboard.jsx";

// Member pages
import BookCatalog from "./components/BookCatalog.jsx";
import BookDetails from "./components/BookDetails.jsx";

// Librarian/Admin pages
import ManageMembers from "./components/ManageMembers.jsx";
import ManageBooks from "./components/ManageBooks.jsx";
*/

function App() {
  return (
    <Router>
      <Routes>
        {/* Public / Common Routes */}
        <Route path="/" element={<HomePage />} />
        {/*<Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Member (Book Borrower) Routes 
        <Route path="/catalog" element={<BookCatalog />} />
        <Route path="/catalog/:bookId" element={<BookDetails />} />

        {/* Librarian/Admin Routes 
        <Route path="/manage-members" element={<ManageMembers />} />
        <Route path="/manage-books" element={<ManageBooks />} />

        {/* Fallback: if route doesn’t exist 
        <Route path="*" element={<h1>404 - Page Not Found</h1>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
