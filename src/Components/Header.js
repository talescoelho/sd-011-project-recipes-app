import React, { useState } from 'react';
import { bool, string } from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import './Header.css';
import useSearchbar from '../Context/useSearchbar';

export default function Header({ title, searchIconAppears = false }) {
  const {
    setSearchResult,
    setSelectedSearch,
    getSearch,
  } = useSearchbar();

  const [searchInput, setSearchInput] = useState(false);

  function toggleInput() {
    if (!searchInput) {
      setSearchInput(true);
    } else {
      setSearchInput(false);
    }
  }

  return (
    <div className="headerbox">
      <header className="header">
        <Link to="/perfil" className="intheader">
          <img
            data-testid="profile-top-btn"
            src={ profileIcon }
            alt="Icone de perfil"
            width="40px"
            height="40px"
          />
        </Link>
        <h1 data-testid="page-title">{title}</h1>
        {searchIconAppears && (
          <img
            data-testid="search-top-btn"
            src={ searchIcon }
            alt="Barra de pesquisa"
            width="40px"
            height="40px"
            onClick={ toggleInput }
            role="presentation"
            className="intheader"
          />
        )}
      </header>
      {searchInput && (
        <form>
          <input
            data-testid="search-input"
            placeholder="Buscar Receita"
            onChange={ ({ target }) => setSearchResult(target.value) }
          />
          <label htmlFor="ingredient-search-radio">
            Ingrediente
            <input
              data-testid="ingredient-search-radio"
              id="ingredient-search-radio"
              name="search-radio"
              type="radio"
              value="ingredient"
              onChange={ ({ target }) => setSelectedSearch(target.value) }
            />
          </label>
          <label htmlFor="name-search-radio">
            Nome
            <input
              data-testid="name-search-radio"
              id="name-search-radio"
              name="search-radio"
              type="radio"
              value="name"
              onChange={ ({ target }) => setSelectedSearch(target.value) }
            />
          </label>
          <label htmlFor="first-letter-search-radio">
            Primeira Letra
            <input
              data-testid="first-letter-search-radio"
              id="first-letter-search-radio"
              name="search-radio"
              type="radio"
              value="firstLetter"
              onChange={ ({ target }) => setSelectedSearch(target.value) }
            />
          </label>
          <button
            type="button"
            data-testid="exec-search-btn"
            onClick={ getSearch }
          >
            Buscar
          </button>
        </form>
      )}
    </div>
  );
}

Header.propTypes = {
  title: string,
  searchIconAppears: bool,
}.isRequired;
