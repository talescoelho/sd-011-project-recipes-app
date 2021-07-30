import React from 'react';
import ProfileIcon from '../images/profileIcon.svg';
import SearchIcon from '../images/searchIcon.svg';

function Header() {
  return (
    <header>
      <a
        href="/perfil"
      >
        <img
          data-testid="profile-top-btn"
          src={ ProfileIcon }
          alt="user profile"
        />
      </a>
      <h3 data-testid="page-title">Comidas</h3>
      <a
        href=""
      >
        <img
          data-testid="search-top-btn"
          src={ SearchIcon }
          alt="search icon"
        />
      </a>
    </header>
  );
}

export default Header;
