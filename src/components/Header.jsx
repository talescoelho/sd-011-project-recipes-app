import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title, searchButton }) {
  return (
    <header>
      <Link to="perfil">
        <button type="button">
          <img src={ profileIcon } alt="profileIcon" data-testid="profile-top-btn" />
        </button>
      </Link>
      <p data-testid="page-title">{ title }</p>
      {searchButton && (
        <button type="button">
          <img src={ searchIcon } alt="searchIcon" data-testid="search-top-btn" />
        </button>
      )}
    </header>
  );
}

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  searchButton: PropTypes.bool.isRequired,
};
