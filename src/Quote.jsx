import React from 'react'
import Header from './Include/header'
import Footer from './Include/Footer'
const Quote = () => {
  return (
    <>
    <Header/>
<div className="slider-container">
        <div className="slider-wrapper">
          
            <div className="slide" style={{ backgroundImage: `url("https://www.shutterstock.com/image-photo/using-laptop-show-icon-address-600nw-2521386695.jpg")` }}> 
              <div className="blur">
                <h1>Get a Quote   </h1>
                <p>Request a tailored quote for Finike Lithium products, and our team will respond promptly.</p>
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
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <h2 className="gradient-title">Request a Quote</h2>
          </div>
        </div>

        {/* Registration Form Section */}
        <section className="registration-section">
          <div className="container">
            <div className="form-wrapper">
              <div className="form-header">
                
                <h2>Submit Your Quote Request</h2>
                <p>Provide your details to receive a personalized quote.</p>
              </div>

              <div className="registration-form">
                <div className="form-grid">
                  {/* Full Name */}
                  <div className="input-group">
                    <label>Full Name</label>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                      />
                      <div className="input-icon">👤</div>
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

                  {/* Mobile */}
                  <div className="input-group">
                    <label>Mobile Number</label>
                    <div className="input-wrapper">
                      <input
                        type="tel"
                        name="mobile"
                        placeholder="+91 98765 43210"
                      />
                      <div className="input-icon">📱</div>
                    </div>
                  </div>

                  {/* Select Product */}
                  <div className="input-group">
                    <label>Select a Product</label>
                    <div className="select-wrapper">
                      <select name="selectedProduct">
                        <option value="">Select your Finike product</option>
                        <option value="lithium_12v_100ah">🔋 Finike Lithium 12V 100Ah</option>
                        <option value="lithium_12v_200ah">🔋 Finike Lithium 12V 200Ah</option>
                        <option value="lithium_24v_100ah">⚡ Finike Lithium 24V 100Ah</option>
                        <option value="lithium_24v_200ah">⚡ Finike Lithium 24V 200Ah</option>
                        <option value="lithium_48v_100ah">🔌 Finike Lithium 48V 100Ah</option>
                        <option value="lithium_48v_200ah">🔌 Finike Lithium 48V 200Ah</option>
                        <option value="solar_battery_12v">☀️ Finike Solar Battery 12V</option>
                        <option value="solar_battery_24v">☀️ Finike Solar Battery 24V</option>
                        <option value="portable_power_station">📱 Finike Portable Power Station</option>
                        <option value="ev_battery_pack">🚗 Finike EV Battery Pack</option>
                        <option value="home_energy_system">🏠 Finike Home Energy System</option>
                        <option value="other_product">❓ Other Finike Product</option>
                      </select>
                    </div>
                  </div>


                  {/* Issue Type */}
                  {/* Issue Description */}
                  <div className="input-group full-width">
                    <label>Message</label>
                    <div className="input-wrapper">
                      <textarea
                        name="issueDescription"
                        placeholder="Describe Your Need"
                        rows="6"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <button type="button" className="cta-button">
                  Submit  Quote Request
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
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

export default Quote