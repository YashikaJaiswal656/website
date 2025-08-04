import React, { useState, useEffect } from 'react';
import "./Range.css"
const ProductRange = [
  {
    id: 1,
    image: "https://finikelithium.com/static/media/lithiumintegratedinverter.b0205ecd2da92687afec.JPG",
    title: "Lithium Integrated Inverters/UPS",
    category: "Power Solutions",
    icon: "⚡",
    color: "from-pink-400 to-purple-600"
  },
  {
    id: 2,
    image: "https://finikelithium.com/static/media/lithiumbatteriesforinverter.e1b26165863b6bce0b2e.JPG",
    title: "Lithium batteries for inverters",
    category: "Battery Systems",
    icon: "🔋",
    color: "from-blue-400 to-cyan-600"
  },
  {
    id: 3,
    image: "https://finikelithium.com/static/media/telecomimage.16edfd792d28533ef465.jpeg",
    title: "Lithium batteries for TELECOM/ESS/Solar",
    category: "Telecom Solutions",
    icon: "📡",
    color: "from-amber-400 to-orange-600"
  },
  {
    id: 4,
    image: "https://finikelithium.com/static/media/essimage.1d90d0433dee34d35b82.jpeg",
    title: "Energy Storage Systems (ESS/BSS/Solar)",
    category: "Storage Systems",
    icon: "🏗️",
    color: "from-emerald-400 to-green-600"
  },
  {
    id: 5,
    image: "https://finikelithium.com/static/media/twowheeler.139385b79b35e2ad50ac.JPG",
    title: "Lithium batteries for Two-Wheelers(EV)",
    category: "Electric Vehicles",
    icon: "🏍️",
    color: "from-violet-400 to-purple-600"
  },
  {
    id: 6,
    image: "https://finikelithium.com/static/media/threewheeler.60e05d5a677afbd4af6f.JPG",
    title: "Lithium batteries for Three-Wheelers(EV)",
    category: "Electric Vehicles",
    icon: "🛺",
    color: "from-sky-400 to-blue-600"
  },
  {
    id: 7,
    image: "https://finikelithium.com/static/media/ecycelimage.841ee8a6cc31693af1c7.JPG",
    title: "E-Cycle Lithium Battery",
    category: "E-Mobility",
    icon: "🚲",
    color: "from-rose-400 to-pink-600"
  },
  {
    id: 8,
    image: "https://finikelithium.com/static/media/solarimage.93d06d41f7f90fd30928.jpeg",
    title: "Solar Lithium Battery",
    category: "Solar Solutions",
    icon: "☀️",
    color: "from-yellow-400 to-amber-600"
  },
  {
    id: 9,
    image: "https://finikelithium.com/static/media/material-handling-traction.5a5b4f9615790f8e2222.jpg",
    title: "Lithium batteries for Material Handling & Traction",
    category: "Industrial",
    icon: "🏭",
    color: "from-teal-400 to-cyan-600"
  },
  {
    id: 10,
    image: "https://finikelithium.com/static/media/golf-cart.c24a4bca4962f4130f16.jpg",
    title: "Lithium batteries for Golf Carts",
    category: "Recreation",
    icon: "⛳",
    color: "from-lime-400 to-green-600"
  }
];

const Range = () => {
  const [activeProduct, setActiveProduct] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>

      <section className="range-container">
        {/* Cursor follower */}
        <div 
          className="cursor-glow" 
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            opacity: activeProduct ? 0.6 : 0.3
          }}
        />

        {/* Dynamic floating orbs */}
        <div className="dynamic-orb orb-dynamic-1"></div>
        <div className="dynamic-orb orb-dynamic-2"></div>
        <div className="dynamic-orb orb-dynamic-3"></div>

        {/* Floating particles */}
        <div className="floating-particle particle-1"></div>
        <div className="floating-particle particle-2"></div>
        <div className="floating-particle particle-3"></div>
        <div className="floating-particle particle-4"></div>

        {/* Header */}
        <div className="range-header">
          <div className="header-icon-group">
            <div className="floating-icon">🔋</div>
            <div className="floating-icon">⚡</div>
            <div className="floating-icon">🌱</div>
          </div>
          <h2 className="range-title">Product Range</h2>
          <p className="range-description">
            Comprehensive lithium battery solutions engineered for 
            <span style={{background: 'linear-gradient(45deg, #6f86d6, #48c6ef)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '700'}}> maximum performance</span> and 
            <span style={{background: 'linear-gradient(45deg, #ff758c, #ffb347)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '700'}}> sustainable energy</span>
          </p>
        </div>

        {/* Hexagonal product grid */}
        <div className="hexagon-grid">
          {ProductRange.map((product) => (
            <div 
              key={product.id}
              className="product-hexagon"
              onMouseEnter={() => setActiveProduct(product.id)}
              onMouseLeave={() => setActiveProduct(null)}
            >
              <div className="hex-image-container">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="hex-image" 
                />
                <div className="hex-overlay">
                  <div className="hex-icon">{product.icon}</div>
                </div>
              </div>
              
              <div className="hex-content">
                <div className="category-badge">{product.category}</div>
                <h3 className="hex-title">{product.title}</h3>
                
                <div className="energy-meter">
                  <div className="meter-bar">
                    <div className="meter-fill"></div>
                  </div>
                  <span className="meter-text">Performance</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Range;