import React from 'react';
import style from './FeaturedDrinks.module.scss';

const FeaturedDrinks = () => {
  const drinks = [
    {
      name: 'Espresso',
      description: 'A classic strong coffee drink.',
      price: '$2.50',
    },
    {
      name: 'Latte',
      description: 'Smooth and creamy coffee with milk.',
      price: '$3.50',
    },
    {
      name: 'Cappuccino',
      description: 'Espresso with a perfect balance of milk and foam.',
      price: '$3.00',
    },
  ];

  return (
    <div className={style.featuredDrinks}>
      <h2>Featured Drinks</h2>
      <ul className={style.drinksList}>
        {drinks.map((drink, index) => (
          <li key={index} className={style.drinkItem}>
            <h3>{drink.name}</h3>
            <p>{drink.description}</p>
            <span>{drink.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedDrinks;
