import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRecipeDetailsAPIAction } from '../redux/actions';
import ThumbDetails from '../components/ThumbDetails';
import ShareBtn from '../components/ShareBtn';
import FavBtn from '../components/FavBtn';
import IngredientsCheckList from '../components/IngredientsCheckList';
import objToArryOfObj from '../helper/objToArryOfObj';

const checkInProgressRecipes = (type, id) => {
  if (localStorage.inProgressRecipes
    && JSON.parse(localStorage.inProgressRecipes)[type]
    && JSON.parse(localStorage.inProgressRecipes)[type][id]) {
    return true;
  }
  return false;
};

const generateProgressRecipe = (type, id, ingredients) => {
  if (localStorage.inProgressRecipes) {
    const progressRecipes = JSON.parse(localStorage.inProgressRecipes);
    const newProgressRecipes = {
      ...progressRecipes, [type]: { ...progressRecipes[type], [id]: ingredients } };
    localStorage.inProgressRecipes = JSON.stringify(newProgressRecipes);
  } else {
    localStorage
      .setItem('inProgressRecipes', JSON.stringify({ [type]: { [id]: ingredients } }));
  }
};

const checkToGenerateProgress = (type, id, data) => {
  if (!checkInProgressRecipes(type, id)) {
    const ingredients = objToArryOfObj(data);
    generateProgressRecipe(type, id, ingredients);
  }
};

function DrinksInProgress({ fetchDetails, recipeDetailsData, match }) {
  const { id } = match.params;

  useEffect(() => {
    const getDrinkDetails = async () => {
      await fetchDetails(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    };
    getDrinkDetails();
  }, [fetchDetails, id]);

  if (recipeDetailsData.drinks) {
    const { drinks } = recipeDetailsData;
    const data = drinks[0];
    const { strDrink, strDrinkThumb, strCategory } = data;
    checkToGenerateProgress('cocktails', id, data);
    return (
      <div>
        <ThumbDetails thumb={ strDrinkThumb } />
        <h1 data-testid="recipe-title">{ strDrink }</h1>
        <ShareBtn url={ (match.url).replace('/in-progress', '') } />
        <FavBtn data={ data } recipeType="drinks" />
        <span data-testid="recipe-category">{ strCategory }</span>
        <IngredientsCheckList
          recipeType="cocktails"
          id={ id }
          data={ data }
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

DrinksInProgress.propTypes = {
  fetchDetails: PropTypes.func,
  recipeDetailsData: PropTypes.object,
  match: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(DrinksInProgress);
