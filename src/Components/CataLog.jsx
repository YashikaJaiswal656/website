import React from 'react';
import './Catalog.css'
const CataLog = () => {
  const catalogFeatures = [
    { icon: "📱", text: "Digital Catalog" },
    { icon: "⚡", text: "High Efficiency" },
    { icon: "🔋", text: "Lithium-Ion Tech" },
    { icon: "📊", text: "Technical Specs" }
  ];

  return (
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
          <h2 className="main-title">Lithium-Ion Inverter/UPS Catalog</h2>
          <div className="catalog-title-underline">
            <div className="catalog-line-segment"></div>
            <div className="catalog-line-dot"></div>
            <div className="catalog-line-segment"></div>
          </div>
          <p className="catalog-subtitle">Discover our high-efficiency lithium-ion inverter designed for reliability.</p>
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
                  <span className="catalog-button-icon">📥</span>
                  <span className="catalog-button-text">View Catalog</span>
                  <div className="catalog-button-arrow">→</div>
                </div>
                <div className="catalog-button-glow"></div>
              </a>
              
              
            </div>
          </div>
        </div>

        
        <div className="catalog-bottom-features">
          <div className="catalog-bottom-feature">
            <div className="catalog-bottom-icon">🎯</div>
            <div className="catalog-bottom-text">
              <h4>Precise Specifications</h4>
              <p>Detailed technical data for informed decisions</p>
            </div>
          </div>
          
          <div className="catalog-bottom-feature">
            <div className="catalog-bottom-icon">🔧</div>
            <div className="catalog-bottom-text">
              <h4>Installation Guide</h4>
              <p>Step-by-step setup instructions included</p>
            </div>
          </div>
          
          <div className="catalog-bottom-feature">
            <div className="catalog-bottom-icon">📞</div>
            <div className="catalog-bottom-text">
              <h4>Expert Support</h4>
              <p>Professional assistance for product selection</p>
            </div>
          </div>
        </div>

        
        <div className="catalog-bottom-decoration">
          <div className="catalog-deco-line"></div>
          <div className="catalog-deco-diamond">
            <div className="catalog-inner-diamond"></div>
          </div>
          <div className="catalog-deco-line"></div>
        </div>
      </div>

    </div>
  );
};

export default CataLog;