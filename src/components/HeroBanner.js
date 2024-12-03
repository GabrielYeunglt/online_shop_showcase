// src/components/HeroBanner.js
import React from 'react';
import '../css/components/HeroBanner.css';
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h1>Welcome to Gabriel's React showcase!</h1>
        <p>Click the button below to learn more about me.</p>
        <Link to='/about'><button>About me</button></Link>
      </div>
    </div>
  );
};

export default HeroBanner;
