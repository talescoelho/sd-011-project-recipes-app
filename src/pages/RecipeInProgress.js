import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRecipeDetail, setRecipeIngredients } from '../actions/selectedRecipe';
import FinishRecipeButton from '../components/FinishRecipeButton';

function RecipeInProgress({
  match: { params: { id }, path },
  recipe, ingredients,
  dispatchFetchRecipe, dispatchSetIngredients,
}) {
  React.useEffect(() => {
    const type = path.replace(/(^\/)|(\/)(:|\w|-)+/g, '');
    dispatchFetchRecipe(type, id);
  }, [dispatchFetchRecipe, id, path]);

  React.useEffect(() => {
    (() => {
      const ingredientsCount = 20;
      const ingredientsList = [];

      for (let index = 1; index <= ingredientsCount; index += 1) {
        const ingredient = recipe[`strIngredient${index}`];
        const measure = recipe[`strMeasure${index}`];

        if (
          recipe[`strIngredient${index}`]
          && recipe[`strIngredient${index}`].length > 0
        ) {
          ingredientsList.push([ingredient, measure]);
        } else break;
      }

      dispatchSetIngredients(ingredientsList);
    })();
  }, [recipe, dispatchSetIngredients]);

  const details = {
    strThumb: recipe.strDrinkThumb || recipe.strMealThumb,
    str: recipe.strDrink || recipe.strMeal,
    strCategory: recipe.strCategory,
    strInstructions: recipe.strInstructions,
  };

  return (
    <main data-testid="recipes-page">
      <img src={ details.strThumb } alt="" data-testid="recipe-photo" />
      <h1 data-testid="recipe-title">{ details.str }</h1>
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button type="button" data-testid="favorite-btn">Favoritar</button>
      <p data-testid="recipe-category">{ details.strCategory }</p>
      <ul>
        {
          ingredients.map(([ingredient, measure], index) => (
            <li key={ ingredient } data-testid={ `${index}-ingredient-step` }>
              <label htmlFor={ `ingredient${index + 1}` }>
                <input type="checkbox" id={ `ingredient${index + 1}` } />
                { `${ingredient} - ${measure}` }
              </label>
            </li>
          ))
        }
      </ul>
      <p data-testid="instructions">
        { details.strInstructions }
      </p>
      <FinishRecipeButton />
    </main>
  );
}

const mapStateToProps = ({ selectedRecipeReducer: { recipe, ingredients } }) => ({
  recipe,
  ingredients,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchRecipe: (type, id) => dispatch(fetchRecipeDetail(type, id)),
  dispatchSetIngredients: (ingredients) => dispatch(setRecipeIngredients(ingredients)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeInProgress);

RecipeInProgress.defaultProps = {
  recipe: {},
  ingredients: [],
};

RecipeInProgress.propTypes = {
  dispatchFetchRecipe: PropTypes.func,
  dispatchSetIngredients: PropTypes.func,
}.isRequired;
