import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <>
    
    <footer className="footer">
        
        <div className="footer-container">
            <div className="footer-content">
                
                <div className="footer-section company-info">
                    <div className="company-logo">
                        <i className="fas fa-bolt"></i>
                        Finike Lithium
                    </div>
                    <p className="company-description">
                        Leading lithium-ion battery manufacturer in India, providing advanced, eco-friendly, and durable energy storage solutions for electric vehicles, solar systems, home inverters, and industrial use.
                    </p>
                    
                    <div className="contact-item">
                        <i className="fas fa-building"></i>
                        
                <span><strong>Corporate Office:</strong><br/>SCO-117/118, Sector-43B,<br/>Chandigarh, 160043</span>
                    </div>
                    
                    <div className="contact-item">
                        <i className="fas fa-phone"></i>
                        <span>
                            <a href="tel:+919778044000">+91 97780-44000</a><br/>
                            <a href="tel:+919778744000">+91 97787-44000</a>
                        </span>
                    </div>
                    
                    <div className="contact-item">
                        <i className="fas fa-envelope"></i>
                        <span><a href="mailto:customercare@spinoff.in">customercare@spinoff.in</a></span>
                    </div>
                    
                    <div className="working-hours">
                        <i className="fas fa-clock"></i>
                        <strong>Working Hours:</strong><br/>
                        Monday to Saturday: 9:00 AM - 7:00 PM
                    </div>
                    
                    <div className="social-icons">
                        <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>

                
                <div className="footer-section">
                    <h3><i className="fas fa-industry"></i> Manufacturing Units</h3>
                    
                    <div className="manufacturing-unit">
                        <div className="unit-title">Unit-1</div>
                        <div className="unit-address">
                            NH1, Tehsil Rajpura,<br/>
                            District Patiala,<br/>
                            Punjab-140401
                        </div>
                    </div>
                    
                    <div className="manufacturing-unit">
                        <div className="unit-title">Unit-2</div>
                        <div className="unit-address">
                            E226 Phase-8 Mohali<br/>
                            Punjab-160071
                        </div>
                    </div>
                </div>

                <div className="footer-section">
                    <h3><i className="fas fa-sitemap"></i> Quick Navigation</h3>
                    <ul className="footer-links">
                        <li><a href="#"><i className="fas fa-chevron-right"></i>Home</a></li>
                        <li><a href="#"><i className="fas fa-chevron-right"></i>About Us</a></li>
                        <li><a href="#"><i className="fas fa-chevron-right"></i>ESS Batteries</a></li>
                        <li><a href="#"><i className="fas fa-chevron-right"></i>Lithium-ion Batteries</a></li>
                        <li><a href="#"><i className="fas fa-chevron-right"></i>Lithium-ion Inverter</a></li>
                        <li><a href="#"><i className="fas fa-chevron-right"></i>Telecom Batteries</a></li>
                        <li><a href="#"><i className="fas fa-chevron-right"></i>Warranty Registration</a></li>
                        <li><a href="#"><i className="fas fa-chevron-right"></i>Technical Support</a></li>
                        <li><a href="#"><i className="fas fa-chevron-right"></i>Career</a></li>
                        <li><a href="#"><i className="fas fa-chevron-right"></i>Online Payment</a></li>
                    </ul>
                </div>

                
                <div className="footer-section">
                    <h3><i className="fas fa-tools"></i> Services & Support</h3>
                    <ul className="footer-links">
                        <li><a href="#"><i className="fas fa-chevron-right"></i>Technical Support</a></li>
                        <li><a href="#"><i className="fas fa-chevron-right"></i>Warranty Registration</a></li>
                        <li><a href="#"><i className="fas fa-chevron-right"></i>Customer Care</a></li>
                        <li><a href="#"><i className="fas fa-chevron-right"></i>Online Payment</a></li>
                        <li><a href="#"><i className="fas fa-chevron-right"></i>Career Opportunities</a></li>
                    </ul>
                    
                    <h3 style={{marginTop:"30px"}}><i className="fas fa-battery-three-quarters"></i> Products</h3>
                    <ul className="footer-links">
                        <li><a href="#"><i className="fas fa-chevron-right"></i>EV Batteries</a></li>
                        <li><a href="#"><i className="fas fa-chevron-right"></i>Solar Batteries</a></li>
                        <li><a href="#"><i className="fas fa-chevron-right"></i>Home Inverters</a></li>
                        <li><a href="#"><i className="fas fa-chevron-right"></i>Industrial Solutions</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="copyright">
                    <i className="fas fa-copyright"></i> 2025 Finike Lithium. All Rights Reserved. | Trusted across pan India for performance and reliability.
                </div>
                <div className="policy-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Shipping Policy</a>
                    <a href="#">Cancellation & Refund Policy</a>
                    <a href="#">Terms and Conditions</a>
                </div>
            </div>
        </div>
    </footer>
    </>
  );
};

export default Footer