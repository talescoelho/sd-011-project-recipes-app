import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../styles/header.css';
import SearchBar from './SearchBar';

function Header({ title, search = true }) {
  return (
    <div>
      <header className="header-container">
        <button
          type="button"
          data-testid="profile-top-btn"
          onClick={ <Redirect to="/perfil" /> }
          src={ profileIcon }
        >
          <img
            src={ profileIcon }
            alt="profile top button"
          />
        </button>
        <h1 data-testid="page-title">{ title }</h1>
        { search && (
          <button
            type="button"
            data-testid="search-top-btn"
            src={ searchIcon }
            onClick={ <SearchBar /> }
          >
            <img
              src={ searchIcon }
              alt="search top button"
            />
          </button>)}
      </header>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.String,
}.isRquired;

export default Header;
