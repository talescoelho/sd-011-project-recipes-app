import React, { useState, useContext } from 'react';
import { SearchBarContext } from '../context/SearchBar';
import fetchByFilter from '../services/data';

export default function SearchBar() {
  const [input, setInput] = useState('');
  const [radio, setRadio] = useState('');
  const { setData } = useContext(SearchBarContext);

  const handleClick = async () => {
    let urlToFetch;
    switch (radio) {
    case 'ingredient':
      urlToFetch = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`;
      break;
    case 'name':
      urlToFetch = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;
      break;
    case 'first-letter':
      urlToFetch = `https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`;
      break;
    default:
      return null;
    }
    const dataFromApi = await fetchByFilter(urlToFetch);
    setData(dataFromApi);
  };

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
          onChange={ (e) => setRadio(e.target.id) }
        />
        Ingrediente
      </label>
      <label htmlFor="name">
        <input
          name="search-type"
          id="name"
          type="radio"
          data-testid="name-search-radio"
          onChange={ (e) => setRadio(e.target.id) }
        />
        Nome
      </label>
      <label htmlFor="first-letter">
        <input
          name="search-type"
          id="first-letter"
          type="radio"
          data-testid="first-letter-search-radio"
          onChange={ (e) => setRadio(e.target.id) }
        />
        Primeira letra
      </label>
      <button
        data-testid="exec-search-btn"
        type="button"
        onClick={ () => handleClick() }
      >
        Buscar
      </button>
    </section>
  );
}
