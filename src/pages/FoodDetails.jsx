import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { func, shape, string } from 'prop-types';
import RecipeInstructions from '../components/common/RecipeInstructions';
import StartRecipeBtn from '../components/common/StartRecipeBtn';
import { requestMealDetails } from '../redux/actions/recipeDetailsActions';
import RecipeVideo from '../components/common/RecipeVideo';
import RecommendationCarousel from '../components/common/RecommendationCarousel';

const FoodDetails = ({ dispatch, match, mealDetails }) => {
  const { params: { id }, url } = match;

  useEffect(() => {
    dispatch(requestMealDetails(id));
  }, []);
  if (mealDetails.strInstructions === undefined) return (<span>Carregando...</span>);
  return (
    <>
      <div>Pagina de Detalhe de Comida</div>
      <RecipeInstructions strInstructions={ mealDetails.strInstructions } />
      <RecipeVideo strYoutube={ mealDetails.strYoutube } />
      <RecommendationCarousel url={ url } />
      <StartRecipeBtn routeInfo={ { id, url } } />
    </>
  );
};

const mapStateToProps = ({ recipeDetailsReducer }) => ({
  mealDetails: recipeDetailsReducer.meal,
});

FoodDetails.propTypes = {
  dispatch: func,
  match: shape({
    params: shape({
      id: string,
    }),
    url: string,
  }),
  mealDetails: shape({
    strInstructions: string,
  }),
}.isRequired;

export default connect(mapStateToProps)(FoodDetails);
