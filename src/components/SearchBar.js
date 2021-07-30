import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';

function SearchBar({ title }) {
  const [inputIngredient, setinputIngredient] = useState(false);
  const [inputName, setinputName] = useState(false);
  const [inputFirstLetter, setinputFirstLetter] = useState(false);
  const [fetchUrl, setfetchUrl] = useState('');
  const [search, setSearch] = useState('');

  const { setCatalog } = useContext(GlobalContext);
  const history = useHistory();

  function RedirectDetails(foods) {
    console.log(foods);
    if (foods.drinks.length === 1 || foods.meals.length === 1) {
      if (foods.meals[0].idMeal) {
        const { idMeal } = foods[0];
        // push(`/comidas/${idMeal}`);
        history.push({
          pathname: `/comidas/${idMeal}`,
        });
      }
      if (foods.drinks[0].idDrink) {
        const { idDrink } = foods[0];
        // push(`/bebidas/${idDrink}`);
        history.push({
          pathname: `/bebidas/${idDrink}`,
        });
      }
    }
  }

  async function fetchAPI() {
    const response = await fetch(fetchUrl);
    const result = await response.json();
    setCatalog(result);
    console.log(result);
    RedirectDetails(result);
  }

  function searchFood() {
    if (search.length > 1 && inputFirstLetter) {
      alert('Sua busca deve conter somente 1 (um) caracter');
    }
    fetchAPI();
  }

  useEffect(() => {
    if (title === 'Comidas') {
      const defaultUrl = 'https://www.themealdb.com/api/json/v1/1/';
      if (inputIngredient) {
        setfetchUrl(`${defaultUrl}filter.php?i=${search}`);
      } if (inputName) {
        setfetchUrl(`${defaultUrl}search.php?s=${search}`);
      }
      if (inputFirstLetter) {
        setfetchUrl(`${defaultUrl}search.php?f=${search}`);
      }
    }
    if (title === 'Bebidas') {
      const defaultUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';
      if (inputIngredient) {
        setfetchUrl(`${defaultUrl}filter.php?i=${search}`);
      } if (inputName) {
        setfetchUrl(`${defaultUrl}search.php?s=${search}`);
      }
      if (inputFirstLetter) {
        setfetchUrl(`${defaultUrl}search.php?f=${search}`);
      }
    }
  }, [search, inputFirstLetter, inputName, inputIngredient, title]);
  return (
    <div>
      <input
        onChange={ (e) => setSearch(e.target.value) }
        data-testid="search-input"
        className="search-bar"
        type="search"
        placeholder="Pesquisar..."
      />
      <div>
        <label htmlFor="ingredient">
          Ingrediente
          <input
            onChange={ () => {
              setinputFirstLetter(false);
              setinputName(false);
              setinputIngredient(!inputIngredient);
            } }
            name="inputRadio"
            type="radio"
            data-testid="ingredient-search-radio"
            id="ingredient"
          />
        </label>
        <label htmlFor="name">
          Nome
          <input
            onChange={ () => {
              setinputIngredient(false);
              setinputFirstLetter(false);
              setinputName(!inputName);
            } }
            name="inputRadio"
            type="radio"
            id="name"
            data-testid="name-search-radio"
          />
        </label>
        <label htmlFor="first-letter">
          Primeira Letra
          <input
            onChange={ () => {
              setinputName(false);
              setinputIngredient(false);
              setinputFirstLetter(!inputFirstLetter);
            } }
            name="inputRadio"
            type="radio"
            id="first-letter"
            data-testid="first-letter-search-radio"
          />
        </label>
      </div>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ searchFood }
      >
        Buscar
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  title: PropTypes.string,
  history: PropTypes.node,
}.isRequired;

export default SearchBar;
