import React from 'react';

export default function SearchBar() {
  return (
    <div className="alltoggle-search">
      <div className="toggle-search">
        <input type="text" data-testid="search-input" />
        <div className="input-radios">
          <label htmlFor="input-igrediente">
            <input type="radio" data-testid="ingredient-search-radio" name="filtro" />
            Igrediente
          </label>
          <label htmlFor="input-nome">
            <input type="radio" data-testid="name-search-radio" name="filtro" />
            Nome
          </label>
          <label htmlFor="input-primeira-letra">
            <input type="radio" data-testid="first-letter-search-radio" name="filtro" />
            Primeira letra
          </label>
        </div>
        <button type="button" data-testid="exec-search-btn" className="btn-search">
          Buscar
        </button>
      </div>
    </div>
  );
}
