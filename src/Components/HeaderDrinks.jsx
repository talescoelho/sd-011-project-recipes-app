import React from 'react';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import '../css/HeaderDrinks.css';

function HeaderDrinks() {
  return (
    <header
      className="header-drinks"
    >
      <img
        data-testid="profile-top-btn"
        src={ profileIcon }
        alt="user profile"
        width="30px"
        height="30px"
      />
      <h1 data-testid="page-title">Bebidas</h1>
      <img
        data-testid="search-top-btn"
        src={ searchIcon }
        alt="explore search"
        width="30px"
        height="30px"
      />
    </header>
  );
}

export default HeaderDrinks;
