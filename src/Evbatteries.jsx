import React from 'react'
import Header from './Include/header'
import Footer from './Include/Footer'
import Slider from './Components/Slider'
import Batteries from './Components/Batteries'
import Inverter from './Components/Inverter'
import Mobility from './Components/Mobility'
import Partner from './Components/Partner'
const Evbatteries = () => {
  return (
    <>
    <Header/>
    <Slider/>
    <Batteries/>
    <Inverter/>
    <Mobility/>
    <Partner/>
    <div className="catalog-container">
      
      <div className="catalog-floating-orb catalog-orb-1"></div>
      <div className="catalog-floating-orb catalog-orb-2"></div>
      <div className="catalog-floating-orb catalog-orb-3"></div>
      <div className="catalog-floating-orb catalog-orb-4"></div>
      <div className="catalog-floating-orb catalog-orb-5"></div>
      
      <div className="catalog-content">
        
        <div className="catalog-bg-pattern">
          <div className="catalog-pattern-circle"></div>
          <div className="catalog-pattern-circle"></div>
          <div className="catalog-pattern-circle"></div>
        </div>

        
        <div className="catalog-header">
          <div className="catalog-pulse-container">
            <div className="catalog-header-icon">
              📋
            </div>
          </div>
          <h2 className="catalog-main-title">Two Wheelers and Three Wheelers Batteries</h2>
          <div className="catalog-title-underline">
            <div className="catalog-line-segment"></div>
            <div className="catalog-line-dot"></div>
            <div className="catalog-line-segment"></div>
          </div>
          <p className="catalog-subtitle">Explore our range of lithium-ion batteries for electric vehicles, designed for performance and sustainability.</p>
        </div>

        
        <div className="catalog-main-card">
          <div className="catalog-card-glow"></div>
          
          

          <div className="catalog-card-content">


           
            <div className="catalog-cta-section">
              <a 
                href="https://finikelithium.com/static/media/final%20V1.5b62c0427d6ccb5e1b8b.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="catalog-cta-button"
              >
                <div className="catalog-button-bg"></div>
                <div className="catalog-button-content">
                  
                  <span className="catalog-button-text">View Catalog</span>
                  <div className="catalog-button-arrow">→</div>
                </div>
                <div className="catalog-button-glow"></div>
              </a>
              
              
            </div>
          </div>
        </div>

        

        
      </div>

    </div>
    <Footer/>
    
    </>
  )
}

export default Evbatteries