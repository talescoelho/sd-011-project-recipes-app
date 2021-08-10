import React from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import { verifyRecipeIsDone, checkRecipeInProgress } from '../functions';

export default function DetailsButton() {
  const { id } = useParams();
  const history = useHistory();
  const url = history.location.pathname;
  return (
    <div className="container-start-button">
      <button
        onClick={ () => history.push(`${url.replace(/[0-9]/ig, '')}${id}/in-progress`) }
        className="button-start"
        style={ { display: verifyRecipeIsDone(id) ? 'none' : 'block' } }
        type="button"
        data-testid="start-recipe-btn"
      >
        {checkRecipeInProgress(url, id) ? 'Continuar Receita' : 'Iniciar Receita' }
      </button>
    </div>
  );
}
