import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterHandle, fetchApi } from '../redux/actions';

export default function SearchBar({ modal, url }) {
  const dispatch = useDispatch();
  const { radio, searchInput } = useSelector((state) => state.Filter);

  function handleClick() {
    const checkLocation = url === '/comidas' ? 'themealdb' : 'thecocktaildb';
    if (radio === 'ingrediente') {
      const ingredientURL = `https://www.${checkLocation}.com/api/json/v1/1/filter.php?i=${searchInput}`;
      dispatch(fetchApi(ingredientURL));
    }
    if (radio === 'nome') {
      const nomeURL = `https://www.${checkLocation}.com/api/json/v1/1/search.php?s=${searchInput}`;
      dispatch(fetchApi(nomeURL));
    }
    if (radio === 'primeiraLetra') {
      const firstLetterURL = `https://www.${checkLocation}.com/api/json/v1/1/search.php?f=${searchInput}`;
      dispatch(fetchApi(firstLetterURL));
    } if (radio === 'primeiraLetra' && searchInput.length > 1) {
      // eslint-disable-next-line no-alert
      alert('Sua busca deve conter somente 1 (um) caracter');
    }
  }

  return (
    <div>
      {modal && (
        <>
          <label htmlFor="inputText">
            <input
              id="inputText"
              name="searchInput"
              type="text"
              onChange={ ({ target }) => dispatch(filterHandle(target)) }
              data-testid="search-input"
              placeholder="Buscar Receita"
            />
          </label>
          <label htmlFor="ingredient">
            <input
              value="ingrediente"
              name="radio"
              type="radio"
              data-testid="ingredient-search-radio"
              id="ingredient"
              onChange={ ({ target }) => dispatch(filterHandle(target)) }
            />
            Ingrediente
          </label>
          <label htmlFor="name">
            <input
              value="nome"
              name="radio"
              type="radio"
              data-testid="name-search-radio"
              id="name"
              onChange={ ({ target }) => dispatch(filterHandle(target)) }
            />
            Nome
          </label>
          <label htmlFor="firstLetter">
            <input
              value="primeiraLetra"
              name="radio"
              type="radio"
              data-testid="first-letter-search-radio"
              id="firstLetter"
              onChange={ ({ target }) => dispatch(filterHandle(target)) }
            />
            Primeira letra
          </label>
          <button
            type="button"
            data-testid="exec-search-btn"
            onClick={ handleClick }
          >
            Buscar
          </button>
        </>
      )}
    </div>
  );
}

SearchBar.propTypes = {
  modal: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
};
