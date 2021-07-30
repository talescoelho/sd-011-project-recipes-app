import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import './styles/header.css';

export default function Header({ title }) {
  const [invisibility, setInvisibility] = useState(true);
  return (
    <header className="container-fluid header-container">
      <div className="container header">
        <Link to="/perfil">
          <img
            src={ profileIcon }
            alt="icone que leva a tela de perfil"
            data-testid="profile-top-btn"
          />
        </Link>

        <h1 data-testid="page-title">{ title }</h1>

        <button
          onClick={ () => setInvisibility(!invisibility) }
          className="btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTarget"

        >
          <img
            src={ searchIcon }
            alt="icone de pesquisa"
            data-testid="search-top-btn"

          />
        </button>
      </div>
      <div className="searchBarContainer container-fluid" hidden={ invisibility }>
        <p>
          barra de pesquisa
        </p>
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
}.isRequired;
