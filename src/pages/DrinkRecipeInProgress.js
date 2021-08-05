import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getDrinkDetail } from '../services/theCockTailAPI';
import { saveInProgressDrinkRecipes } from '../helpers/handleLocalStorage';
import MainContext from '../context/MainContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function DrinkRecipeInProgress({ match: { params: { id } } }) {
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes')) || [];
  const favoriteRecipes = JSON.parse(
    localStorage.getItem('favoriteRecipes'),
  ) || [{ id: '' }];
  const cocktailsIngredients = inProgressRecipes.cocktails
    ? inProgressRecipes.cocktails[id] || []
    : [];
  const [recipe, setRecipe] = useState({});
  const [copy, setCopy] = useState(false);
  const [usedIngredients, setUsedIngredients] = useState(cocktailsIngredients);
  const { setLoading } = useContext(MainContext);

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

  function shareLink() {
    const sliceNumber = -12;
    setCopy(true);
    return navigator.clipboard.writeText(window.location.href.slice(0, sliceNumber));
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
      <button
        type="button"
        data-testid="share-btn"
        onClick={ () => shareLink() }
      >
        {copy ? (
          <span>Link copiado!</span>
        ) : (<img src={ shareIcon } alt="Compartilhar" />)}
      </button>
      <button type="button">
        <img
          src={ favoriteRecipes.some(
            (favorite) => favorite.id === id,
          ) ? blackHeartIcon : whiteHeartIcon }
          alt="Favorite"
          data-testid="favorite-btn"
        />
      </button>
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
