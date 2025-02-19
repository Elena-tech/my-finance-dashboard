import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/organisms/NavBar.css";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="navbar">
      <div className="nav-logo">Pulse Lite Dashboard</div>

      <div className={`nav-links ${isOpen ? "mobile-open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/resources">Resources</Link>
      </div>

      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default NavBar;
