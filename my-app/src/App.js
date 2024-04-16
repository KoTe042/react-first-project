import React from 'react';
import Header from './components/header/Header';
import './App.css';
import FeaturedDrinks from './components/featured_drinks/FeaturedDrinks';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <h1>Welcome to Coffee Lovers!</h1>
        <p>Discover the world of delicious coffee drinks.</p>
        <FeaturedDrinks />
      </main>
      <Footer />
    </div>
  );
};

export default App;