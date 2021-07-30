import React from 'react';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

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
      <SearchBar />
    </div>
  );
}
export default Header;
