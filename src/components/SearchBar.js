import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { SearchBarContext } from '../context/SearchBar';
import fetchByFilter from '../services/data';

export default function SearchBar(props) {
  const [input, setInput] = useState('');
  const [radio, setRadio] = useState('');
  const { setData } = useContext(SearchBarContext);

  const { fetchType } = props;

  const handleClick = async () => {
    const urlToFetch = `https://www.${fetchType}.com/api/json/v1/1/${radio}${input}`;

    console.log(urlToFetch);
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
          value="filter.php?i="
          onChange={ (e) => setRadio(e.target.value) }
        />
        Ingrediente
      </label>
      <label htmlFor="name">
        <input
          name="search-type"
          id="name"
          type="radio"
          data-testid="name-search-radio"
          value="search.php?s="
          onChange={ (e) => setRadio(e.target.value) }
        />
        Nome
      </label>
      <label htmlFor="first-letter">
        <input
          name="search-type"
          id="first-letter"
          type="radio"
          data-testid="first-letter-search-radio"
          value="search.php?f="
          onChange={ (e) => setRadio(e.target.value) }
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

SearchBar.propTypes = {
  fetchType: PropTypes.string,
}.isRequired;
