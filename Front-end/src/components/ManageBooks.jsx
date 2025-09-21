import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./styles/ManageBooks.css";

function ManageBooks() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingBook, setEditingBook] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const [newBook, setNewBook] = useState({
    isbn_no: "",
    title: "",
    author: "",
    genre: "",
    availabilty: true,
    avail_copies: 1,
  });

  const API_BASE =
    import.meta.env.VITE_API_URL || "http://localhost:8080";

  // Fetch books once on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.warn("No token found");
      return;
    }
    fetch(${ API_BASE } / api / books, {
      headers: {
        Authorization: Bearer ${ token },
      },
    })
      .then(async (res) => {
          const contentType = res.headers.get("content-type");
          if (!res.ok) {
            throw new Error(HTTP ${ res.status });
          }
          if (!contentType || !contentType.includes("application/json")) {
            const text = await res.text();
            throw new Error(Expected JSON, got: ${ text.slice(0, 100) });
          }
          return res.json();
        })
  .then((data) => setBooks(data))
  .catch((err) => console.error("Failed to fetch books:", err.message));
  }, []);

// Search filter
const filteredBooks = books.filter((book) =>
  [book.title, book.author, String(book.isbn_no), book.genre].some(
    (field) =>
      field && field.toLowerCase().includes(searchTerm.toLowerCase())
  )
);

// Save new book
const saveNewBook = () => {
  const token = localStorage.getItem("token");

  if (newBook.isbn_no && newBook.title) {
    const bookToSend = {
      ...newBook,
      isbn_no: Number(newBook.isbn_no),
      availabilty: Boolean(newBook.availabilty),
      avail_copies: Number(newBook.avail_copies),
    };

    fetch(${ API_BASE } / book / addnewbook, {
      method: "POST",
      headers: {
        Authorization: Bearer ${ token },
      "Content-Type": "application/json",
        },
  body: JSON.stringify(bookToSend),
      })
        .then((res) => {
    if (!res.ok) throw new Error(HTTP ${ res.status });
    return res.json();
  })
  .then((savedBook) => {
    setBooks([...books, savedBook]);
    setNewBook({
      isbn_no: "",
      title: "",
      author: "",
      genre: "",
      availabilty: true,
      avail_copies: 1,
    });
    setIsAdding(false);
  })
  .catch((err) => console.error("Failed to save new book:", err.message));
    }
  };

return (
  <div className="page-container">
    <Header />
    <main className="main-content">
      <h2>Manage Books</h2>
      <p>Search, add, edit, or remove books from the library database.</p>

      <div className="search-add-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search books by title, author, ISBN, or genre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="add-btn" onClick={() => setIsAdding(true)}>
          Add Book
        </button>
      </div>

      <div className="book-details">
        <h3>📚 Book Details</h3>
        {filteredBooks.length === 0 ? (
          <p>No matches found</p>
        ) : (
          <table className="book-table">
            <thead>
              <tr>
                <th>BookID</th>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN</th>
                <th>Genre</th>
                <th>Availability</th>
                <th>Copies</th>
              </tr>
            </thead>
            <tbody>
              {filteredBooks.map((book) => (
                <tr key={book.isbn_no}>
                  <td>{book.isbn_no}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.isbn_no}</td>
                  <td>{book.genre}</td>
                  <td>{book.availabilty ? "Available" : "Unavailable"}</td>
                  <td>{book.avail_copies}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {isAdding && (
        <div className="popup">
          <div className="popup-content">
            <h3>Add New Book</h3>

            <input
              type="text"
              value={newBook.isbn_no}
              onChange={(e) =>
                setNewBook({ ...newBook, isbn_no: e.target.value })
              }
              placeholder="isbn_no"
            />

            <input
              type="text"
              value={newBook.title}
              onChange={(e) =>
                setNewBook({ ...newBook, title: e.target.value })
              }
              placeholder="title"
            />

            <input
              type="text"
              value={newBook.author}
              onChange={(e) =>
                setNewBook({ ...newBook, author: e.target.value })
              }
              placeholder="author"
            />

            <input
              type="text"
              value={newBook.genre}
              onChange={(e) =>
                setNewBook({ ...newBook, genre: e.target.value })
              }
              placeholder="genre"
            />

            <label>
              Available:{" "}
              <input
                type="checkbox"
                checked={newBook.availabilty}
                onChange={(e) =>
                  setNewBook({ ...newBook, availabilty: e.target.checked })
                }
              />
            </label>

            <input
              type="number"
              value={newBook.avail_copies}
              min={1}
              onChange={(e) =>
                setNewBook({ ...newBook, avail_copies: e.target.value })
              }
              placeholder="avail_copies"
            />

            <div className="popup-actions">
              <button onClick={saveNewBook} className="save-btn">
                Save
              </button>
              <button
                onClick={() => setIsAdding(false)}
                className="close-btn"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
    <Footer />
  </div>
)};


export default ManageBooks;