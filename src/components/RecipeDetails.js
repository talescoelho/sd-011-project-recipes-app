import React, { useEffect, useContext } from 'react';
import IngredientsList from './IngredientList';
import ShareIcon from '../images/shareIcon.svg';
import FavIcon from '../images/whiteHeartIcon.svg';
import RecipesContext from '../context/RecipesContext';

function RecipeDetails() {
  const { recipeDetail: recipe, setIngredientsRecipeList } = useContext(RecipesContext);
  const itemValidation = (item) => {
    if (item !== null && item !== '' && item !== undefined) {
      return true;
    }
    return false;
  };

  const getListOfIngredients = () => {
    const limit = 20;
    const listAux = [];
    for (let index = 1; index <= limit; index += 1) {
      const ingredient = recipe[`strIngredient${index}`];
      const measure = recipe[`strMeasure${index}`];
      if (itemValidation(ingredient) && itemValidation(measure)) {
        const item = `${ingredient} ${measure}`;
        listAux.push(item);
      }
    }
    setIngredientsRecipeList(listAux);
  };

  useEffect(() => {
    getListOfIngredients();
  }, [recipe]);

  return (
    <article>
      <div>
        <img
          data-testid="recipe-photo"
          src={ recipe.strMealThumb || recipe.strDrinkThumb }
          alt={ recipe.strMeal || recipe.strDrink }
        />
        <h2 data-testid="recipe-title">{ recipe.strMeal || recipe.strDrink }</h2>
        <h3 data-testid="recipe-category">
          { recipe.strYoutube ? recipe.strCategory : recipe.strAlcoholic }
        </h3>
        <div className="buttons">
          <button type="button">
            <img data-testid="share-btn" src={ ShareIcon } alt="Share Icon" />
          </button>
          <button type="button">
            <img data-testid="favorite-btn" src={ FavIcon } alt="Fav Icon" />
          </button>
        </div>
        <IngredientsList />
        <h2>
          Instructions
        </h2>
        <p data-testid="instructions">{ recipe.strInstructions }</p>
      </div>
    </article>
  );
}

export default RecipeDetails;
