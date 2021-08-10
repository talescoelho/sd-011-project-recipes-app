import React, { useEffect, useContext } from 'react';
import IngredientsList from './IngredientList';
import RecipesContext from '../context/RecipesContext';
import ButtonsShareFav from './ButtonsShareFav';

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
        const item = `${ingredient}: ${measure}`;
        listAux.push(item);
      }
    }
    setIngredientsRecipeList(listAux);
  };

  useEffect(() => {
    getListOfIngredients();
  }, [recipe]);

  return (
    <section>
      <div className="row align-items-center">

        <div className="card border border-danger rounded mx-5 col-sm-5">
          <img
            className="img-fluid pt-3"
            data-testid="recipe-photo"
            src={ recipe.strMealThumb || recipe.strDrinkThumb }
            alt={ recipe.strMeal || recipe.strDrink }
          />
          <div className="card-inner text-center">
            <h2 className="title-recipe" data-testid="recipe-title">
              { recipe.strMeal || recipe.strDrink }
            </h2>
            <h3 className="subtitle" data-testid="recipe-category">
              { recipe.strYoutube ? recipe.strCategory : recipe.strAlcoholic }
            </h3>
          </div>
          <ButtonsShareFav />
        </div>
        <div className="col-lg-5">
          <IngredientsList />
        </div>

      </div>

      <h2 className="text-center ingredient-title">
        Instructions
      </h2>
      <p className="text-justify my-5 text-instructions" data-testid="instructions">
        { recipe.strInstructions }
      </p>

    </section>
  );
}

export default RecipeDetails;
