import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import DetailsContext from '../context/detailsContext';

export default function RecipeButton({ state }) {
  const history = useHistory();
  const { ingredients } = useContext(DetailsContext);
  const { pathname } = history.location;
  const verify = (ingredients) ? ingredients.some((e) => e.checked === false) : false;
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
  if (state === 'in-progress') {
    return (
      <Link to="/receitas-feitas">
        <button
          type="button"
          data-testid="finish-recipe-btn"
          className="startButton"
          disabled={ verify }
        >
          Finalizar receita
        </button>
      </Link>
    );
  }
  return <h3>Finalizada</h3>;
}

RecipeButton.propTypes = {
  state: PropTypes.string.isRequired,
};
