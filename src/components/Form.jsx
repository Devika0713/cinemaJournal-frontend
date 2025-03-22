import React from "react";

function Form({ handleSubmit, formInput, handleChange }) {
  return (
    <>
      <div id="compose-form">
        {/* <h2>Compose</h2> */}
        <div>
          <form action="/create-post" method="post" onSubmit={handleSubmit}>
            <div className="row p-3">
              <div className=" col-lg-6 g-1">
                <label>Title</label>
                <input
                  className="form-control"
                  type="text"
                  name="title"
                  value={formInput.title}
                  onChange={handleChange}
                />
              </div>

              <div className="col-lg-6 g-1">
                <label>Date finished</label>
                <input
                  className="form-control"
                  type="date"
                  name="date"
                  value={formInput.date}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row p-3">
              <div className="col-lg-6 g-1">
                <label>Genre</label>
                <select
                  className="form-select"
                  name="genre"
                  value={formInput.genre}
                  onChange={handleChange}
                >
                  <option value="">Select genre</option>
                  <option value="Thriller">Thriller</option>
                  <option value="Romance">Romance</option>
                  <option value="Comedy">Comedy</option>
                </select>
              </div>
              <div className=" col-lg-6 g-1">
                <label>Language</label>
                <input
                  className="form-control"
                  type="text"
                  name="lang"
                  value={formInput.lang}
                  onChange={handleChange}
                />
              </div>
              <div className="row p-3">
                <div className="col-lg-12">
                  <label>Rating </label>
                  <input
                    style={{
                      paddingRight: "20px",
                      paddingLeft: "20px",
                      height: "35.2px",
                      width: "93.2px",
                      margin: "20px",
                    }}
                    type="number"
                    name="rating"
                    placeholder="1-5"
                    value={formInput.rating}
                    onChange={handleChange}
                    max={5}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <br></br>
            <button className="btn submit-button" type="submit" name="button">
              Publish
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
