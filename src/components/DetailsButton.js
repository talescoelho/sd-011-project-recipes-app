import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

export default function DetailsButton({
  verifyRecipeIsDone,
  checkRecipeInProgress,
  id,
  url }) {
  const history = useHistory();
  return (
    <button
      onClick={ () => history.push(`${url.replace(/[0-9]/ig, '')}${id}/in-progress`) }
      className="button-start"
      style={ { display: verifyRecipeIsDone() ? 'none' : 'block' } }
      type="button"
      data-testid="start-recipe-btn"
    >
      {checkRecipeInProgress() ? 'Continuar Receita' : 'Iniciar Receita' }
    </button>
  );
}

DetailsButton.propTypes = {
  verifyRecipeIsDone: PropTypes.func.isRequired,
  checkRecipeInProgress: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
}.isRequired;
