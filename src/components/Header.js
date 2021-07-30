import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import Searchbar from './Searchbar';

function Header() {
  const [renderSearch, setRenderSearch] = useState(false);

  function disableSearchBar() {
    setRenderSearch(!renderSearch);
  }
  return (
    <header>
      <Link
        to="/perfil"
        data-testid="profile-top-btn"
      >
        <img alt="icone de perfil" src={ profileIcon } />
      </Link>
      <h3 data-testid="page-title">
        titulo
      </h3>
      <button
        onClick={ () => disableSearchBar() }
        type="button"
        data-testid="search-top-btn"
      >
        <img alt="icone de pesquisa" src={ searchIcon } />
      </button>
      {renderSearch ? <Searchbar /> : null}
    </header>
  );
}

export default Header;
