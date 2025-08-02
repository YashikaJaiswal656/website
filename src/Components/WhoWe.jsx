import './WhoWe.css';

const WhoWeFinikeLight = () => {
  return (
    <section className="who-we-are-finike">
      <div className="finike-light-wrapper">

        <div className="finike-light-card" data-aos="fade-up">
          <div className="finike-light-heading">
            <span className="finike-light-icon">
              <i className="fas fa-battery-full"></i>
            </span>
            Powering Innovation
          </div>
          <div className="finike-light-subtag">High-performance Lithium Batteries</div>
          <p className="finike-light-description">
            Explore our cutting-edge <strong>LiFePO4 battery solutions</strong> tailored for solar, telecom, and EV industries. Lightweight, long-lasting, and eco-friendly.
          </p>
          <img
            className="finike-light-image"
            src="https://finikelithium.com/static/media/rajpura-factory-working.07a75bec3fee6bc81a54.jpg"
            alt="Factory"
          />
        </div>

        <div className="finike-light-card" data-aos="fade-up" data-aos-delay="150">
          <div className="finike-light-heading">
            <span className="finike-light-icon">
              <i className="fas fa-bolt"></i>
            </span>
            Smarter Energy
          </div>
          <div className="finike-light-subtag">Integrated Power Systems</div>
          <p className="finike-light-description">
            Partnered with <strong>Spinoff Technopark</strong>, we deliver intelligent systems combining batteries, solar panels, and smart monitoring for modern needs.
          </p>
          <img
            className="finike-light-image"
            src="https://finikelithium.com/static/media/rajpura-factory-working.07a75bec3fee6bc81a54.jpg"
            alt="EV Assembly"
          />
        </div>

        <div className="finike-light-card" data-aos="fade-up" data-aos-delay="300">
          <div className="finike-light-heading">
            <span className="finike-light-icon">
              <i className="fas fa-leaf"></i>
            </span>
            Sustainable Future
          </div>
          <div className="finike-light-subtag">Green Energy, Real Impact</div>
          <p className="finike-light-description">
            Finike is committed to a greener future. Our mission is to replace lead-acid with <strong>safe, recyclable lithium technology</strong> across India.
          </p>
          <img
            className="finike-light-image"
            src="https://finikelithium.com/static/media/rajpura-factory-working.07a75bec3fee6bc81a54.jpg"
            alt="Battery Stack"
          />
        </div>

      </div>
    </section>
  );
};

export default WhoWeFinikeLight;
