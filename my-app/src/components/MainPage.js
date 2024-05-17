import React from 'react';
import Cards from './Cards';
import { useEffect, useState } from 'react';

function MainPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        setCards(data.results);
      });
  }, []);

  return (
    <div className="container">
      <Cards cards={cards} />
    </div>
  );
}

export default MainPage;
