import React, { useState } from 'react';

function Card({ card, onToggleFavorite }) {
  const [infoTexts, setInfoTexts] = useState([]);

  const toggleFavorite = () => {
    onToggleFavorite(card.id);
  };

  const handleCardClick = () => {
    if (infoTexts.length === 0) {
      const texts = [card.status, card.species, card.gender];
      setInfoTexts(texts);
    } else {
      setInfoTexts([]);
    }
  };

  return (
    <div className={`card ${card.isFavorite ? 'favorite' : ''}`}>
      <div className="card_image" onClick={handleCardClick}>
        <img src={card.image} alt={card.name}></img>
      </div>
      <div className="card_content">
        <div className="card_texts">
          <h2>{card.name}</h2>
          {infoTexts.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        <div className='add-to-favorite' onClick={toggleFavorite}>
          {card.isFavorite ? "Убрать" : "Добавить"}
        </div>
      </div>
    </div>
  );
}

export default Card;
