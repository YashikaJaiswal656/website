import React from 'react';
import './WhoTwo.css';

const WhoTwo = () => {
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
    <section className="who-we-are-finike-alt">
      <div className="finike-gradient-wrapper-alt">
        {cards.map((card, index) => (
          <div key={index} className="finike-gradient-card-alt">
            <div className="finike-gradient-heading-alt">
              <span className="finike-gradient-icon-alt">
                <i className={card.icon}></i>
              </span>
              {card.title}
            </div>
            <div className="finike-gradient-subtag-alt">{card.subtag}</div>
            <div className="finike-gradient-description-alt">{card.description}</div>
            <img src={card.image} alt={card.title} className="finike-gradient-image-alt" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoTwo;
