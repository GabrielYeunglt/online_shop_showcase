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
    // <header className="header">
    //   {/* Logo */}
    //   <div className="logo">
    //     <Link to="/">
    //       <img src="/favicon.ico" alt="Logo" />
    //     </Link>
    //   </div>

    //   {/* Search Bar */}
    //   <div className="search-bar">
    //     <input
    //       type="text"
    //       placeholder="Search products..."
    //       className="search-input"
    //     />
    //     <button className="search-button">Search</button>
    //   </div>

    //   <div className="user-profile">
    //     <button className="login-button">Login</button>
    //     <button className="signup-button">Sign-up</button>
    //   </div>
    // </header>
    <header class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <Link to="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <img class="bi me-2" width="40" height="40" role="img" aria-label="Bootstrap" src="/logo192.png"></img>
        </Link>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" class="nav-link px-2 text-secondary">Home</Link></li>
          <li><Link to="/" class="nav-link px-2 text-white">Features</Link></li>
          <li><Link to="#" class="nav-link px-2 text-white">Pricing</Link></li>
          <li><Link to="#" class="nav-link px-2 text-white">FAQs</Link></li>
          <li><Link to="/about" class="nav-link px-2 text-white">About</Link></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div class="text-end">
          <Link to="/login"><button type="button" class="btn btn-outline-light me-2">Login</button></Link>
          <Link to="/signup"><button type="button" class="btn btn-warning">Sign-up</button></Link>
        </div>
      </div>
    </div>
  </header>
  );
};

export default Header;
