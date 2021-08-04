import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from '../components/FavoriteButton';
import ShareButton from '../components/ShareButton';

function loadLocalStorage(setSavedRecipe) {
  if (localStorage.inProgressRecipes) {
    const localJson = JSON.parse(localStorage.getItem('inProgressRecipes'));
    setSavedRecipe(localJson);
  }
}

function handleClick({ target }, items, newItems) {
  const { data, foodType } = items;
  const { savedRecipe, recipe, idRecipe, setSavedRecipe } = newItems;
  if (target.checked) {
    target.parentNode.className = 'teste';
    if (!savedRecipe[recipe][data[foodType][0][idRecipe]]) {
      setSavedRecipe({
        ...savedRecipe,
        [recipe]: { [data[foodType][0][idRecipe]]: [target.name] },
      });
    } else {
      setSavedRecipe({
        ...savedRecipe,
        [recipe]: { [data[foodType][0][idRecipe]]: [
          ...savedRecipe[recipe][data[foodType][0][idRecipe]],
          target.name] },
      });
    }
  } else {
    target.parentNode.className = '';
    setSavedRecipe({
      ...savedRecipe,
      [recipe]: { [data[foodType][0][idRecipe]]: [
        ...savedRecipe[recipe][data[foodType][0][idRecipe]]
          .filter((value) => value !== target.name)] },
    });
  }
}

export default function FoodsInProgress() {
  const [data, setData] = useState({});
  const idReceita = window.location.pathname.split('/')[2];
  const [savedRecipe, setSavedRecipe] = useState({
    cocktails: {},
    meals: {},
  });
  let foodType = 'meals';
  let recipe = 'meals';
  let type = 'comida';
  let idRecipe = 'idMeal';

  if (window.location.pathname.split('/')[1] === 'bebidas') {
    foodType = 'drinks';
    recipe = 'cocktails';
    type = 'bebida';
    idRecipe = 'idDrink';
  }

  const fetchComidas = (endPointFetch, setState) => {
    fetch(endPointFetch)
      .then((resolve) => resolve.json())
      .then((response) => setState(response));
  };

  useEffect(() => {
    loadLocalStorage(setSavedRecipe);
  }, []);

  useEffect(() => {
    localStorage.setItem('inProgressRecipes', JSON.stringify(savedRecipe));
  }, [savedRecipe]);

  useEffect(() => {
    const page = window.location.pathname.split('/')[1];
    if (page === 'comidas') {
      fetchComidas(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idReceita}`, setData);
    } else {
      fetchComidas(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceita}`, setData);
    }
  }, [idReceita]);

  if (!data[foodType]) {
    return (<p>Carregando</p>);
  }

  let food;
  let strType;

  if (data.meals) {
    [food] = data[foodType];
    strType = 'strMeal';
  } else {
    [food] = data.drinks;
    strType = 'strDrink';
  }

  const ingredients = Object.keys(food).filter((value) => value.includes('strIngredient'))
    .filter((ingredient) => food[ingredient]);

  const items = { idReceita, type, data, foodType };
  const newItems = { savedRecipe, recipe, idRecipe, setSavedRecipe };
  const verifyrecipe = savedRecipe[recipe][data[foodType][0][idRecipe]] || false;

  return (
    <div>
      <div className="in-progress-card">
        <h3 data-testid="recipe-title">
          { food[strType] }
        </h3>
        <img
          src={ food[`${strType}Thumb`] }
          alt={ food[strType] }
          data-testid="recipe-photo"
        />
        <h4
          data-testid="recipe-category"
        >
          { strType === 'strMeal' ? 'Comida' : 'Bebida' }
        </h4>
        <ul>
          { ingredients.map((ingredient, index) => (
            <li key={ index } data-testid={ `${index}-ingredient-step` }>
              <label
                htmlFor={ food[ingredient] }
                className={ verifyrecipe
                  && savedRecipe[recipe][data[foodType][0][idRecipe]]
                    .includes(food[ingredient]) ? 'teste' : '' }
              >
                <input
                  type="checkbox"
                  id={ food[ingredient] }
                  name={ food[ingredient] }
                  onClick={ (event) => handleClick(event, items, newItems) }
                  defaultChecked={ verifyrecipe
                    && savedRecipe[recipe][data[foodType][0][idRecipe]]
                      .includes(food[ingredient]) }
                />
                { food[ingredient] }
              </label>
            </li>
          )) }
        </ul>
        <p data-testid="instructions">
          { food.strInstructions }
        </p>
        <Link to="/receitas-feitas">
          <button
            type="button"
            data-testid="finish-recipe-btn"
            disabled={ ingredients.length !== verifyrecipe.length }
          >
            Finalizar
          </button>
        </Link>
        <ShareButton />
        <FavoriteButton items={ items } />
      </div>
    </div>
  );
}
