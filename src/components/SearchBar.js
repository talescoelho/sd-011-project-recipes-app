import React, { useState } from 'react';

export default function SearchBar() {
  const [input, setInput] = useState('');
  return (
    <section>
      <label htmlFor="search-input">
        <input
          id="search-input"
          type="text"
          data-testid="search-input"
          value={ input }
          onChange={ (e) => setInput(e.target.value) }
        />
      </label>
      <label htmlFor="ingredient">
        <input
          name="search-type"
          id="ingredient"
          type="radio"
          data-testid="ingredient-search-radio"
        />
        Ingrediente
      </label>
      <label htmlFor="name">
        <input
          name="search-type"
          id="name"
          type="radio"
          data-testid="name-search-radio"
        />
        Nome
      </label>
      <label htmlFor="first-letter">
        <input
          name="search-type"
          id="first-letter"
          type="radio"
          data-testid="first-letter-search-radio"
        />
        Primeira letra
      </label>
      <button
        data-testid="exec-search-btn"
        type="button"
      >
        Buscar
      </button>
    </section>
  );
}
