import React, { useState , useEffect } from "react";
import './Hero.css';

 import  slider_6 from '../Assets/slider6.jpeg'
import slider_7 from '../Assets/slider7.jpg'
import slider_8 from '../Assets/slider8.png'
import { Link } from "react-router-dom";


const Hero = () => {
  const [itemActive, setItemActive] = useState(0);
  const items = [
    { src:  slider_6 , title: 'Hoddie', content: 'Shop Now' },
    { src:  slider_7 , title: 'Oversized ', content: 'Shop Now' },
    { src:  slider_8 , title: 'Denim', content: 'Shop Now' },
    // { src:  slider_4 , title: 'Slider 04', content: 'Shop Now' },
    // { src:  slider_5 , title: 'Slider 05', content: 'Shop Now' }
  ];
  const thumbnails = items.map(item => ({ src: item.src, title: 'Buy Your Style' }));
  const countItem = items.length;

  useEffect(() => {
    const interval = setInterval(() => { 
      setItemActive(prev => (prev + 1) % countItem);
    }, 5000);

    return () => clearInterval(interval);
  }, [countItem]);

  const showSlider = index => {
    setItemActive(index);
  };

  const handleNext = () => {
    setItemActive(prev => (prev + 1) % countItem);
  };

  const handlePrev = () => {
    setItemActive(prev => (prev - 1 + countItem) % countItem);
  };

  return (
    <div className="slider">
      <div className="list">
        {items.map((item, index) => (
          <div key={index} className={`item ${index === itemActive ? 'active' : ''}`}>
          <Link to="/shop"><img src={item.src} alt={item.title} /></Link>  
            <div className="content">
              <p>Make Your Own Style</p>
              <h2>{item.title}</h2>
            <Link to="/shop" style={{ textDecoration: 'none', color: 'white' }}><buton className="btn">{item.content}</buton></Link>  
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button id="prev" onClick={handlePrev}>&lt;</button>
        <button id="next" onClick={handleNext}>&gt;</button>
      </div>
      <div className="thumbnail">
        {thumbnails.map((thumbnail, index) => (
          <div
            key={index}
            className={`item ${index === itemActive ? 'active' : ''}`}
            onClick={() => showSlider(index)}
          >
            <img src={thumbnail.src} alt={thumbnail.title} />
            <div className="content">{thumbnail.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
  };
  
  
export default Hero;