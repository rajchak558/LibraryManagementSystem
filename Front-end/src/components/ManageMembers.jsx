import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./styles/ManageMembers.css";

function ManageMembers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showAddBook, setShowAddBook] = useState(false);
  const [showAddFine, setShowAddFine] = useState(false); // ✅ Fine modal
  const [showFines, setShowFines] = useState(false); // ✅ toggle fine list

  // Mock data
  const members = [
    {
      name: "Alice",
      email: "alice@example.com",
      books: [
        { id: "B101", title: "The Great Gatsby", issueDate: "2025-08-25", returnDate: "2025-09-10" },
      ],
      fines: [
        { fineId: "F001", memberId: "M101", amount: "₹50", reason: "Late return", paidStatus: "Unpaid" },
      ],
      status: "Active",
    },
    {
      name: "Bob",
      email: "bob@example.com",
      books: [],
      fines: [],
      status: "Suspended",
    },
    {
      name: "Charlie",
      email: "charl1ie@example.com",
      books: [
        { id:"BK-101",title: "Moby Dick", issueDate: "2025-08-15", returnDate: "2025-09-05" },
        { id:"BK-102",title: "War and Peace", issueDate: "2025-08-18", returnDate: "2025-09-08" },
        { id:"BK-103",title: "Pride and Prejudice", issueDate: "2025-08-20", returnDate: "2025-09-10" },
      ],
      fines: [
        { fineId: "F006", memberId: "M101", amount: "₹50", reason: "Late return", paidStatus: "Unpaid" },
      ],
      status: "Active",
    },
  ];

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setResult(null);
      return;
    }

    const found = members.find((m) =>
      m.name.toLowerCase().includes(value.toLowerCase())
    );
    setResult(found ? JSON.parse(JSON.stringify(found)) : { notFound: true });
    setIsEditing(false);
  };

  // Delete book
  const handleDeleteBook = (index) => {
    const updated = { ...result };
    updated.books.splice(index, 1);
    setResult(updated);
  };

  // Save edited profile
  const handleSave = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const updatedBooks = result.books.map((_, idx) => ({
      id: formData.get(`book-id-${idx}`),
      title: formData.get(`book-title-${idx}`),
      issueDate: formData.get(`book-issue-${idx}`),
      returnDate: formData.get(`book-return-${idx}`),
    }));

    const updated = {
      ...result,
      name: formData.get("name"),
      email: formData.get("email"),
      status: formData.get("status"),
      books: updatedBooks,
    };

    setResult(updated);
    setIsEditing(false);
  };

  // Add new book
  const handleAddBook = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newBook = {
      id: formData.get("new-book-id"),
      title: formData.get("new-book-title"),
      issueDate: formData.get("new-book-issue"),
      returnDate: formData.get("new-book-return"),
    };

    const updated = { ...result, books: [...result.books, newBook] };
    setResult(updated);
    setShowAddBook(false);
  };

  // Add new fine
  const handleAddFine = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newFine = {
      fineId: formData.get("fine-id"),
      memberId: formData.get("member-id"),
      amount: formData.get("amount"),
      reason: formData.get("reason"),
      paidStatus: formData.get("paid-status"),
    };

    const updated = { ...result, fines: [...(result.fines || []), newFine] };
    setResult(updated);
    setShowAddFine(false);
  };

  return (
    <div className="page-container">
      <Header />

      <main className="main-content">
        <h2>Manage Members</h2>
        <input
          type="text"
          placeholder="Search members by name..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />

        <div className="member-details">
          {result ? (
            result.notFound ? (
              <p>No member found.</p>
            ) : (
              <div className="member-card">
                {isEditing ? (
                  <form className="edit-form" onSubmit={handleSave}>
                    <input type="text" name="name" defaultValue={result.name} />
                    <input type="email" name="email" defaultValue={result.email} />
                    <select name="status" defaultValue={result.status}>
                      <option>Active</option>
                      <option>Suspended</option>
                    </select>

                    <h4>Edit Books Borrowed</h4>
                    {result.books.map((book, idx) => (
                      <div key={idx} className="edit-book">
                        <input type="text" name={`book-id-${idx}`} defaultValue={book.id} />
                        <input type="text" name={`book-title-${idx}`} defaultValue={book.title} />
                        <input type="date" name={`book-issue-${idx}`} defaultValue={book.issueDate} />
                        <input type="date" name={`book-return-${idx}`} defaultValue={book.returnDate} />
                        <button type="button" onClick={() => handleDeleteBook(idx)}> ❌ </button>
                      </div>
                    ))}
                      <button type="submit" className="save-btn">Save</button>
                  </form>
                ) : (
                  <>
                    <h3>{result.name}</h3>
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

                    {/* Fines */}
                    {result.fines && result.fines.length > 0 && (
                      <div className="fines-section">
                        <button onClick={() => setShowFines(!showFines)}>
                          {showFines ? "Hide Fine Details" : "View Fine Details"}
                        </button>

                        {showFines && (
                          <ul className="fines-list">
                            {result.fines.map((fine, idx) => (
                              <li key={idx}>
                                <strong>Fine ID:</strong> {fine.fineId} <br />
                                <strong>Member ID:</strong> {fine.memberId} <br />
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
                      <button onClick={() => setIsEditing(true)}>Edit Profile</button>
                      <button onClick={() => setShowAddBook(true)}>Add Book</button>
                      <button>Borrow History</button>
                      <button onClick={() => setShowAddFine(true)}>Add Fine</button>
                    </div>
                  </>
                )}
              </div>
            )
          ) : (
            <p>Start typing to search for a member.</p>
          )}
        </div>

        {/* Add Book Modal */}
        {showAddBook && (
          <div className="modal-overlay">
            <div className="modal-card">
              <h3>Add New Book</h3>
              <form onSubmit={handleAddBook}>
                <input type="text" name="new-book-id" placeholder="Book ID" required />
                <input type="text" name="new-book-title" placeholder="Book Title" required />
                <input type="date" name="new-book-issue" required />
                <input type="date" name="new-book-return" required />
                <div className="modal-actions">
                  <button type="submit">Add</button>
                  <button type="button" onClick={() => setShowAddBook(false)}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Add Fine Modal */}
        {showAddFine && (
          <div className="modal-overlay">
            <div className="modal-card">
              <h3>Add Fine</h3>
              <form onSubmit={handleAddFine}>
                <input type="text" name="fine-id" placeholder="Fine ID" required />
                <input type="text" name="member-id" placeholder="Member ID" required />
                <input type="text" name="amount" placeholder="Amount" required />
                <input type="text" name="reason" placeholder="Reason" required />
                <select name="paid-status" required>
                  <option value="Paid">Paid</option>
                  <option value="Unpaid">Unpaid</option>
                </select>
                <div className="modal-actions">
                  <button type="submit">Add</button>
                  <button type="button" onClick={() => setShowAddFine(false)}>Cancel</button>
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
