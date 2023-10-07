import React from "react";
import Swal from 'sweetalert2'
export default function Contact() {

    function handleSubmit(e){
        e.preventDefault()
        Swal.fire('Submitted')
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
                    type="text"
                    className="form-control"
                    id="inputname"
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
