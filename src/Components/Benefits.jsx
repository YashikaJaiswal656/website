import React from 'react';
import './Benefits.css'
const Benefits = () => {
  return (
    <div className="benefits-container">
      
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>
      <div className="floating-orb orb-3"></div>
      <div className="floating-orb orb-4"></div>
      <div className="floating-orb orb-5"></div>
      
      
      <div className="benefits-content">
        
        <div className="benefits-header">
          <div className="pulse-container">
            <div className="faq-header-icon">
              💎
            </div>
          </div>
          <h2 className="faq-main-title">Key Benefits</h2>
          <div className="title-underline">
            <div className="faq-line-segment"></div>
            <div className="faq-line-dot"></div>
            <div className="faq-line-segment"></div>
          </div>
        </div>

        <div className="benefits-grid">
          
          <div className="benefit-card energy-card">
            <div className="card-glow"></div>
            
            <h3 className="feature-title">Energy Savings</h3>
            <p className="benefit-description">
              Lower energy consumption, leading to <span className="highlight-savings">reduced electricity costs</span>.
            </p>
            <div className="savings-meter">
              <div className="meter-fill"></div>
              <div className="meter-indicator">
                📉
                <span>-40% Cost</span>
              </div>
            </div>
          </div>

          
          <div className="benefit-card eco-card">
            <div className="card-glow"></div>
            
            <h3 className="feature-title">Eco-Conscious Design</h3>
            <p className="benefit-description">
              <span className="highlight-tech">LiFePO4/Lithium</span> technology that minimizes environmental impact.
            </p>
            
          </div>

          
          <div className="benefit-card lifespan-card">
            <div className="card-glow"></div>
            
            <h3 className="feature-title">Long Lifespan</h3>
            <p className="benefit-description">
              Provides reliable power for up to <span className="highlight-years">15 years</span> with minimal maintenance.
            </p>
            
          </div>
        </div>

        
      </div>

    </div>
  );
};

export default Benefits;