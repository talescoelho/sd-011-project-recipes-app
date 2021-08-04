import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import '../styles/header.css';

// update

function Header({ title, search = true }) {
  const history = useHistory();
  const redirectToPerfil = () => history.push('/perfil');
  const [renderSearchBar, setRenderSearchBar] = useState(false);
  return (
    <div>
      <header className="header-container">
        <button
          type="button"
          data-testid="profile-top-btn"
          onClick={ redirectToPerfil }
          src={ profileIcon }
        >
          <img
            src={ profileIcon }
            alt="profile top button"
          />
        </button>
        <h1 className="Title" data-testid="page-title">{ title }</h1>
        { search && (
          <button
            type="button"
            data-testid="search-top-btn"
            src={ searchIcon }
            onClick={ () => setRenderSearchBar(!renderSearchBar) }
          >
            <img
              src={ searchIcon }
              alt="search top button"
            />
          </button>)}
      </header>
      { renderSearchBar && <SearchBar title={ title } /> }
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.String,
}.isRquired;

export default Header;
