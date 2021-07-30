import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ value }) {
  const history = useHistory();
  const { pageName, setIcon } = value;
  const [showSearchBar, setShowSearchBar] = useState(false);

  function isVerified() {
    if (showSearchBar === false) {
      return setShowSearchBar(true);
    }
    return setShowSearchBar(false);
  }

  function hiddenInput() {
    if (showSearchBar) {
      return (
        <div>
          <input type="text" data-testid="search-input" />
          <label htmlFor="search-ingredients">
            Ingredientes
            <input
              id="search-ingredients"
              type="radio"
              data-testid="ingredient-search-radio"
              name="search--name"
            />
          </label>
          <label htmlFor="search-name">
            Nome
            <input
              id="search-name"
              type="radio"
              data-testid="name-search-radio"
              name="search--name"
            />
          </label>
          <label htmlFor="search-firstLetter">
            Primeira Letra
            <input
              id="search-firstLetter"
              type="radio"
              data-testid="first-letter-search-radio"
              name="search--name"
            />
          </label>
          <button
            type="button"
            data-testid="exec-search-btn"
          >
            Buscar
          </button>
        </div>

      );
    }
  }

  function handleButton() {
    if (setIcon) {
      return (
        <>
          <button
            type="button"
            onClick={ isVerified }
          >
            <img data-testid="search-top-btn" src={ searchIcon } alt="buscar" />
          </button>
          { hiddenInput() }
        </>
      );
    }
  }

  return (
    <header>
      <button
        type="button"
        onClick={ () => history.push('/perfil') }
      >
        <img
          data-testid="profile-top-btn"
          alt="User"
          src={ profileIcon }
        />
      </button>
      <h1 data-testid="page-title">{ pageName }</h1>
      { handleButton() }
    </header>
  );
}

Header.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Header;
