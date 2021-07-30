import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  return (
    <header>
      <Link to="/perfil">
        <img
          src={ profileIcon }
          alt="user"
          data-testid="profile-top-btn"
        />
      </Link>
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
