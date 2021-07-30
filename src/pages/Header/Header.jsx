import React from 'react';
import Link from 'react-router-dom';
import Picture1 from '../../images/profileIcon.svg';
import Picture2 from '../../images/searchIcon.svg';

function Header() {
  return (
    <header className="header">
      <Link to="/Profile" data-testid="profile-top-btn">
        <img src={ Picture1 } alt="perfil" />
      </Link>
      <h1 data-testid="page-title">Comidas</h1>
      <button data-testid="search-top-btn" type="button">
        <img src={ Picture2 } alt="lupa" />
      </button>
    </header>
  );
}

export default Header;
