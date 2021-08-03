import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { UserHook } from '../Context/UserHook';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title, search }) {
  const [showFilterInput, setShowFilter] = useState(false);
  const [inputTextSearch, setInputTextSearch] = useState('');
  const [radio, setRadio] = useState('ingredient');

  const {
    setFiltered,
    filterByName,
    filterByIngredient,
    filterByFirstLetter,
  } = UserHook();

  useEffect(() => {
    setShowFilter(true);
  }, []);

  function handleSubmitButton() {
    if (radio === 'name-search') {
      setFiltered(filterByName(inputTextSearch));
    } else if (radio === 'first-letter') {
      if (inputTextSearch.length > 1) {
        alert('Sua busca deve conter somente 1 (um) caracter');
      }
      setFiltered(filterByFirstLetter(inputTextSearch));
    } else {
      setFiltered(filterByIngredient(inputTextSearch));
    }
  }

  return (
    <header>
      <Link to="/perfil">
        <button type="button">
          <img data-testid="profile-top-btn" src={ profileIcon } alt="profile icon" />
        </button>
      </Link>
      <h1 data-testid="page-title">{ title }</h1>

      { search
        && (
          <button
            type="button"
            onClick={ () => setShowFilter((state) => !state) }
          >
            <img data-testid="search-top-btn" src={ searchIcon } alt="search icon" />
          </button>) }

      { showFilterInput ? (
        <p>categorias</p>
      )
        : (
          <form>
            <input
              data-testid="search-input"
              type="text"
              value={ inputTextSearch }
              onChange={ (e) => setInputTextSearch(e.target.value) }
            />
            <label htmlFor="ingredient">
              <input
                data-testid="ingredient-search-radio"
                type="radio"
                id="ingredient"
                name="radio-button"
                value="ingredient"
                checked
                onChange={ () => setRadio('ingredient') }
              />
              Ingrediente
            </label>
            { ' ' }
            <label htmlFor="name-search">
              <input
                data-testid="name-search-radio"
                type="radio"
                id="name-search"
                name="radio-button"
                value="name-search"
                onChange={ () => setRadio('name-search') }
              />
              Nome
            </label>
            { ' ' }
            <label htmlFor="first-letter">
              <input
                data-testid="first-letter-search-radio"
                type="radio"
                id="first-letter"
                name="radio-button"
                value="first-letter"
                onChange={ () => setRadio('first-letter') }
              />
              Primeira letra
            </label>
            <button
              data-testid="exec-search-btn"
              type="button"
              onClick={ () => handleSubmitButton() }
            >
              Buscar
            </button>
          </form>
        ) }

    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  search: PropTypes.bool.isRequired,
};

export default Header;
