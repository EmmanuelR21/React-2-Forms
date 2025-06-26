import React, { useState } from "react";

const BookList = ({ books }) => {
  const [searchedBook, setSearchedBook] = useState([]);
  console.log(searchedBook);
  const handleSubmit = (event) => {
    event.preventDefault();
    const titleInput = event.target[0].value;
    console.log("title:", titleInput);

    for (let i = 0; i < books.length; i++) {
      if (books[i].title.toLowerCase().includes(titleInput.toLowerCase())) {
        setSearchedBook([...searchedBook, books[i]]);
      }
    }
  };

  //  const clearBar = () => {
  //   setTitleInput("");
  //  }

  return (
    <>
      <div>Book List</div>
      <form onSubmit={handleSubmit}>
        <input name="title" type="text" required placeholder="Title" />
        <button className="buttom" type="submit">
          {" "}
          search{" "}
        </button>
      </form>
    </>
  );
};

export default BookList;
