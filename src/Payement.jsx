import React from 'react'
import Header from './Include/header'
import Footer from './Include/Footer'
const Payement = () => {
  return (
    <>
    <Header/>
<div className="slider-container">
        <div className="slider-wrapper">
          
            <div className="slide" style={{ backgroundImage: `url("https://media.istockphoto.com/id/2078490118/photo/businessman-using-laptop-to-online-payment-banking-and-online-shopping-financial-transaction.jpg?s=612x612&w=0&k=20&c=1x2G24ANsWxG4YW6ZaoeFPEzjmKFE4ZlohVQSwbjGj8=")` }}> 
              <div className="blur">
                <h1>Secure Payments   </h1>
                <p>Fast, secure transactions for Finike Lithium products.</p>
              </div>
            </div>
          
        </div>
        </div>
        
        
    <div className="hero-wrapper">
      
      <div className="ambient-sphere sphere-alpha"></div>
      <div className="ambient-sphere sphere-beta"></div>
      <div className="ambient-sphere sphere-gamma"></div>
      
      <div className="products-header">
          <div className="header-card">
            <div className="header-icon">
              <i className="fas fa-award"></i>
            </div>
            <h2 className="main-title">Secure Payments </h2>
            
          </div>
          
        </div>

      <section className="registration-section">
        <div className="container">
          <div className="form-wrapper">
            <div className="form-header">
              
              <h2>Your Information</h2>
              <p>We'll use this to verify your payment</p>
              
            </div>

            <form className="registration-form" >
              <div className="form-grid">
                
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

              </div>

              <button className="cta-button">
                                  Continue to Payement
                </button>
            </form>

           
          </div>
        </div>
      </section>
 <div className="bottom-cta">
          <div className="cta-card">
            <div className="cta-content">
              <h3>Need Immediate Assistance?</h3>
              <p>Our expert support team is standing by to help you with any questions or concerns</p>
              <div className="cta-buttons">
                              <a href="tel:+919778044000" class="cta-primary">
  <i class="fas fa-phone"></i>
  Call Now: +919778044000
</a>

<a href="https://mail.google.com/mail/?view=cm&fs=1&to=customercare@spinoff.in" target="_blank" class="cta-primary">
  <i class="fas fa-envelope"></i>
  Mail Now: customercare@spinoff.in
</a>

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

export default Payement