import React from 'react';

export default function SearchBar() {
  return (
    <div className="search-recipe">
      <input type="text" data-testid="search-input" />
      <div className="search-radio">
        <label className="label-style" htmlFor="search-ingredients">
          <input
            id="search-ingredients"
            type="radio"
            data-testid="ingredient-search-radio"
            name="search--name"
          />
          Ingredientes
        </label>
        <label className="label-style" htmlFor="search-name">
          <input
            id="search-name"
            type="radio"
            data-testid="name-search-radio"
            name="search--name"
          />
          Nome
        </label>
        <label className="label-style" htmlFor="search-firstLetter">
          <input
            id="search-firstLetter"
            type="radio"
            data-testid="first-letter-search-radio"
            name="search--name"
          />
          Primeira
        </label>
      </div>
      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Buscar
      </button>
    </div>
  );
}
