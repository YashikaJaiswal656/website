import React, { useState, useEffect } from 'react';

const ChooseFinike = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const features = [
    {
      icon: '🔋',
      title: 'Battery Life',
      description: 'High energy density for extended range and reliable performance in EVs and energy storage systems.',
      badge: 'Extended Performance',
      color: '#ff758c',
      gradient: 'linear-gradient(135deg, #ff758c, #ffb347)'
    },
    {
      icon: '⚡',
      title: 'Charging Time',
      description: 'Fast-charging technology minimizes downtime and enhances efficiency.',
      badge: 'Ultra Fast',
      color: '#6f86d6',
      gradient: 'linear-gradient(135deg, #6f86d6, #48c6ef)'
    },
    {
      icon: '🔧',
      title: 'Maintenance',
      description: 'Durable, recyclable batteries with minimal upkeep and eco-friendly benefits.',
      badge: 'Eco-Friendly',
      color: '#a8edea',
      gradient: 'linear-gradient(135deg, #a8edea, #fed6e3)'
    },
    {
      icon: '💰',
      title: 'Charging Cost',
      description: 'Efficient batteries reduce charging costs for both personal and commercial use.',
      badge: 'Cost Effective',
      color: '#ffb347',
      gradient: 'linear-gradient(135deg, #ffb347, #ff758c)'
    },
    {
      icon: '📈',
      title: 'Cost Efficiency',
      description: 'Long-lasting batteries that lower replacement and maintenance costs.',
      badge: 'Maximum ROI',
      color: '#764ba2',
      gradient: 'linear-gradient(135deg, #667eea, #764ba2)'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveFeature((prev) => (prev + 1) % features.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style jsx>{`
        .innovation-showcase {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%);
          height: fit-content;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Segoe UI', sans-serif;
          padding: 60px 20px;
        }

        .atmospheric-bubbles {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 1;
        }

        .bubble {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.2;
          animation: bubble-float 25s ease-in-out infinite;
        }

        .bubble-1 {
          top: 20%;
          left: 10%;
          width: 400px;
          height: 400px;
          background: linear-gradient(45deg, #ff758c, #ffb347);
          animation-delay: 0s;
        }

        .bubble-2 {
          bottom: 30%;
          right: 15%;
          width: 300px;
          height: 300px;
          background: linear-gradient(45deg, #6f86d6, #48c6ef);
          animation-delay: 8s;
        }

        .bubble-3 {
          top: 60%;
          left: 70%;
          width: 250px;
          height: 250px;
          background: linear-gradient(45deg, #a8edea, #fed6e3);
          animation-delay: 16s;
        }

        .mastery-container {
          max-width: 1600px;
          width: 100%;
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 80px;
          align-items: center;
        }

        .brand-identity {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 40px;
          position: sticky;
          
        }

        .power-core {
          width: 150px;
          height: 150px;
          position: relative;
          margin-bottom: 20px;
        }

        .core-rings {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
        }

        .power-ring {
          position: absolute;
          border-radius: 50%;
          border: 4px solid;
          opacity: 0.3;
          animation: ring-rotation 8s linear infinite;
        }

        .ring-outer {
          width: 150px;
          height: 150px;
          border-color: #ff758c;
          animation-delay: 0s;
        }

        .ring-middle {
          width: 120px;
          height: 120px;
          top: 15px;
          left: 15px;
          border-color: #6f86d6;
          animation-delay: -2s;
        }

        .ring-inner {
          width: 90px;
          height: 90px;
          top: 30px;
          left: 30px;
          border-color: #ffb347;
          animation-delay: -4s;
        }

        .core-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, #ff758c, #ffb347);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          box-shadow: 0 20px 40px rgba(255, 117, 140, 0.5);
          z-index: 5;
        }

        .brand-statement {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(30px);
          border-radius: 30px;
          padding: 50px 40px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
        }

        .statement-title {
          font-size: 3.8rem;
          font-weight: 900;
          background: linear-gradient(45deg, #ff758c, #ffb347, #6f86d6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0 0 25px 0;
          letter-spacing: -3px;
          line-height: 1.1;
        }

        .statement-subtitle {
          font-size: 1.3rem;
          color: #64748b;
          font-weight: 500;
          line-height: 1.6;
          margin-bottom: 35px;
        }

        .excellence-metrics {
          display: flex;
          gap: 30px;
          flex-wrap: wrap;
        }

        .metric-badge {
          background: linear-gradient(45deg, #6f86d6, #48c6ef);
          color: white;
          padding: 15px 25px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.95rem;
          box-shadow: 0 10px 25px rgba(111, 134, 214, 0.3);
          white-space: nowrap;
        }

        .interactive-showcase {
          position: relative;
          height: 600px;
          display: flex;
          flex-direction: column;
        }

        .feature-navigation {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 50px;
          flex-wrap: wrap;
        }

        .nav-orb {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
        }

        .nav-orb::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s;
        }

        .nav-orb:hover::before {
          left: 100%;
        }

        .nav-orb.active {
          background: ${features[activeFeature]?.gradient};
          transform: scale(1.2);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .nav-orb:not(.active):hover {
          transform: scale(1.1);
          background: rgba(255, 255, 255, 0.15);
        }

        .feature-theater {
          flex: 1;
          position: relative;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(25px);
          border-radius: 40px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .theater-stage {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px;
          opacity: ${isAnimating ? 0 : 1};
          transform: ${isAnimating ? 'translateY(30px)' : 'translateY(0)'};
          transition: all 0.3s ease;
        }

        .feature-spotlight {
          text-align: center;
          max-width: 500px;
        }

        .spotlight-icon {
          width: 120px;
          height: 120px;
          background: ${features[activeFeature]?.gradient};
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
          margin: 0 auto 40px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
          animation: spotlight-glow 2s ease-in-out infinite;
        }

        .spotlight-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1e293b;
          margin: 0 0 25px 0;
          line-height: 1.2;
        }

        .spotlight-description {
          font-size: 1.2rem;
          line-height: 1.8;
          color: #64748b;
          margin-bottom: 35px;
          font-weight: 500;
        }

        .spotlight-badge {
          display: inline-block;
          background: ${features[activeFeature]?.gradient};
          color: white;
          padding: 15px 35px;
          border-radius: 30px;
          font-weight: 700;
          font-size: 1.1rem;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
          transform: translateY(0);
          transition: transform 0.3s ease;
        }

        .spotlight-badge:hover {
          transform: translateY(-5px);
        }

        .background-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: ${features[activeFeature]?.gradient};
          opacity: 0.05;
          border-radius: 40px;
        }

        .achievement-showcase {
          position: absolute;
          bottom: -40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 40px;
          z-index: 20;
        }

        .achievement-crystal {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 25px 20px;
          text-align: center;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
          min-width: 120px;
        }

        .crystal-number {
          font-size: 2rem;
          font-weight: 900;
          background: linear-gradient(45deg, #ff758c, #ffb347);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 5px;
          line-height: 1;
        }

        .crystal-label {
          font-size: 0.9rem;
          color: #64748b;
          font-weight: 600;
        }

        @keyframes bubble-float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(-30px, -50px) rotate(120deg);
          }
          66% {
            transform: translate(50px, -30px) rotate(240deg);
          }
        }

        @keyframes ring-rotation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes spotlight-glow {
          0%, 100% {
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
          }
          50% {
            box-shadow: 0 40px 80px rgba(0, 0, 0, 0.3), 0 0 50px ${features[activeFeature]?.color}40;
          }
        }

        @media (max-width: 1200px) {
          .mastery-container {
            grid-template-columns: 1fr;
            gap: 60px;
            text-align: center;
          }

          .brand-identity {
            position: static;
            transform: none;
            align-items: center;
          }

          .statement-title {
            font-size: 3.2rem;
          }
        }

        @media (max-width: 768px) {
          .innovation-showcase {
            padding: 40px 15px;
          }

          .brand-statement {
            padding: 40px 30px;
          }

          .statement-title {
            font-size: 2.8rem;
            letter-spacing: -2px;
          }

          .statement-subtitle {
            font-size: 1.1rem;
          }

          .interactive-showcase {
            height: 500px;
          }

          .theater-stage {
            padding: 40px 30px;
          }

          .spotlight-title {
            font-size: 2rem;
          }

          .spotlight-description {
            font-size: 1.1rem;
          }

          .nav-orb {
            width: 60px;
            height: 60px;
            font-size: 20px;
          }

          .achievement-showcase {
            flex-direction: column;
            gap: 20px;
          }

          .excellence-metrics {
            justify-content: center;
          }

          .bubble {
            width: 200px !important;
            height: 200px !important;
          }
        }

        @media (max-width: 480px) {
          .statement-title {
            font-size: 2.2rem;
          }

          .power-core {
            width: 120px;
            height: 120px;
          }

          .ring-outer {
            width: 120px;
            height: 120px;
          }

          .ring-middle {
            width: 90px;
            height: 90px;
            top: 15px;
            left: 15px;
          }

          .ring-inner {
            width: 60px;
            height: 60px;
            top: 30px;
            left: 30px;
          }

          .core-center {
            width: 60px;
            height: 60px;
            font-size: 24px;
          }

          .spotlight-icon {
            width: 100px;
            height: 100px;
            font-size: 36px;
          }

          .feature-navigation {
            gap: 10px;
          }

          .nav-orb {
            width: 50px;
            height: 50px;
            font-size: 16px;
          }
        }
      `}</style>

      <div className="innovation-showcase">
        {/* Atmospheric bubbles */}
        <div className="atmospheric-bubbles">
          <div className="bubble bubble-1"></div>
          <div className="bubble bubble-2"></div>
          <div className="bubble bubble-3"></div>
        </div>

        <div className="mastery-container">
          {/* Left side - Brand Identity */}
          <div className="brand-identity">
            {/* Rotating power core */}
            

            {/* Brand statement */}
            <div className="brand-statement">
              <h1 className="main-title">Why Choose Finike?</h1>
              <p className="statement-subtitle">
                Revolutionary lithium-ion technology that powers the future of clean energy storage
              </p>
              <div className="excellence-metrics">
                <div className="metric-badge">Industry Leading</div>
                <div className="metric-badge">Premium Quality</div>
                <div className="metric-badge">Eco-Friendly</div>
              </div>
            </div>
          </div>

          {/* Right side - Interactive showcase */}
          <div className="interactive-showcase">
            {/* Feature navigation orbs */}
            <div className="feature-navigation">
              {features.map((feature, index) => (
                <button
                  key={index}
                  className={`nav-orb ${activeFeature === index ? 'active' : ''}`}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setActiveFeature(index);
                      setIsAnimating(false);
                    }, 300);
                  }}
                >
                  {feature.icon}
                </button>
              ))}
            </div>

            {/* Feature theater */}
            <div className="feature-theater">
              <div className="background-pattern"></div>
              <div className="theater-stage">
                <div className="feature-spotlight">
                  <div className="spotlight-icon">
                    {features[activeFeature].icon}
                  </div>
                  <h2 className="spotlight-title">
                    {features[activeFeature].title}
                  </h2>
                  <p className="spotlight-description">
                    {features[activeFeature].description}
                  </p>
                  <div className="spotlight-badge">
                    {features[activeFeature].badge}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseFinike;