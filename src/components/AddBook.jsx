import React, { useState } from "react";

/**
 * A book should have the following fields:
 * - title (required)
 * - author (required)
 * - image (optional, url)
 * - publishedDate (optional, datetime)
 * - description (optional, text)
 * - rating (number, 1-5)
 * - category (optional, dropdown with options: fiction, non-fiction, poetry, drama, biography, history, science, technology, art, music, travel, cooking, gardening, etc.)
 * - isRead (boolean, default false)
 * - isFavorite (boolean, default false)
 */

const AddBook = ({ handleAddBook }) => {
  //states
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //add validation

    if (!title.trim() || !author.trim() || !rating.trim()) {
      setError("Title, author, and rating are required.");
      return;
    }

    const numericRating = parseFloat(rating);
    if (isNaN(numericRating) || numericRating < 1 || numericRating > 5) {
      setError("Rating must be a number between 1 and 5.");
      return;
    }

    const newBook = {
      title: title,
      author: author,
      ratings: [parseFloat(rating)],
      releaseDate: releaseDate,
    };
    handleAddBook(newBook);
    setTitle("");
    setAuthor("");
    setRating("");
    setReleaseDate("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Book</h2>

      <div>
        <label>Title:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div>
        <label>Author:</label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <div>
        <label>Rating (1–5):</label>
        <input
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          type="number"
          step="0.1"
        />
      </div>
      <div>
        <label>Release Date:</label>
        <input
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
          type="text"
          placeholder="YYYY-MM-DD"
        />
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit" className="black-text">
        Add Book
      </button>
    </form>
  );
};

export default AddBook;
