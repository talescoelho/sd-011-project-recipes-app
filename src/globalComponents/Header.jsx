import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Picture1 from '../images/profileIcon.svg';
import Picture2 from '../images/searchIcon.svg';

function Header({ title, glass }) {
  return (
    <header className="header" src="profileIcon">
      <Link to="/perfil">
        <img src={ Picture1 } alt="perfil" data-testid="profile-top-btn" />
      </Link>
      <h1 data-testid="page-title">{ title }</h1>

      {glass
      && (
        <button
          data-testid="search-top-btn"
          type="button"
          src="searchIcon"
        >
          <img src={ Picture2 } alt="lupa" />
        </button>)}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  glass: PropTypes.bool.isRequired,
};

export default Header;
