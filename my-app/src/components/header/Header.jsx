import React from 'react';
import style from './Header.module.scss';

const Header = () => {
  return (
    <header className = {style.header}>
      <nav className = {style.nav}>
        <ul className = {style.navList}>
          <li className = {style.navItem}><a href="#home">Home</a></li>
          <li className = {style.navItem}><a href="#about">About</a></li>
          <li className = {style.navItem}><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
