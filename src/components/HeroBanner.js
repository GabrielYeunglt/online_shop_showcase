// src/components/HeroBanner.js
import React from 'react';
import '../css/HeroBanner.css';
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h1>Welcome to Our Online Shop</h1>
        <p>Your one-stop destination for the best products.</p>
        <Link to='/product'><button>Shop Now</button></Link>
      </div>
    </div>
  );
};

export default HeroBanner;
