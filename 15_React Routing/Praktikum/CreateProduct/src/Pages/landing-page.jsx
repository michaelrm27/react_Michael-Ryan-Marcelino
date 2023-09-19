import React from "react";
import { useNavigate } from "react-router-dom";


function Page() {
  const navigate = useNavigate()
  return (
    <div>
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
      <div className="hero-container">
        <div className="hero-head">
          <p className="hero-heading">Better Solutions For Your Bussiness</p>
          <p className="hero-paragraph">We are team of talented designers making websites with bootstrap</p>
          <button className="btn-started">Get Started</button>
          <button className="btn-watch">Watch Video</button>
          <div className="mt-3">
            <button className="btn btn-primary rounded-5" onClick={() => navigate("/")}>Create Product</button>
          </div>
        </div>
        <div className="hero-img">
          <img src="assets/hero-img.png.png" alt="image" />
        </div>
      </div>
      <div className="news-container">
        <p className="news-heading">Join Our Newsletter</p>
        <p className="news-paragraph">Tamen quem nulla quae muitos aute sint cuipa legam noster magna</p>
        <div className="news-subs">
          <input type="text" className="text-input" />
          <button className="btn-subs">Subscribe</button>
        </div>
      </div>
      <div className="footer1-container">
        <div className="address-container">
          <p className="address-heading">ARSHA</p>
          <p className="address-paragraph">A108 Adam Street</p>
          <p className="address-paragraph2">New York, NY 535022</p>
          <p className="address-paragraph2">United States</p>
          <div className="contact">
            <p>
              <strong>Phone:</strong> +1 5589 55488 55
            </p>
            <p>
              <strong>Email:</strong> info@example.com
            </p>
          </div>
        </div>
        <div className="links-container">
          <p>Useful Links</p>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Terms of service</a>
            </li>
            <li>
              <a href="">Privacy policy</a>
            </li>
          </ul>
        </div>
        <div className="services-container">
          <p>Our Services</p>
          <ul>
            <li>
              <a href="">Web Design</a>
            </li>
            <li>
              <a href="">Web Development</a>
            </li>
            <li>
              <a href="">Product Management</a>
            </li>
            <li>
              <a href="">Marketing</a>
            </li>
            <li>
              <a href="">Graphic Design</a>
            </li>
          </ul>
        </div>
        <div className="social-container">
          <p className="social-heading">Our Social Networks</p>
          <p className="social-paragraph">Cras fermentum odio eu feugiat lide par naso tierra vieda magna derita valles</p>
          <div className="social-image">
            <img src="assets/a.png" alt="" />
            <img src="assets/a.png" alt="" />
            <img src="assets/a.png" alt="" />
            <img src="assets/a.png" alt="" />
            <img src="assets/a.png" alt="" />
          </div>
        </div>
      </div>
      <div className="footer">
        <p>© Copyright</p>
      </div>
    </div>
  );
} export default Page
