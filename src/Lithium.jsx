import React from 'react'
import Header from './Include/header'
import Footer from './Include/Footer'
import Slider from './Components/Slider'
import './Lithium.css'
import Benefits from './Components/Benefits'
const Lithium = () => {
  return (
    <>
    <Header/>
<Slider/>
<div className="features-container">
      {/* Floating Orbs */}
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>
      <div className="floating-orb orb-3"></div>
      <div className="floating-orb orb-4"></div>
      
      {/* Main Content */}
      <div className="features-content">
        {/* Header Section */}
        <div className="features-header">
          <div className="pulse-container">
            <div className="header-icon">
              ⭐
            </div>
          </div>
          <h2 className="main-title">Why Choose Our Inverters?</h2>
          <div className="title-underline">
            <div className="line-segment"></div>
            <div className="line-dot"></div>
            <div className="line-segment"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {/* High Efficiency */}
          <div className="feature-card">
            <div className="card-glow"></div>
            <div className="feature-icon-wrapper">
              <div className="feature-icon efficiency">
                ⚡
              </div>
              <div className="icon-particles">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
              </div>
            </div>
            <h3 className="feature-title">High Efficiency</h3>
            <p className="feature-description">
              Up to <span className="highlight-number">98%</span> conversion efficiency to reduce energy costs and emissions.
            </p>
            <div className="efficiency-bar">
              <div className="efficiency-fill"></div>
              <span className="efficiency-label">98%</span>
            </div>
          </div>

          {/* Eco-Friendly */}
          <div className="feature-card">
            <div className="card-glow"></div>
            <div className="feature-icon-wrapper">
              <div className="feature-icon eco">
                🌍
              </div>
              <div className="eco-rings">
                <div className="eco-ring"></div>
                <div className="eco-ring"></div>
              </div>
            </div>
            <h3 className="feature-title">Eco-Friendly</h3>
            <p className="feature-description">
              Built with <span className="highlight-text">recyclable materials</span> to minimize environmental impact.
            </p>
            <div className="eco-badge">
              <div className="eco-icon">🌱</div>
              <span>100% Recyclable</span>
            </div>
          </div>

          {/* Durability */}
          <div className="feature-card">
            <div className="card-glow"></div>
            <div className="feature-icon-wrapper">
              <div className="feature-icon durability">
                🛡️
              </div>
              <div className="shield-glow"></div>
            </div>
            <h3 className="feature-title">Durability</h3>
            <p className="feature-description">
              Designed for <span className="highlight-number">15+</span> years of reliable, low-maintenance performance.
            </p>
            <div className="durability-timeline">
              <div className="timeline-dot active"></div>
              <div className="timeline-line"></div>
              <div className="timeline-dot active"></div>
              <div className="timeline-line"></div>
              <div className="timeline-dot active"></div>
              <span className="timeline-label">15+ Years</span>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Element */}
        <div className="bottom-decoration">
          <div className="deco-line"></div>
          <div className="deco-diamond"></div>
          <div className="deco-line"></div>
        </div>
      </div>

</div>
<Benefits/>
    <Footer/>
    </>

  )
}

export default Lithium