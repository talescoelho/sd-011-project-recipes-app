import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header() {
  return (
    <header>
      <button type="button" data-testid="profile-top-btn">Top Button</button>
      <h1 data-testid="page-title">Title</h1>
      <button type="button" data-testid="search-top-btn">Search Button</button>
      <Link to="/perfil">
        <button
          type="button"
          data-testid="profile-top-btn"
        >
          <img src={ profileIcon } alt="Icone de perfil" />
        </button>
      </Link>

      <h1 data-testid="page-title">Title</h1>

      <button
        type="button"
        data-testid="search-top-btn"
      >
        <img src={ searchIcon } alt="Barra de pesquisa" />
      </button>
    </header>
  );
}
