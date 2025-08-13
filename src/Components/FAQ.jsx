import React, { useState } from 'react';
import './FAQ.css'
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is a lithium-ion inverter?",
      answer: "A lithium-ion inverter converts DC from a lithium-ion battery to AC, efficiently powering appliances and devices.",
      icon: "🔋"
    },
    {
      question: "Why choose a lithium-ion inverter?",
      answer: "They provide higher efficiency, longer lifespan, and a compact design compared to lead-acid inverters.",
      icon: "⭐"
    },
    {
      question: "How long does a lithium-ion inverter last?",
      answer: "Our inverters offer 10–15 years of reliable performance with proper maintenance.",
      icon: "⏳"
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      
      <div className="floating-orb faq-orb-1"></div>
      <div className="floating-orb faq-orb-2"></div>
      <div className="floating-orb faq-orb-3"></div>
      <div className="floating-orb faq-orb-4"></div>
      
    
      <div className="faq-content">
        
        <div className="faq-header">
          <div className="pulse-container">
            <div className="header-icon">
              ❓
            </div>
          </div>
          <h2 className="main-title">Frequently Asked Questions</h2>
          <div className="faq-title-underline">
            <div className="line-segment"></div>
            <div className="line-dot"></div>
            <div className="line-segment"></div>
          </div>
          <p className="faq-subtitle">Everything you need to know about our lithium-ion inverters</p>
        </div>

        
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
              <div className="faq-card-glow"></div>
              
              
              <div className="faq-question-header" onClick={() => toggleFAQ(index)}>
                <div className="faq-question-left">
                  <div className="faq-icon-wrapper">
                    <div className="faq-icon">
                      {faq.icon}
                    </div>
                    
                  </div>
                  <h3 className="faq-question">{faq.question}</h3>
                </div>
                
                <div className="faq-toggle-btn">
                  <div className={`faq-plus ${activeIndex === index ? 'rotated' : ''}`}>
                    <div className="faq-plus-horizontal"></div>
                    <div className="faq-plus-vertical"></div>
                  </div>
                </div>
              </div>

              
              <div className={`faq-answer-wrapper ${activeIndex === index ? 'expanded' : ''}`}>
                <div className="faq-answer-content">
                  <div className="faq-decorative-line"></div>
                  <p className="faq-answer">{faq.answer}</p>
                  {index === 0 && (
                    <div className="faq-tech-badges">
                      <span className="faq-tech-badge">DC to AC</span>
                      <span className="faq-tech-badge">Efficient</span>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="faq-comparison-stats">
                      <div className="faq-stat">
                        <span className="faq-stat-number">98%</span>
                        <span className="faq-stat-label">Efficiency</span>
                      </div>
                      <div className="faq-stat">
                        <span className="faq-stat-number">15+</span>
                        <span className="faq-stat-label">Years</span>
                      </div>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="faq-timeline">
                      <div className="faq-timeline-item">
                        <div className="faq-timeline-dot active"></div>
                        <span>10 Years</span>
                      </div>
                      <div className="faq-timeline-line"></div>
                      <div className="faq-timeline-item">
                        <div className="faq-timeline-dot active"></div>
                        <span>15 Years</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        
        <div className="faq-bottom-cta">
          <div className="faq-cta-content">
            <h4 className="faq-cta-title">Still have questions?</h4>
            <p className="faq-cta-text">Our experts are here to help you find the perfect solution</p>
            <div className="faq-contact-options">
              <div className="faq-contact-item">
                <div className="faq-contact-icon">📞</div>
                <span>Call Us</span>
              </div>
              <div className="faq-contact-item">
                <div className="faq-contact-icon">✉️</div>
                <span>Email Us</span>
              </div>
              
            </div>
          </div>
        </div>

        
        <div className="faq-bottom-decoration">
          <div className="faq-deco-line"></div>
          <div className="faq-deco-circle">
            <div className="faq-inner-circle"></div>
          </div>
          <div className="faq-deco-line"></div>
        </div>
      </div>

      
    </div>
  );
};

export default FAQ;