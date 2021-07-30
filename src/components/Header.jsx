import React from 'react';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title }) {
  return (
    <header>
      <button type="button">
        <img src={ profileIcon } alt="profileIcon" data-testid="profile-top-btn" />
      </button>
      <p data-testid="page-title">{ title }</p>
      <button type="button">
        <img src={ searchIcon } alt="searchIcon" data-testid="search-top-btn" />
      </button>
    </header>
  );
}

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
