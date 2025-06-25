import React, { useState } from "react";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  const [searchedBook, setSearchedBook] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const titleInput = event.target[0].value;
    const filteredBooks = [];

    for (let i = 0; i < books.length; i++) {
      if (books[i].title.toLowerCase().includes(titleInput.toLowerCase())) {
        filteredBooks.push(books[i]);
      }
    }
    setSearchedBook(filteredBooks);
  };

  return (
    <>
      <div>Book List</div>
      <form onSubmit={handleSubmit}>
        <input name="title" type="text" required placeholder="Title" />
        <button className="buttom" type="submit">
          search
        </button>
      </form>
      {searchedBook.length !== 0
        ? searchedBook.map((book) => {
            return (
              <BookCard
                title={book.title}
                author={book.author}
                ratings={book.ratings}
                releaseDate={book.releaseDate}
              />
            );
          })
        : books.map((book) => {
            return (
              <BookCard
                title={book.title}
                author={book.author}
                ratings={book.ratings}
                releaseDate={book.releaseDate}
              />
            );
          })}
    </>
  );
};

export default BookList;
