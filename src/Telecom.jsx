import React, { useState } from 'react';
import Header from './Include/header'
import Slider from './Components/Slider'
import Footer from './Include/Footer'

const Telecom = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    
      const faqs = [
        {
          question: "Why are Finike Lithium batteries ideal for telecom?",
          answer: "Our batteries provide high efficiency, rapid charging, and reliable performance, ensuring uninterrupted power for telecom networks."
        },
        {
          question: "What is the lifespan of these batteries?",
          answer: "Engineered for durability, our batteries offer years of reliable service with minimal maintenance."
        },
        {
          question: "Are these batteries eco-friendly?",
          answer: "Yes, our lithium-ion batteries are designed for sustainability, reducing your environmental footprint."
        }
      ];
    
      const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
      };
  return (
    <>
    <Header/>
    <Slider/>
    
    <div className="experience-hub">

        <div className="cosmic-particle particle-one"></div>
        <div className="cosmic-particle particle-two"></div>
        <div className="cosmic-particle particle-three"></div>
        <div className="cosmic-particle particle-four"></div>
        
        <div className="title-constellation">
          <div className="energy-core">
            <div className="core-symbol">⚡</div>
          </div>
          <h1 className="main-title">Next-Generation Telecom Power</h1>
          <div className="stellar-divider">
            <div className="divider-beam"></div>
            <div className="divider-star"></div>
            <div className="divider-beam"></div>
          </div>
        </div>
        
        
        <div className="dimensional-showcase">
          
            <div className="reality-panel">
              <div className="content-matrix">
                <div className="narrative-zone">
                  
                  
                  <div className="quote-chamber">
                    <div className="quote-beacon start">"</div>
                    <div className="message-core">
                      <p>
                        Finike Lithium batteries offer superior power and efficiency, ensuring seamless performance for telecom applications. Embrace sustainable energy for a greener future.
                      </p>
                    </div>
                    <div className="quote-beacon end">"</div>
                  </div>
                  
                  <div className="essence-decoration">
                    <div className="essence-line"></div>
                    <div className="essence-orb"></div>
                    <div className="essence-line"></div>
                  </div>
                </div>
                
                <div className="visual-portal">
                  <div className="portal-frame">
                    <div className="portal-canvas mission-canvas">
                      <img src="https://finikelithium.com/static/media/telecomimage.16edfd792d28533ef465.jpeg" alt="Mission" />
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          
          
          
        </div>
        
        <div className="dimension-indicators">
          <div className="dimension-dot current"></div>
          <div className="dimension-dot"></div>
          <div className="dimension-dot"></div>
        </div>
</div>
 <div className="premium-showcase">

      <div className="ambient-orb orb-primary"></div>
      <div className="ambient-orb orb-secondary"></div>
      <div className="ambient-orb orb-accent"></div>
      <div className="ambient-orb orb-subtle"></div>
      
      
      <div className="showcase-container">
        
        <div className="section-header">
          
          <h1 className="main-title">
            Why Choose Finike Lithium?
          </h1>
          <div className="heading-decoration">
            <div className="deco-segment"></div>
            <div className="deco-center"></div>
            <div className="deco-segment"></div>
          </div>
          <p className="section-subtitle">
            Engineered for excellence, designed for telecom and industrial applications
          </p>
        </div>

        {/* Asymmetric Feature Layout */}
        <div className="features-layout">
          
          {/* Left Column - Stacked Cards */}
          <div className="left-column">
            
            {/* High Power Output Card */}
            <div className="feature-card card-efficiency">
              <div className="card-overlay"></div>
              <div className="card-content">
                <div className="durability-header" style={{marginBottom:"1px"}}>
                  <div className="icon-background efficiency-bg"><div className="feature-icon">⚡</div></div>
                  <h3 className="card-title">High Power Output</h3>
                </div>
                
                <div className="efficiency-metrics">
                  <div className="metric-display">
                    <span className="metric-value">95</span>
                    <span className="metric-unit">%</span>
                  </div>
                  <div className="metric-bar">
                    <div className="bar-fill efficiency-fill"></div>
                  </div>
                  <p className="metric-label">Optimized Efficiency</p>
                </div>
                <p className="card-description">
                  Delivers fast, reliable performance for telecom systems with low energy loss for maximum output and performance.
                </p>
              </div>
            </div>

            {/* Eco-Conscious Design Card */}
            <div className="feature-card card-eco">
              <div className="card-overlay"></div>
              <div className="card-content">
                <div className="durability-header" style={{marginBottom:"1px"}}>
                  <div className="icon-background eco-bg"><div className="feature-icon">🌱</div></div>
                  <h3 className="card-title">Eco-Conscious Design</h3>
                </div>
                
                
                <div className="eco-indicators">
                  <div className="eco-badge">
                    <span className="badge-text">100% Recyclable Materials</span>
                  </div>
                  <div className="eco-badge">
                    <span className="badge-text">Rapid Charging Technology</span>
                  </div>
                </div>
                <p className="card-description">
                  Sustainable technology that reduces environmental impact with rapid charging that minimizes downtime.
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
                    <div className="icon-background durability-bg"><div className="feature-icon">🔋</div></div>
                    
                  </div>
                  <div className="header-text">
                    <h3 className="card-title">Extended Uptime</h3>
                    <p className="card-subtitle">Reliable Performance Guaranteed</p>
                  </div>
                </div>
                
                <div className="durability-showcase">
                  <div className="lifespan-visual">
                    <div className="timeline-container">
                      <div className="timeline-track"></div>
                      <div className="timeline-progress"></div>
                      <div className="timeline-points">
                        <div className="time-point active" data-year="24H"></div>
                        <div className="time-point active" data-year="72H"></div>
                        <div className="time-point active" data-year="7D"></div>
                        <div className="time-point active" data-year="30D"></div>
                        <div className="time-point highlighted" data-year="365D+"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="durability-stats">
                    <div className="stat-group">
                      <div className="stat-item">
                        <span className="stat-number">99.9%</span>
                        <span className="stat-label">Uptime Reliability</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-number">Fast</span>
                        <span className="stat-label">Charge Cycles</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-number">5000+</span>
                        <span className="stat-label">Recharge Cycles</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="card-description">
                  Longer operational life with fewer recharges, ensuring consistent power delivery 
                  in demanding conditions with reliable performance you can count on.
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
 <div className="benefits-showcase">
      {/* Ambient Background Elements */}
      <div className="ambient-sphere sphere-alpha"></div>
      <div className="ambient-sphere sphere-beta"></div>
      <div className="ambient-sphere sphere-gamma"></div>
      <div className="ambient-sphere sphere-delta"></div>
      
      {/* Main Container */}
      <div className="showcase-main">
        
        {/* Centered Title Section */}
        <div className="title-section">
          
          <h1 className="main-title">
            Cutting-Edge Features
          </h1>
          <p className="title-description">
            Experience the advantages that set our lithium batteries apart
          </p>
        </div>

        {/* Horizontal Flow Layout */}
        <div className="benefits-flow">
          
          {/* Ultra-Fast Charging - Left Panel */}
          <div className="benefit-panel left-panel">
            <div className="panel-background savings-bg"></div>
            <div className="panel-content">
              <div className="benefit-header">
                <div className="benefit-indicator savings-indicator">
                  <div className="indicator-core"></div>
                </div>
                <div className="header-text">
                  <h3 className="benefit-title">Ultra-Fast Charging</h3>
                  <span className="benefit-subtitle">Rapid Technology</span>
                </div>
              </div>
              
              <div className="savings-visualization">
                <div className="cost-reduction">
                  <div className="reduction-display">
                    <span className="reduction-number">90</span>
                    <span className="reduction-symbol">%</span>
                  </div>
                  <p className="reduction-text">Reduced Charging Time</p>
                </div>
                
                <div className="savings-chart">
                  <div className="chart-bar current-bar">
                    <div className="bar-fill current-fill"></div>
                    <span className="bar-label">Standard</span>
                  </div>
                  <div className="chart-bar optimized-bar">
                    <div className="bar-fill optimized-fill"></div>
                    <span className="bar-label">Ultra-Fast</span>
                  </div>
                </div>
              </div>
              
              <p className="benefit-text">
                Reduces downtime with rapid charging technology, enabling quick power restoration 
                and maintaining continuous operation for critical telecom applications.
              </p>
            </div>
          </div>

        {/* Bottom Extended Lifespan Section */}
        <div className="durability-section">
          <div className="durability-container">
            <div className="durability-background"></div>
            <div className="durability-content">
              <div className="durability-header">
                <div className="benefit-indicator durability-indicator">
                  <div className="indicator-core"></div>
                </div>
                <div className="header-info">
                  <h3 className="benefit-title">Extended Lifespan</h3>
                  <span className="benefit-subtitle">Long-Term Reliability</span>
                </div>
              </div>
              
              <div className="lifespan-display">
                
                
                <div className="reliability-stats">
                  <div className="reliability-item">
                    <span className="stat-highlight">10+</span>
                    <span className="stat-desc">Years Service Life</span>
                  </div>
                  <div className="reliability-item">
                    <span className="stat-highlight">5000+</span>
                    <span className="stat-desc">Charge Cycles</span>
                  </div>
                  <div className="reliability-item">
                    <span className="stat-highlight">24/7</span>
                    <span className="stat-desc">Network Support</span>
                  </div>
                </div>
              </div>
              
              <p className="durability-text">
                Delivers years of reliable service for telecom networks with robust construction 
                and proven durability in demanding operational environments.
              </p>
            </div>
          </div>
        </div>
          {/* High Efficiency - Right Panel */}
          <div className="benefit-panel right-panel">
            <div className="panel-background eco-bg"></div>
            <div className="panel-content">
              <div className="benefit-header">
                <div className="benefit-indicator eco-indicator">
                  <div className="indicator-core"></div>
                </div>
                <div className="header-text">
                  <h3 className="benefit-title">High Efficiency</h3>
                  <span className="benefit-subtitle">Optimal Performance</span>
                </div>
              </div>
              
              <div className="eco-metrics">
                <div className="metric-group">
                  <div className="metric-item">
                    <div className="metric-value">95</div>
                    <div className="metric-unit">%</div>
                    <div className="metric-label">Efficiency</div>
                  </div>
                  <div className="metric-divider"></div>
                  <div className="metric-item">
                    <div className="metric-value">5</div>
                    <div className="metric-unit">%</div>
                    <div className="metric-label">Energy Loss</div>
                  </div>
                </div>
                
                <div className="tech-badge">
                  <span className="badge-label">Advanced BMS Technology</span>
                </div>
              </div>
              
              <p className="benefit-text">
                Minimizes energy loss for optimal performance with advanced battery management 
                systems ensuring maximum power delivery and operational efficiency.
              </p>
            </div>
          </div>
        </div>


        {/* Elegant Footer */}
        <div className="elegant-footer">
          <div className="footer-line"></div>
          <div className="footer-accent"></div>
          <div className="footer-line"></div>
        </div>
      </div>
      
    </div>
    
    <div className="faq-container">
      
      <div className="floating-orb faq-orb-1"></div>
      <div className="floating-orb faq-orb-2"></div>
      <div className="floating-orb faq-orb-3"></div>
      <div className="floating-orb faq-orb-4"></div>
      
    
      <div className="faq-content">
        
        <div className="faq-header">
          
          <h2 className="faq-main-title">Frequently Asked Questions</h2>
          <div className="faq-title-underline">
            <div className="faq-line-segment"></div>
            <div className="faq-line-dot"></div>
            <div className="faq-line-segment"></div>
          </div>
          <p className="faq-subtitle">Everything you need to know about our lithium-ion inverters</p>
        </div>

        
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
              <div className="faq-card-glow"></div>
              
              
              <div className="faq-question-header" onClick={() => toggleFAQ(index)}>
                <div className="faq-question-left">
                  
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
          <h2 className="catalog-main-title">Telecom Battery Catalog</h2>
          <div className="catalog-title-underline">
            <div className="catalog-line-segment"></div>
            <div className="catalog-line-dot"></div>
            <div className="catalog-line-segment"></div>
          </div>
          <p className="catalog-subtitle">Explore our range of lithium-ion batteries designed for telecom applications, ensuring reliability and efficiency.</p>
        </div>

        
        <div className="catalog-main-card">
          <div className="catalog-card-glow"></div>
          
          

          <div className="catalog-card-content">


           
            <div className="catalog-cta-section">
              <a 
                href="https://finikelithium.com/static/media/(V3).477da44f7bf309efa47d.pdf" 
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

export default Telecom