import React from 'react';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import './css/Header.css';

function Header({ props: { title, enableSearchButton, enableProfileButton } }) {
  return (
    <header className="header">
      {enableProfileButton
      && (
        <button
          type="button"
          data-testid="profile-top-btn"
          id="profileIcon"
          src={ profileIcon }
        >
          <img src={ profileIcon } alt="profile" />
        </button>)}

      <h1 data-testid="page-title">{title}</h1>

      {enableSearchButton
      && (
        <button
          type="button"
          data-testid="search-top-btn"
          src={ searchIcon }
        >
          <img src={ searchIcon } alt="Lens" />
        </button>)}
    </header>
  );
}

export default Header;

Header.propTypes = {
  props: PropTypes.shape({
    title: PropTypes.string,
    enableSearchButton: PropTypes.bool,
    enableProfileButton: PropTypes.bool,
  }).isRequired,
};
