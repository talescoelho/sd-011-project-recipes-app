import React, { useState, useContext } from 'react';
// import { useLocation, useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import getRecipes from '../services/API';
import '../styles/SearchBar.css';
import RecipesAppContext from '../context/RecipesAppContext';
import Recipes from './Recipes';
import DetailsRecipe from './DetailsRecipe';

export default function SearchBar() {
  const {
    mealRecipes,
    drinkRecipes,
    haveRecipes,
    saveMealRecipes,
    saveDrinkRecipes,
  } = useContext(RecipesAppContext);

  const [textInputValue, setTextInputValue] = useState('');
  const [radioInputValue, setRadioInputValue] = useState('');
  // const location = useLocation();
  // const history = useHistory();

  function getLocation() {
    return '/comidas';
  }
  function handlerInputText({ target }) {
    const { value } = target;
    setTextInputValue(value);
  }

  function handlerInputRadio({ target }) {
    const { value } = target;
    setRadioInputValue(value);
    getLocation();
  }

  function updateDataToSearch() {
    const path = getLocation();
    let callback;
    if (path === '/comidas') {
      callback = saveMealRecipes;
    } else {
      callback = saveDrinkRecipes;
    }
    getRecipes(textInputValue, radioInputValue, path, callback);
  }

  function renderRecipes() {
    if (mealRecipes.length > 1 || drinkRecipes.length > 1) {
      return <Recipes path={ getLocation() } />;
    }

    if (mealRecipes.length === 1 || drinkRecipes.length === 1) {
      const location = getLocation();
      if (location === '/comidas') {
        const id = `/${mealRecipes[0].idMeal}`;
        // history.push(id);
      } else {
        const id = `/${mealRecipes[0].idDrink}`;
        // history.push(id);
      }
    }
  }
  // useEffect(renderRecipes, [mealRecipes, drinkRecipes]);

  return (
    <section className="recipes-filter-section">

      <nav className="search-bar-nav">
        <input
          className="input-text-search-bar"
          type="text"
          data-testid="search-input"
          onChange={ (e) => handlerInputText(e) }
        />
        <div className="search-radio-div">
          <label htmlFor="ingredient-search-radio">
            <input
              type="radio"
              name="search-radio"
              data-testid="ingredient-search-radio"
              onClick={ (e) => handlerInputRadio(e) }
              value="i"
            />
            Ingrediente
          </label>
          <label htmlFor="name-search-radio">
            <input
              type="radio"
              name="search-radio"
              data-testid="name-search-radio"
              onClick={ (e) => handlerInputRadio(e) }
              value="s"
            />
            Nome
          </label>
          <label htmlFor="first-letter-search-radio">
            <input
              type="radio"
              name="search-radio"
              data-testid="first-letter-search-radio"
              onClick={ (e) => handlerInputRadio(e) }
              value="f"
            />
            Primeira letra
          </label>
        </div>
        <Button variant="success">
          <button
            type="button"
            data-testid="exec-search-btn"
            onClick={ () => updateDataToSearch() }
          >
            Buscar
          </button>
        </Button>
      </nav>
      {
        haveRecipes && renderRecipes()
      }
    </section>
  );
}
