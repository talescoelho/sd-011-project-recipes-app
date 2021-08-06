import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

export default function ContinueButton({ idReceita, page, storageType }) {
  const [recipeExist, setRecipeExist] = useState(false);

  useEffect(() => {
    if (localStorage.inProgressRecipes) {
      const recipeInProgress = JSON.parse(localStorage.inProgressRecipes);
      if (recipeInProgress[storageType][idReceita]) {
        setRecipeExist(true);
      }
    }
  }, [idReceita, storageType]);

  return (
    <Link to={ `/${page}/${idReceita}/in-progress` }>
      <button
        className="btnFixed"
        data-testid="start-recipe-btn"
        type="button"
      >
        { !recipeExist ? 'Iniciar Receita' : 'Continuar Receita' }
      </button>
    </Link>);
}

ContinueButton.propTypes = {
  recipeExists: PropTypes.bool,
  idReceita: PropTypes.string,
  page: PropTypes.string,
}.isRequired;
