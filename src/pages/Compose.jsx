import React, { useState, useContext } from "react";
import { PostContext } from "./PostContext.jsx";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form.jsx";

function Compose() {
  const { addPost } = useContext(PostContext);
  const [formInput, setFormInput] = useState({
    date: "",
    title: "",
    genre: "",
    rating: "",
    lang: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    var { name, value } = e.target;
    setFormInput((prevPost) => {
      return { ...prevPost, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    // addPost(formInput);
    e.preventDefault();
    // setPosts((prevPosts) => [...prevPosts, formInput]);
    addPost(formInput);
    // console.log(formInput);

    navigate("/"); // Redirect to HomePage after submission
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      formInput={formInput}
    />
  );
}

export default Compose;
