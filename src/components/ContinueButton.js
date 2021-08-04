import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

function ContinueButton({ inProgressRecipes, idReceita, type }) {
  if (inProgressRecipes) {
    return (
      <Link to={ `/${type}/${idReceita}/in-progress` }>
        <button
          className="btnFixed"
          data-testid="start-recipe-btn"
          type="button"
        >
          Continuar Receita
        </button>
      </Link>
    );
  }
  return (null);
}

ContinueButton.propTypes = {
  inProgressRecipes: PropTypes.bool,
}.isRequired;

export default ContinueButton;
