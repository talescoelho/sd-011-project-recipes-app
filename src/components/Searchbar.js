import React, { useState } from 'react';

function Searchbar() {
  const [inputRadio, setInputRadio] = useState('');
  const [searchBar, setSearchbar] = useState('');

  function selectedInput({ target: { value } }) {
    setInputRadio(value);
  }
  function umafuncao() {
    console.log(inputRadio);
    console.log(searchBar.length);
  }
  function setSearchBarFunction({ target: { value } }) {
    setSearchbar(value);
  }

  function endPoint(value = '') {
    if (inputRadio === 'ingredient') {
      return `https://www.themealdb.com/api/json/v1/1/filter.php?i=${value}`;
    }
    if (inputRadio === 'name') {
      return `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
    }
    if (inputRadio === 'firstWord' && searchBar.length > 1) {
      return 'error';
    }
    return `https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`;
  }
  function fetchApi() {
    const url = endPoint(searchBar);
    if (url === 'error') {
      return alert('Sua busca deve conter somente 1 (um) caracter');
    }
    fetch(url).then((response) => response.json()).then((json) => console.log(json));
    console.log(url)
  }
  return (
    <form>
      <input
        onChange={ (event) => setSearchBarFunction(event) }
        type="text"
        data-testid="search-input"
      />

      <label htmlFor>
        <input
          onClick={ (event) => selectedInput(event) }
          name="radio-input"
          id="ingredient-radio-btn"
          type="radio"
          data-testid="ingredient-search-radio"
          value="ingredient"
        />
        Ingrediente
      </label>
      <label htmlFor>
        <input
          onClick={ (event) => selectedInput(event) }
          name="radio-input"
          type="radio"
          data-testid="name-search-radio"
          value="name"
        />
        Name
      </label>
      <label htmlFor>
        <input
          onClick={ (event) => selectedInput(event) }
          name="radio-input"
          type="radio"
          data-testid="first-letter-search-radio"
          value="firstWord"
        />
        Primeira letra
      </label>
      <button
        onClick={ () => fetchApi() }
        type="button"
        data-testid="exec-search-btn"
      >
        pesquisar
      </button>
    </form>
  );
}

export default Searchbar;
