// WhyChooseFinike.jsx
import React from 'react';
import './Choose.css';

const Choose = () => {
  const features = [
    {
      icon: ' 🔋',
      title: 'Battery Life',
      description: 'High energy density for extended range and reliable performance in EVs and energy storage systems.',
      badge: 'Extended Performance'
    },
    {
      icon: ' ⚡',
      title: 'Charging Time',
      description: 'Fast-charging technology minimizes downtime and enhances efficiency.',
      badge: 'Ultra Fast'
    },
    {
      icon: ' 🔧',
      title: 'Maintenance',
      description: 'Durable, recyclable batteries with minimal upkeep and eco-friendly benefits.',
      badge: 'Eco-Friendly'
    },
    {
      icon: '💰',
      title: 'Charging Cost',
      description: 'Efficient batteries reduce charging costs for both personal and commercial use.',
      badge: 'Cost Effective'
    },
    {
      icon: '📈',
      title: 'Cost Efficiency',
      description: 'Long-lasting batteries that lower replacement and maintenance costs.',
      badge: 'Maximum ROI'
    }
  ];

  return (
    <section className="why-choose-finike-bg">
      {/* Decorative Background Elements */}
      <div className="decorative-background">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        <div className="floating-circle circle-4"></div>
      </div>

      <div className="finike-container">
        
              <div className="section-header">
        <div className="icon-wrapper">
          <div className="main-icon">⭐</div>
        </div>
        <h1 className="main-title">Why Choose Finike Lithium?</h1>
        <div className="decorative-line">
          <div className="line-segment"></div>
          
          <div className="line-segment"></div>
        </div>
      </div>


        {/* Features Grid */}
        <div className="finike-features-wrapper">
          {features.map((feature, index) => (
            <div key={index} className="finike-feature-card">
              {/* Card Header */}
              <div className="card-header">
                <div className="finike-gradient-icon-bg">
                  {feature.icon}
                </div>
                <div className="card-title-section">
                  <h3 className="finike-gradient-heading-bg">{feature.title}</h3>
                </div>
              </div>

              {/* Card Description */}
              <div className="finike-gradient-description-bg">
                {feature.description}
              </div>

              {/* Card Footer */}
              <div className="card-footer">
                <div className="feature-badge">{feature.badge}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        
      </div>
    </section>
  );
};

export default Choose;
