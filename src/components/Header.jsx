import React from 'react';
import { Redirect } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../css/header.css';

function Header() {
  return (
    <div>
      <header className="header-container">
        <button
          type="button"
          data-testid="profile-top-btn"
          onClick={ <Redirect to="/perfil" /> }
        >
          <img
            data-testid="profile-top-btn"
            src={ profileIcon }
            alt="profile top button"
          />
        </button>
        <p data-testid="page-title">Titulo</p>
        <img
          data-testid="search-top-btn"
          src={ searchIcon }
          alt="search top button"
        />
      </header>
      <p>Componente Header</p>
    </div>
  );
}

export default Header;
