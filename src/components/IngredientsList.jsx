import React from 'react';
import PropTypes from 'prop-types';
// colocar o id de ingredientes do datatest
// Video so mostra para comidas - Pensar logca if
function IngredientsList({ meal }) {

  return (
    <div>
      <h2>Ingredients</h2>
      <p data-testid={ `${0}-ingredient-name-and-measure` }>
        Lista dos ingredientes - Fazer um map e colocar o index de cada no lugar no datatest. O map vai juntas os ingredientes em uma li ou em uma label para o checkbox
      </p>

      {(meal.strYoutube) ? (
        <div className="embed-responsive embed-responsive-16by9">
          <h2>Video</h2>
          <iframe
            src={ meal.strYoutube.replace('watch?v=', 'embed/') }
            data-testid="video"
            title="recipe Video"
            className="embed-responsive-item"
            allowFullScreen
          />
        </div>
      ) : <h2>Loading</h2>}
    </div>
  );
}

export default IngredientsList;

IngredientsList.propTypes = {
  meal: PropTypes.objectOf(PropTypes.string).isRequired,
};
