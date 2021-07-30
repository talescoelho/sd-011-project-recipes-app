import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header({ title, renderButton, renderIMG }) {
  const btn = (
    <button type="button">
      <img src={ searchIcon } alt="search" data-testid="search-top-btn" />
    </button>
  );

  const img = <img src={ profileIcon } alt="profile" data-testid="profile-top-btn" />;

  return (
    <header>
      <Link to="/perfil">
        { !renderIMG && img }
      </Link>
      <h1 data-testid="page-title">{ title }</h1>
      { !renderButton && btn }
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  renderButton: PropTypes.bool.isRequired,
  renderIMG: PropTypes.bool.isRequired,
};
