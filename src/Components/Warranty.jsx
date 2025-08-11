import React, { useState } from 'react';
import './Warranty.css'
const Warranty = () => {
  const [activeCard, setActiveCard] = useState(null);

  const supportServices = [
    {
      id: 1,
      icon: 'fas fa-shield-alt',
      title: 'Warranty Registration',
      description: 'Register your Finike product for comprehensive warranty coverage and protection',
      buttonText: 'Register Now',
      gradient: 'from-blue-500 to-purple-600',
      glowColor: 'rgba(59, 130, 246, 0.4)',
      features: ['5 Year Warranty', 'Free Replacement', '24/7 Support']
    },
    {
      id: 2,
      icon: 'fas fa-tools',
      title: 'Register Complaint',
      description: 'Quick and easy complaint registration with real-time tracking and updates',
      buttonText: 'File Complaint',
      gradient: 'from-red-500 to-pink-600',
      glowColor: 'rgba(239, 68, 68, 0.4)',
      features: ['Instant Tracking', 'Quick Response', 'Expert Support']
    },
    {
      id: 3,
      icon: 'fas fa-headset',
      title: 'Contact Us',
      description: 'Connect with our expert team for personalized assistance and guidance',
      buttonText: 'Get in Touch',
      gradient: 'from-green-500 to-emerald-600',
      glowColor: 'rgba(34, 197, 94, 0.4)',
      features: ['Live Chat', 'Phone Support', 'Email Help']
    },
    {
      id: 4,
      icon: 'fas fa-calculator',
      title: 'Get a Quote',
      description: 'Receive instant, customized quotes for your energy storage requirements',
      buttonText: 'Request Quote',
      gradient: 'from-orange-500 to-red-500',
      glowColor: 'rgba(249, 115, 22, 0.4)',
      features: ['Instant Quotes', 'Custom Solutions', 'Best Prices']
    },
    {
      id: 5,
      icon: 'fas fa-credit-card',
      title: 'Online Payment',
      description: 'Secure and convenient online payment gateway for all your transactions',
      buttonText: 'Make Payment',
      gradient: 'from-indigo-500 to-blue-600',
      glowColor: 'rgba(99, 102, 241, 0.4)',
      features: ['Secure Payments', 'Multiple Methods', 'Instant Receipt']
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
                  <div className="logo-frame">
            <div className="brand-symbol">
              <i className={service.icon}></i>
            </div>
          </div>
                  
                </div>

                {/* Text Content */}
                <div className="text-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  
                  {/* Features List */}
                  <div className="features-list">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <div className="feature-dot"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card-footer">
              <div className="feature-badge">{service.buttonText}
                <i className="fas fa-arrow-right"></i>
                
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
                  Call Now: +91 97787-44000
                </button>
                <button className="cta-secondary">
                  <i className="fas fa-comments"></i>
                  Live Chat
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