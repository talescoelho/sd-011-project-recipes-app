import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

function ButtonStartMeal({ id, type }) {
  const [inProgressRecipes, setInProgressRecipes] = useState(false);
  const [showStartBtn, setShowStartBtn] = useState(true);
  const history = useHistory();

  function handleStartRecipe() {
    console.log('inProgress');
    setInProgressRecipes(true);
  }

  useEffect(() => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    if ((doneRecipes !== null)
      && (doneRecipes.some((doneRecipe) => doneRecipe.id === id))) {
      setShowStartBtn(false);
    }
  }, [id]);
  return (
    <div>
      { (showStartBtn) && (
        <button
          className="button-start"
          type="button"
          data-testid="start-recipe-btn"
          onClick={ () => {
            history
              .push(`/${(type === 'meals' ? 'comidas' : 'bebidas')}/${id}/in-progress`);
            handleStartRecipe();
          } }
        >
          { inProgressRecipes ? 'Continuar Receita' : 'Iniciar Receita'}
          {' '}
          {/* requisito 40 passara depois que implementado o inprogress */}
        </button>
      ) }
    </div>

  );
}

ButtonStartMeal.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ButtonStartMeal;
