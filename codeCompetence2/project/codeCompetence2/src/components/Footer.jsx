import React from "react";

export default function Footer() {
  return (
    <>
      <div className="card bg-dark text-white">
        <div className="card-header d-flex">
          <p className="fw-bold text-primary">MICHAEL</p>
          <p className="fw-light text-dark-emphasis">Ryan</p>
        </div>
        <div className="card-body mt-2">
          <div className="row">
            <div className="col-4">
              <h5 className="mb-3">Join 16.000+ people who gets our website tips twice a month</h5>
              <label
                htmlFor="exampleInputEmail1"
                className="form-label"
              >
                Email address
              </label>
              <input
                style={{ width: 300 }}
                type="email"
                className="form-control rounded-5"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div
                id="emailHelp"
                className="form-text text-white"
              >
                <h3>We'll never share your email with anyone else.</h3>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
              <div className="mt-3">
                <a
                  className="me-3"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <i
                    className="bi bi-instagram"
                    style={{ fontSize: "2rem" }}
                  />
                </a>
                <a
                  className="me-3"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <i
                    className="bi bi-linkedin"
                    style={{ fontSize: "2rem" }}
                  />
                </a>
                <a
                  className="me-3"
                  href=""
                  style={{ textDecoration: "none" }}
                >
                  <i
                    className="bi bi-facebook"
                    style={{ fontSize: "2rem" }}
                  />
                </a>
              </div>
            </div>
            <div className="col-4 text-white text-center">
              <h5>Chicago Community Member</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, in. Ad, qui modi eos praesentium minima maxime asperiores et ipsum!</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequuntur reprehenderit quibusdam. Qui voluptates voluptatum id, nulla iusto eligendi dolor. Ipsum voluptatibus debitis, harum fugit expedita non porro
                reprehenderit aliquam.
              </p>
            </div>
            <div className="col-4 text-white text-center">
              <h5>Come Visit Us</h5>
              <p>50229</p>
              <p>Taman Siswa</p>
              <p className="fw-bold">Semarang</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
