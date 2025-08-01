import React from 'react'
import Tilt from 'react-parallax-tilt';

const Mission = () => {
  return (
    <>
    
    
     <section className="our-products-epic">
      <div className="hero-video-bg">
        <video autoPlay muted loop playsInline>
          <source src="https://assets.mixkit.co/videos/preview/mixkit-sci-fi-sphere-in-a-space-2652-large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="glow-circles" />
      <div className="hero-container" style={{width:"100%", display:"flex", justifyContent:"center"}}>
        <div className="product-container">
          

          <Tilt glareEnable={true} glareMaxOpacity={0.4} scale={1.05} transitionSpeed={2500}>
            <div className="product-image neon-border" data-aos="zoom-in-up">
              
           <div className="product-text"  data-aos="fade-up">
            <h2>
              <i className="fas fa-bolt"></i>
              <span className="gradient-title">Mission & Vission</span>
            </h2>
           <p className="quote-text">
          “Partnering to deliver innovative energy solutions for a sustainable planet.”
            </p>
          
            
            </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Mission