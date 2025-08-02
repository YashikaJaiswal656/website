import React from 'react';
import './WhoE.css';

const WhoE = () => {
  const cards = [
    {
      icon: 'fas fa-bolt',
      title: 'High Power Output',
      subtag: 'Reliable performance',
      description:
        'Finike lithium batteries deliver high-capacity output ensuring optimal energy efficiency for residential and industrial use.',
      image: 'https://finikelithium.com/static/media/rajpura-factory-working.07a75bec3fee6bc81a54.jpg',
    },
    {
      icon: 'fas fa-leaf',
      title: 'Eco-Friendly',
      subtag: 'Sustainable energy',
      description:
        'Our solutions are crafted to support a green future, utilizing recyclable materials and clean energy designs.',
      image: 'https://finikelithium.com/static/media/rajpura-factory-working.07a75bec3fee6bc81a54.jpg',
    },
    {
      icon: 'fas fa-solar-panel',
      title: 'Solar Integration',
      subtag: 'Seamless adaptability',
      description:
        'Finike batteries are perfectly suited for solar energy setups, ensuring uninterrupted energy backup and efficiency.',
      image: 'https://finikelithium.com/static/media/rajpura-factory-working.07a75bec3fee6bc81a54.jpg',
    },
  ];

  return (
    <section className="who-s-art-section">
      <div className="who-s-art-container">
        {cards.map((card, index) => (
          <div key={index} className="who-s-art-card">
            <div className="who-s-art-image">
              <img src={card.image} alt={card.title} />
            </div>
            <div className="who-s-art-title">{card.title}</div>
            <div className="who-s-art-subtitle">{card.subtag}</div>
            <div className="who-s-art-text">{card.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoE;
