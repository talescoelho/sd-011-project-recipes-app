import React from 'react';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ value }) {
  return (
    <header>
      <button
        type="button"
        data-testid="profile-top-btn"
      >
        <img
          data-testid
          src={ profileIcon }
          alt="User"
        />
      </button>
      <h1 data-testid="page-title">{ value }</h1>
      <button
        type="button"
        data-testid="search-top-btn"
      >
        <img src={ searchIcon } alt="buscar" />
      </button>
    </header>
  );
}

Header.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Header;
