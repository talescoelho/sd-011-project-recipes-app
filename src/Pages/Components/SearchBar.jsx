import React from 'react';

function SearchBar() {
  return (
    <div>
      <label htmlFor="search-input">
        <input
          id="search-input"
          data-testid="search-input"
          type="text"
          placeholder="Busca Receita"
        />
      </label>
      <form>
        <label htmlFor="ingredients">
          Ingredientes
          <input data-testid="ingredient-search-radio" name="parameter" id="ingredients" type="radio" />
        </label>
        <label htmlFor="name">
          Nome
          <input data-testid="name-search-radio" name="parameter" id="name" type="radio" />
        </label>
        <label htmlFor="first-letter">
          Primeira Letra
          <input data-testid="first-letter-search-radio" name="parameter" id="first-letter" type="radio" />
        </label>
        <button type="button" data-testid="exec-search-btn">Pesquisar</button>
      </form>
    </div>
  );
}

export default SearchBar;
