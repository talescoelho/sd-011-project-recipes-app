import React from 'react';

function SearchBar() {
  return (
    <form>
      <label htmlFor="search-input">
        <input
          data-testid="search-input"
          id="search-input"
          placeholder="Buscar Receita"
          type="text"
        />
      </label>
      <label htmlFor="ingredient-search-radio">
        Ingrediente
        <input
          data-testid="ingredient-search-radio"
          id="ingredient-search-radio"
          type="radio"
        />
      </label>
      <label htmlFor="name-search-radio">
        Nome
        <input
          data-testid="name-search-radio"
          id="name-search-radio"
          type="radio"
        />
      </label>
      <label htmlFor="first-letter-search-radio">
        Primeira letra
        <input
          data-testid="first-letter-search-radio"
          id="first-letter-search-radio"
          type="radio"
        />
      </label>
      <button type="button" data-testid="exec-search-btn">
        Buscar
      </button>
    </form>
  );
}

export default SearchBar;
