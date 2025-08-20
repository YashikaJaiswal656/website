import React, { useState } from 'react';
import Header from './Include/header';
import Footer from './Include/Footer';
import './Components/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    serialNumber: '',
    invoiceDate: '',
    invoiceFile: null,
    invoiceNumber: '',
    sellerName: '',
    pincode: '',
    additionalDetails: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({ ...prev, invoiceFile: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Warranty registration submitted!');
  };

  return (
    <>
      <Header />

      <div className="slider-container">
        <div className="slider-wrapper">
          <div
            className="slide"
            style={{
              backgroundImage: `url("https://www.shutterstock.com/image-photo/customer-rating-service-experience-warranty-260nw-2195483921.jpg")`
            }}
          >
            <div className="blur">
              <h1>Warranty Services</h1>
              <p>Register your Finike Lithium product or check warranty status with ease and confidence.</p>
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
            <h2 className="main-title">            Register Your Warranty</h2>
            
          </div>
          
        </div>

      <section className="registration-section">
        <div className="container">
          <div className="form-wrapper">
            <div className="form-header">
              
              <h2>WarrantyRegistration</h2>
              <p>Fill out the details below to activate your warranty coverage</p>
            </div>

            <form className="registration-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                
                <div className="input-group">
                  <label>Full Name</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
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
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      required
                    />
                    <div className="input-icon">📱</div>
                  </div>
                </div>

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
                  <label>Invoice Date</label>
                  <div className="input-wrapper">
                    <input
                      type="date"
                      name="invoiceDate"
                      value={formData.invoiceDate}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="input-icon">📅</div>
                  </div>
                </div>

                <div className="input-group">
                  <label>Invoice Number</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="invoiceNumber"
                      value={formData.invoiceNumber}
                      onChange={handleInputChange}
                      placeholder="INV-2024-001"
                      required
                    />
                    <div className="input-icon">🧾</div>
                  </div>
                </div>
                <div className="input-group">
                  <label>Seller/Store Name</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="sellerName"
                      value={formData.sellerName}
                      onChange={handleInputChange}
                      placeholder="Electronics Store XYZ"
                      required
                    />
                    <div className="input-icon">🏪</div>
                  </div>
                </div>

                <div className="input-group file-upload">
                  <label>Upload Invoice</label>
                  <div
                    className="file-drop-area"
                    onClick={() => document.getElementById('file-input').click()}
                  >
                    <input
                      id="file-input"
                      type="file"
                      onChange={handleFileChange}
                      accept="image/*,.pdf"
                      style={{ display: 'none' }}
                      required
                    />
                    <div className="file-drop-content">
                      <div className="upload-icon">📎</div>
                      <p>Drop your invoice here or <span>browse files</span></p>
                      <small>Supports: PDF, JPG, PNG (Max 5MB)</small>
                    </div>
                  </div>
                </div>


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

                <div className="input-group full-width">
                  <label>Additional Details (Optional)</label>
                  <div className="input-wrapper">
                    <textarea
                      name="additionalDetails"
                      value={formData.additionalDetails}
                      onChange={handleInputChange}
                      placeholder="Any extra details you’d like to provide"
                    />
                  </div>
                </div>
              </div>

              <button className="cta-button">
                                  Submit Registration
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


      <Footer />
    </>
  );
};

export default Register;
