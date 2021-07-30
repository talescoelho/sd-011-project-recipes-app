import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>

        <input
          data-testid="search-input"
          type="text"
        />

        <input
          data-testid="ingredient-search-radio"
          type="radio"
          name="search-radio"
          id="ingredient"
        />
        Ingrediente

        <input
          data-testid="name-search-radio"
          type="radio"
          name="search-radio"
          id="name"
        />
        Nome

        <input
          data-testid="first-letter-search-radio"
          type="radio"
          name="search-radio"
          id="frist-letter"
        />
        Primeira letra

        <button type="button" data-testid="exec-search-btn">
          Buscar
        </button>
      </div>
    );
  }
}

export default SearchBar;
