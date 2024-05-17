import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import InfoPage from './components/InfoPage';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/info/:id" component={InfoPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
