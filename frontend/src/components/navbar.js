// frontend/src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Task Manager</h1>
      <div className="nav-links">
        <Link to="/">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;
