import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ProfileIcon from '../images/profileIcon.svg';
import SearchIcon from '../images/searchIcon.svg';

export default function Header({ title, haveSearchBtn }) {
  return (
    <header>
      <Link to="/perfil">
        <button
          src={ ProfileIcon }
          alt="Incone do profile"
          type="button"
          data-testid="profile-top-btn"
        />
      </Link>
      <h1 data-testid="page-title">{title}</h1>
      {
        haveSearchBtn
      && (
        <label htmlFor="search-top">
          <input
            type="button"
            src={ SearchIcon }
            id="search-top"
            data-testid="search-top-btn"
          />
        </label>
      )
      }
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  haveSearchBtn: PropTypes.bool.isRequired,
};
