import React from 'react';
import Header from './components/header/Header';
import './App.css';
import FeaturedDrinks from './components/featured_drinks/FeaturedDrinks';
import Footer from './components/footer/Footer';
import CourseList from "./components/courseList/CourseList";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div class ="startInfo">
        <h1>The Coffee Corner</h1>
        <h2 class="text-after">Step into The Coffee Corner and discover a cozy haven for coffee lovers</h2>
      </div>
      <CourseList></CourseList>
      <Footer />
    </div>
  );
};
export default App;