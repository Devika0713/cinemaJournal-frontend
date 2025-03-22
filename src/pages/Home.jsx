//display all book reviews as cards
import React, { useContext } from "react";
import PostCard from "../components/PostCard";
import { PostContext } from "./PostContext.jsx";
import { useNavigate } from "react-router-dom";

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

function Home() {
  const { posts, postsTV } = useContext(PostContext);
  const navigate = useNavigate();
  return (
    <div className="page-style">
      <h2 className="diff-font">Home</h2>

      <h3 className="subHeading">Movies</h3>

      <p style={{ textAlign: "center" }}>
        A collection of all the movies I have seen
      </p>

      <div className="container">
        <div className="row">
          {posts.slice(0, 4).map((movie, index) => {
            const convertDateFormat = (dateString) => {
              if (!dateString) return "Not specified";
              const [year, month, day] = dateString.split("-");
              return `${day}/${month}/${year.slice(2)}`;
            };

            // Example usage
            const formattedDate = convertDateFormat(movie.date);
            return (
              <PostCard
                key={index}
                index={index}
                title={movie.title}
                date={formattedDate}
                genre={movie.genre}
                rating={movie.rating}
                type="movie"
              />
            );
          })}
        </div>

        <div className="text-center">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/movies")}
          >
            View More
          </button>
        </div>
      </div>
      <h3 className="subHeading">Series</h3>
      <p style={{ textAlign: "center" }}>
        A collection of all the shows I binge watched
      </p>
      <div className="container">
        <div className="row">
          {postsTV.slice(0, 4).map((show, index) => {
            const convertDateFormat = (dateString) => {
              if (!dateString) return "Not specified";
              const [year, month, day] = dateString.split("-");
              return `${day}/${month}/${year.slice(2)}`;
            };

            // Example usage
            const formattedDate = convertDateFormat(show.date);
            return (
              <PostCard
                key={index}
                index={index}
                title={show.title}
                date={formattedDate}
                genre={show.genre}
                rating={show.rating}
                type="tv"
              />
            );
          })}
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={() => navigate("/shows")}>
          View More
        </button>
      </div>
    </div>
  );
}

export default Home;

// const [shows, setShows] = useState([]);
// const [movies, setMovies] = useState([]);
// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 3000 },
//     items: 3,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };
// useEffect(() => {
//   const fetchMovies = async () => {
//     try {
//       const res = await axios.get("/movies");
//       setMovies(res.data);
//       console.log("movies", res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const fetchShows = async () => {
//     try {
//       const res = await axios.get("/shows");
//       setShows(res.data);

//       console.log("Shows: ", res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   fetchMovies();
//   fetchShows();
// }, []);
