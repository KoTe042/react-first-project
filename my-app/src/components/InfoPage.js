import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function InfoPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(data => {
        setCharacter(data);
      });
  }, [id]);

  return (
    <div className="info-page">
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>{character.status}</p>
      <p>{character.species}</p>
      <p>{character.gender}</p>
    </div>
  );
}

export default InfoPage;
