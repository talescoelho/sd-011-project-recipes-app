import React from 'react';

function SearchBar() {
  return (
    <section>
      <form>
        <label htmlFor="search-input">
          <input
            id="search-input"
            data-testid="search-input"
            type="text"
          />
        </label>
        <label htmlFor="ingredient-radio">
          Ingredientes
          <input
            id="ingredient-radio"
            data-testid="ingredient-search-radio"
            type="radio"
          />
        </label>
        <label htmlFor="name-radio">
          Nome
          <input
            id="name-radio"
            data-testid="name-search-radio"
            type="radio"
          />
        </label>
        <label htmlFor="first-letter-radio">
          Primeira letra
          <input
            id="first-letter-radio"
            data-testid="first-letter-search-radio"
            type="radio"
          />
        </label>
        <section>
          <button
            data-testid="exec-search-btn"
            type="button"
          >
            Buscar
          </button>
        </section>
      </form>
    </section>
  );
}

export default SearchBar;
