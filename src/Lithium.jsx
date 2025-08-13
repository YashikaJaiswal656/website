import React, { useState } from 'react';
import Header from './Include/header'
import Footer from './Include/Footer'
import Slider from './Components/Slider'
import './Lithium.css'
import Benefits from './Components/Benefits'
import FAQ from './Components/FAQ';

const Infrastructure = [
  {
    id: 1,
    image: "https://finikelithium.com/static/media/lithiumintegratedinverter.b0205ecd2da92687afec.JPG",
    title: "Lithium-Ion Inverter 1100VA",
    location: "High-efficiency inverter with up to 98% conversion rate for small-scale applications.",
    icon: "🏭",
    capacity: "High Volume Production",
    status: "Active"
  },
  {
    id: 2,
    image: "https://finikelithium.com/static/media/lithiumintegratedinverter.b0205ecd2da92687afec.JPG",
    title: "Lithium-Ion Inverter 2100VA",
    location: "Reliable power solution with 98% efficiency for medium-scale needs.",
    icon: "🔋",
    capacity: "Advanced Testing",
    status: "Operational"
  },
  {
    id: 3,
    image: "https://finikelithium.com/static/media/lithiumintegratedinverter.b0205ecd2da92687afec.JPG",
    title: "Lithium-Ion Inverter 3500VA",
    location: "Robust inverter delivering 98% efficiency for larger residential setups.",
    icon: "⚡",
    capacity: "Precision Testing",
    status: "Active"
  },
  {
    id: 4,
    image: "https://finikelithium.com/static/media/lithiumintegratedinverter.b0205ecd2da92687afec.JPG",
    title: "Lithium-Ion Inverter 5000VA",
    location: "High-capacity inverter with 98% efficiency for commercial applications.",
    icon: "📦",
    capacity: "Full Scale Testing",
    status: "Operational"
  },
  {
    id: 5,
    image: "https://finikelithium.com/static/media/lithiumintegratedinverter.b0205ecd2da92687afec.JPG",
    title: "Lithium-Ion Inverter 7500VA",
    location: "Powerful inverter with 98% efficiency for heavy-duty industrial use.",
    icon: "🔬",
    capacity: "Quality Assurance",
    status: "Active"
  },
  {
    id: 6,
    image: "https://finikelithium.com/static/media/lithiumintegratedinverter.b0205ecd2da92687afec.JPG",
    title: "Lithium-Ion Inverter 10000VA",
    location: "Top-tier inverter with 98% efficiency for large-scale industrial systems.",
    icon: "⚙️",
    capacity: "Automated Systems",
    status: "Operational"
  }
];

const Lithium = () => {
    const [selectedImage, setSelectedImage] = useState(null);
  
    const openModal = (item) => {
      setSelectedImage(item);
    };
  
    const closeModal = () => {
      setSelectedImage(null);
    };
  
  return (
    <>
    <Header/>
<Slider/>
<div className="features-container">
      
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>
      <div className="floating-orb orb-3"></div>
      <div className="floating-orb orb-4"></div>
      
      
      <div className="features-content">
        
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
 <section className="infrastructure-section">
      {/* Decorative Background Elements */}
      <div className="decorative-bg">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
      </div>

      

      <div className="infrastructure-container">
        {/* Header Section */}
        <div className="infrastructure-header">
          <div className="header-card">
            <div className="header-icon">
              <i className="fas fa-building"></i>
            </div>
            <h2 className="gradient-title">Our Inverter Models</h2>
          </div>
          
        </div>

        {/* Infrastructure Grid */}
        <div className="infrastructure-grid">
          {Infrastructure.map((item) => (
            <div key={item.id} className="infrastructure-card">
              <div className="card-image-container">
                <div className="image-glow"></div>
                <div className="image-wrapper">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="infrastructure-image"
                    onClick={() => openModal(item)}
                  />
                  
                  <div className="facility-icon">{item.icon}</div>
                </div>
              </div>
              
              <div className="card-content">
                <h3 className="facility-title">{item.title}</h3>
                
                <div className="location-info">
                  <div className="location-dot"></div>
                  <span className="location-text">{item.location}</span>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="modal-overlay">
          {/* Backdrop */}
          <div className="modal-backdrop" onClick={closeModal}></div>
          
          {/* Modal Content */}
          <div className="modal-content">
            {/* Close Button */}
            <button className="modal-close-btn" onClick={closeModal}>
              <svg className="close-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Modal Image */}
            <div className="modal-image-container">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="modal-image"
              />
              
            </div>
          </div>
        </div>
      )}
    </section>
<FAQ/>
    <Footer/>
    </>

  )
}

export default Lithium