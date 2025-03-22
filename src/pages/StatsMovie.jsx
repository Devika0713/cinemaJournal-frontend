import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "./PostContext";

function StatsMovie() {
  const { postId } = useParams(); // Get postId from the URL
  const { posts } = useContext(PostContext); // Get posts from PostContext

  // Find the specific post by its ID (index)
  const post = posts[postId];

  const [responseData, setResponseData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        post.title
      )}
      )}`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWEyNzlhMGMyMDU4ZWZiY2JhNjQ1ZGE2ZDhkNDE1MyIsIm5iZiI6MTcyNzc5MjM0Ny40ODU2NzksInN1YiI6IjY2ZmMwMmMyNDk1NWI0YTIwNmYxODU3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZoldbpdENtYDVmSvUu_6dFsufXLKNpzWZn8L70MRaBc",
        },
      };
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.results[0]); // assuming it's a JSON response
        setResponseData(result.results[0]);
        // set the response data to state
      } catch (error) {
        console.error(error);
        setResponseData("Error fetching data");
      }
    };

    console.log("Response data", responseData);

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post.title]);

  if (!responseData) {
    return (
      <div>
        <p
          style={{
            alignContent: "center",
            justifyContent: "center",
            padding: 5,
          }}
        >
          Post not found
        </p>
      </div>
    );
  }
  console.log(responseData);
  const RiseorFallIcon = () => {
    if (responseData["popularity"] > 100)
      return <i class="bi bi-thermometer-high"></i>;
    else return <i class="bi bi-thermometer-low"></i>;
  };
  return (
    <div class="card ">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            className="img-fluid rounded-start "
            src={`https://image.tmdb.org/t/p/w300${responseData["poster_path"]}`}
            alt="Movie cover"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{post.title}</h5>
            <small class="text-body-secondary">
              {responseData["release_date"]}
              Language:{post.lang}
            </small>
            <p class="card-text">{responseData["overview"]}</p>
            {/* <p class="card-text">
              Popularity:{responseData["popularity"]}
              <RiseorFallIcon />
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsMovie;
