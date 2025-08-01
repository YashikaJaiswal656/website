import Tilt from 'react-parallax-tilt';
import './WhoWe.css';

const WhoWe = () => {
  return (
    <section className="who-we-are-epic">
      <div className="hero-video-bg">
        <video autoPlay muted loop playsInline>
          <source src="https://assets.mixkit.co/videos/preview/mixkit-sci-fi-sphere-in-a-space-2652-large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="glow-circles" />
      <div className="hero-container">
        <div className="content-block" data-aos="fade-up">
          <div className="text-content">
            <h2>
              <i className="fas fa-bolt"></i>
              <span className="gradient-title">Finike Lithium</span>
            </h2>
            <p className="tagline">Powering the Next Generation</p>
            <p>
              We are pioneers in <strong>LiFePO4 battery technology</strong>, reshaping the world of energy with futuristic, safe, and efficient solutions.
              <br /><br />
              From <strong>EVs</strong> to <strong>solar storage</strong>, our batteries energize innovations globally. With <strong>Spinoff Technopark Ltd.</strong> by our side, we integrate solar, LED, and surveillance to fuel a smarter planet.
            </p>
          </div>

          <Tilt glareEnable={true} glareMaxOpacity={0.4} scale={1.05} transitionSpeed={2500}>
            <div className="image-content neon-border" data-aos="zoom-in-up">
              <img
                src="https://finikelithium.com/static/media/rajpura-factory-working.07a75bec3fee6bc81a54.jpg"
                alt="Finike Innovation"
              />
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default WhoWe;
