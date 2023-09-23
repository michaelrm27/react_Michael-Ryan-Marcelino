import React from "react";
import { useNavigate } from "react-router-dom";


function Page() {
  const navigate = useNavigate()
  return (
    <>
    <div className="bg">
      <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong pt-4">
        <div className="container-fluid ps-5">
          <p className="fw-bold text-primary">MICHAEL</p>
          <p className="fw-light text-dark-emphasis">Ryan</p>
          <div
            className="collapse navbar-collapse justify-content-end pe-5"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav gap-5">
              <a className="nav-link active" aria-current="page" onClick={() => navigate('/')}>
                Home
              </a>
              <a className="nav-link active" aria-current="page" href="#">
                Products
              </a>
              <a className="nav-link active" aria-current="page" href="#">
                About
              </a>
              <a
                className="nav-link active"
                aria-current="page"
                href="../project/contact.html"
              >
                Contacs
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* Welcome */}
      <div className="content">
        <div className="container text-light text-center">
          <p className="display-5 fw-bold">WELCOME TO MY WEBSITE</p>
          <p className="fw-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
            eos ullam est dolor architecto blanditiis.
          </p>
          <button className="btn btn-info mt-4">Get Started</button>
        </div>
      </div>
    </div>
    <div className="card bg-dark text-white">
      <div className="card-header d-flex">
        <p className="fw-bold text-primary">MICHAEL</p>
        <p className="fw-light text-dark-emphasis">Ryan</p>
      </div>
      <div className="card-body mt-2">
        <div className="row">
          <div className="col-4">
            <h5 className="mb-3">
              Join 16.000+ people who gets our website tips twice a month
            </h5>
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              style={{ width: 300 }}
              type="email"
              className="form-control rounded-5"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text text-white">
              We'll never share your email with anyone else.
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <div className="mt-3">
              <a className="me-3" href="" style={{ textDecoration: "none" }}>
                <i className="bi bi-instagram" style={{ fontSize: "2rem" }} />
              </a>
              <a className="me-3" href="" style={{ textDecoration: "none" }}>
                <i className="bi bi-linkedin" style={{ fontSize: "2rem" }} />
              </a>
              <a className="me-3" href="" style={{ textDecoration: "none" }}>
                <i className="bi bi-facebook" style={{ fontSize: "2rem" }} />
              </a>
            </div>
          </div>
          <div className="col-4 text-white text-center">
            <h5>Chicago Community Member</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, in.
              Ad, qui modi eos praesentium minima maxime asperiores et ipsum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
              consequuntur reprehenderit quibusdam. Qui voluptates voluptatum id,
              nulla iusto eligendi dolor. Ipsum voluptatibus debitis, harum fugit
              expedita non porro reprehenderit aliquam.
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
} export default Page
