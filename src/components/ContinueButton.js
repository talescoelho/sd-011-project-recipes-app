import React from 'react';
import { PropTypes } from 'prop-types';

export default function ContinueButton({ inProgressRecipes }) {
  if (inProgressRecipes) {
    return (
      <button
        className="btnFixed"
        data-testid="start-recipe-btn"
        type="button"
      >
        Continuar Receita
      </button>
    );
  }
  return (null);
}

ContinueButton.propTypes = {
  inProgressRecipes: PropTypes.bool,
}.isRequired;
