import React from 'react';
import './WhoS.css';

const WhoS = () => {
  const cards = [
    {
      icon: 'fas fa-bolt',
      title: 'High Power Output',
      subtitle: 'Reliable performance',
      text: 'Finike lithium batteries deliver high-capacity output ensuring optimal energy efficiency for residential and industrial use.',
      image: 'https://finikelithium.com/static/media/rajpura-factory-working.07a75bec3fee6bc81a54.jpg',
    },
    {
      icon: 'fas fa-leaf',
      title: 'Eco-Friendly',
      subtitle: 'Sustainable energy',
      text: 'Our solutions are crafted to support a green future, utilizing recyclable materials and clean energy designs.',
      image: 'https://finikelithium.com/static/media/rajpura-factory-working.07a75bec3fee6bc81a54.jpg',
    },
    {
      icon: 'fas fa-solar-panel',
      title: 'Solar Integration',
      subtitle: 'Seamless adaptability',
      text: 'Finike batteries are perfectly suited for solar energy setups, ensuring uninterrupted energy backup and efficiency.',
      image: 'https://finikelithium.com/static/media/rajpura-factory-working.07a75bec3fee6bc81a54.jpg',
    }
  ];

  return (
    <section className="finike-alt-section">
      <div className="finike-alt-container">
        {cards.map((card, index) => (
          <div className="finike-alt-card" key={index}>
            <div className="finike-alt-left">
              <div className="finike-alt-icon">
                <i className={card.icon}></i>
              </div>
              <div className="finike-alt-title">{card.title}</div>
              <div className="finike-alt-subtitle">{card.subtitle}</div>
              <div className="finike-alt-text">{card.text}</div>
            </div>
            <div className="finike-alt-right">
              <img
                src={card.image}
                alt={card.title}
                className="finike-alt-image"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoS;
