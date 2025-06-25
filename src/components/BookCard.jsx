import React from "react";

const cardStyling = {
  position: "relative",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "white",
  border: "1px solid red",
  margin: "10px",
};
const imgStyling = {
  width: "180px",
};
const textStyling = {
  color: "black",
  alignSelf: "flex-start",
};
const releaseDateStyling = {
  position: "absolute",
  fontSize: "10px",
  fontStyle: "italic",
  color: "darkgray",
  bottom: 0,
  right: 0,
};
const ratingStyling = {
  color: "black",
};

const BookCard = ({ title, author, ratings, releaseDate }) => {
  const ratingsAverage = Math.round(
    ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length,
  );
  return (
    <div style={cardStyling}>
      {/* Not sure about adding an image, this would then need to also be included in state
      <img src="" alt="" />
      Adding dummy image for now*/}
      <img
        style={imgStyling}
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F021%2F644%2F208%2Flarge_2x%2Fbooks-stacked-on-top-of-each-other-created-with-generative-ai-photo.jpg&f=1&nofb=1&ipt=7321c649c45350e5606f62cc761a8e8237dc7019672a6c710f8604faf3d5f728"
        alt="Image of Book"
      />
      <h1 style={textStyling}>{title}</h1>
      <p style={textStyling}>{author}</p>
      <p style={ratingStyling}>Ratings: {ratingsAverage}</p>
      <p style={releaseDateStyling}>Release: {releaseDate}</p>
    </div>
  );
};

export default BookCard;
