import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          data-testid="search-input"
          placeholder="Faça sua pequisa"
        />
        <label htmlFor="search-ingredient">
          Ingrediente:
          <input
            type="radio"
            data-testid="ingredient-search-radio"
          />
        </label>
        <label htmlFor="search-nome">
          Nome:
          <input
            type="radio"
            data-testid="name-search-radio"
          />
        </label>
        <label htmlFor="search-first-letter">
          Primeira Letra:
          <input
            type="radio"
            data-testid="first-letter-search-radio"
          />
        </label>
        <button
          type="button"
          data-testid="exec-search-btn"
        >
          Buscar
        </button>
      </div>
    );
  }
}

export default SearchBar;
