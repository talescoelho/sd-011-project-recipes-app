import React, { useState } from 'react';
import {
  fetchMealsIngredient,
  fetchMealsLetter,
  fetchMealsName,
} from '../services/MealApiService';

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState({
    searchText: '',
    filterRadio: 'ingredient',
  });// estado dos valores setados pelos inputs

  function handleGenericInput({ target: { name, value } }) { // função generica para pegar os valores do input
    setSearchInput({ ...searchInput, [name]: value });
  }

  async function handleSearch() {
    const { searchText, filterRadio } = searchInput;
    if (filterRadio === 'ingredient') {
      const ingredients = await fetchMealsIngredient(searchText);
      return console.log(ingredients);
    }
    if (filterRadio === 'name') {
      const mealsName = await fetchMealsName(searchText);
      return console.log(mealsName);
    }
    if (filterRadio === 'firstLetter') {
      if (searchText.length > 1) {
        return alert('Sua busca deve conter somente 1 (um) caracter');
      }
      const fisrtName = await fetchMealsLetter(searchText);
      return console.log(fisrtName);
    }
  }

  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        name="searchText"
        onChange={ handleGenericInput }
      />
      <label htmlFor="search-ingredients">
        Ingredientes
        <input
          id="search-ingredients"
          type="radio"
          data-testid="ingredient-search-radio"
          name="filterRadio"
          value="ingredient"
          onChange={ handleGenericInput }
        />
      </label>
      <label htmlFor="search-name">
        Nome
        <input
          id="search-name"
          type="radio"
          data-testid="name-search-radio"
          name="filterRadio"
          value="name"
          onChange={ handleGenericInput }
        />
      </label>
      <label htmlFor="search-firstLetter">
        Primeira Letra
        <input
          id="search-firstLetter"
          type="radio"
          data-testid="first-letter-search-radio"
          name="filterRadio"
          value="firstLetter"
          onChange={ handleGenericInput }
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        disabled={ (searchInput.searchText.length === 0) }
        onClick={ handleSearch }
      >
        Buscar
      </button>
    </div>
  );
}
