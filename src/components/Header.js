import React from 'react';
import PropTypes from 'prop-types';

import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title, search }) {
  return (
    <header>
      <button type="button">
        <img data-testid="profile-top-btn" src={ profileIcon } alt="profile icon" />
      </button>

      <h1 data-testid="page-title">{ title }</h1>

      { search
        && (
          <button type="button">
            <img data-testid="search-top-btn" src={ searchIcon } alt="search icon" />
          </button>) }
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  search: PropTypes.bool.isRequired,
};

export default Header;
