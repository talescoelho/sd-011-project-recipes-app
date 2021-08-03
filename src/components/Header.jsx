import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import Categories from './Categories';
import '../styles/Header.css';

function Header() {
  const [isSearch, setIsSearch] = useState(false);
  const location = useLocation();

  function openCloseSearchbar() {
    setIsSearch(!isSearch);
  }

  return (
    <header className="header-section-top">
      <div className="header-section">
        <img
          src={ profileIcon }
          alt="user"
          data-testid="profile-top-btn"
        />
        { location.pathname === '/comidas'
          ? <h2 data-testid="page-title">Comida</h2>
          : <h2 data-testid="page-title">Bebida</h2> }
        <button type="button" onClick={ () => openCloseSearchbar() }>
          <img
            src={ searchIcon }
            alt="search"
            data-testid="search-top-btn"
          />
        </button>
      </div>
      { isSearch && <SearchBar /> }
      <Categories />
    </header>
  );
}

export default Header;
