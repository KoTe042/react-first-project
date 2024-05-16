import React from 'react';
import Card from './Card';

function Cards({ cards, onToggleFavorite }) {
  return (
    <div className="cards">
      {cards.map(card => (
        <Card key={card.id} card={card} onToggleFavorite={onToggleFavorite} />
      ))}
    </div>
  );
}

export default Cards;
