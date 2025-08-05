import React from 'react';
import './Card.css';

const Infrastructure = [
  {
    id: 1,
    image: "https://finikelithium.com/static/media/rajpura-factory-working.07a75bec3fee6bc81a54.jpg",
    title: "Manufacturing Plant",
    location: "Rajpura Facility",
    icon: "🏭",
    capacity: "High Volume Production",
    status: "Active"
  },
  {
    id: 2,
    image: "https://finikelithium.com/static/media/finike-lithium-3.070b0b162c7375a0a658.jpg",
    title: "Battery Testing System",
    location: "Rajpura Facility",
    icon: "🔋",
    capacity: "Advanced Testing",
    status: "Operational"
  },
  {
    id: 3,
    image: "https://finikelithium.com/static/media/finike-lithium-4.012dbfa66f6203334867.jpg",
    title: "Module Testing System",
    location: "Mohali Facility",
    icon: "⚡",
    capacity: "Precision Testing",
    status: "Active"
  },
  {
    id: 4,
    image: "https://finikelithium.com/static/media/finike-lithium-5.66f28c41035b75150f82.jpg",
    title: "Pack Testing System",
    location: "Rajpura Facility",
    icon: "📦",
    capacity: "Full Scale Testing",
    status: "Operational"
  },
  {
    id: 5,
    image: "https://finikelithium.com/static/media/finike-lithium-6.400f90b7fb2177d33d10.jpeg",
    title: "Battery Testing System",
    location: "Rajpura Facility",
    icon: "🔬",
    capacity: "Quality Assurance",
    status: "Active"
  },
  {
    id: 6,
    image: "https://finikelithium.com/static/media/finike-lithium-7.8ed3e041b40e3742a652.jpg",
    title: "Auto Calibration",
    location: "Mohali Facility",
    icon: "⚙️",
    capacity: "Automated Systems",
    status: "Operational"
  },
  {
    id: 7,
    image: "https://finikelithium.com/static/media/finike-lithium-8.bb262a038e4114ca924d.jpg",
    title: "Internal Resistance Testing",
    location: "Rajpura Facility",
    icon: "🔧",
    capacity: "Resistance Analysis",
    status: "Active"
  },
  {
    id: 8,
    image: "https://finikelithium.com/static/media/finike-lithium-10.217067477c7cfc31b815.jpg",
    title: "Lithium ESS Range",
    location: "Rajpura Facility",
    icon: "🌟",
    capacity: "Energy Storage",
    status: "Operational"
  }
];

const Card = () => {
  return (
    <section className="infrastructure-section">
      {/* Decorative Background Elements */}
      <div className="decorative-bg">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
      </div>

      {/* Gradient Border Elements */}
      <div className="gradient-border-top"></div>
      <div className="gradient-border-bottom"></div>

      <div className="infrastructure-container">
        {/* Header Section */}
        <div className="infrastructure-header">
          <div className="header-card">
            <div className="header-icon">
              <i className="fas fa-building"></i>
            </div>
            <h2 className="gradient-title">Advanced Infrastructure</h2>
          </div>
          <p className="header-subtitle">
            State-of-the-art facilities and precision engineering driving innovation in lithium battery technology
          </p>
        </div>

        {/* Infrastructure Grid */}
        <div className="infrastructure-grid">
          {Infrastructure.map((item) => (
            <div key={item.id} className="infrastructure-card">
              <div className="card-image-container">
                <div className="image-glow"></div>
                <div className="image-wrapper">
                  <img src={item.image} alt={item.title} className="infrastructure-image" />
                  <div className="status-badge">{item.status}</div>
                  <div className="facility-icon">{item.icon}</div>
                </div>
              </div>
              
              <div className="card-content">
                <h3 className="facility-title">{item.title}</h3>
                
                <div className="location-info">
                  <div className="location-dot"></div>
                  <span className="location-text">{item.location}</span>
                </div>
                
                <div className="capacity-info">
                  <div className="capacity-icon">
                    <i className="fas fa-cog"></i>
                  </div>
                  <span className="capacity-text">{item.capacity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;