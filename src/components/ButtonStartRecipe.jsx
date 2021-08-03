import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

function ButtonStartRecipe({ id }) {
  const [disabled, setDisabled] = useState(false);
  const [btnName, setBtnName] = useState('Iniciar Receita');
  const history = useHistory();
  const location = useLocation();

  const handleButtonStartRecipe = (recipeId) => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    const inProgress = JSON.parse(localStorage.getItem('inProgress'));
    if (doneRecipes && doneRecipes.id === recipeId) {
      setDisabled(true);
    }
    if (inProgress && inProgress.id === recipeId) {
      setDisabled(false);
      setBtnName('Continuar Receita');
    }
  };

  useEffect(() => {
    handleButtonStartRecipe(id);
  }, [id]);

  const handleStartClickBtn = () => {
    if (location.pathname.includes('comidas')) {
      history.push(`/comidas/${id}/in-progress`);
    }
    if (location.pathname.includes('bebidas')) {
      history.push(`/bebidas/${id}/in-progress`);
    }
  };

  return (
    <button
      type="button"
      className="details-btn"
      disabled={ disabled }
      onClick={ () => { handleStartClickBtn(); } }
    >
      { btnName }
    </button>
  );
}

export default ButtonStartRecipe;
