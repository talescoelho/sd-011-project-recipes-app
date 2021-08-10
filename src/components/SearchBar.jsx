import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import { Foods, Cocktails } from '../services';
import SearchBarContext from '../context/searchBarContext';

function SearchBar({ type }) {
  const [searchType, setSearchType] = useState(null);
  const [searchInput, setSearchInput] = useState(null);
  const { setData } = useContext(SearchBarContext);

  async function filterSearch() {
    if (searchType && searchInput) {
      if (type.includes('Comidas')) setData(await Foods[searchType](searchInput));
      if (type.includes('Bebidas')) setData(await Cocktails[searchType](searchInput));
    }
  }

  return (
    <form>
      <label htmlFor="ingredients">
        <input
          onClick={ ({ target }) => setSearchType(target.id) }
          type="radio"
          id="searchIngredients"
          name="search-type"
          data-testid="ingredient-search-radio"
        />
        Ingredientes
      </label>
      <label htmlFor="name">
        <input
          onClick={ ({ target }) => setSearchType(target.id) }
          type="radio"
          id="searchName"
          name="search-type"
          data-testid="name-search-radio"
        />
        Nome
      </label>
      <label htmlFor="firstLetter">
        <input
          onClick={ ({ target }) => setSearchType(target.id) }
          type="radio"
          id="searchLetter"
          name="search-type"
          data-testid="first-letter-search-radio"
        />
        Primeira letra
      </label>
      <input
        onChange={ ({ target }) => setSearchInput(target.value) }
        type="text"
        data-testid="search-input"
        placeholder="O que deseja pesquisar?"
      />
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ () => filterSearch() }
      >
        Pesquisar
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  type: PropTypes.string.isRequired,
};

export default SearchBar;
