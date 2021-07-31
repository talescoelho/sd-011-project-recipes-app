import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title }) {
  const [hiddenSearchBar, setHiddentSearchBar] = useState(true);
  const renderWithoutSearch = [
    'Explorar',
    'Explorar Comidas',
    'Explorar Bebidas',
    'Explorar Ingredientes',
    'Perfil',
    'Receitas Feitas',
    'Receitas Favoritas',
  ];

  return (
    <div>
      <Link to="/perfil">
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="profile-icon"
        />
      </Link>
      <h1 data-testid="page-title">{title}</h1>
      {(!renderWithoutSearch.includes(title))
        && (
          <div>
            <button
              type="button"
              onClick={ () => setHiddentSearchBar(!hiddenSearchBar) }
            >
              <img src={ searchIcon } data-testid="search-top-btn" alt="search-icon" />
            </button>
            {(!hiddenSearchBar
              && (
                <label hidden={ hiddenSearchBar } htmlFor="search-bar">
                  <input name="search-bar" data-testid="search-input" />
                </label>)
            )}
          </div>)}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
