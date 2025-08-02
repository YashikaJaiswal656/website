import React from 'react'
import Tilt from 'react-parallax-tilt';

import "./Card.css"
const Card = () => {
    return (
        <>
        <section className="who-we-are-epic">
      <div className="hero-video-bg">
        <video autoPlay muted loop playsInline>
          <source src="https://assets.mixkit.co/videos/preview/mixkit-sci-fi-sphere-in-a-space-2652-large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="glow-circles" />
      <div className="hero-container">
        <div className="content-block" data-aos="fade-up" style={{flexDirection:"column"}}>
          <div className="text-content">
            <h2>
              <i className="fas fa-bolt"></i>
              <span className="gradient-title">Our Infrastructure</span>
            </h2>
            
          </div>
<div className="health">
    <div className="contt">
        <div className="hl_cont">
            <Tilt glareEnable={true} glareMaxOpacity={0.4} scale={1.05} transitionSpeed={2500} className="tilt-3d-container">
  <div className="image-content neon-border custom-tilt-box" data-aos="zoom-in-up">
    <div className="service_box">
      <img className="tilt-pop-out" src="https://finikelithium.com/static/media/rajpura-factory-working.07a75bec3fee6bc81a54.jpg" alt="" />
      <h2 className="tilt-pop-out">Manufacturing Plant</h2>
      <p className="tilt-pop-out">Rajpura Facility</p>
    </div>
  </div>
</Tilt>

<Tilt glareEnable={true} glareMaxOpacity={0.4} scale={1.05} transitionSpeed={2500} className="tilt-3d-container">
  <div className="image-content neon-border custom-tilt-box" data-aos="zoom-in-up">
    <div className="service_box">
      <img className="tilt-pop-out" src="https://finikelithium.com/static/media/finike-lithium-3.070b0b162c7375a0a658.jpg" alt="" />
      <h2 className="tilt-pop-out">Battery Testing System</h2>
      <p className="tilt-pop-out">Rajpura Facility.</p>
    </div>
  </div>
</Tilt>

<Tilt glareEnable={true} glareMaxOpacity={0.4} scale={1.05} transitionSpeed={2500} className="tilt-3d-container">
  <div className="image-content neon-border custom-tilt-box" data-aos="zoom-in-up">
    <div className="service_box">
      <img className="tilt-pop-out" src="https://finikelithium.com/static/media/finike-lithium-4.012dbfa66f6203334867.jpg" alt="" />
      <h2 className="tilt-pop-out">Module Testing System</h2>
      <p className="tilt-pop-out">Mohali Facility</p>
    </div>
  </div>
</Tilt>

<Tilt glareEnable={true} glareMaxOpacity={0.4} scale={1.05} transitionSpeed={2500} className="tilt-3d-container">
  <div className="image-content neon-border custom-tilt-box" data-aos="zoom-in-up">
    <div className="service_box">
      <img className="tilt-pop-out" src="https://finikelithium.com/static/media/finike-lithium-5.66f28c41035b75150f82.jpg" alt="" />
      <h2 className="tilt-pop-out">Pack Testing System</h2>
      <p className="tilt-pop-out">Rajpura Facility</p>
    </div>
  </div>
</Tilt>

<Tilt glareEnable={true} glareMaxOpacity={0.4} scale={1.05} transitionSpeed={2500} className="tilt-3d-container">
  <div className="image-content neon-border custom-tilt-box" data-aos="zoom-in-up">
    <div className="service_box">
      <img className="tilt-pop-out" src="https://finikelithium.com/static/media/finike-lithium-6.400f90b7fb2177d33d10.jpeg" alt="" />
      <h2 className="tilt-pop-out">Battery Testing System</h2>
      <p className="tilt-pop-out">Rajpura Facility.</p>
    </div>
  </div>
</Tilt>

<Tilt glareEnable={true} glareMaxOpacity={0.4} scale={1.05} transitionSpeed={2500} className="tilt-3d-container">
  <div className="image-content neon-border custom-tilt-box" data-aos="zoom-in-up">
    <div className="service_box">
      <img className="tilt-pop-out" src="https://finikelithium.com/static/media/finike-lithium-7.8ed3e041b40e3742a652.jpg" alt="" />
      <h2 className="tilt-pop-out">Auto Calibration</h2>
      <p className="tilt-pop-out">Mohali Facility</p>
    </div>
  </div>
</Tilt>

<Tilt glareEnable={true} glareMaxOpacity={0.4} scale={1.05} transitionSpeed={2500} className="tilt-3d-container">
  <div className="image-content neon-border custom-tilt-box" data-aos="zoom-in-up">
    <div className="service_box">
      <img className="tilt-pop-out" src="https://finikelithium.com/static/media/finike-lithium-8.bb262a038e4114ca924d.jpg" alt="" />
      <h2 className="tilt-pop-out">Internal Resistance Testing</h2>
      <p className="tilt-pop-out">Rajpura Facility</p>
    </div>
  </div>
</Tilt>

<Tilt glareEnable={true} glareMaxOpacity={0.4} scale={1.05} transitionSpeed={2500} className="tilt-3d-container">
  <div className="image-content neon-border custom-tilt-box" data-aos="zoom-in-up">
    <div className="service_box">
      <img className="tilt-pop-out" src="https://finikelithium.com/static/media/finike-lithium-10.217067477c7cfc31b815.jpg" alt="" />
      <h2 className="tilt-pop-out">Lithium ESS  Range</h2>
      <p className="tilt-pop-out">Rajpura Facility.</p>
    </div>
  </div>
</Tilt>

        </div>
    </div>
</div>
        </div>
      </div>
    </section>
    
            





        </>
    )
}

export default Card