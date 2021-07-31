import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import searchIcon from '../../images/searchIcon.svg';
import profileIcon from '../../images/profileIcon.svg';
import './header.css';

const Header = ({ page, showSearchBtn }) => (
  <header className="header-style">
    <button type="button">
      <img
        src={ profileIcon }
        alt="profile icon"
        data-testid="profile-top-btn"
      />
      <Route to="perfil" />
    </button>
    <h3 data-testid="page-title">{page}</h3>
    {
      (showSearchBtn)
        ? (
          <button type="button">
            <img
              src={ searchIcon }
              alt="research magnifying glass"
              data-testid="search-top-btn"
            />
          </button>) : null
    }
  </header>
);

Header.propTypes = ({
  page: PropTypes.string,
  showSearchBtn: PropTypes.bool,
}).isRequired;

export default Header;
