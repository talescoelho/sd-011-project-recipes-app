import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import searchIcon from '../../images/searchIcon.svg';
import profileIcon from '../../images/profileIcon.svg';
import './header.css';

const Header = ({ page, showSearchBtn }) => (
  <header className="header-style">
    <Link to="/perfil">
      <img
        src={ profileIcon }
        alt="profile icon"
        data-testid="profile-top-btn"
      />
    </Link>
    <h3 data-testid="page-title">{page}</h3>
    {
      (showSearchBtn)
        ? (
          <div>
            <img
              src={ searchIcon }
              alt="research magnifying glass"
              data-testid="search-top-btn"
            />
          </div>) : null
    }
  </header>
);

Header.propTypes = ({
  page: PropTypes.string,
  showSearchBtn: PropTypes.bool,
}).isRequired;

export default Header;
