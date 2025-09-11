// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Common pages
import HomePage from "./components/HomePage.jsx";
import LoginIntimation from "./components/LoginIntimation.jsx";
import LoginPage from "./components/LoginPage.jsx";
import StaffDashboard from "./components/StaffDashboard.jsx";
import Catalog from "./components/Catalog.jsx";
import MemberDashboard from "./components/MemberDashboard.jsx";
import ManageMembers from "./components/ManageMembers.jsx";
import SignUp from "./components/SignUp";
import TotalBorrowed from "./components/TotalBorrowed";
import PendingFines from "./components/PendingFines.jsx";
import BorrowedBooks from "./components/Booksborrowed.jsx";
import Entity from "./components/Entity.jsx";



// Member pages



// Librarian/Admin pages

import ManageBooks from "./components/ManageBooks.jsx";


function App() {
  return (
    <Router>
      <Routes>
        {/* Public / Common Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/login-intimation" element={<LoginIntimation />} />
        <Route path="/login/member" element={<LoginPage role="Member" />} />
        <Route path="/login/staff" element={<LoginPage role="Staff" />} />
        <Route path="/staff/dashboard" element={<StaffDashboard />} />
        <Route path="/member/dashboard" element={<MemberDashboard />} />
        <Route path="/staff/managemembers" element={<ManageMembers />} />
        <Route path="/staff/managebooks" element={<ManageBooks />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/borrowed-books" element={<BorrowedBooks />}></Route>
        <Route path="/total-borrowed" element={<TotalBorrowed />} />
        <Route path="/pending-fines" element={<PendingFines />} />
        <Route path="/entity" element={<Entity />} />


        {/* <Route path="/dashboard" element={<Dashboard />} /> */}

        {/* Member (Book Borrower) Routes 
        <Route path="/catalog" element={<BookCatalog />} />
        <Route path="/catalog/:bookId" element={<BookDetails />} /> */}

        {/* Librarian/Admin Routes 
        <Route path="/manage-members" element={<ManageMembers />} />
        <Route path="/manage-books" element={<ManageBooks />} /> */}

        {/* Fallback: if route doesn’t exist */}
        {/* <Route path="*" element={<h1>404 - Page Not Found</h1>} /> */}
      </Routes>
    </Router>
  );
}


export default App;
