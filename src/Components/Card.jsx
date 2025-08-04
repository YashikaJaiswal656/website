import React, { useState, useRef, useEffect } from 'react';

const Infrastructure = [
  {
    id: 1,
    image: "https://finikelithium.com/static/media/rajpura-factory-working.07a75bec3fee6bc81a54.jpg",
    title: "Manufacturing Plant",
    location: "Rajpura Facility",
    icon: "🏭",
    gradient: "pink-purple-indigo",
    capacity: "High Volume Production",
    status: "Active"
  },
  {
    id: 2,
    image: "https://finikelithium.com/static/media/finike-lithium-3.070b0b162c7375a0a658.jpg",
    title: "Battery Testing System",
    location: "Rajpura Facility",
    icon: "🔋",
    gradient: "blue-cyan-teal",
    capacity: "Advanced Testing",
    status: "Operational"
  },
  {
    id: 3,
    image: "https://finikelithium.com/static/media/finike-lithium-4.012dbfa66f6203334867.jpg",
    title: "Module Testing System",
    location: "Mohali Facility",
    icon: "⚡",
    gradient: "amber-orange-red",
    capacity: "Precision Testing",
    status: "Active"
  },
  {
    id: 4,
    image: "https://finikelithium.com/static/media/finike-lithium-5.66f28c41035b75150f82.jpg",
    title: "Pack Testing System",
    location: "Rajpura Facility",
    icon: "📦",
    gradient: "emerald-green-lime",
    capacity: "Full Scale Testing",
    status: "Operational"
  },
  {
    id: 5,
    image: "https://finikelithium.com/static/media/finike-lithium-6.400f90b7fb2177d33d10.jpeg",
    title: "Battery Testing System",
    location: "Rajpura Facility",
    icon: "🔬",
    gradient: "violet-purple-fuchsia",
    capacity: "Quality Assurance",
    status: "Active"
  },
  {
    id: 6,
    image: "https://finikelithium.com/static/media/finike-lithium-7.8ed3e041b40e3742a652.jpg",
    title: "Auto Calibration",
    location: "Mohali Facility",
    icon: "⚙️",
    gradient: "sky-blue-indigo",
    capacity: "Automated Systems",
    status: "Operational"
  },
  {
    id: 7,
    image: "https://finikelithium.com/static/media/finike-lithium-8.bb262a038e4114ca924d.jpg",
    title: "Internal Resistance Testing",
    location: "Rajpura Facility",
    icon: "🔧",
    gradient: "rose-pink-red",
    capacity: "Resistance Analysis",
    status: "Active"
  },
  {
    id: 8,
    image: "https://finikelithium.com/static/media/finike-lithium-10.217067477c7cfc31b815.jpg",
    title: "Lithium ESS Range",
    location: "Rajpura Facility",
    icon: "🌟",
    gradient: "cyan-teal-emerald",
    capacity: "Energy Storage",
    status: "Operational"
  }
];

const Card = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <>
      

      <section className="infra-container" ref={containerRef}>
        {/* Interactive light trail */}
        <div 
          className="light-trail"
          style={{
            left: mousePos.x - 150,
            top: mousePos.y - 150,
            opacity: hoveredCard ? 0.8 : 0.3
          }}
        />

        {/* Morphing background orbs */}
        <div className="morph-orb morph-orb-1"></div>
        <div className="morph-orb morph-orb-2"></div>
        <div className="morph-orb morph-orb-3"></div>

        {/* Floating particles */}
        <div className="floating-elements">
          <div className="floating-particle particle-1"></div>
          <div className="floating-particle particle-2"></div>
          <div className="floating-particle particle-3"></div>
          <div className="floating-particle particle-4"></div>
        </div>

        {/* Enhanced header */}
        <div className="infra-header">
          <div className="header-pulse-ring">
            <div className="pulse-ring-outer"></div>
            <div className="pulse-ring-middle"></div>
            <div className="header-icon-main">🏗️</div>
          </div>
          
          <h2 className="infra-title">Advanced Facilities</h2>
          <p className="infra-subtitle">
            Cutting-edge infrastructure and precision engineering driving 
            <span style={{background: 'linear-gradient(45deg, #6f86d6, #48c6ef)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '700'}}> sustainable innovation</span> and 
            <span style={{background: 'linear-gradient(45deg, #ff758c, #ffb347)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '700'}}> energy excellence</span>
          </p>
        </div>

        {/* Diagonal grid cards */}
        <div className="diagonal-grid">
          {Infrastructure.map((item) => (
            <div 
              key={item.id} 
              className="infra-card"
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-glow"></div>
              
              <div className="card-image-container">
                <img src={item.image} alt={item.title} className="infra-image" />
                <div className="image-gradient-overlay"></div>
                <div className="floating-icon">{item.icon}</div>
                <div className="status-indicator">{item.status}</div>
              </div>
              
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                <div className="location-info">
                  <div className="location-dot"></div>
                  <span className="location-text">{item.location}</span>
                </div>
                <div className="capacity-info">{item.capacity}</div>
                <div className="card-shimmer"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Card;