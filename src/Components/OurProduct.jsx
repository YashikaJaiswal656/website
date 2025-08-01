import Tilt from 'react-parallax-tilt';
import './OurProduct.css';

const OurProduct = () => {
  return (
    <section className="our-products-epic">
      <div className="hero-video-bg">
        <video autoPlay muted loop playsInline>
          <source src="https://assets.mixkit.co/videos/preview/mixkit-sci-fi-sphere-in-a-space-2652-large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="glow-circles" />
      <div className="hero-container">
        <div className="product-container">
          <div className="product-text" data-aos="fade-up">
            <h2>
              <i className="fas fa-bolt"></i>
              <span className="gradient-title">Our Products</span>
            </h2>
            <ul className="features-list">
              <li><i className="fas fa-check"></i> LiFePO4 lithium-ion batteries with a 10–12-year lifespan, free from acid hazards.</li>
              <li><i className="fas fa-check"></i> Pure sine wave output for reliable and consistent power delivery.</li>
              <li><i className="fas fa-check"></i> Compact, portable design ideal for home, business, and field use.</li>
              <li><i className="fas fa-check"></i> Advanced Battery Management System (BMS) ensuring optimal safety and efficiency.</li>
              <li><i className="fas fa-check"></i> Fast-charging capability with overcharge and deep discharge protection.</li>
              <li><i className="fas fa-check"></i> Smart monitoring with real-time diagnostics and performance tracking.</li>
              <li><i className="fas fa-check"></i> Scalable power solutions to meet varying energy demands.</li>
              <li><i className="fas fa-check"></i> Environmentally friendly technology with zero emissions and recyclable materials.</li>
              <li><i className="fas fa-check"></i> Quiet operation with minimal maintenance requirements.</li>
              <li><i className="fas fa-check"></i> Compatible with solar and renewable energy sources for sustainable living.</li>
            </ul>
          </div>

          <Tilt glareEnable={true} glareMaxOpacity={0.4} scale={1.05} transitionSpeed={2500}>
            <div className="product-image neon-border" data-aos="zoom-in-up">
              <img
                src="https://finikelithium.com/static/media/image.25934904c93b785b058c.jpg"
                alt="Finike Products"
              />
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default OurProduct;