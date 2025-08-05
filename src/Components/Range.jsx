import React from 'react';
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
  return (
    <section className="range-container">
      

      <div className="products-header">
        <div className="header-card">
          <div className="header-icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="gradient-title">Product Range</h2>
        </div>
        <p className="header-subtitle">
          Comprehensive lithium battery solutions engineered for every application
        </p>
      </div>

      {/* Grid layout */}
      <div className="products-grid">
        {ProductRange.map((product, index) => (
          <div key={product.id} className={`product-card card-${index + 1}`}>
            {/* Image container */}
            <div className="card-image-container">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />

              {/* Icon overlay */}
              <div className="icon-badge">
                {product.icon}
              </div>

              {/* Category badge */}
              <div className="category-badge">
                {product.category}
              </div>
            </div>

            {/* Content */}
            <div className="card-content">
              <h3 className="product-title">{product.title}</h3>

              {/* Performance meter */}
              <div className="performance-meter">
                <div className="meter-track">
                  <div className="meter-fill"></div>
                </div>
                <span className="meter-label">Performance</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Static decorative dots */}
      <div className="decorative-dot dot-1"></div>
      <div className="decorative-dot dot-2"></div>
      <div className="decorative-dot dot-3"></div>
    </section>
  );
};

export default Range;
