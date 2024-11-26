// src/components/Carousel.js
import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import './Carousel.css';

const Carousel = () => {
  const images = [
    '/herobanners/hero1.png',
    '/herobanners/hero2.png',
    '/herobanners/hero3.png',
  ];

  return (
    <ResponsiveCarousel autoPlay infiniteLoop showThumbs={false}>
      {images.map((src, index) => (
        <div key={index}>
          <img src={src} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </ResponsiveCarousel>
  );
};

export default Carousel;
