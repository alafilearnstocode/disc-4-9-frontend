import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="tabs" aria-label="Followers navigation">
      <ul>
        <li><Link to="/" className="active">Users you know</Link></li>
        <li><Link to="/followers">Followers</Link></li>
        <li><a href="#following">Following</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
