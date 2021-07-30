import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchBarFetchMeal } from '../services/theMealAPI';

function SearchBar(props) {
  const [search, setSearch] = useState('');
  const [radio, setRadio] = useState('');
  const { pathname } = useLocation();
  const resultList = {}

  async function searchButton() {
    if (pathname === '/comidas') {
      const teste = await searchBarFetchMeal(search, radio);
    }
  }

  return (
    <form>
      <label htmlFor="search-input">
        <input
          data-testid="search-input"
          id="search-input"
          onChange={ ({ target: { value } }) => setSearch(value) }
          placeholder="Buscar Receita"
          type="text"
        />
      </label>
      <label htmlFor="ingredient-search-radio">
        Ingrediente
        <input
          data-testid="ingredient-search-radio"
          id="ingredient-search-radio"
          name="search-radio"
          onClick={ ({ target: { value } }) => setRadio(value) }
          type="radio"
          value="ingredient"
        />
      </label>
      <label htmlFor="name-search-radio">
        Nome
        <input
          data-testid="name-search-radio"
          id="name-search-radio"
          name="search-radio"
          onClick={ ({ target: { value } }) => setRadio(value) }
          type="radio"
          value="name"
        />
      </label>
      <label htmlFor="first-letter-search-radio">
        Primeira letra
        <input
          data-testid="first-letter-search-radio"
          id="first-letter-search-radio"
          name="search-radio"
          onClick={ ({ target: { value } }) => setRadio(value) }
          type="radio"
          value="firstLetter"
        />
      </label>
      <button type="button" data-testid="exec-search-btn">
        Buscar
      </button>
    </form>
  );
}

export default SearchBar;
