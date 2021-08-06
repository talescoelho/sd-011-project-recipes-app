import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import searchIcon from '../../images/searchIcon.svg';
import profileIcon from '../../images/profileIcon.svg';
import './header.css';

const Header = ({
  page,
  showSearchBtn,
  radioOption,
  sendRadioInfo,
  typedIngredient,
}) => {
  const [showField, setShowField] = useState(false);
  return (
    <>
      <header className="header-style">
        <Link to="/perfil">
          <img
            src={ profileIcon }
            alt="profile icon"
            data-testid="profile-top-btn"
          />
        </Link>
        <h3 data-testid="page-title">{page}</h3>
        {
          (showSearchBtn)
            ? (
              <button
                type="button"
                onClick={ () => setShowField((show) => !show) }
              >
                <img
                  src={ searchIcon }
                  alt="research magnifying glass"
                  data-testid="search-top-btn"
                />
              </button>) : null
        }
      </header>
      <span className="field-style">
        <label htmlFor="radio-buttons-label">
          <label htmlFor="label-ingredient-radio">
            Ingrediente
            <input
              type="radio"
              data-testid="ingredient-search-radio"
              name="ingredient"
              value="ingrediente"
              onClick={ radioOption }
            />
          </label>

          <label htmlFor="label-name-radio">
            Nome
            <input
              type="radio"
              data-testid="name-search-radio"
              name="ingredient"
              value="name"
              onClick={ radioOption }
            />
          </label>

          <label htmlFor="label-first-letter-radio">
            Primeira letra
            <input
              type="radio"
              data-testid="first-letter-search-radio"
              name="ingredient"
              value="first-letter"
              onClick={ radioOption }
            />
          </label>
          <button
            type="button"
            data-testid="exec-search-btn"
            onClick={ sendRadioInfo }
          >
            Buscar
          </button>
        </label>
        {
          showField
            ? (
              <input
                type="text"
                data-testid="search-input"
                onChange={ typedIngredient }
              />
            )
            : null
        }
      </span>
    </>
  );
};

Header.propTypes = ({
  page: PropTypes.string,
  showSearchBtn: PropTypes.bool,
  radioOption: PropTypes.bool,
  sendRadioInfo: PropTypes.func,
  typedIngredient: PropTypes.string,
}).isRequired;

export default connect()(Header);
