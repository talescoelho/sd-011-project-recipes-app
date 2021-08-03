import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import FetchApi from '../services/ApiFetch';

export default function SearchBar({ searchTrigger }) {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');
  const [radioOption, setRadioOption] = useState('ingrediente');

  async function checkBoxSearch() {
    const results = await FetchApi(searchTrigger, radioOption, inputValue);
    dispatch({
      type: 'MODIFY_SEARCH_RESULTS',
      payload: results,
    });
    console.log(results);
    return results;
  }

  return (
    <form action="">
      <label htmlFor="search-input">
        <input
          data-testid="search-input"
          onChange={ (event) => setInputValue(event.target.value) }
        />
      </label>
      <label htmlFor="checkBox">
        Ingrediente:
        <input
          name="checkBox"
          value="ingrediente"
          type="radio"
          data-testid="ingredient-search-radio"
          defaultChecked
          onClick={ (event) => setRadioOption(event.target.value) }
        />
        Nome:
        <input
          value="nome"
          name="checkBox"
          type="radio"
          data-testid="name-search-radio"
          onClick={ (event) => setRadioOption(event.target.value) }
        />
        Primeira Letra
        <input
          value="primeiraLetra"
          name="checkBox"
          type="radio"
          data-testid="first-letter-search-radio"
          onClick={ (event) => setRadioOption(event.target.value) }
        />
      </label>
      <input
        type="button"
        value="Buscar"
        data-testid="exec-search-btn"
        onClick={ () => checkBoxSearch() }
      />
    </form>
  );
}

SearchBar.propTypes = {
  searchTrigger: PropTypes.string.isRequired,
};
