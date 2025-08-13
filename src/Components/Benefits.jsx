import React from 'react';
import './Benefits.css'
const Benefits = () => {
  return (
    <div className="benefits-container">
      {/* Floating Orbs */}
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>
      <div className="floating-orb orb-3"></div>
      <div className="floating-orb orb-4"></div>
      <div className="floating-orb orb-5"></div>
      
      {/* Main Content */}
      <div className="benefits-content">
        {/* Header Section */}
        <div className="benefits-header">
          <div className="pulse-container">
            <div className="header-icon">
              💎
            </div>
          </div>
          <h2 className="main-title">Key Benefits</h2>
          <div className="title-underline">
            <div className="line-segment"></div>
            <div className="line-dot"></div>
            <div className="line-segment"></div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="benefits-grid">
          {/* Energy Savings */}
          <div className="benefit-card energy-card">
            <div className="card-glow"></div>
            
            <div className="benefit-icon-wrapper">
              <div className="benefit-icon energy">
                💰
              </div>
              
            </div>
            <h3 className="benefit-title">Energy Savings</h3>
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

          {/* Eco-Conscious Design */}
          <div className="benefit-card eco-card">
            <div className="card-glow"></div>
            
            <div className="benefit-icon-wrapper">
              <div className="benefit-icon eco">
                🌱
              </div>
              
            </div>
            <h3 className="benefit-title">Eco-Conscious Design</h3>
            <p className="benefit-description">
              <span className="highlight-tech">LiFePO4/Lithium</span> technology that minimizes environmental impact.
            </p>
            <div className="eco-stats">
              <div className="stat-item">
                <div className="stat-icon">♻️</div>
                <span>100% Recyclable</span>
              </div>
              <div className="stat-item">
                <div className="stat-icon">🌿</div>
                <span>Zero Emissions</span>
              </div>
            </div>
          </div>

          {/* Long Lifespan */}
          <div className="benefit-card lifespan-card">
            <div className="card-glow"></div>
            <div className="time-spiral">
              <div className="spiral-ring"></div>
              <div className="spiral-ring"></div>
              <div className="spiral-ring"></div>
            </div>
            <div className="benefit-icon-wrapper">
              <div className="benefit-icon lifespan">
                ⏰
              </div>
              <div className="clock-hands">
                <div className="hand hour-hand"></div>
                <div className="hand minute-hand"></div>
              </div>
            </div>
            <h3 className="benefit-title">Long Lifespan</h3>
            <p className="benefit-description">
              Provides reliable power for up to <span className="highlight-years">15 years</span> with minimal maintenance.
            </p>
            <div className="lifespan-progress">
              <div className="year-markers">
                <div className="marker active">5</div>
                <div className="marker active">10</div>
                <div className="marker active">15</div>
                <div className="marker future">20</div>
              </div>
              <div className="progress-track">
                <div className="progress-fill"></div>
              </div>
              <span className="lifespan-label">Years of Reliable Service</span>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}

        {/* Decorative Bottom Element */}
        <div className="bottom-decoration">
          <div className="deco-line"></div>
          <div className="deco-star">✨</div>
          <div className="deco-line"></div>
        </div>
      </div>

    </div>
  );
};

export default Benefits;