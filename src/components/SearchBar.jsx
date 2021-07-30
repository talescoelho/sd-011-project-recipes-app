import React, { useState, useEffect } from 'react';

function SearchBar() {
  const [searchType, setSearchType] = useState();
  const [searchInput, setSearchInput] = useState();

  return (
    <form>
      <label htmlFor="ingredients">
        <input
          onClick={ ({ target }) => setSearchType(target.id) }
          type="radio"
          id="ingredients"
          name="search-type"
          data-testid="ingredient-search-radio"
        />
        Ingredientes
      </label>
      <label htmlFor="name">
        <input
          onClick={ ({ target }) => setSearchType(target.id) }
          type="radio"
          id="name"
          name="search-type"
          data-testid="name-search-radio"
        />
        Nome
      </label>
      <label htmlFor="firstLetter">
        <input
          onClick={ ({ target }) => setSearchType(target.id) }
          type="radio"
          id="firstLetter"
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
      <button type="button" data-testid="exec-search-btn">Pesquisar</button>
    </form>
  );
}

export default SearchBar;
