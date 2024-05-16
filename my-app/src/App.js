import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Cards';

function App() {
  const [cards, setCards] = useState([]);
  const [displayCount, setDisplayCount] = useState(10);

  useEffect(() => {
    const savedCards = localStorage.getItem('cards');
    if (savedCards) {
      setCards(JSON.parse(savedCards));
    } else {
      fetch('live_VEiVGiS1bFxVRq3nU37KgDQiOOwFYD8MTN9cRmPOx7EK9yNCrPcG3dvHFJEsp4pV')
        .then(response => response.json())
        .then(data => {
          const formattedCards = data.results.map(card => ({
            id: card.id,
            name: card.name,
            image: card.image,
            isFavorite: false
          }));
          setCards(formattedCards);
          localStorage.setItem('cards', JSON.stringify(formattedCards));
        })
        .catch(error => console.log('Error fetching data: ', error));
    }
  }, []);

  const onToggleFavorite = (id) => {
    const updatedCards = cards.map(card => {
      if (card.id === id) {
        return { ...card, isFavorite: !card.isFavorite };
      }
      return card;
    });
    setCards(updatedCards);
    localStorage.setItem('cards', JSON.stringify(updatedCards)); // Обновляем localStorage после изменения isFavorite
  };

  const showMoreCards = () => {
    setDisplayCount(prevCount => prevCount + 10);
  };

  return (
    <div className="wrapper">
      <Header />
      <main>
        <section className="container">
          <div className="wrapper">
            <Cards cards={cards.slice(0, displayCount)} onToggleFavorite={onToggleFavorite} />
            {displayCount < cards.length && (
              <div className='moreButton'>
                <button onClick={showMoreCards}>Показать еще</button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
