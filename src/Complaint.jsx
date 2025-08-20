import React from 'react';
import Header from "./Include/header";
import Footer from './Include/Footer'
const Complaint = () => {
  return (
    <>
    <Header/>
      
      <div className="slider-container">
        <div className="slider-wrapper">
          <div className="slide" style={{ backgroundImage: `url("https://blog.ipleaders.in/wp-content/uploads/2016/08/before-you-file-a-complaint.jpg")` }}> 
            <div className="blur">
              <h1>Complaint Register</h1>
              <p>Our dedicated team is here to assist with any issues related to your Finike Lithium products.</p>
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
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <h2 className="gradient-title">Submit Your Complaint</h2>
          </div>
        </div>

        <section className="registration-section">
          <div className="container">
            <div className="form-wrapper">
              <div className="form-header">
                <div className="priority-badge">
                  <span className="priority-dot"></span>
                  High Priority Support
                </div>
                <h2>Complaint Registration</h2>
                <p>Fill out the details below for quick resolution of your issue</p>
              </div>

              <div className="registration-form">
                <div className="form-grid">
                  
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

                  <div className="input-group">
                    <label>Product Serial Number</label>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        name="productSerialNumber"
                        placeholder="FL123456789"
                      />
                      <div className="input-icon">🏷️</div>
                    </div>
                  </div>

                  <div className="input-group">
                    <label>Choose an Issue</label>
                    <div className="select-wrapper">
                      <select name="issueType">
                        <option value="">Select an issue type</option>
                        <option value="product_defect">⚠️ Product Defect</option>
                        <option value="battery_issue">🔋 Battery Performance Issue</option>
                        <option value="charging_problem">⚡ Charging Problem</option>
                        <option value="physical_damage">💥 Physical Damage</option>
                        <option value="warranty_claim">🛡️ Warranty Claim</option>
                        <option value="installation_issue">🔧 Installation Issue</option>
                        <option value="performance_degradation">📉 Performance Degradation</option>
                        <option value="safety_concern">🚨 Safety Concern</option>
                        <option value="compatibility_issue">🔄 Compatibility Issue</option>
                        <option value="other">❓ Other Issue</option>
                      </select>
                    </div>
                  </div>

                  <div className="input-group">
                    <label>Pin Code</label>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        name="pincode"
                        placeholder="400001"
                      />
                      <div className="input-icon">📍</div>
                    </div>
                  </div>

                  <div className="input-group full-width">
                    <label>Describe the Issue in Detail</label>
                    <div className="input-wrapper">
                      <textarea
                        name="issueDescription"
                        placeholder="Please provide detailed information about the issue you're experiencing. Include when it started, how it affects your product usage, and any troubleshooting steps you've already tried..."
                        rows="6"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <button type="button" className="cta-button">
                  Submit Complaint
                </button>
              </div>
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
  );
};

export default Complaint;