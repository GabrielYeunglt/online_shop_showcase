// src/components/Carousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import './Carousel.css';

const ResponsiveCarousel = () => {
    const images = [
        '/carousel/hero1.png',
        '/carousel/hero2.png',
        '/carousel/hero3.png',
    ];

    return (
        <Carousel autoPlay infiniteLoop showThumbs={false}>
                {images.map((src, index) => (
                    <div key={index}>
                        <img src={process.env.PUBLIC_URL + src} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
        </Carousel>
    );
};

export default ResponsiveCarousel;
