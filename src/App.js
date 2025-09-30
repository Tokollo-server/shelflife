import React, { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Sneakers from "./components/Sneakers"; // This is now your products page
import About from "./components/About";
import TotalPrice from "./components/TotalPrice";
import { FaShoppingCart } from "react-icons/fa";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import NavigationMenu from "./components/NavigationMenu";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isTotalPriceVisible, setIsTotalPriceVisible] = useState(false);

  const location = useLocation();

  const handleLogin = (name) => {
    setLoggedInUser(name);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setTotalPrice(0);
    setIsTotalPriceVisible(false);
  };

  const isHomePage = location.pathname === "/";

  return (
    <div className="App">
      <NavigationMenu userName={loggedInUser} onLogout={handleLogout} />

      {/* Render TotalPrice component. Its visibility is controlled by isTotalPriceVisible state. */}
      {isTotalPriceVisible && <TotalPrice totalPrice={totalPrice} />}

      <div className={isHomePage ? "container-fluid p-0" : "container mt-4"}>
        <Routes>
          <Route
            path="/"
            element={<Home onLogin={handleLogin} loggedInUser={loggedInUser} />}
          />

          {/* The /sneakers route now uses the Sneakers component (as your products page) */}
          <Route
            path="/sneakers"
            element={
              <Sneakers
                setTotalPrice={setTotalPrice}
                setIsTotalPriceVisible={setIsTotalPriceVisible}
              />
            }
          />

          <Route path="/about" element={<About />} />

          {/* Add login and registration routes */}
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
