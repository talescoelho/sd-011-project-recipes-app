import React from 'react';
import { Redirect } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../css/header.css';

function Header(props) {
  console.log(window.location.pathname.split('/')[1]);
  console.log(props);
  const { title } = props;
  console.log(`console 3 ${title}`);
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
        <h1 data-testid="page-title">{ window.location.pathname.split('/')[1] }</h1>
        <button
          type="button"
          data-testid="search-top-btn"
          src={ searchIcon }
        >
          <img
            src={ searchIcon }
            alt="search top button"
          />
        </button>
      </header>
    </div>
  );
}

export default Header;
