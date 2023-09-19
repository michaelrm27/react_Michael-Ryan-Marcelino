import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand fw-medium" href="#">
            Simple Header
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active bg-primary text-light" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link text-primary" href="#">
                Features
              </a>
              <a className="nav-link text-primary" href="#">
                Pricing
              </a>
              <a className="nav-link text-primary">FAQs</a>
              <a className="nav-link text-primary">About</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
