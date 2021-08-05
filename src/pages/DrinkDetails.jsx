import React from 'react';
import PropTypes from 'prop-types';
import RecipeInstructions from '../components/common/RecipeInstructions';
import StartRecipeBtn from '../components/common/StartRecipeBtn';

const DrinkDetails = ({ match }) => {
  const { params: { id }, url } = match;
  return (
    <>
      <div>Pagina de Detalhe de Bebidas</div>
      <RecipeInstructions strInstructions="Send Recipe Instructions by props" />
      <StartRecipeBtn routeInfo={ { id, url } } />
    </>
  );
};

DrinkDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
    url: PropTypes.string,
  }).isRequired,
};

export default DrinkDetails;
