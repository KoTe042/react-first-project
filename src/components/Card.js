import React, { useState } from 'react';

function Card({ card, onToggleFavorite }) {
  const [isFavorite, setIsFavorite] = useState(card.isFavorite);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    onToggleFavorite(card.id);
  };

  return (
    <div className={`card ${isFavorite ? 'favorite' : ''}`}>
      <div className="card_image">
        <img src={card.image} alt={card.name}></img>
      </div>
      <div className="card_content">
        <div className="card_texts">
          <h2>{card.name}</h2>
          <p>{card.species}</p>
        </div>
        <div className='add-to-favorite' onClick={toggleFavorite}>
          {isFavorite ? "Убрать из любимого" : "Любимое"}
        </div>
      </div>
    </div>
  );
}

export default Card;
