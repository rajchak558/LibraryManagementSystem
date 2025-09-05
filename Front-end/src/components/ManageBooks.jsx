import Header from "./Header";
import Footer from "./Footer";
import "./styles/ManageBooks.css";

function ManageBooks() {
  return (
    <div className="page-container">
      <Header />
      <main className="main-content">
        <h2>Manage Books</h2>
        <p>Search, add, edit, or remove books from the library database.</p>

        {/* Search Bar */}
        <input
          type="text"
          className="search-bar"
          placeholder="Search books by title, author, or ISBN..."
        />

        {/* Placeholder for book details */}
        <div className="book-details">
          <h3>📚 Book Details</h3>
          <p>Start searching to view or edit book records here.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ManageBooks;
