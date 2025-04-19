import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Recreate this by adding the discover button and each post should open up a new page(stats page) which calls the api and displays the details

function PostCard({ title, genre, date, rating, index, type, language }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine the type based on the URL path
  const determinedType =
    type || location.pathname.includes("/movies") ? "movie" : "tv";

  const StarRating = ({ rating }) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={`bi bi-star${i <= rating ? "-fill" : ""}`}
          style={{ color: "#FFD700" }} // Yellow for filled stars
        />
      );
    }

    return <div>{stars}</div>;
  };

  // function HandleClickMovie() {
  //   console.log("Button is clicked");
  //   navigate(`/stat/${index}`);
  // }
  // function HandleClickTV() {
  //   console.log("Button is clicked");
  //   navigate(`/TVstat/${index}`);
  // }

  function HandleClick() {
    if (determinedType === "movie") {
      navigate(`/stat/${index}`);
    } else {
      navigate(`/TVstat/${index}`);
    }
    console.log(determinedType);
  }
  return (
    <div
      className="col-sm-12 col-md-6 col-lg-3 mb-lg-3 mb-md-3 mb-sm-3 mr-md-3"
      style={{ height: "25%" }}
    >
      <div className="card card-border-dark">
        {/* <img src={src} className="card-img-top" alt="..." />  */}
        <div className="card-body">
          <h5 className="card-title diff-font">{title}</h5>
          <hr></hr>
          <p className="card-text">
            Date finished: {date}
            <br></br>Genre: {genre}
            <br></br>Language: {language}
            <br></br>
            <StarRating rating={rating} />
          </p>
          <button className="btn btn-primary" onClick={HandleClick}>
            Discover.
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
