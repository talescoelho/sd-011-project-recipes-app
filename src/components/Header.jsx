import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

import '../styles/Header.css';

function Header(props) {
  const { pageName, renderButton } = props;
  const [renderSearchBar, setRenderSearchBar] = useState(false);

  return (
    <header>
      <nav>
        <Link to="/perfil">
          <img
            className="header-img"
            data-testid="profile-top-btn"
            type="button"
            src={ profileIcon }
            alt="profile button"
          />
        </Link>
        <h1 data-testid="page-title">{pageName}</h1>
        {renderButton ? (
          <button
            className="header-button"
            type="button"
            onClick={ () => setRenderSearchBar(!renderSearchBar) }
          >
            <img
              data-testid="search-top-btn"
              className="header-img"
              src={ searchIcon }
              alt="search button"
            />
          </button>
        ) : null}
      </nav>
      {renderSearchBar ? <SearchBar /> : null}
    </header>
  );
}

Header.propTypes = {
  pageName: PropTypes.string.isRequired,
  renderButton: PropTypes.bool.isRequired,
};

export default Header;
