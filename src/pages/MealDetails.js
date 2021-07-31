import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRecipeDetailsAPIAction, fetchRecipesAPIAction } from '../redux/actions';
import objToArryOfObj from '../helper/objToArryOfObj';

const URL_TO_DRINKS_RECIPES = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

function MealDetails({ recipeDetailsData, fetchDetails, fetchRecipes, match }) {
  const { id } = match.params;

  useEffect(() => {
    const getMealDetails = async () => {
      await fetchRecipes();
      await fetchDetails(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    };
    getMealDetails();
  }, [fetchDetails, fetchRecipes, id]);

  if (recipeDetailsData.meals) {
    const { meals } = recipeDetailsData;
    const data = meals[0];
    const { strMeal, strMealThumb, strCategory } = data;
    const ingredientsAndMesure = objToArryOfObj(data);

    return (
      <div>
        {console.log(ingredientsAndMesure)}
        DETALHES
        <img src={ strMealThumb } alt={ strMeal } data-testid="recipe-photo" />
        <h1 data-testid="recipe-title">{ strMeal }</h1>
        <button type="button" data-testid="share-btn">SHARE</button>
        <button type="button" data-testid="favorite-btn">FAV</button>
        <span data-testid="recipe-category">{ strCategory }</span>
        {ingredientsAndMesure
          .map((ingredient, index) => (
            <p key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
              {`${ingredient.name} ${ingredient.measure}`}
            </p>
          ))}
      </div>
    );
  }
  return (
    <span>Loading</span>
  );
}

const mapStateToProps = (state) => ({
  recipeType: state.RecipesReducer.recipeType,
  recipeDetailsData: state.RecipesReducer.recipeDetailsData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDetails: (url) => dispatch(fetchRecipeDetailsAPIAction(url)),
  fetchRecipes: () => dispatch(fetchRecipesAPIAction(URL_TO_DRINKS_RECIPES, 'drinks')),
});

MealDetails.propTypes = {
  fetch: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(MealDetails);
