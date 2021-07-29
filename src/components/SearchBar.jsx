import React from 'react';

function SearchBar() {
  return (
    <form>
      <label htmlFor="ingredients">
        <input
          type="radio"
          id="ingredients"
          name="search-type"
          data-testid="ingredient-search-radio"
        />
        Ingredientes
      </label>
      <label htmlFor="name">
        <input
          type="radio"
          id="name"
          name="search-type"
          data-testid="name-search-radio"
        />
        Nome
      </label>
      <label htmlFor="first-letter">
        <input
          type="radio"
          id="first-letter"
          name="search-type"
          data-testid="first-letter-search-radio"
        />
        Primeira letra
      </label>
      <input
        type="text"
        data-testid="search-input"
        placeholder="O que deseja pesquisar?"
      />
      <button type="button" data-testid="exec-search-btn">Pesquisar</button>
    </form>
  );
}

export default SearchBar;
