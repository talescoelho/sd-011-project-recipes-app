import React, { useState } from 'react';

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [radioInput, setRadioInput] = useState('');

  return (
    <form>
      Search Bar
      <label htmlFor="search-input">
        <input
          placeholder="Buscar Receita"
          data-testid="search-input"
          onChange={ ({ target: { value } }) => setSearchInput(value) }
        />
      </label>
      <label htmlFor="radio-options">
        Ingrediente
        <input
          name="radio-options"
          type="radio"
          data-testid="ingredient-search-radio"
          onChange={ () => setRadioInput('ingredient') }
        />
        Nome
        <input
          name="radio-options"
          type="radio"
          data-testid="name-search-radio"
          onChange={ () => setRadioInput('name') }
        />
        Primeira letra
        <input
          name="radio-options"
          type="radio"
          data-testid="first-letter-search-radio"
          onChange={ () => setRadioInput('letter') }
        />
      </label>
      <button type="button" data-testid="exec-search-btn">Buscar</button>
    </form>
  );
}

export default SearchBar;
