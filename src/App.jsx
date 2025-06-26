import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([
    {
      title: "Book1",
      author: "author1",
      ratings: [2.5, 5, 3, 3],
      releaseDate: "December 2025",
    },
    {
      title: "Book2",
      author: "author2",
      ratings: [3.5, 4, 3.5, 3],
      releaseDate: "November 2025",
    },
  ]);
  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <div className="app">
      <h1 className="title">React Forms! 📝</h1>
      <AddBook handleAddBook={handleAddBook} />
      <BookList books={books} />
      <div>
        <button></button>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
