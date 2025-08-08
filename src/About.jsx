import React from 'react'
import Header from './Include/header'
import Footer from './Include/Footer'
import Slider from './Components/Slider'
import Vision from './Components/Vision'
import Choose from './Components/Choose'
const About = () => {
  return (
    <>
    <Header/>
    <Slider/>
    <section className="mission-container">
        {/* Animated background elements */}
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
        
        {/* Main content with vertical layout */}
        <div className="mission-content">
          {/* Top section with icon and title */}
          <div className="mission-header">
            <div className="icon-wrapper">
              <i className="fas fa-bolt main-icon"></i>
            </div>
            <h1 className="main-title">About Us</h1>
          </div>
          
          {/* Quote section with elegant typography */}
          <div className="quote-section">
            <div className="quote-mark">"</div>
            <p className="mission-quote">
              Finike Lithium is a pioneer in advanced lithium-ion battery technology, delivering high-performance energy storage solutions for EVs, solar systems, and industrial applications. Headquartered in Chandigarh, with a manufacturing facility in Punjab and a nationwide presence, we are committed to innovation and sustainability. Our reliable, efficient batteries support the global transition to clean energy by reducing carbon emissions and  
              <span className="highlight">powering a greener future</span>.
            </p>
            <div className="quote-mark closing">"</div>
          </div>
          
          {/* Bottom decorative elements */}
          <div className="decorative-line">
            <div className="line-segment"></div>
            <div className="line-dot"></div>
            <div className="line-segment"></div>
          </div>
        </div>
        
      </section>
      <Vision/>   
      <Choose/>
    <Footer/>
    
    </>
  )
}

export default About