import React from 'react';

export default function SearchBar() {
  return (
    <form action="">
      <label htmlFor="search-input">
        <input data-testid="search-input" />
      </label>
      <label htmlFor="ingredient-search-radio">
        <input type="radio" data-testid="ingredient-search-radio" />
      </label>
      <label htmlFor="name-search-radio">
        <input type="radio" data-testid="name-search-radio" />
      </label>
      <label htmlFor="first-letter-search-radio">
        <input type="radio" data-testid="first-letter-search-radio" />
      </label>
      <input type="button" value="Buscar" data-testid="exec-search-btn" />
    </form>
  );
}
