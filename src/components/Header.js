import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

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
        <section className="section-container">
          <SearchBar />
        </section>
      );
    }
  }

  function handleButton() {
    if (setIcon) {
      return (
        <div>
          <button
            className="button-header"
            type="button"
            onClick={ isVerified }
          >
            <img data-testid="search-top-btn" src={ searchIcon } alt="buscar" />
          </button>
        </div>
      );
    }
  }

  return (
    <header className="container-header">
      <div className="header-wrapper">
        <button
          className="button-header"
          type="button"
          onClick={ () => history.push('/perfil') }
        >
          <img
            data-testid="profile-top-btn"
            alt="User"
            src={ profileIcon }
          />
        </button>
        <h2 data-testid="page-title">{ pageName }</h2>
        { handleButton() }
      </div>
      { hiddenInput() }
    </header>
  );
}

Header.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Header;
