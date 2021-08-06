import React from 'react';
import PropTypes from 'prop-types';
// colocar o id de ingredientes do datatest
// Video so mostra para comidas - Pensar logca if
function RecipeInfos({ meal }) {

  console.log(meal.strYoutube);

  // subistituir watch?v= por embed

  return (
    <div>
      <h2>Ingredients</h2>
      <p data-testid={ `${0}-ingredient-name-and-measure` }>
        Lista dos ingredientes
      </p>
      <p data-testid="instructions">
        Texto instruções
      </p>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe data-testid="video" title="recipe Video" className="embed-responsive-item" src={ meal.strYoutube } allowFullScreen />
      </div>
    </div>
  );
}

export default RecipeInfos;

RecipeInfos.propTypes = {
  meal: PropTypes.objectOf(PropTypes.string).isRequired,
};
