import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RecipeInstructions from '../components/common/RecipeInstructions';
import StartRecipeBtn from '../components/common/StartRecipeBtn';
import { requestDrinkDetails } from '../redux/actions/recipeDetailsActions';

const DrinkDetails = ({ match, dispatch }) => {
  const { params: { id }, url } = match;

  useEffect(() => {
    dispatch(requestDrinkDetails(id));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div>Pagina de Detalhe de Bebidas</div>
      <RecipeInstructions strInstructions="Send Recipe Instructions by props" />
      <StartRecipeBtn routeInfo={ { id, url } } />
    </>
  );
};

DrinkDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
    url: PropTypes.string,
  }).isRequired,
};

export default connect()(DrinkDetails);
