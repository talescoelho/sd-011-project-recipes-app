import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from '../context/RecipesContext';
import {
  fetchMealsByIngredient,
  fetchMealsByName,
  fetchMealsByFirstLetter } from '../services/meailAPI';
import {
  fetchCocktailsByIngredient,
  fetchCocktailsByName,
  fetchCocktailsByFirstLetter,
} from '../services/cocktailAPI';

function SearchBar({ recipeType }) {
  const { setDrinksData, setMealsData } = useContext(RecipesContext);

  const [searchInput, setSearchInput] = useState('');
  const [searchRadio, setSearchRadio] = useState('');
  const maxRecipes = 12;
  const firstLetterSearch = 'first-letter-search';

  const getMeals = async () => {
    let response = '';
    if (searchRadio === firstLetterSearch && searchInput.length > 1) {
      // eslint-disable-next-line no-alert
      alert('Sua busca deve conter somente 1 (um) caracter');
    }
    if (searchRadio === 'ingredient-search') {
      response = await fetchMealsByIngredient(searchInput);
    }
    if (searchRadio === 'name-search') {
      response = await fetchMealsByName(searchInput);
    }
    if (searchRadio === firstLetterSearch) {
      response = await fetchMealsByFirstLetter(searchInput);
    }
    if (response !== null && searchRadio !== '') {
      console.log(response);
      return setMealsData(response.slice(0, maxRecipes));
    }
    // eslint-disable-next-line no-alert
    alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  };

  const getDrinks = async () => {
    let response = '';
    if (searchRadio === firstLetterSearch && searchInput.length > 1) {
      // eslint-disable-next-line no-alert
      alert('Sua busca deve conter somente 1 (um) caracter');
    }
    if (searchRadio === 'ingredient-search') {
      response = await fetchCocktailsByIngredient(searchInput);
    }
    if (searchRadio === 'name-search') {
      response = await fetchCocktailsByName(searchInput);
    }
    if (searchRadio === firstLetterSearch) {
      response = await fetchCocktailsByFirstLetter(searchInput);
    }
    if (response !== null && searchRadio !== '') {
      console.log(response);
      return setDrinksData(response.slice(0, maxRecipes));
    }
    // eslint-disable-next-line no-alert
    alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  };

  const handleTextInput = (event) => {
    const { value } = event.target;
    setSearchInput(value);
  };

  const handleRadioInput = (event) => {
    const { id } = event.target;
    setSearchRadio(id);
  };

  const handleClickButton = () => {
    if (recipeType === 'meals') {
      getMeals();
    } else {
      getDrinks();
    }
  };

  return (
    <div className="container">
      <div className="search-content-container">
        <label htmlFor="search-input">
          <input
            className="input-field-search"
            type="text"
            name="search-input"
            id="search-input"
            data-testid="search-input"
            placeholder="Buscar Receita..."
            value={ searchInput }
            onChange={ handleTextInput }
          />
        </label>
        <div className="search-content-options">
          <label htmlFor="ingredient-search" className="search-label">
            <input
              type="radio"
              data-testid="ingredient-search-radio"
              id="ingredient-search"
              name="radio-filter"
              onChange={ handleRadioInput }
            />
            Ingrediente
          </label>

          <label htmlFor="name-search" className="search-label">
            <input
              type="radio"
              data-testid="name-search-radio"
              id="name-search"
              name="radio-filter"
              onChange={ handleRadioInput }
            />
            Nome
          </label>

          <label htmlFor="first-letter-search" className="search-label">
            <input
              type="radio"
              data-testid="first-letter-search-radio"
              id="first-letter-search"
              name="radio-filter"
              onChange={ handleRadioInput }
            />
            Primeira letra
          </label>
        </div>
        <div className="search-button-container">
          <button
            className="button-search"
            type="button"
            data-testid="exec-search-btn"
            onClick={ handleClickButton }
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  recipeType: PropTypes.string.isRequired,
};

export default SearchBar;
