import React, { useContext } from 'react';
import ContextFood from '../context/ContextFood';
import ProfileIcon from '../images/profileIcon.svg';
import SearchIcon from '../images/searchIcon.svg';

function Header() {
  const {
    searchBarShow,
    setSearchBarShow,
  } = useContext(ContextFood);
  console.log(searchBarShow);

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
      <button
        type="button"
        data-testid="search-top-btn"
        onClick={ () => setSearchBarShow(!searchBarShow) }
        src={ SearchIcon }
        alt="search icon"
      />
    </header>
  );
}

export default Header;
