import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

export default function ContinueButton({ recipeExists, idReceita, page }) {
  if (!recipeExists) {
    return (
      <Link to={ `/${page}/${idReceita}/in-progress` }>
        <button
          className="btnFixed"
          data-testid="start-recipe-btn"
          type="button"
        >
          Iniciar receita
        </button>
      </Link>);
  }
  return (null);
}

ContinueButton.propTypes = {
  recipeExists: PropTypes.bool,
  idReceita: PropTypes.string,
  page: PropTypes.string,
}.isRequired;
