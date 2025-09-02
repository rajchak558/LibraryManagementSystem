// components/Catalog.jsx
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Filter } from "lucide-react";
import "./styles/Catalog.css"; 

function Catalog() {
  return (
    <div className="catalog-page">
      <Header />
      <main className="main-content">
        <div className="catalog-header">
          <h2>Library Catalog</h2>
          <Filter size={24} className="filter-icon" />
        </div>

        <p>Here you will see a list of available books (to be implemented).</p>

        {/* Filter Tab Section */}
        <div className="filter-tab">
          <Filter size={20} className="filter-icon" />

          <select>
            <option value="">Filter by Title</option>
            <option value="book1">Book 1</option>
            <option value="book2">Book 2</option>
          </select>

          <select>
            <option value="">Filter by Author</option>
            <option value="author1">Author 1</option>
            <option value="author2">Author 2</option>
          </select>

          <select>
            <option value="">Filter by Genre</option>
            <option value="fiction">Fiction</option>
            <option value="nonfiction">Non-fiction</option>
          </select>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Catalog;
