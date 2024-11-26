// src/components/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "../css/Header.css";
import MenuGroup from "./MenuGroup";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src="/favicon.ico" alt="Logo" />
        </Link>
      </div>

      {/* Menu */}
      {/* <div className="menu">
        <button className="menu-button" onClick={toggleMenu}>
          Menu
        </button>
        {isMenuOpen && <Link to="/product">Product</Link>}
        {isMenuOpen && <Link to="/about">About</Link>}
      </div> */}
      <MenuGroup />

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
        />
        <button className="search-button">Search</button>
      </div>
    </header>
  );
};

export default Header;
