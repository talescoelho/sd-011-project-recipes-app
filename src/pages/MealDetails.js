import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRecipeDetailsAPIAction, fetchRecipesAPIAction } from '../redux/actions';
import objToArryOfObj from '../helper/objToArryOfObj';
import FavBtn from '../components/FavBtn';
import shareIcon from '../images/shareIcon.svg';

const URL_TO_DRINKS_RECIPES = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const SIX_CARDS = 6;

function MealDetails(
  { recipesData, recipeDetailsData,
    fetchDetails, fetchRecipes, match },
) {
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
    const { strMeal, strMealThumb, strCategory, strInstructions, strYoutube } = data;
    const ingredientsAndMesure = objToArryOfObj(data);

    return (
      <div>
        {console.log(ingredientsAndMesure)}
        DETALHES
        <img src={ strMealThumb } alt={ strMeal } data-testid="recipe-photo" />
        <h1 data-testid="recipe-title">{ strMeal }</h1>
        <button type="button" data-testid="share-btn">
          <img src={ shareIcon } alt="share icon" />
        </button>
        <FavBtn data={ data } recipeType="meals" />
        <span data-testid="recipe-category">{ strCategory }</span>
        {ingredientsAndMesure
          .map((ingredient, index) => (
            <p key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
              {`${ingredient.name} ${ingredient.measure}`}
            </p>
          ))}
        <p data-testid="instructions">{strInstructions}</p>
        <iframe
          data-testid="video"
          src={ strYoutube.split('watch?v=').join('embed/') }
          title="Embedded youtube"
        />
        {recipesData.drinks
          .map((recipe, index) => (index < SIX_CARDS
            ? (<p data-testid={ `${index}-recomendation-card` } key={ index }>{recipe.strDrink}</p>)
            : ''))}
        <button type="button" data-testid="start-recipe-btn">Começar Reiceita</button>
      </div>
    );
  }
  return (
    <span>Loading</span>
  );
}

const mapStateToProps = (state) => ({
  recipeType: state.RecipesReducer.recipeType,
  recipesData: state.RecipesReducer.recipesData,
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
