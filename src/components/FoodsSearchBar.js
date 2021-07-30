import React, { useState } from 'react';

function FoodsSearchBar() {
  const [searchText, setSearchText] = useState('');
  console.log(searchText);
  const [input, setInput] = useState('');

  function conditionEndpoint(text) {
    let endpoint;
    if (input === 'ingredient') {
      endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${text}`;
    } else if (input === 'name') {
      endpoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`;
    } else if (input === 'firstLetter' && searchText.length > 1) {
      return alert('Sua busca deve conter somente 1 (um) caracter');
    } else if (input === 'firstLetter') {
      endpoint = `https://www.themealdb.com/api/json/v1/1/search.php?f=${text}`;
    } else if (!input) return null;
    return fetch(endpoint)
      .then((response) => response.json())
      .then((results) => console.log(results));
  }

  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        onChange={ ({ target: { value } }) => setSearchText(value) }
      />
      <label htmlFor="ingredient">
        <input
          type="radio"
          name="search-foods"
          id="ingredient"
          value="ingredient"
          data-testid="ingredient-search-radio"
          onChange={ ({ target: { value } }) => setInput(value) }
        />
        Ingredientes
      </label>

      <label htmlFor="name">
        <input
          type="radio"
          name="search-foods"
          id="name"
          value="name"
          data-testid="name-search-radio"
          onChange={ ({ target: { value } }) => setInput(value) }
        />
        Nome
      </label>

      <label htmlFor="firstLetter">
        <input
          type="radio"
          name="search-foods"
          id="firstLetter"
          value="firstLetter"
          data-testid="first-letter-search-radio"
          onChange={ ({ target: { value } }) => setInput(value) }
        />
        Primeira letra
      </label>
      <br />
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ () => conditionEndpoint(searchText) }
      >
        Buscar
      </button>
    </div>
  );
}

export default FoodsSearchBar;
