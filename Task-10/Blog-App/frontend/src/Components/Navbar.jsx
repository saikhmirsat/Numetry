import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isAuth, setIsAuth] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userJSON = localStorage.getItem("UserData");

    if (userJSON) {
      const user = JSON.parse(userJSON);
      setIsAuth(user.isAuthUser);
    } else {
      console.log("UserData not found in localStorage.");
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("UserData");
    window.location.reload();
    navigate = "/login";
  }

  return (
    <div className="navBar">
      <div>
        <Link to="/blogs">BLOG</Link>
      </div>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isAuth ? <Link to="/blogs">Profile</Link> : ""}
        {isHovered && isAuth && (
          <div className="logout-option">
            <button onClick={() => handleLogout()}>Logout</button>
          </div>
        )}
      </div>
      {!isAuth ? (
        <div className="register_login">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      ) : null}
    </div>
  );
}
