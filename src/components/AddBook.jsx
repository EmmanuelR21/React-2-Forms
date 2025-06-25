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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title: title,
      author: author,
      ratings: [],
      "release date": ""
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

      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
