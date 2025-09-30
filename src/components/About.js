// src/components/About.js
import React from "react";
import { Figure } from "react-bootstrap";

function About() {
  return (
    <div className="card shadow-sm p-4">
      <h2 className="card-title text-center mb-4">About Shelflife</h2>
      <p className="card-text lead text-muted mb-4">
        Welcome to Shelflife, your ultimate destination for authentic sneakers,
        apparel, and street culture. Founded with a passion for exclusive drops
        and timeless style, we've been curating the best from global brands and
        emerging designers to bring you a unique collection.
      </p>

      <Figure className="d-block text-center mb-5">
        <Figure.Caption className="text-dark">
          Shelflife has been a pillar of street culture since its inception,
          offering a curated selection of the finest sneakers and apparel. We
          believe in authenticity and passion for the game.
        </Figure.Caption>
      </Figure>

      <h3 className="card-subtitle mb-3 text-start">Our Mission</h3>
      <p className="card-text text-start mb-4">
        Our mission is to connect sneaker enthusiasts and fashion-forward
        individuals with authentic, high-quality products. We strive to be more
        than just a store; we aim to be a hub for the culture, offering a
        seamless shopping experience and a community for those who share our
        passion.
      </p>

      <h3 className="card-subtitle mb-3 text-start">What We Offer</h3>
      <ul className="list-group list-group-flush mb-4">
        <li className="list-group-item d-flex align-items-center">
          <i className="bi bi-tag-fill me-2 text-primary"></i> Latest Sneaker
          Releases
        </li>
        <li className="list-group-item d-flex align-items-center">
          <i className="bi bi-person-fill me-2 text-success"></i> Exclusive
          Apparel Collections
        </li>
        <li className="list-group-item d-flex align-items-center">
          <i className="bi bi-award-fill me-2 text-warning"></i> Curated
          Accessories
        </li>
        <li className="list-group-item d-flex align-items-center">
          <i className="bi bi-heart-fill me-2 text-danger"></i> Authenticity
          Guaranteed
        </li>
      </ul>

      <h3 className="card-subtitle mb-3 text-start">
        Our Store Locations (Fictional)
      </h3>
      <div className="d-flex flex-wrap justify-content-around mb-4">
        {/* Fictional Store Image 1 */}
        <Figure className="m-2">
          <Figure.Image
            width={300}
            height={200}
            alt="Shelflife Store Interior"
            src="https://res.cloudinary.com/shelflife-online/image/upload/c_scale,dpr_auto,f_auto,q_auto:eco,w_auto/v1575961299/uploads/assets/SHELFLIFESTORE-PARISB-17-LR-nTa-oCz.jpg" // Placeholder for store interior
            className="rounded shadow"
          />
          <Figure.Caption className="text-dark">
            Our vibrant downtown store, a hub for sneakerheads.
          </Figure.Caption>
        </Figure>

        {/* Fictional Store Image 2 */}
        <Figure className="m-2">
          <Figure.Image
            width={300}
            height={200}
            alt="Shelflife Store Exterior"
            src="https://res.cloudinary.com/shelflife-online/image/upload/c_fill,f_auto,q_auto:eco/v1575961299/uploads/assets/815-HERO-GROUP-1080X1920-XKY.jpg" // Placeholder for store exterior
            className="rounded shadow"
          />
          <Figure.Caption className="text-dark">
            The modern facade of our flagship store.
          </Figure.Caption>
        </Figure>
      </div>

      <h3 className="card-subtitle mb-3 text-start">How to Contact Us</h3>
      <p className="card-text text-start mb-2">
        <i className="bi bi-geo-alt-fill me-2"></i> **Address:** 123 Sneaker
        Alley, Urban City, 12345
      </p>
      <p className="card-text text-start mb-2">
        <i className="bi bi-telephone-fill me-2"></i> **Phone:** +27 11 123 4567
      </p>
      <p className="card-text text-start mb-2">
        <i className="bi bi-envelope-fill me-2"></i> **Email:**
        info@shelflife.com
      </p>

      <h3 className="card-subtitle mb-3 text-start">Connect With Us</h3>
      <p className="card-text text-start">
        Follow us on social media for updates on new arrivals, special events,
        and more:
      </p>
      <div className="d-flex justify-content-start mb-3">
        <a
          href="https://www.instagram.com/shelflife_store/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-dark me-2"
        >
          <i className="bi bi-instagram me-1"></i> Instagram
        </a>
        <a
          href="https://twitter.com/ShelflifeStore"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-dark me-2"
        >
          <i className="bi bi-twitter me-1"></i> Twitter
        </a>
        <a
          href="https://www.facebook.com/shelflife.store/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-dark"
        >
          <i className="bi bi-facebook me-1"></i> Facebook
        </a>
      </div>

      <p className="card-text text-center mt-4">
        Thank you for being a part of the Shelflife community!
      </p>
    </div>
  );
}

export default About;
