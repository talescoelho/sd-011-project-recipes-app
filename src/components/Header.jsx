import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
// import SearchBar from './SearchBar';

function Header() {
  return (
    <header>
      <Link to="/perfil">
        <img
          src={ profileIcon }
          alt="user"
          data-testid="profile-top-btn"
        />
      </Link>
      <h2 data-testid="page-title">
        Comidas
      </h2>
      <img
        src={ searchIcon }
        alt="search"
        data-testid="search-top-btn"
      />
    </header>
  );
}

// Header.propTypes = {
//   children: PropTypes.node,
// }.isRequired;

export default Header;
