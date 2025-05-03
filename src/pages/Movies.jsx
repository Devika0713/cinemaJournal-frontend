import React, { useContext, useState } from "react";
import Form from "../components/Form";
// import Compose from "./Compose";
import { PostContext } from "./PostContext";
import { useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Movies() {
  const { posts, addPost } = useContext(PostContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const res = await axios.post("/movies", {
      //   ...formInput,
      // }); // Send POST request to backend
      addPost(formInput); // Add the new post to the context
      handleClose();
      navigate("/movies"); // Redirect to Movies page after submission
    } catch (err) {
      console.error("Error adding movie:", err);
    }
  };

  return (
    <>
      <Button variant="primary addNewBtn" onClick={handleShow}>
        Add new
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            formInput={formInput}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="container">
        <div className="row">
          {posts.map((post, index) => {
            const convertDateFormat = (dateString) => {
              if (!dateString) return "Not specified";
              const [year, month, day] = dateString.split("-");
              return `${day}/${month}/${year.slice(2)}`;
            };

            const formattedDate = convertDateFormat(post.date);
            return (
              <PostCard
                key={index}
                index={index}
                title={post.title}
                date={formattedDate}
                genre={post.genre}
                rating={post.rating}
                language={post.lang}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Movies;
