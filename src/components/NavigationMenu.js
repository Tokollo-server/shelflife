import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function NavigationMenu({ userName, onLogout, cartItemCount = 0 }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container-fluid">
        {/* Brand with logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/shelflifeLogo.png"
            alt="Shelflife Logo"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />
          Shelflife Online Store
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/") ? "active" : ""}`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/sneakers") ? "active" : ""}`}
                to="/sneakers"
              >
                Sneakers
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/about") ? "active" : ""}`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>

          {userName ? (
            <div className="d-flex align-items-center">
              <span className="navbar-text text-light me-3">
                Welcome, {userName}!
              </span>
              <Link
                to="/cart"
                className="nav-link text-light position-relative me-3"
              >
                <FaShoppingCart size={20} />
                {cartItemCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartItemCount}
                  </span>
                )}
              </Link>
              <button className="btn btn-danger" onClick={onLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="d-flex">
              <Link to="/login" className="btn btn-outline-light me-2">
                Login
              </Link>
              <Link to="/register" className="btn btn-outline-info">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavigationMenu;
