import React, { useState } from 'react';
import { bool, string } from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import './Header.css';

export default function Header({ title, searchIconAppears = false }) {
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
        <h2 className="title intheader" data-testid="page-title">{title}</h2>
        {searchIconAppears && (
          <img
              data-testid="search-top-btn"
              src={ searchIcon }
              alt="Barra de pesquisa"
              width="40px"
              height="40px"
              onClick={ toggleInput }
              className="intheader"
          />
        )}
        { searchInput ? <input
        className="inputsearch"
        type="text"
        data-testid="search-input"
        placeholder="Buscar Receita"
        />
        : null
        }
      </header>
    </div>
  );
}

Header.propTypes = {
  title: string,
  searchIconAppears: bool,
}.isRequired;
