import React from 'react'
import Header from './Include/header'
import Footer from './Include/Footer'
import Slider from './Components/Slider'
import './Lithium.css'
import Benefits from './Components/Benefits'

const Infrastructure = [
  {
    id: 1,
    image: "https://finikelithium.com/static/media/lithiumintegratedinverter.b0205ecd2da92687afec.JPG",
    title: "Lithium-Ion Inverter 1100VA",
    location: "Rajpura Facility",
    icon: "🏭",
    capacity: "High Volume Production",
    status: "Active"
  },
  {
    id: 2,
    image: "https://finikelithium.com/static/media/finike-lithium-3.070b0b162c7375a0a658.jpg",
    title: "Battery Testing System",
    location: "Rajpura Facility",
    icon: "🔋",
    capacity: "Advanced Testing",
    status: "Operational"
  },
  {
    id: 3,
    image: "https://finikelithium.com/static/media/finike-lithium-4.012dbfa66f6203334867.jpg",
    title: "Module Testing System",
    location: "Mohali Facility",
    icon: "⚡",
    capacity: "Precision Testing",
    status: "Active"
  },
  {
    id: 4,
    image: "https://finikelithium.com/static/media/finike-lithium-5.66f28c41035b75150f82.jpg",
    title: "Pack Testing System",
    location: "Rajpura Facility",
    icon: "📦",
    capacity: "Full Scale Testing",
    status: "Operational"
  },
  {
    id: 5,
    image: "https://finikelithium.com/static/media/finike-lithium-6.400f90b7fb2177d33d10.jpeg",
    title: "Battery Testing System",
    location: "Rajpura Facility",
    icon: "🔬",
    capacity: "Quality Assurance",
    status: "Active"
  },
  {
    id: 6,
    image: "https://finikelithium.com/static/media/finike-lithium-7.8ed3e041b40e3742a652.jpg",
    title: "Auto Calibration",
    location: "Mohali Facility",
    icon: "⚙️",
    capacity: "Automated Systems",
    status: "Operational"
  }
];

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
        <div className="features-headerr">
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
        <div className="features-gridd">
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