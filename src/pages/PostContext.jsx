import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  // For movies
  const [posts, setPosts] = useState([]);

  // For TV shows
  const [postsTV, setPostsTV] = useState([]);

  // Fetch posts from the database when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        //const res = await axios.get(`${process.env.BACKEND_URI}/api/movies`);
        const res = await axios.get(`${process.env.BACKEND_URI}/api/movies`);
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };

    const fetchPostsTV = async () => {
      try {
        const res = await axios.get(`${process.env.BACKEND_URI}/api/shows`);
        // const res = await axios.get("http://localhost:5000/api/shows");
        setPostsTV(res.data);
      } catch (err) {
        console.error("Error fetching shows:", err);
      }
    };

    fetchPosts();
    fetchPostsTV();
  }, []);
  console.log("posts", typeof posts, posts);
  console.log("postsTV", typeof postsTV, postsTV);
  // Function to add a new post
  const addPost = async (newPost) => {
    try {
      const res = await axios.post(
        `${process.env.BACKEND_URI}/api/movies`,
        newPost
      );
      // const res = await axios.post("http://localhost:5000/api/movies", newPost);
      setPosts((prevPosts) => [...prevPosts, res.data]);
    } catch (err) {
      console.error("Error adding movie:", err);
    }
  };

  // Function to add a new TV show post
  const addPostTV = async (newPostTV) => {
    try {
      const res = await axios.post(
        `${process.env.BACKEND_URI}/api/shows`,
        newPostTV
      );
      // const res = await axios.post(
      //   "http://localhost:5000/api/shows",
      //   newPostTV
      // );
      setPostsTV((prevPostsTV) => [...prevPostsTV, res.data]);
    } catch (err) {
      console.error("Error adding show:", err);
    }
  };

  return (
    <PostContext.Provider value={{ posts, addPost, postsTV, addPostTV }}>
      {children}
    </PostContext.Provider>
  );
};

// Using local storage to store the data
//  import React, { createContext, useState } from "react";

// export const PostContext = createContext();

// export const PostProvider = ({ children }) => {
//   //For movies
//   const [posts, setPosts] = useState(() => {
//     const savedPosts = localStorage.getItem("posts");
//     return savedPosts ? JSON.parse(savedPosts) : [];
//   });

//   // Function to add a new post
//   const addPost = (newPost) => {
//     const updatedPosts = [...posts, newPost];
//     setPosts(updatedPosts);
//     localStorage.setItem("posts", JSON.stringify(updatedPosts)); // Save posts to localStorage
//   };

//   //For TV shows

//   const [postsTV, setPostsTV] = useState(() => {
//     const savedPostsTV = localStorage.getItem("TVposts");
//     return savedPostsTV ? JSON.parse(savedPostsTV) : [];
//   });

//   // Function to add a new post
//   const addPostTV = (newPostTV) => {
//     const updatedPostsTV = [...postsTV, newPostTV];
//     setPostsTV(updatedPostsTV);
//     localStorage.setItem("TVposts", JSON.stringify(updatedPostsTV)); // Save posts to localStorage
//   };

//   // Clear posts from localStorage if needed (optional)
//   // const clearPosts = () => {
//   //   setPosts([]);
//   //   localStorage.removeItem("posts");
//   // };

//   return (
//     <PostContext.Provider value={{ posts, addPost, postsTV, addPostTV }}>
//       {children}
//     </PostContext.Provider>
//   );
// };
