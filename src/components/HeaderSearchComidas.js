import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipes } from '../redux/slices/fetchComidas';

function HeaderSearchComidas() {
  const dispatch = useDispatch();
  const [selectedRadio, setSelectedRadio] = useState();
  const [searchInput, setSearchInput] = useState();

  const requestDictionary = {
    ingredients: 'filter.php?i=',
    name: 'search.php?s=',
    firstLetter: 'search.php?f=',
  };

  function handleSearchInput({ target: { value } }) {
    setSearchInput(value);
  }

  function handleRequest() {
    if (selectedRadio === 'firstLetter' && searchInput.length > 1) {
      return alert('Sua busca deve conter somente 1 (um) caracter');
    }
    const URL = `https://www.themealdb.com/api/json/v1/1/${requestDictionary[selectedRadio]}${searchInput}`;
    dispatch(getRecipes(URL));
  }

  return (
    <form>
      <label htmlFor="search-bar">
        <input
          name="search-bar"
          data-testid="search-input"
          value={ searchInput }
          onChange={ handleSearchInput }
        />
      </label>
      <label htmlFor="radio-search">
        <input
          onChange={ () => setSelectedRadio('ingredients') }
          type="radio"
          name="radio"
          data-testid="ingredient-search-radio"
        />
        Ingredientes
        <input
          onChange={ () => setSelectedRadio('name') }
          type="radio"
          name="radio"
          data-testid="name-search-radio"
        />
        Nome
        <input
          onChange={ () => setSelectedRadio('firstLetter') }
          type="radio"
          name="radio"
          data-testid="first-letter-search-radio"
        />
        Primeira letra
      </label>
      <button
        type="button"
        onClick={ handleRequest }
      >
        Buscar
      </button>
    </form>
  );
}

export default HeaderSearchComidas;
