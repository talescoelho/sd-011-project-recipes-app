import React from 'react';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  return (
    <header>
      <img
        src={ profileIcon }
        alt="user"
        data-testid="profile-top-btn"
      />
      <h2 data-testid="page-title">
        Comida
      </h2>
      <img
        src={ searchIcon }
        alt="search"
        data-testid="search-top-btn"
      />
    </header>
  );
}

export default Header;
