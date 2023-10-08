import React, { useState } from "react";
import Swal from "sweetalert2";
export default function Contact() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    Swal.fire("Submmited", `First Name: ${input.firstName}`, `Last Name: ${input.lastName}`, `Email: ${input.email}`, `Comments: ${input.comments}`);
  }

  return (
    <div>
      <div className="container bg-dark-subtle p-5 rounded-4 mt-5">
        <div className="row">
          <div className="col-6 align-items-center d-flex justify-content-center">
            <p className="display-5 fw-bold">Contact Us !!</p>
          </div>
          <div className="col-6">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-6">
                  <label
                    htmlFor="inputname"
                    className="form-label"
                  >
                    First Name
                  </label>
                  <input
                    name="firstName"
                    value={input.firstName}
                    type="text"
                    className="form-control"
                    id="inputname"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-6">
                  <label
                    htmlFor="inputname"
                    className="form-label"
                  >
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    value={input.lastName}
                    onChange={handleInputChange}
                    type="text"
                    className="form-control"
                    id="inputname"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  name="email"
                  value={input.email}
                  onChange={handleInputChange}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div
                  id="emailHelp"
                  className="form-text"
                >
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="form-floating mb-3">
                <textarea
                  name="comments"
                  value={input.comments}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  style={{ height: 200 }}
                  defaultValue={""}
                />
                <label htmlFor="floatingTextarea">Comments</label>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label"
                  htmlFor="exampleCheck1"
                >
                  Check me out
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
