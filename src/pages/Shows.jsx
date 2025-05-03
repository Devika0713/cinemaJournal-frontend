import React, { useContext, useState } from "react";
import { PostContext } from "./PostContext";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import PostCard from "../components/PostCard";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";

function Shows() {
  const { postsTV, addPostTV } = useContext(PostContext);
  const [formInput, setFormInput] = useState({
    date: "",
    title: "",
    genre: "",
    rating: "",
    lang: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const handleTVChange = (e) => {
    var { name, value } = e.target;
    setFormInput((prevPostTV) => {
      return { ...prevPostTV, [name]: value };
    });
  };

  const handleTVSubmit = async (e) => {
    e.preventDefault();
    try {
      // const res = await axios.post("/shows", {
      //   ...formInput,
      // }); // Send POST request to backend
      addPostTV(formInput); // Add the new post to the context
      handleClose();
      navigate("/shows"); // Redirect to Movies page after submission
    } catch (err) {
      console.error("Error adding show:", err);
    }
  };

  return (
    <>
      <Button variant="primary addNewBtn" onClick={handleShow}>
        Add new
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new show</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            handleSubmit={handleTVSubmit}
            handleChange={handleTVChange}
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
          {postsTV.map((post, index) => {
            const convertDateFormat = (dateString) => {
              if (!dateString) return "Not specified";
              const [year, month, day] = dateString.split("-");
              return `${day}/${month}/${year.slice(2)}`;
            };

            // Example usage
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

export default Shows;
