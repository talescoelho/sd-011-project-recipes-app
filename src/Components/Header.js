import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header({ title }) {
  const [searchInput, setSearchInput] = useState(false);
  function toggleInput() {
    if (!searchInput) {
      setSearchInput(true);
    } else {
      setSearchInput(false);
    }
  }
  return (
    <div>
      <header>
        <Link to="/perfil">
          <button
            type="button"
          >
            <img
              data-testid="profile-top-btn"
              src={ profileIcon }
              alt="Icone de perfil"
            />
          </button>
        </Link>
        <h1 data-testid="page-title">{title}</h1>
        <button
          type="button"
          onClick={ toggleInput }
        >
          <img
            data-testid="search-top-btn"
            src={ searchIcon }
            alt="Barra de pesquisa"
          />
        </button>
      </header>
      { searchInput ? <input
        type="text"
        data-testid="search-input"
        placeholder="Buscar Receita"
      />
        : null }
    </div>
  );
}
