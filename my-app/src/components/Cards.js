import React from 'react';
import MuiCard from './MuiCard'; // Обновленная строка

function Cards({ cards, onToggleFavorite }) {
  return (
    <div className="cards">
      {cards.map(card => (
        <MuiCard key={card.id} card={card} onToggleFavorite={onToggleFavorite} />
      ))}
    </div>
  );
}

export default Cards;