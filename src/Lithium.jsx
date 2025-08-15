import React, { useState } from 'react';
import Header from './Include/header'
import Footer from './Include/Footer'
import Slider from './Components/Slider'
import './Lithium.css'
import Benefits from './Components/Benefits'
import FAQ from './Components/FAQ';
import CataLog from './Components/CataLog';
import Modal from './Components/Modal'


const Lithium = () => {
    
  
  return (
    <>
    <Header/>
<Slider/>

    <div className="premium-showcase">

      <div className="ambient-orb orb-primary"></div>
      <div className="ambient-orb orb-secondary"></div>
      <div className="ambient-orb orb-accent"></div>
      <div className="ambient-orb orb-subtle"></div>
      
      
      <div className="showcase-container">
        
        <div className="section-header">
          
          <h1 className="main-title">
            Premium Solar Inverters
          </h1>
          <div className="heading-decoration">
            <div className="deco-segment"></div>
            <div className="deco-center"></div>
            <div className="deco-segment"></div>
          </div>
          <p className="section-subtitle">
            Engineered for excellence, designed for the future of renewable energy
          </p>
        </div>

        {/* Asymmetric Feature Layout */}
        <div className="features-layout">
          
          {/* Left Column - Stacked Cards */}
          <div className="left-column">
            
            {/* Efficiency Card */}
            <div className="feature-card card-efficiency">
              <div className="card-overlay"></div>
              <div className="card-content">
                <div className="feature-icon-container">
                  <div className="icon-background efficiency-bg"><div className="feature-icon">E</div></div>
                  <h3 className="card-title">Maximum Efficiency</h3>
                </div>
                
                <div className="efficiency-metrics">
                  <div className="metric-display">
                    <span className="metric-value">98</span>
                    <span className="metric-unit">%</span>
                  </div>
                  <div className="metric-bar">
                    <div className="bar-fill efficiency-fill"></div>
                  </div>
                  <p className="metric-label">Conversion Rate</p>
                </div>
                <p className="card-description">
                   
                  Maximizing energy harvest from every solar panel.
                </p>
              </div>
            </div>

            {/* Eco Card */}
            <div className="feature-card card-eco">
              <div className="card-overlay"></div>
              <div className="card-content">
                <div className="feature-icon-container">
                  <div className="icon-background eco-bg"><div className="feature-icon">R</div></div>
                  <h3 className="card-title">Sustainable Design</h3>
                </div>
                
                
                <div className="eco-indicators">
                  <div className="eco-badge">
                    <span className="badge-text">100% Recyclable Materials</span>
                  </div>
                  <div className="eco-badge">
                    <span className="badge-text">Zero Waste Manufacturing</span>
                  </div>
                </div>
                <p className="card-description">
                  Constructed with fully recyclable components 
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Single Large Card */}
          <div className="right-column">
            <div className="feature-card card-durability">
              <div className="card-overlay"></div>
              <div className="card-content">
                <div className="durability-header">
                  <div className="feature-icon-container">
                    <div className="icon-background durability-bg"><div className="feature-icon">D</div></div>
                    
                  </div>
                  <div className="header-text">
                    <h3 className="card-title">Built for Longevity</h3>
                    <p className="card-subtitle">25+ Years of Reliable Performance</p>
                  </div>
                </div>
                
                <div className="durability-showcase">
                  <div className="lifespan-visual">
                    <div className="timeline-container">
                      <div className="timeline-track"></div>
                      <div className="timeline-progress"></div>
                      <div className="timeline-points">
                        <div className="time-point active" data-year="5Y"></div>
                        <div className="time-point active" data-year="10Y"></div>
                        <div className="time-point active" data-year="15Y"></div>
                        <div className="time-point active" data-year="20Y"></div>
                        <div className="time-point highlighted" data-year="25Y+"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="durability-stats">
                    <div className="stat-group">
                      <div className="stat-item">
                        <span className="stat-number">25+</span>
                        <span className="stat-label">Years Warranty</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-number">99.9%</span>
                        <span className="stat-label">Reliability</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-number">IP67</span>
                        <span className="stat-label">Protection Rating</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="card-description">
                  Rigorously tested for extreme weather conditions, featuring 
                  premium-grade components and advanced protective systems 
                  for unmatched long-term reliability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="closing-accent">
          <div className="accent-line"></div>
          <div className="accent-dot"></div>
          <div className="accent-line"></div>
        </div>
      </div>
      
</div>
<Benefits/>
 <Modal/>
<FAQ/>
<CataLog/>
    <Footer/>
    </>

  )
}

export default Lithium