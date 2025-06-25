import React, { useState} from "react";

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

const AddBook = () => { //states
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      title: title,
      author: author,
      ratings: [parseFloat(rating)],
      "release date": releaseDate
    };
    handleAddBook(newBook);
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


      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
