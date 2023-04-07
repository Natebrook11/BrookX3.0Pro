import React, { useState, useEffect } from 'react';
import "./Carousel.css"

const Carousel = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [currentIndex, interval, images.length]);

  return (
    <div>
    <div className="carousel">
      <div className="carousel-items">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`Carousel Item ${index}`} />
          </div>
        ))}
      </div>
    </div>
    <div className="carousel-dots">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
      </div>
  );
};

const App = () => {
  const images = [
    'https://images.pexels.com/photos/15953937/pexels-photo-15953937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/15856901/pexels-photo-15856901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/15856903/pexels-photo-15856903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/15856902/pexels-photo-15856902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];

  return (
    <div>
      <Carousel images={images} interval={5000} />
    </div>
  );
};

export default App;
