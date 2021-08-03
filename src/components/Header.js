import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBarBtn from './SearchBarBtn';

import ProfileIcon from '../images/profileIcon.svg';

export default function Header({ title, haveSearchBtn }) {
  return (
    <header>
      <h1 data-testid="page-title">{title}</h1>
      <Link to="/perfil">
        <button
          alt="Incone do profile"
          type="button"
        >
          <img
            src={ ProfileIcon }
            alt="Icone do profile"
            data-testid="profile-top-btn"
          />
        </button>
      </Link>
      <SearchBarBtn haveSearchBtn={ haveSearchBtn } />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  haveSearchBtn: PropTypes.bool.isRequired,
};
