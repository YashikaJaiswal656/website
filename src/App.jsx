import React, { useState, useEffect } from 'react';
import "./App.css";
import Header from './Include/header';
import OurProduct from './Components/OurProduct';
import Card from './Components/Card';
import Range from './Components/Range';
import WhoWe from './Components/WhoWe';
import Mission from './Components/Mission';
const slides = [
  {
    img: "https://img.pikbest.com/backgrounds/20241207/green-energy-background-ai-generated_11219719.jpg!sw800",
    title: "About Our Company",
    text: "Innovative Energy Solutions"
  },
  {
    img: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/41d8836a-a901-4de4-89f0-327a4f6f5799/d3fc8aeb-68df-40e2-8729-733dde1e10a2.png",
    title: "Power with Purpose",
    text: "Renewable Energy for All"
  },
  {
    img: "https://t4.ftcdn.net/jpg/11/19/11/71/360_F_1119117126_OeAYRB1FoqsO00BlpX2XS0TI79Qkw7qB.jpg",
    title: "Go Green",
    text: "Clean Energy from Nature"
  },
  {
    img: "https://www.azom.com/images/news/SocialSharingImage_62131_16995293492968496.jpg",
    title: "Future Ready",
    text: "Smart & Sustainable Power"
  }
];

const App = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  return (
    <>
      <Header />

      <div className="slider-container">
        <div className="slider-wrapper" style={{ transform: `translateX(-${current * 100}%)` }}>
          {slides.map((slide, index) => (
            <div className="slide" key={index} style={{ backgroundImage: `url(${slide.img})` }}>
              <div className="blur">
                <h1>{slide.title}</h1>
                <p>{slide.text}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="arrow left" onClick={prevSlide}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="arrow right" onClick={nextSlide}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
<WhoWe/>
    <OurProduct/>
    <Mission/>
    

    </>
  );
};

export default App;
