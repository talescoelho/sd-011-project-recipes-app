import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRecipeDetailsAPIAction } from '../redux/actions';

function MealDetails({ recipeDetailsData, fetch }) {
  useEffect(() => {
    const getMealDetails = async () => {
      await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=53014');
    };
    getMealDetails();
  }, [fetch]);

  if (recipeDetailsData.meals) {
    const { meals } = recipeDetailsData;
    const data = meals[0];
    const { strMeal, strMealThumb } = data;

    return (
      <div>
        DETALHES
        {console.log(data)}
        <img src={ strMealThumb } alt={ strMeal } />
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
  fetch: (url) => dispatch(fetchRecipeDetailsAPIAction(url)),
});

MealDetails.propTypes = {
  fetch: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(MealDetails);
