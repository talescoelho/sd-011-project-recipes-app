import React, { Component } from 'react';

class SearchInput extends Component {
  render() {
    return (
      <main>
        <input
          data-testid="search-input"
          name="search-input"
          type="text"
          placeholder="Digite um termo de busca..."
        />
        <label htmlFor="ingredient-search-radio">
          Ingrediente
          <input
            data-testid="ingredient-search-radio"
            type="radio"
            name="search-radio"
            id="ingredient-search-radio"
            value="ingredient"
          />
        </label>
        <label htmlFor="name-search-radio">
          Nome
          <input
            data-testid="name-search-radio"
            type="radio"
            name="search-radio"
            id="name-search-radio"
            value="name"
          />
        </label>
        <label htmlFor="first-letter-search-radio">
          Primeira letra
          <input
            data-testid="first-letter-search-radio"
            type="radio"
            name="search-radio"
            id="first-letter-search-radio"
            value="firstLetter"
          />
        </label>
        <button
          data-testid="exec-search-btn"
          type="button"
        >
          Buscar
        </button>
      </main>
    );
  }
}

export default SearchInput;
