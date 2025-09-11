import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./styles/ManageBooks.css";


function ManageBooks() {
  const [books, setBooks] = useState([
    { id: "B001", title: "The Silent Library", author: "John Doe", isbn: "978-1234567890", genre: "Mystery", availability: "Available", copies: 5 },
    { id: "B002", title: "Whispers of the Wind", author: "Jane Smith", isbn: "978-9876543210", genre: "Romance", availability: "Checked Out", copies: 0 },
    { id: "B003", title: "Shadows of Time", author: "Mark Brown", isbn: "978-1122334455", genre: "Fantasy", availability: "Available", copies: 3 },
  ]);


  const [searchTerm, setSearchTerm] = useState("");
  const [editingBook, setEditingBook] = useState(null);
  const [isAdding, setIsAdding] = useState(false); // 🔹 For add book popup
  const [newBook, setNewBook] = useState({
    id: "",
    title: "",
    author: "",
    isbn: "",
    genre: "",
    availability: "Available",
    copies: 1,
  });


  // Filter books based on search
  const filteredBooks = books.filter((book) =>
    [book.title, book.author, book.isbn, book.genre].some((field) =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );


  // Save edited book
  const saveEdit = () => {
    setBooks(books.map((book) => (book.id === editingBook.id ? editingBook : book)));
    setEditingBook(null);
  };


  // Save new book
  const saveNewBook = () => {
    if (newBook.id && newBook.title) {
      setBooks([...books, newBook]);
      setNewBook({ id: "", title: "", author: "", isbn: "", genre: "", availability: "Available", copies: 1 });
      setIsAdding(false);
    }
  };


  return (
    <div className="page-container">
      <Header />
      <main className="main-content">
        <h2>Manage Books</h2>
        <p>Search, add, edit, or remove books from the library database.</p>


        {/\* Search + Add Book \*/}
        <div className="search-add-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search books by title, author, ISBN, or genre..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="add-btn" onClick={() => setIsAdding(true)}>Add Book</button>
        </div>


        {/\* Books Table \*/}
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
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {filteredBooks.map((book) => (
                  <tr key={book.id}>
                    <td>{book.id}</td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.isbn}</td>
                    <td>{book.genre}</td>
                    <td>{book.availability}</td>
                    <td>{book.copies}</td>
                    <td>
                      <button className="edit-btn" onClick={() => setEditingBook({ ...book })}>Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>


        {/\* Edit Popup \*/}
        {editingBook && (
          <div className="popup">
            <div className="popup-content">
              <h3>Edit Book</h3>
              {Object.keys(editingBook).map((key) => (
                <input
                  key={key}
                  type="text"
                  value={editingBook[key]}
                  onChange={(e) => setEditingBook({ ...editingBook, [key]: e.target.value })}
                  placeholder={key}
                />
              ))}
              <div className="popup-actions">
                <button onClick={saveEdit} className="save-btn">Save</button>
                <button onClick={() => setEditingBook(null)} className="close-btn">Close</button>
              </div>
            </div>
          </div>
        )}


        {/\* Add Book Popup \*/}
        {isAdding && (
          <div className="popup">
            <div className="popup-content">
              <h3>Add New Book</h3>
              {Object.keys(newBook).map((key) => (
                <input
                  key={key}
                  type="text"
                  value={newBook[key]}
                  onChange={(e) => setNewBook({ ...newBook, [key]: e.target.value })}
                  placeholder={key}
                />
              ))}
              <div className="popup-actions">
                <button onClick={saveNewBook} className="save-btn">Save</button>
                <button onClick={() => setIsAdding(false)} className="close-btn">Close</button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}


export default ManageBooks;
//On clicking the save button whle adding book the Book details gets initially saved in the table showing the books but on refeshing the page the added book details disappear.using api calls save the data in the backend and display the book details whenever I login as a staff