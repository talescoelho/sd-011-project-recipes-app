import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getDrinkDetail } from '../services/theCockTailAPI';
import { saveInProgressDrinkRecipes } from '../helpers/handleLocalStorage';
import MainContext from '../context/MainContext';
import ShareButton from '../components/ShareButton';
import FavoriteButton from '../components/FavoriteButton';

function DrinkRecipeInProgress({ match: { params: { id } } }) {
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes')) || [];
  const cocktailsIngredients = inProgressRecipes.cocktails
    ? inProgressRecipes.cocktails[id] || []
    : [];
  const [recipe, setRecipe] = useState({});
  const [usedIngredients, setUsedIngredients] = useState(cocktailsIngredients);
  const { setLoading } = useContext(MainContext);
  const SLICE_NUMBER = -12;

  function listIngredients() {
    const MAX_INGREDIENTS = 20;
    const list = [];
    for (let index = 1; index <= MAX_INGREDIENTS; index += 1) {
      if (recipe[`strIngredient${index}`]) {
        list.push(
          `${recipe[`strIngredient${index}`]} - ${recipe[`strMeasure${index}`]}`,
        );
      }
    }
    return list;
  }

  function lineThroughUsedIngredients({ target }) {
    if (target.checked) {
      setUsedIngredients([...usedIngredients, target.value]);
      saveInProgressDrinkRecipes(id, [...usedIngredients, target.value]);
    } else {
      const remainingIngredients = usedIngredients
        .filter((ingredient) => ingredient !== target.value);
      setUsedIngredients(remainingIngredients);
      saveInProgressDrinkRecipes(id, remainingIngredients);
    }
  }

  useEffect(() => {
    setLoading(true);
    getDrinkDetail(id)
      .then((result) => {
        setRecipe(...result);
        setLoading(false);
      });
  }, [setRecipe, setLoading, id]);

  const { strDrinkThumb, strDrink, strCategory, strInstructions, strAlcoholic } = recipe;
  return (
    <div>
      <img src={ strDrinkThumb } data-testid="recipe-photo" alt={ strDrink } />
      <h3 data-testid="recipe-title">{ strDrink }</h3>
      <ShareButton link={ window.location.href.slice(0, SLICE_NUMBER) } />
      <FavoriteButton id={ id } />
      <p>{ strAlcoholic }</p>
      <p data-testid="recipe-category">{ strCategory }</p>
      <form>
        {
          listIngredients().map((ingredient, index) => (
            <label
              className={
                usedIngredients.includes(ingredient) ? 'ingredient-checked' : ''
              }
              htmlFor={ index }
              key={ index }
              data-testid={ `${index}-ingredient-step` }
            >
              <input
                value={ ingredient }
                checked={ usedIngredients.includes(ingredient) }
                type="checkbox"
                id={ index }
                name="ingredients"
                onClick={ lineThroughUsedIngredients }
              />
              { `${ingredient}` }
            </label>
          ))
        }
      </form>
      <p data-testid="instructions">{ strInstructions }</p>
      <Link to="/receitas-feitas">
        <button
          type="button"
          data-testid="finish-recipe-btn"
          disabled={ listIngredients().length !== usedIngredients.length }
        >
          Finalizar Receita
        </button>
      </Link>
    </div>
  );
}

DrinkRecipeInProgress.propTypes = {
  match: PropTypes.shape(PropTypes.any).isRequired,
};
export default DrinkRecipeInProgress;
