import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import DetailsContext from '../context/detailsContext';

// const d = new Date();
// console.log(`${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`);

export default function RecipeButton({ state }) {
  const history = useHistory();
  const { ingredients } = useContext(DetailsContext);
  const { pathname } = history.location;
  const verify = (ingredients) ? ingredients.some((e) => e.checked === false) : false;
  if (!state) {
    console.log(state);
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
    console.log(state);
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
  return (
    <Link to="/receitas-feitas">
      <button
        type="button"
        className="startButton"
      >
        Receita Finalizada
      </button>
    </Link>
  );
}

RecipeButton.propTypes = {
  state: PropTypes.string.isRequired,
};
