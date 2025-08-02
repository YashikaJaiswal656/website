import React from 'react';
import './Who.css';

const Who = () => {
  const cards = [
    {
      icon: 'fas fa-bolt',
      title: 'High Power Output',
      subtag: 'Reliable performance',
      description: 'Finike lithium batteries deliver high-capacity output ensuring optimal energy efficiency for residential and industrial use.',
      image: 'https://finikelithium.com/static/media/rajpura-factory-working.07a75bec3fee6bc81a54.jpg',
    },
    {
      icon: 'fas fa-leaf',
      title: 'Eco-Friendly',
      subtag: 'Sustainable energy',
      description: 'Our solutions are crafted to support a green future, utilizing recyclable materials and clean energy designs.',
      image: 'https://finikelithium.com/static/media/rajpura-factory-working.07a75bec3fee6bc81a54.jpg',
    },
    {
      icon: 'fas fa-solar-panel',
      title: 'Solar Integration',
      subtag: 'Seamless adaptability',
      description: 'Finike batteries are perfectly suited for solar energy setups, ensuring uninterrupted energy backup and efficiency.',
      image: 'https://finikelithium.com/static/media/rajpura-factory-working.07a75bec3fee6bc81a54.jpg',
    }
  ];

  return (
    <section className="who-s-section">
      <div className="who-s-container">
        {cards.map((card, index) => (
          <div key={index} className="who-s-card" style={{ flexDirection: 'column', textAlign: 'center' }}>
            <div className="who-s-right" style={{ padding: 0 }}>
              <img src={card.image} alt={card.title} className="who-s-image" style={{ maxHeight: '180px', borderRadius: '20px 20px 0 0' }} />
            </div>
            <div className="who-s-left" style={{ borderRadius: '0 0 20px 20px', alignItems: 'center', background: 'none', color: '#333' }}>
              <div className="who-s-icon" style={{ color: '#555' }}>
                <i className={card.icon}></i>
              </div>
              <div className="who-s-title">{card.title}</div>
              <div className="who-s-subtitle">{card.subtag}</div>
              <div className="who-s-text">{card.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Who;
