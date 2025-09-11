import React, { useState } from "react";
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

  // State for genre filter
  const [selectedGenre, setSelectedGenre] = useState("All");

  // Filter books based on selected genre
  const filteredBooks =
    selectedGenre === "All"
      ? books
      : books.filter((book) => book.genre.toLowerCase() === selectedGenre.toLowerCase());

  return (
    <div className="page-container">
      <Header />

      <main className="catalog-container">
        <h2>Library Catalog</h2>

        {/* Genre Filter Section */}
        <div className="genre-filter">
          <h3>Genre</h3>
          <div className="genre-buttons">
            {["All", "Fiction", "Mystery", "Romance", "Drama", "Fantasy"].map((genre) => (
              <button
                key={genre}
                className={`genre-btn ${selectedGenre === genre ? "active" : ""}`}
                onClick={() => setSelectedGenre(genre)}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        {/* Books Grid */}
        <div className="book-grid">
          {filteredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <h3>{book.title}</h3>
              <h5>
                <strong>Book ID:</strong> {book.id}
              </h5>
              <h5>
                <strong>Author:</strong> {book.author}
              </h5>
              <h5>
                <strong>ISBN:</strong> {book.isbn}
              </h5>
              <h5>
                <strong>Genre:</strong> {book.genre}
              </h5>
              <h5>
                <strong>Availability:</strong> {book.availability}
              </h5>
              <h5>
                <strong>Copies:</strong> {book.copies}
              </h5>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Catalog;
