// src/components/HeroBanner.js
import React from 'react';
import '../css/components/HeroBanner.css';
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h1>Welcome to Gabriel's React showcase!</h1>
        <p>Feel free to check around.</p>
        <Link to='/product'><button>Shop Now</button></Link>
      </div>
    </div>
  );
};

export default HeroBanner;
