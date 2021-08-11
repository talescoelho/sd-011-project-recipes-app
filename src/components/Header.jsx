import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../css/header.css';
import SearchBarMeals from './SearchBarMeals';

export default function Header({ title }) {
  const toggleSearch = () => {
    const displayRarios = document.querySelector('.alltoggle-search');
    if (displayRarios.style.display === 'block') {
      displayRarios.style.display = 'none';
    } else {
      displayRarios.style.display = 'block';
    }
  };

  return (
    <>
      <div className="header">
        <Link to="/perfil">
          <input
            type="image"
            data-testid="profile-top-btn"
            src={ profileIcon }
            alt="icone de perfil"
          />
        </Link>
        <h1 data-testid="page-title">{ title }</h1>
        <input
          type="image"
          data-testid="search-top-btn"
          src={ searchIcon }
          alt="icone de perfil"
          onClick={ toggleSearch }
        />
      </div>
      <SearchBarMeals />
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
