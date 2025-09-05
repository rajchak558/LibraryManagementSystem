import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./styles/Catalog.css";

function Catalog() {
  // Mock book data (replace with API later)
  const books = [
    {
      id: "B001",
      title: "The Silent Library",
      author: "John Doe",
      isbn: "978-1234567890",
      genre: "Mystery",
      availability: "Available",
      copies: 5,
    },
    {
      id: "B002",
      title: "Whispers of the Wind",
      author: "Jane Smith",
      isbn: "978-9876543210",
      genre: "Romance",
      availability: "Checked Out",
      copies: 0,
    },
    {
      id: "B003",
      title: "Shadows of Time",
      author: "Mark Brown",
      isbn: "978-1122334455",
      genre: "Fantasy",
      availability: "Available",
      copies: 3,
    },
    {
      id: "B004",
      title: "Echoes of Silence",
      author: "Emily Clark",
      isbn: "978-6677889900",
      genre: "Drama",
      availability: "Available",
      copies: 2,
    },
  ];

  return (
    <div className="page-container">
      <Header />

      <main className="catalog-container">
        <h2>Library Catalog</h2>
        <div className="book-grid">
          {books.map((book) => (
            <div key={book.id} className="book-card">
              <h3>{book.title}</h3>
              <p><strong>Book ID:</strong> {book.id}</p>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>ISBN:</strong> {book.isbn}</p>
              <p><strong>Genre:</strong> {book.genre}</p>
              <p><strong>Availability:</strong> {book.availability}</p>
              <p><strong>Copies:</strong> {book.copies}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Catalog;
