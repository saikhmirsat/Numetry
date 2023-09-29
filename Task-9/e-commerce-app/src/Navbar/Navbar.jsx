import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [Homeactive, setHomeActive] = useState(true);
  const [Cartactive, setCartActive] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Load cart data from local storage when the component mounts
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      const count = savedCart.reduce((acc, item) => acc + item.quantity, 0);
      setCartCount(count);
    }
  }, []);

  return (
    <div className="Navbar">
      <Link
        to="/"
        className={Homeactive ? "Nav_active" : ""}
        onClick={() => {
          setHomeActive(true);
          setCartActive(false);
        }}
      >
        Home
      </Link>

      <div>
        <Link
          to="/cartpage"
          className={Cartactive ? "Nav_active" : ""}
          onClick={() => {
            setCartActive(true);
            setHomeActive(false);
          }}
        >
          Cart ({cartCount})
        </Link>
      </div>
      <Link to="/historypage">Order History</Link>
    </div>
  );
}
