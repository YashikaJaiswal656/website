import React from 'react'
import Header from './Include/header'
import Footer from './Include/Footer'
const Contact = () => {
  
  return (
    <>
    <Header/>
<div className="slider-container">
        <div className="slider-wrapper">
          
            <div className="slide" style={{ backgroundImage: `url("https://media.istockphoto.com/id/1353578807/photo/circular-economy-concept-energy-consumption-and-co2-emissions-are-increasing-sharing-reusing.jpg?s=612x612&w=0&k=20&c=lF3UdNsCpMexM6TCm-en-15FlyJKcwk30Ob3d8_m6sc=")` }}> 
              <div className="blur">
                <h1>Let’s Power the Future Together   </h1>
                <p>Connect with Finike Lithium to explore innovative EV battery solutions or schedule a consultation.

</p>
              </div>
            </div>
          
        </div>
        </div>



        
    <div className="hero-wrapper">
      {/* Floating background elements */}
      <div className="ambient-sphere sphere-alpha"></div>
      <div className="ambient-sphere sphere-beta"></div>
      <div className="ambient-sphere sphere-gamma"></div>
      
      <div className="products-header">
          <div className="header-card">
            <div className="header-icon">
              <i className="fas fa-award"></i>
            </div>
            <h2 className="main-title">Contact Us</h2>
            
          </div>
          
        </div>

      {/* Registration Form Section */}
      <section className="registration-section">
        <div className="container">
          <div className="form-wrapper">
            <div className="form-header">
              
              <h2>Send Us a Message</h2>
              
            </div>

            <form className="registration-form" >
              <div className="form-grid">
                {/* Full Name */}
                <div className="input-group">
                  <label>Full Name</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      required
                    />
                    <div className="input-icon">👤</div>
                  </div>
                </div>

                {/* Mobile */}
                <div className="input-group">
                  <label>Mobile Number</label>
                  <div className="input-wrapper">
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="+91 98765 43210"
                      required
                    />
                    <div className="input-icon">📱</div>
                  </div>
                </div>
                  {/* Email */}
                  <div className="input-group">
                    <label>Email Address</label>
                    <div className="input-wrapper">
                      <input
                        type="email"
                        name="email"
                        placeholder="your.email@example.com"
                      />
                      <div className="input-icon">📧</div>
                    </div>
                  </div>

                {/* Seller Name */}
                <div className="input-group">
                  <label>Subject</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="sellerName"
                      placeholder="Enter your Subject"
                      required
                    />
                    <div className="input-icon">🏪</div>
                  </div>
                </div>

                {/* Additional Details */}
                <div className="input-group full-width">
                  <label> Details</label>
                  <div className="input-wrapper">
                    <textarea
                      name="additionalDetails"
                      placeholder="Enter Your Message"
                    />
                  </div>
                </div>
              </div>

              <button className="cta-button">
                                  Send Message
                </button>
            </form>

            {/* Info Cards */}
           
          </div>
        </div>
      </section>
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



    <Footer/>
    </>
  )
}

export default Contact