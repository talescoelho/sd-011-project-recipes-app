import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import '../css/StartRecipeButton.css';

function StartRecipeButton({ type, id }) {
  const history = useHistory();

  return (
    <button
      type="button"
      className="start-recipe-btn"
      data-testid="start-recipe-btn"
      onClick={ () => history.push(`/${type}/${id}/in-progress`) }
    >
      Iniciar Receita
    </button>
  );
}

StartRecipeButton.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default StartRecipeButton;
