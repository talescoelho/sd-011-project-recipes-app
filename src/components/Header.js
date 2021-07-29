import React from 'react';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  return (
    <div>
      <img
        data-testid="profile-top-btn"
        src={ profileIcon }
        alt="imagem de user"
      />
      <h1 data-testid="page-title">Titulo </h1>
      <img
        data-testid="search-top-btn"
        src={ searchIcon }
        alt="imagem lupa"
      />

    </div>
  );
}
export default Header;
