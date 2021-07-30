import React from 'react';

function SearchBar() {
  return (
    <div>
      <label htmlFor="search">
        <input type="text" data-testid="search-input" id="search" />
      </label>
      <label htmlFor="radio">
        {' '}
        Ingrediente
        <input type="radio" data-testid="ingredient-search-radio" id="radio" />
      </label>
      <label htmlFor="radio">
        {' '}
        Nome
        <input type="radio" data-testid="name-search-radio" id="radio" />
      </label>
      <label htmlFor="radio">
        {' '}
        Primeira letra
        <input type="radio" data-testid="first-letter-search-radio" id="radio" />
      </label>
      <button type="button" data-testid="exec-search-btn">Busca</button>
    </div>
  );
}

export default SearchBar;
