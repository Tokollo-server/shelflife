import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Home({ onLogin, loggedInUser }) {
  const [name, setName] = useState("");

  const handleLoginClick = () => {
    if (name.trim() === "") {
      alert("Please enter your name to log in.");
      return;
    }
    onLogin(name);
    setName("");
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://res.cloudinary.com/shelflife-online/image/upload/c_fill,f_auto,h_600,q_auto:eco,w_600/v1575961299/uploads/assets/412-AJ4-Blog-Square-EE3.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
        width: "100%",
      }}
      className="position-relative"
    >
      {/* Optional: Add an overlay for better text readability on busy backgrounds */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark semi-transparent overlay
          borderRadius: "8px",
          zIndex: 1, // Ensure overlay is behind content
        }}
      ></div>

      {/* Also, make the card's background transparent and remove its border to see the image */}
      <div
        className="card shadow-sm p-4"
        style={{
          backgroundColor: "transparent",
          border: "none",
          zIndex: 2,
          maxWidth: "500px",
        }}
      >
        <h2 className="card-title text-center mb-4" style={{ color: "white" }}>
          {" "}
          {/* Ensure heading color is white */}
          Welcome to Shelflife Online!
        </h2>
        {loggedInUser ? (
          <div className="alert alert-success text-center" role="alert">
            <p className="mb-0">Welcome, {loggedInUser} to Shelflife Online!</p>
          </div>
        ) : (
          <div className="input-group mb-3 justify-content-center">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              // Make input slightly transparent for background to show through
              style={{
                backgroundColor: "rgba(255,255,255,0.8)",
                color: "black",
              }}
            />
            <button className="btn btn-primary ms-2" onClick={handleLoginClick}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
