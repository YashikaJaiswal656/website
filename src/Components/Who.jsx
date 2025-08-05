<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Finike Lithium Footer</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #f5f5f5;
            padding: 50px 0;
        }

        .footer {
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
            color: #ffffff;
            position: relative;
            overflow: hidden;
        }

        .footer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #00d4ff, #0099cc, #006bb3, #00d4ff);
            background-size: 300% 300%;
            animation: gradientShift 3s ease infinite;
        }

        @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        .footer-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 60px 30px 30px;
        }

        .footer-content {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: 50px;
            margin-bottom: 50px;
        }

        .footer-section h3 {
            color: #00d4ff;
            font-size: 1.3rem;
            margin-bottom: 25px;
            font-weight: 600;
            position: relative;
        }

        .footer-section h3::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 30px;
            height: 2px;
            background: #00d4ff;
        }

        .company-info {
            max-width: 300px;
        }

        .company-logo {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 20px;
            color: #00d4ff;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .company-logo i {
            font-size: 1.8rem;
        }

        .company-description {
            line-height: 1.7;
            color: #b8c5d1;
            margin-bottom: 25px;
            font-size: 0.95rem;
        }

        .contact-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 15px;
            gap: 12px;
        }

        .contact-item i {
            color: #00d4ff;
            width: 18px;
            margin-top: 2px;
            flex-shrink: 0;
        }

        .contact-item span {
            color: #b8c5d1;
            line-height: 1.6;
        }

        .contact-item a {
            color: #b8c5d1;
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .contact-item a:hover {
            color: #00d4ff;
        }

        .footer-links {
            list-style: none;
        }

        .footer-links li {
            margin-bottom: 12px;
        }

        .footer-links a {
            color: #b8c5d1;
            text-decoration: none;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 5px 0;
        }

        .footer-links a:hover {
            color: #00d4ff;
            transform: translateX(5px);
        }

        .footer-links a i {
            font-size: 0.8rem;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .footer-links a:hover i {
            opacity: 1;
        }

        .manufacturing-unit {
            background: rgba(255, 255, 255, 0.05);
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 15px;
            border-left: 3px solid #00d4ff;
            transition: transform 0.3s ease;
        }

        .manufacturing-unit:hover {
            transform: translateY(-2px);
        }

        .unit-title {
            color: #00d4ff;
            font-weight: 600;
            margin-bottom: 8px;
        }

        .unit-address {
            color: #b8c5d1;
            font-size: 0.9rem;
            line-height: 1.5;
        }

        .social-icons {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }

        .social-icon {
            width: 45px;
            height: 45px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #b8c5d1;
            text-decoration: none;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }

        .social-icon:hover {
            background: #00d4ff;
            color: #1a1a2e;
            transform: translateY(-3px);
        }

        .footer-bottom {
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
        }

        .copyright {
            color: #b8c5d1;
            font-size: 0.9rem;
        }

        .policy-links {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
        }

        .policy-links a {
            color: #b8c5d1;
            text-decoration: none;
            font-size: 0.9rem;
            transition: color 0.3s ease;
        }

        .policy-links a:hover {
            color: #00d4ff;
        }

        .working-hours {
            background: rgba(0, 212, 255, 0.1);
            padding: 15px;
            border-radius: 8px;
            margin-top: 20px;
            border: 1px solid rgba(0, 212, 255, 0.2);
        }

        .working-hours strong {
            color: #00d4ff;
        }

        @media (max-width: 968px) {
            .footer-content {
                grid-template-columns: 1fr 1fr;
                gap: 40px;
            }
        }

        @media (max-width: 640px) {
            .footer-content {
                grid-template-columns: 1fr;
                gap: 30px;
            }
            
            .footer-container {
                padding: 40px 20px 20px;
            }
            
            .footer-bottom {
                flex-direction: column;
                text-align: center;
            }
            
            .policy-links {
                justify-content: center;
            }
        }

        .animate-pulse {
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }
    </style>
</head>
<body>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-content">
                <!-- Company Information -->
                <div class="footer-section company-info">
                    <div class="company-logo">
                        <i class="fas fa-bolt"></i>
                        Finike Lithium
                    </div>
                    <p class="company-description">
                        Leading lithium-ion battery manufacturer in India, providing advanced, eco-friendly, and durable energy storage solutions for electric vehicles, solar systems, home inverters, and industrial use.
                    </p>
                    
                    <div class="contact-item">
                        <i class="fas fa-building"></i>
                        <span><strong>Corporate Office:</strong><br>SCO-117/118, Sector-43B,<br>Chandigarh, 160043</span>
                    </div>
                    
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <span>
                            <a href="tel:+919778044000">+91 97780-44000</a><br>
                            <a href="tel:+919778744000">+91 97787-44000</a>
                        </span>
                    </div>
                    
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <span><a href="mailto:customercare@spinoff.in">customercare@spinoff.in</a></span>
                    </div>
                    
                    <div class="working-hours">
                        <i class="fas fa-clock"></i>
                        <strong>Working Hours:</strong><br>
                        Monday to Saturday: 9:00 AM - 7:00 PM
                    </div>
                    
                    <div class="social-icons">
                        <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>

                <!-- Manufacturing Units -->
                <div class="footer-section">
                    <h3><i class="fas fa-industry"></i> Manufacturing Units</h3>
                    
                    <div class="manufacturing-unit">
                        <div class="unit-title">Unit-1</div>
                        <div class="unit-address">
                            NH1, Tehsil Rajpura,<br>
                            District Patiala,<br>
                            Punjab-140401
                        </div>
                    </div>
                    
                    <div class="manufacturing-unit">
                        <div class="unit-title">Unit-2</div>
                        <div class="unit-address">
                            E226 Phase-8 Mohali<br>
                            Punjab-160071
                        </div>
                    </div>
                </div>

                <!-- Quick Navigation -->
                <div class="footer-section">
                    <h3><i class="fas fa-sitemap"></i> Quick Navigation</h3>
                    <ul class="footer-links">
                        <li><a href="#"><i class="fas fa-chevron-right"></i>Home</a></li>
                        <li><a href="#"><i class="fas fa-chevron-right"></i>About Us</a></li>
                        <li><a href="#"><i class="fas fa-chevron-right"></i>ESS Batteries</a></li>
                        <li><a href="#"><i class="fas fa-chevron-right"></i>Lithium-ion Batteries</a></li>
                        <li><a href="#"><i class="fas fa-chevron-right"></i>Lithium-ion Inverter</a></li>
                        <li><a href="#"><i class="fas fa-chevron-right"></i>Telecom Batteries</a></li>
                        <li><a href="#"><i class="fas fa-chevron-right"></i>Warranty Registration</a></li>
                        <li><a href="#"><i class="fas fa-chevron-right"></i>Technical Support</a></li>
                        <li><a href="#"><i class="fas fa-chevron-right"></i>Career</a></li>
                        <li><a href="#"><i class="fas fa-chevron-right"></i>Online Payment</a></li>
                    </ul>
                </div>

                <!-- Services & Support -->
                <div class="footer-section">
                    <h3><i class="fas fa-tools"></i> Services & Support</h3>
                    <ul class="footer-links">
                        <li><a href="#"><i class="fas fa-chevron-right"></i>Technical Support</a></li>
                        <li><a href="#"><i class="fas fa-chevron-right"></i>Warranty Registration</a></li>
                        <li><a href="#"><i class="fas fa-chevron-right"></i>Customer Care</a></li>
                        <li><a href="#"><i class="fas fa-chevron-right"></i>Online Payment</a></li>
                        <li><a href="#"><i class="fas fa-chevron-right"></i>Career Opportunities</a></li>
                    </ul>
                    
                    <h3 style="margin-top: 30px;"><i class="fas fa-battery-three-quarters"></i> Products</h3>
                    <ul class="footer-links">
                        <li><a href="#"><i class="fas fa-chevron-right"></i>EV Batteries</a></li>
                        <li><a href="#"><i class="fas fa-chevron-right"></i>Solar Batteries</a></li>
                        <li><a href="#"><i class="fas fa-chevron-right"></i>Home Inverters</a></li>
                        <li><a href="#"><i class="fas fa-chevron-right"></i>Industrial Solutions</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="copyright">
                    <i class="fas fa-copyright"></i> 2025 Finike Lithium. All Rights Reserved. | Trusted across pan India for performance and reliability.
                </div>
                <div class="policy-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Shipping Policy</a>
                    <a href="#">Cancellation & Refund Policy</a>
                    <a href="#">Terms and Conditions</a>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>