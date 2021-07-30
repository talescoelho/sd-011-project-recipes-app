import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

function Header(props) {
  const { pageName, renderButton } = props;
  const [renderSearchBar, setRenderSearchBar] = useState(false);

  return (
    <div>
      <h1 data-testid="page-title">{pageName}</h1>
      <Link to="/perfil">
        <button
          data-testid="profile-top-btn"
          type="button"
          src="src/images/profileIcon.svg"
          alt="profile button"
        >
          Profile
        </button>
      </Link>
      { renderButton ? (
        <button
          data-testid="search-top-btn"
          type="button"
          onClick={ () => setRenderSearchBar(!renderSearchBar) }
          src="src/images/searchIcon.svg"
          alt="search button"
        >
          Search
        </button>) : null}
      { renderSearchBar ? <SearchBar /> : null }
      <div id="searchBar" />
    </div>
  );
}

Header.propTypes = {
  pageName: PropTypes.string.isRequired,
  renderButton: PropTypes.bool.isRequired,
};

export default Header;
