import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router';

export default function RecipeButton({ state }) {
  const history = useHistory();
  const { pathname } = history.location;
  if (!state) {
    return (
      <button
        type="button"
        className="startButton"
        data-testid="start-recipe-btn"
        onClick={ () => history.push(`${pathname}/in-progress`) }
      >
        Iniciar Receita
      </button>
    );
  }
  if (state === 'inProgress') {
    return (
      <button
        type="button"
        className="startButton"
        data-testid="start-recipe-btn"
        onClick={ () => history.push(`${pathname}/in-progress`) }
      >
        Continuar Receita
      </button>
    );
  }
  return <h3>Finalizada</h3>;
}

RecipeButton.propTypes = {
  state: PropTypes.string.isRequired,
};
