import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRecipeDetailsAPIAction } from '../redux/actions';
import ThumbDetails from '../components/ThumbDetails';
import ShareBtn from '../components/ShareBtn';
import FavBtn from '../components/FavBtn';
import IngredientsCheckList from '../components/IngredientsCheckList';

function MealsInProgress({ fetchDetails, recipeDetailsData, match }) {
  const { id } = match.params;

  useEffect(() => {
    const getMealDetails = async () => {
      await fetchDetails(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    };
    getMealDetails();
  }, [fetchDetails, id]);

  if (recipeDetailsData.meals) {
    const { meals } = recipeDetailsData;
    const data = meals[0];
    const { strMeal, strMealThumb, strCategory, strInstructions } = data;
    return (
      <div>
        <ThumbDetails thumb={ strMealThumb } />
        <h1 data-testid="recipe-title">{ strMeal }</h1>
        <ShareBtn url={ (match.url).replace('/in-progress', '') } />
        <FavBtn data={ data } recipeType="meals" />
        <span data-testid="recipe-category">{ strCategory }</span>
        <IngredientsCheckList
          recipeType="meals"
          id={ id }
          strInstructions={ strInstructions }
        />
      </div>
    );
  }

  return (
    <span>
      Loading...
    </span>
  );
}

const mapStateToProps = (state) => ({
  recipeDetailsData: state.RecipesReducer.recipeDetailsData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDetails: (url) => dispatch(fetchRecipeDetailsAPIAction(url)),
});

MealsInProgress.propTypes = {
  fetchDetails: PropTypes.func,
  recipeDetailsData: PropTypes.object,
  match: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(MealsInProgress);
