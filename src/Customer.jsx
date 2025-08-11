import React from 'react'
import Header from './Include/header'
import Footer from './Include/Footer'
import Warranty from './Components/Warranty'
const Customer = () => {
  return (
    <>
    <Header/>
    <div className="slider-container">
        <div className="slider-wrapper">
          
            <div className="slide" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?semt=ais_hybrid&w=740&q=80")` }}> 
              <div className="blur">
                <h1>Customer Support </h1>
                <p>We’re here to assist you at every step with your Finike Lithium products, ensuring seamless performance and support.</p>
              </div>
            </div>
          
        </div>
        </div>
     <div className="hero-wrapper">
      {/* Floating background elements */}
      <div className="ambient-sphere sphere-alpha"></div>
      <div className="ambient-sphere sphere-beta"></div>
      <div className="ambient-sphere sphere-gamma"></div>
      
      {/* Main content grid */}
      <div className="content-grid">
        {/* Left side - Brand identity */}
        <div className="brand-showcase">
          <div className="logo-frame">
            <div className="brand-symbol">
              <i className="fas fa-bolt"></i>
            </div>
          </div>
          
          <div className="company-badge">
            <div className="badge-text">EST. 2025</div>
            <div className="badge-divider"></div>
            <div className="badge-location">CHANDIGARH</div>
          </div>
        </div>
        
        {/* Right side - Content */}
        <div className="content-panel">
          <div className="section-tag">
            <span className="tag-icon">◆</span>
            <span className="tag-label">Customer Support</span>
            <span className="tag-icon">◆</span>
          </div>
          
          <h2 className="main-title">
            Finike Lithium
          </h2>
          
          <div className="story-block">
            <div className="paragraph-marker"></div>
            <p className="narrative-text">
We are pioneers in comprehensive customer service excellence, delivering high-performance support and assistance for battery inquiries, technical guidance, and warranty services across all applications.

            </p>
          </div>
          
          <div className="story-block">
            <div className="paragraph-marker"></div>
            <p className="narrative-text">
Headquartered in Chandigarh with service teams in Punjab and nationwide support presence, we drive innovation in customer care and satisfaction. Our reliable, efficient support team handles pre-sales consultation, post-sales assistance, and technical troubleshooting by providing personalized solutions and powering exceptional service experiences.
We pride ourselves on offering top-notch pre and post-sales support to all our customers. Connect with us –  <span className="emphasis-text">we'd love to hear from you!</span>.
            </p>
          </div>
          

        </div>
      </div>
      
    </div>
    <Warranty/>
    <Footer/>
    
    </>
  )
}

export default Customer