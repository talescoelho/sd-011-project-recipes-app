import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../styles/Header.css';

function Header(props) {
  const [hidden, setHidden] = useState(false);

  const searchIconRender = (
  <img
    aria-hidden="true"
    onClick={() => setHidden(!hidden)}
    className="container-search-icon"
    data-testid="search-top-btn"
    src={ searchIcon }
    alt="search icon"
  />
  );

  const { title, showSearchIcon } = props;

  return (
    <header data-testid="header" className="header">
      <div className="container-main-header">
        <div className="container-title-icons">
          <Link to="/perfil">
            <img
              className="container-profile-icon"
              data-testid="profile-top-btn"
              src={ profileIcon }
              alt="profile icon"
            />
          </Link>
          <h3
            className="container-title-header"
            data-testid="page-title"
          >
            { title }
          </h3>
          <div>
            { showSearchIcon ? searchIconRender : null }
          </div>
        </div>
      </div>
      { hidden && <SearchBar /> }
    </header>
  );
}

export default Header;
