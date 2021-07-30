import React, { useState } from 'react';

function DrinksSearchBar() {
  const [searchText, setSearchText] = useState('');
  console.log(searchText);
  const [input, setInput] = useState('');

  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        onChange={ ({ target: { value } }) => setSearchText(value) }
      />
      <label htmlFor="ingredient">
        Ingredientes
        <input
          type="radio"
          name="search-drinks"
          id="ingredient"
          value="ingredient"
          data-testid="ingredient-search-radio"
          onChange={ ({ target: { value } }) => setInput(value) }
        />
      </label>

      <label htmlFor="name">
        Nome
        <input
          type="radio"
          name="search-drinks"
          id="name"
          value="name"
          data-testid="name-search-radio"
          onChange={ ({ target: { value } }) => setInput(value) }
        />
      </label>

      <label htmlFor="firstLetter">
        Primeira letra
        <input
          type="radio"
          name="search-drinks"
          id="firstLetter"
          value="firstLetter"
          data-testid="first-letter-search-radio"
          onChange={ ({ target: { value } }) => setInput(value) }
        />
      </label>
      <br />
      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Buscar
      </button>
    </div>
  );
}

export default DrinksSearchBar;
