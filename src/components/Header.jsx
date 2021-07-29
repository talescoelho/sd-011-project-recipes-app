import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ pageName, showSearchButton }) {
  const style = {
    display: 'flex',
    border: '2px solid red',
  };

  const [showSearchBar, setShowSearchBar] = useState(false);

  const showSearchBarHandler = () => (
    showSearchBar ? setShowSearchBar(false) : setShowSearchBar(true)
  );

  const searchButton = (
    <button
      type="button"
      onClick={ showSearchBarHandler }
    >
      <img src={ searchIcon } alt="search icon" data-testid="search-top-btn" />
    </button>);

  return (
    <div>
      <div style={ style }>
        <Link to="/perfil">
          <button type="button">
            <img src={ profileIcon } alt="Profile Icon" data-testid="profile-top-btn" />
          </button>
        </Link>
        <h2 data-testid="page-title">{ pageName }</h2>
        { showSearchButton ? searchButton : null }
      </div>
      { showSearchBar ? <SearchBar /> : null }
    </div>

  );
}

export default Header;

Header.propTypes = {
  pageName: PropTypes.string.isRequired,
  showSearchButton: PropTypes.bool.isRequired,
};
