import React, { useState } from 'react';
import './Warranty.css'
import { Link } from 'react-router-dom';
const Warranty = () => {
  const [activeCard, setActiveCard] = useState(null);

  const supportServices = [
    {
      id: 1,
      icon: 'fas fa-shield-alt',
      title: 'Warranty Registration',
      shortTitle: 'Warranty',
      description: 'Register your Finike product for comprehensive warranty coverage and protection',
      buttonText: 'Register Now',
      gradient: 'linear-gradient(45deg, #6f86d6, #48c6ef)',
      glowColor: 'rgba(111, 134, 214, 0.4)',
      features: ['5 Year Warranty', 'Free Replacement', '24/7 Support'],
      to:"/Register"
    },
    {
      id: 2,
      icon: 'fas fa-tools',
      title: 'Register Complaint',
      shortTitle: 'Complaint',
      description: 'Quick and easy complaint registration with real-time tracking and updates',
      buttonText: 'File Complaint',
      gradient: 'linear-gradient(45deg, #ff758c, #ffb347)',
      glowColor: 'rgba(255, 117, 140, 0.4)',
      features: ['Instant Tracking', 'Quick Response', 'Expert Support'],
      to:"/Complaint"
    },
    {
      id: 3,
      icon: 'fas fa-headset',
      title: 'Contact Us',
      shortTitle: 'Contact',
      description: 'Connect with our expert team for personalized assistance and guidance',
      buttonText: 'Get in Touch',
      gradient: 'linear-gradient(45deg, #667eea, #764ba2)',
      glowColor: 'rgba(102, 126, 234, 0.4)',
      features: ['Live Chat', 'Phone Support', 'Email Help'],
      to:"/Contact"
    },
    {
      id: 4,
      icon: 'fas fa-calculator',
      title: 'Get a Quote',
      shortTitle: 'Quote',
      description: 'Receive instant, customized quotes for your energy storage requirements',
      buttonText: 'Request Quote',
      gradient: 'linear-gradient(45deg, #ff9a9e, #fecfef)',
      glowColor: 'rgba(255, 154, 158, 0.4)',
      features: ['Instant Quotes', 'Custom Solutions', 'Best Prices'],
      to:"/Quote"

    },
    {
      id: 5,
      icon: 'fas fa-credit-card',
      title: 'Online Payment',
      shortTitle: 'Payment',
      description: 'Secure and convenient online payment gateway for all your transactions',
      buttonText: 'Make Payment',
      gradient: 'linear-gradient(45deg, #ffecd2, #fcb69f)',
      glowColor: 'rgba(255, 236, 210, 0.4)',
      features: ['Secure Payments', 'Multiple Methods', 'Instant Receipt'],
      to:"/Payement"
    }
  ];

  return (
    <div className="warranty-support-section">
      {/* Animated Background */}
      <div className="animated-background">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
        <div className="floating-orb orb-4"></div>
        <div className="floating-orb orb-5"></div>
      </div>

      {/* Gradient Mesh */}
      <div className="gradient-mesh"></div>

      <div className="support-container">
        {/* Header Section */}
        <div className="support-header">
          
          
          <h1 className="main-title">
            Your <span className="gradient-text">Complete</span> Support
            <br />
            <span className="gradient-text">Experience</span> Awaits
          </h1>
          
          <p className="header-description">
            Experience unmatched support with our comprehensive suite of services designed 
            to keep your Finike products running at peak performance
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {supportServices.map((service, index) => (
            <div 
              key={service.id}
              className={`service-card ${activeCard === service.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveCard(service.id)}
              onMouseLeave={() => setActiveCard(null)}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Card Background Glow */}
              <div 
                className="card-glow"
                style={{
                  background: `radial-gradient(circle, ${service.glowColor} 0%, transparent 70%)`
                }}
              ></div>

              {/* Card Content */}
              <div className="card-content">
                {/* Icon Section */}
                <div className="icon-container">
                  <div 
                    className="icon-wrapperr"
                    style={{
                      background: service.gradient,
                      boxShadow: `0 10px 30px ${service.glowColor}`
                    }}
                  >
                    <i className={service.icon}></i>
                  </div>
                  
                  {/* Floating particles */}
                  <div className="floating-particles">
                    <div className="particle particle-1"></div>
                    <div className="particle particle-2"></div>
                    <div className="particle particle-3"></div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-content">
                  <h3 className="service-title">
                    <span className="mobile-title">{service.shortTitle}</span>
                    <span className="desktop-title">{service.title}</span>
                  </h3>
                  <p className="service-description">{service.description}</p>
                  
                  {/* Features List */}
                  {/* <div className="features-list">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <div className="feature-dot"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div> */}
                </div>

                {/* Action Button */}
                <div className="card-footer">
<Link to={service.to}>
                  <button 
                    className="action-button"
                    style={{
                      background: service.gradient,
                      boxShadow: `0 8px 25px ${service.glowColor}`
                    }}
                  >
                    <span>{service.buttonText}</span>
                    <i className="fas fa-arrow-right"></i>
                  </button>
                  </Link>
                  {/* Status indicator */}
                  <div className="status-indicator">
                    <div className="status-dot"></div>
                    <span>Available 24/7</span>
                  </div>
                </div>
              </div>

              {/* Hover Effects */}
              <div className="hover-overlay"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bottom-cta">
          <div className="cta-card">
            <div className="cta-content">
              <h3>Need Immediate Assistance?</h3>
              <p>Our expert support team is standing by to help you with any questions or concerns</p>
              <div className="cta-buttons">
                <button className="cta-primary">
                  <i className="fas fa-phone"></i>
                  Call Now: +919778044000
                </button>
                <button className="cta-primary">
                  <i className="fas fa-envelope"></i>
                  Mail Now: customercare@spinoff.in
                </button>
              </div>
            </div>
            <div className="cta-decoration">
              <div className="decoration-circle circle-1"></div>
              <div className="decoration-circle circle-2"></div>
              <div className="decoration-circle circle-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warranty;