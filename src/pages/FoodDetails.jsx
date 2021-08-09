import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { func, shape, string } from 'prop-types';
import RecipeInstructions from '../components/common/RecipeInstructions';
import StartRecipeBtn from '../components/common/StartRecipeBtn';
import { requestMealDetails } from '../redux/actions/recipeDetailsActions';

const FoodDetails = ({ match, dispatch }) => {
  const { params: { id }, url } = match;

  useEffect(() => {
    dispatch(requestMealDetails(id));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div>Pagina de Detalhe de Comida</div>
      <RecipeInstructions strInstructions="Send Recipe Instructions by props" />
      <StartRecipeBtn routeInfo={ { id, url } } />
    </>
  );
};

FoodDetails.propTypes = {
  dispatch: func,
  match: shape({
    params: shape({
      id: string,
    }),
    url: string,
  }),
}.isRequired;

export default connect(mapStateToProps)(FoodDetails);
