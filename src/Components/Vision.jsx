import React from 'react';
import "./Vision.css"



  return (
    <section className="mission-vision-container">
      {/* Floating background elements */}
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>
      <div className="floating-orb orb-3"></div>
      <div className="floating-orb orb-4"></div>

      {/* Header Section */}
      <div className="section-header">
        <div className="icon-wrapper">
          <div className="main-icon">⚡</div>
        </div>
        <h1 className="main-title">Our Mission & Vision</h1>
        <div className="decorative-line">
          <div className="line-segment"></div>
          
          <div className="line-segment"></div>
        </div>
      </div>

      {/* Mission Section */}
      <div className={`content-section mission-section`}>
        <div className="content-wrapper">
          <div className="image-container mission-image">
            <div className="image-placeholder">
              <div className="image-overlay">
                <div className="overlay-icon">🎯</div>
                <p className="overlay-text">Mission Image</p>
              </div>
              {/* Replace this div with your actual image */}
              <div className="placeholder-bg"> <img src="https://finikelithium.com/static/media/ourmission.e63469afab54507c70f0.jpeg"/></div>
            </div>
            <div className="image-decoration">
              <div className="decoration-dot dot-1"></div>
              <div className="decoration-dot dot-2"></div>
              <div className="decoration-dot dot-3"></div>
            </div>
          </div>
          
          <div className="text-container">
            <div className="section-badge mission-badge">
              <span className="badge-icon">🎯</span>
              <span className="badge-text">Our Mission</span>
            </div>
            
            <div className="quote-wrapper">
              <div className="quote-mark opening">"</div>
              <div className="content-text">
                <p>
                  To accelerate the adoption of <span className="highlight-blue">clean energy</span> through 
                  advanced lithium-ion battery solutions, empowering businesses and communities with 
                  efficient, sustainable power storage while upholding the highest standards of 
                  <span className="highlight-orange">quality, safety, and reliability.</span>
                </p>
              </div>
              <div className="quote-mark closing">"</div>
            </div>

            <div className="content-decoration">
              <div className="decoration-line"></div>
              <div className="decoration-circle"></div>
              <div className="decoration-line"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className={`content-section vision-section `}>
        <div className="content-wrapper reverse">
          <div className="text-container">
            <div className="section-badge vision-badge">
              <span className="badge-icon">🔮</span>
              <span className="badge-text">Our Vision</span>
            </div>
            
            <div className="quote-wrapper">
              <div className="quote-mark opening">"</div>
              <div className="content-text">
                <p>
                  To create a world powered by <span className="highlight-orange">renewable energy</span>, 
                  where our advanced battery technologies enable the seamless integration of clean power 
                  into transportation, industry, and daily life—building a 
                  <span className="highlight-blue">resilient and sustainable ecosystem.</span>
                </p>
              </div>
              <div className="quote-mark closing">"</div>
            </div>

            <div className="content-decoration">
              <div className="decoration-line"></div>
              <div className="decoration-circle"></div>
              <div className="decoration-line"></div>
            </div>
          </div>

          <div className="image-container vision-image">
            <div className="image-placeholder">
              <div className="image-overlay">
                <div className="overlay-icon">🔮</div>
                <p className="overlay-text">Vision Image</p>
              </div>
              {/* Replace this div with your actual image */}
              <div className="placeholder-bg"><img src="https://finikelithium.com/static/media/ourvision.0eea947e2277896076fd.jpeg"/> </div>
            </div>
            <div className="image-decoration">
              <div className="decoration-dot dot-1"></div>
              <div className="decoration-dot dot-2"></div>
              <div className="decoration-dot dot-3"></div>
            </div>
          </div>
        </div>
      </div>


      {/* Bottom decorative elements */}
      <div className="bottom-decoration">
        <div className="floating-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>
      </div>
    </section>
  );
};

export default Vision;