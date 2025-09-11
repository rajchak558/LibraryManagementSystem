import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./styles/ManageMembers.css";

function ManageMembers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showAddBook, setShowAddBook] = useState(false);
  const [showFines, setShowFines] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Utility: encode text to base64
  const encodeBase64 = (str) => {
    return btoa(unescape(encodeURIComponent(str)));
  };

  // Mock data with Member IDs
  const members = [
    {
      memberId: "M101",
      name: "Alice",
      email: "alice@example.com",
      books: [
        {
          id: "B101",
          title: "The Great Gatsby",
          issueDate: "2025-08-25",
          returnDate: "2025-09-10",
        },
      ],
      fines: [
        {
          fineId: "F001",
          memberId: "M101",
          amount: "₹50",
          reason: "Late return",
          paidStatus: "Unpaid",
        },
      ],
      status: "Active",
    },
    {
      memberId: "M102",
      name: "Bob",
      email: "bob@example.com",
      books: [],
      fines: [],
      status: "Suspended",
    },
    {
      memberId: "M103",
      name: "Charlie",
      email: "charl1ie@example.com",
      books: [
        {
          id: "BK-101",
          title: "Moby Dick",
          issueDate: "2025-08-15",
          returnDate: "2025-09-05",
        },
        {
          id: "BK-102",
          title: "War and Peace",
          issueDate: "2025-08-18",
          returnDate: "2025-09-08",
        },
        {
          id: "BK-103",
          title: "Pride and Prejudice",
          issueDate: "2025-08-20",
          returnDate: "2025-09-10",
        },
      ],
      fines: [
        {
          fineId: "F006",
          memberId: "M103",
          amount: "₹50",
          reason: "Late return",
          paidStatus: "Unpaid",
        },
      ],
      status: "Active",
    },
  ];

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setResult(null);
    setShowDropdown(true);
  };

  const handleSelectMember = (member) => {
    setResult(JSON.parse(JSON.stringify(member)));
    setSearchTerm(member.name);
    setIsEditing(false);
    setShowDropdown(false);
  };

  const handleDeleteBook = (index) => {
    const updated = { ...result };
    updated.books.splice(index, 1);
    setResult(updated);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const updatedBooks = result.books.map((_, idx) => ({
      id: encodeBase64(formData.get(`book-id-${idx}`)),
      title: encodeBase64(formData.get(`book-title-${idx}`)),
      issueDate: encodeBase64(formData.get(`book-issue-${idx}`)),
      returnDate: encodeBase64(formData.get(`book-return-${idx}`)),
    }));

    const updated = {
      ...result,
      name: encodeBase64(formData.get("name")),
      email: encodeBase64(formData.get("email")),
      status: encodeBase64(formData.get("status")),
      books: updatedBooks,
    };
    console.log("Encoded Data (to send to backend):", updated);
    setResult(updated);
    setIsEditing(false);
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newBook = {
      id: encodeBase64(formData.get("new-book-id")),
      title: encodeBase64(formData.get("new-book-title")),
      issueDate: encodeBase64(formData.get("new-book-issue")),
      returnDate: encodeBase64(formData.get("new-book-return")),
    };

    const updated = { ...result, books: [...result.books, newBook] };
    console.log("Encoded Book Added:", newBook);

    setResult(updated);
    setShowAddBook(false);
  };

  return (
    <div className="page-container">
      <Header />

      <main className="main-content">
        <h2>Manage Members</h2>

        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search members by name..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-bar"
          />

          {showDropdown && searchTerm && (
            <div className="dropdown-list">
              {members
                .filter((m) =>
                  m.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((m, idx) => (
                  <div
                    key={idx}
                    className="dropdown-item"
                    onClick={() => handleSelectMember(m)}
                  >
                    <strong>{m.name}</strong> — <span>{m.memberId}</span>
                  </div>
                ))}
            </div>
          )}
        </div>

        <div className="member-details">
          {result ? (
            result.notFound ? (
              <p>No member found.</p>
            ) : (
              <div className="member-card">
                {isEditing ? (
                  <form className="edit-form" onSubmit={handleSave}>
                    <input type="text" name="name" defaultValue={result.name} />
                    <input
                      type="email"
                      name="email"
                      defaultValue={result.email}
                    />
                    <select name="status" defaultValue={result.status}>
                      <option>Active</option>
                      <option>Suspended</option>
                    </select>

                    <h4>Edit Books Borrowed</h4>
                    {result.books.map((book, idx) => (
                      <div key={idx} className="edit-book">
                        <input
                          type="text"
                          name={`book-id-${idx}`}
                          defaultValue={book.id}
                        />
                        <input
                          type="text"
                          name={`book-title-${idx}`}
                          defaultValue={book.title}
                        />
                        <input
                          type="date"
                          name={`book-issue-${idx}`}
                          defaultValue={book.issueDate}
                        />
                        <input
                          type="date"
                          name={`book-return-${idx}`}
                          defaultValue={book.returnDate}
                        />
                        <button
                          type="button"
                          onClick={() => handleDeleteBook(idx)}
                        >
                          ❌
                        </button>
                      </div>
                    ))}
                    <button type="submit" className="save-btn">
                      Save
                    </button>
                  </form>
                ) : (
                  <>
                    <h3>
                      {result.name} <small>({result.memberId})</small>
                    </h3>
                    <p>Email: {result.email}</p>
                    <p>Status: {result.status}</p>

                    <h4>Books Borrowed</h4>
                    {result.books.length > 0 ? (
                      <ul className="books-list">
                        {result.books.map((book, idx) => (
                          <li key={idx}>
                            <strong>{book.title}</strong> (ID: {book.id})
                            <p>Issue: {book.issueDate}</p>
                            <p>Return: {book.returnDate}</p>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No books currently borrowed.</p>
                    )}

                    {result.fines && result.fines.length > 0 && (
                      <div className="fines-section">
                        <button onClick={() => setShowFines(!showFines)}>
                          {showFines
                            ? "Hide Fine Details"
                            : "View Fine Details"}
                        </button>

                        {showFines && (
                          <ul className="fines-list">
                            {result.fines.map((fine, idx) => (
                              <li key={idx}>
                                <strong>Fine ID:</strong> {fine.fineId} <br />
                                <strong>Member ID:</strong> {fine.memberId}{" "}
                                <br />
                                <strong>Amount:</strong> {fine.amount} <br />
                                <strong>Reason:</strong> {fine.reason} <br />
                                <strong>Status:</strong> {fine.paidStatus}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}

                    <div className="card-actions">
                      <button onClick={() => setIsEditing(true)}>
                        Edit Profile
                      </button>
                      <button onClick={() => setShowAddBook(true)}>
                        Add Book
                      </button>
                      <button>Borrow History</button>
                    </div>
                  </>
                )}
              </div>
            )
          ) : (
            <p>Start typing to search for a member.</p>
          )}
        </div>

        {showAddBook && (
          <div className="modal-overlay">
            <div className="modal-card">
              <h3>Add New Book</h3>
              <form onSubmit={handleAddBook}>
                <input
                  type="text"
                  name="new-book-id"
                  placeholder="Book ID"
                  required
                />
                <input
                  type="text"
                  name="new-book-title"
                  placeholder="Book Title"
                  required
                />
                <input type="date" name="new-book-issue" required />
                <input type="date" name="new-book-return" required />
                <div className="modal-actions">
                  <button type="submit">Add</button>
                  <button type="button" onClick={() => setShowAddBook(false)}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default ManageMembers;
