import React from 'react'
import Header from './Include/header'
import Footer from './Include/Footer'
const Complaint = () => {
  
  const products = [
    { value: 'lithium_12v_100ah', label: 'Finike Lithium 12V 100Ah', icon: '🔋' },
    { value: 'lithium_12v_200ah', label: 'Finike Lithium 12V 200Ah', icon: '🔋' },
    { value: 'lithium_24v_100ah', label: 'Finike Lithium 24V 100Ah', icon: '⚡' },
    { value: 'lithium_24v_200ah', label: 'Finike Lithium 24V 200Ah', icon: '⚡' },
    { value: 'lithium_48v_100ah', label: 'Finike Lithium 48V 100Ah', icon: '🔌' },
    { value: 'lithium_48v_200ah', label: 'Finike Lithium 48V 200Ah', icon: '🔌' },
    { value: 'solar_battery_12v', label: 'Finike Solar Battery 12V', icon: '☀️' },
    { value: 'solar_battery_24v', label: 'Finike Solar Battery 24V', icon: '☀️' },
    { value: 'portable_power_station', label: 'Finike Portable Power Station', icon: '📱' },
    { value: 'ev_battery_pack', label: 'Finike EV Battery Pack', icon: '🚗' },
    { value: 'home_energy_system', label: 'Finike Home Energy System', icon: '🏠' },
    { value: 'other_product', label: 'Other Finike Product', icon: '❓' }
  ];

  const issueTypes = [
    { value: 'product_defect', label: 'Product Defect', icon: '⚠️' },
    { value: 'battery_issue', label: 'Battery Performance Issue', icon: '🔋' },
    { value: 'charging_problem', label: 'Charging Problem', icon: '⚡' },
    { value: 'physical_damage', label: 'Physical Damage', icon: '💥' },
    { value: 'warranty_claim', label: 'Warranty Claim', icon: '🛡️' },
    { value: 'installation_issue', label: 'Installation Issue', icon: '🔧' },
    { value: 'performance_degradation', label: 'Performance Degradation', icon: '📉' },
    { value: 'safety_concern', label: 'Safety Concern', icon: '🚨' },
    { value: 'compatibility_issue', label: 'Compatibility Issue', icon: '🔄' },
    { value: 'other', label: 'Other Issue', icon: '❓' }
  ];

 
  return (
    <>
    <Header/>
<div className="slider-container">
        <div className="slider-wrapper">
          
            <div className="slide" style={{ backgroundImage: `url("https://blog.ipleaders.in/wp-content/uploads/2016/08/before-you-file-a-complaint.jpg")` }}> 
              <div className="blur">
                <h1>Complaint Register   </h1>
                <p>Our dedicated team is here to assist with any issues related to your Finike Lithium products.</p>
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
            <h2 className="gradient-title">            Register Your Product</h2>
            
          </div>
          
        </div>

      {/* Registration Form Section */}
      <section className="registration-section">
        <div className="container">
          <div className="form-wrapper">
            <div className="form-header">
              
              <h2>Product Registration</h2>
              <p>Fill out the details below to activate your warranty coverage</p>
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
 <div className="input-group">
                  <label>Email Address</label>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
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
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      required
                    />
                    <div className="input-icon">📱</div>
                  </div>
                </div>

                {/* Serial Number */}
                <div className="input-group">
                  <label>Product Serial Number</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="serialNumber"
                      value={formData.serialNumber}
                      onChange={handleInputChange}
                      placeholder="SN123456789"
                      required
                    />
                    <div className="input-icon">🏷️</div>
                  </div>
                </div>
 <div className="input-group">
                  <label>Select a Product</label>
                  <div className="custom-select">
                    <div 
                      className={`select-trigger ${isDropdownOpen.selectedProduct ? 'active' : ''}`}
                      onClick={() => toggleDropdown('selectedProduct')}
                    >
                      <div className="selected-value">
                        {selectedProduct ? (
                          <>
                            <span className="select-icon">{selectedProduct.icon}</span>
                            <span>{selectedProduct.label}</span>
                          </>
                        ) : (
                          <>
                            <span className="select-icon">🔋</span>
                            <span>Select your Finike product</span>
                          </>
                        )}
                      </div>
                      <div className={`dropdown-arrow ${isDropdownOpen.selectedProduct ? 'rotated' : ''}`}>▼</div>
                    </div>
                    {isDropdownOpen.selectedProduct && (
                      <div className="select-options">
                        {products.map((product) => (
                          <div
                            key={product.value}
                            className={`option ${formData.selectedProduct === product.value ? 'selected' : ''}`}
                            onClick={() => handleSelectChange('selectedProduct', product.value)}
                          >
                            <span className="option-icon">{product.icon}</span>
                            <span>{product.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
 <div className="input-group">
                  <label>Select a Product</label>
                  <div className="custom-select">
                    <div 
                    >
                      <div className="selected-value">
                        {selectedProduct ? (
                          <>
                            <span className="select-icon">{selectedProduct.icon}</span>
                            <span>{selectedProduct.label}</span>
                          </>
                        ) : (
                          <>
                            <span className="select-icon">🔋</span>
                            <span>Select your Finike product</span>
                          </>
                        )}
                      </div>
                      <div className={`dropdown-arrow ${isDropdownOpen.selectedProduct ? 'rotated' : ''}`}>▼</div>
                    </div>
                    {isDropdownOpen.selectedProduct && (
                      <div className="select-options">
                        {products.map((product) => (
                          <div
                          >
                            <span className="option-icon">{product.icon}</span>
                            <span>{product.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Pincode */}
                <div className="input-group">
                  <label>Pincode</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      placeholder="400001"
                      required
                    />
                    <div className="input-icon">📍</div>
                  </div>
                </div>

                {/* Additional Details */}
                <div className="input-group full-width">
                  <label>Issue in Details </label>
                  <div className="input-wrapper">
                    <textarea
                      name="additionalDetails"
                      
                      placeholder="Please provide detailed information about the issue"
                    />
                  </div>
                </div>
              </div>

              <button className="cta-button">
                                  Submit Registration
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

export default Complaint