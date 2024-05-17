import React from 'react';
import { Link } from 'react-router-dom';

function Card({ card }) {
  return (
    <div className="card">
      <Link to={`/info/${card.id}`}>
        <img src={card.image} alt={card.name} />
        <h2>{card.name}</h2>
      </Link>
      <p>{card.status}</p>
      <p>{card.species}</p>
      <p>{card.gender}</p>
    </div>
  );
}

export default Card;
