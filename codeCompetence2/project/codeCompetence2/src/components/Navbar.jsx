import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong pt-4">
        <div className="container-fluid ps-5">
          <p className="fw-bold text-primary">MICHAEL</p>
          <p className="fw-light text-dark-emphasis">Ryan</p>
          <div
            className="collapse navbar-collapse justify-content-end pe-5"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav gap-5">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                Home
              </a>
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                Products
              </a>
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
              >
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
    </>
  );
}
