import React, { useState } from 'react';
import Header from './Include/header'
import Footer from './Include/Footer'
import Slider from './Components/Slider'
import Features from './Components/Features'

const Infrastructure = [
  {
    id: 1,
    
    title: "2.5KVA 36V/48V",
    location: "System Rating (Name Plate): VA 2500",
    icon: "🏭",
    capacity: "Full Load Output Current: Amp 63/46 Operating Voltage: V 36/48"
  },
  {
    id: 2,
    
    title: "3KVA 36V/48V",
    location: "System Rating (Name Plate): VA 3000",
    icon: "🔋",
    capacity: "Full Load Output Current: Amp 63/48 Operating Voltage: V 36/48"
  },
  {
    id: 3,
    
    title: "3.5KVA 48V",
    location: "System Rating (Name Plate): VA 3500",
    icon: "⚡",
    capacity: "Full Load Output Current: Amp 63 Operating Voltage: V 48"
  },
  {
    id: 4,
    
    title: "5KVA 48V",
    location: "System Rating (Name Plate): VA 5000",
    icon: "📦",
    capacity: "Full Load Output Current: Amp 104 Operating Voltage: V 48"
  },
  {
    id: 5,
    title: "5KVA 96V",
    location: "System Rating (Name Plate): VA 5000",
    icon: "🔬",
    capacity: "Full Load Output Current: Amp 50 Operating Voltage: V 96"
  },
  {
    id: 6,
    title: "7.5KVA 96V/120V",
    location: "System Rating (Name Plate): VA 7500",
    icon: "⚙️",
    capacity: "Full Load Output Current: Amp 75/63 Operating Voltage: V 96/120"
  },
  {
    id: 7,
    title: "10KVA 120V",
    location: "System Rating (Name Plate): VA 10000",
    icon: "🔧",
    capacity: "Full Load Output Current: Amp 77 Operating Voltage: V 120"
  },
  {
    id: 8,
    title: "10KVA 192V",
    location: "System Rating (Name Plate): VA 10000",
    icon: "🌟",
    capacity: "Full Load Output Current: Amp 48 Operating Voltage: V 192"
  }
];
const Solar = () => {
    const [selectedImage, setSelectedImage] = useState(null);


  return (
    <>
    <Header/>
    <Slider/>
<Features/>
<section className="infrastructure-section">
      <div className="decorative-bg">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
      </div>

      

      <div className="infrastructure-container">
        
        <div className="infrastructure-header">
          <div className="header-card">
            <div className="faq-header-icon">
              <i className="fas fa-building"></i>
            </div>
            <h2 className="faq-main-title">Our Product Range</h2>
          </div>
          
        </div>

        
        <div className="infrastructure-grid">
          {Infrastructure.map((item) => (
            <div key={item.id} className="infrastructure-card">
             
              
              <div className="card-content">
                <h3 className="facility-title">{item.title}</h3>
                
                <div className="location-info">
                  <div className="location-dot"></div>
                  <span className="location-text">{item.location}</span>
                </div>
                
                <div className="capacity-info">
                  <div className="capacity-icon">
                    <i className="fas fa-cog"></i>
                  </div>
                  <span className="capacity-text">{item.capacity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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
          <h2 className="catalog-main-title">Product Catalogs</h2>
          <div className="catalog-title-underline">
            <div className="catalog-line-segment"></div>
            <div className="catalog-line-dot"></div>
            <div className="catalog-line-segment"></div>
          </div>
          <p className="catalog-subtitle">Download our detailed product catalogs for complete specifications</p>
        </div>

        
        <div className="catalog-main-card">
          <div className="catalog-card-glow"></div>
          
          

          <div className="catalog-card-content">


           
            <div className="catalog-cta-section">
              <a 
                href="https://finikelithium.com/static/media/(V2).9ac6ce9d86c79f272811.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="catalog-cta-button"
              >
                <div className="catalog-button-bg"></div>
                <div className="catalog-button-content">
                  <span className="catalog-button-icon"></span>
                  <span className="catalog-button-text"> Catalog 1</span>
                  <div className="catalog-button-arrow">→</div>
                </div>
                <div className="catalog-button-glow"></div>
              </a>
                            <a 
                href="https://finikelithium.com/static/media/solarcatalog2.cf5da577acda1a2ae454.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="catalog-cta-button"
              >
                <div className="catalog-button-bg"></div>
                <div className="catalog-button-content">
                  <span className="catalog-button-icon"></span>
                  <span className="catalog-button-text">Catalog 2</span>
                  <div className="catalog-button-arrow">→</div>
                </div>
                <div className="catalog-button-glow"></div>
              </a>
              
            </div>
            
          </div>
        </div>

        

      </div>

    </div>
    </section>
    <Footer/>
    
    
    
    </>
  )
}

export default Solar