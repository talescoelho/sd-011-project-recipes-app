import React, { useState, useEffect } from 'react';
import '../styles/StartRecipeBtn.css';
import { useHistory, useLocation } from 'react-router-dom';

function ButtonStartRecipe({ id }) {
  const [disabled, setDisabled] = useState(false);
  const [btnName, setBtnName] = useState(true);
  const history = useHistory();
  const location = useLocation();

  const handleButtonStartRecipe = (id) => {
    const doneRecipesLocal = JSON.parse(localStorage.getItem('doneRecipes'));
    const doneRecipes = doneRecipesLocal && doneRecipesLocal
      .some((receita) => receita.id === id);
    const inProgressLocal = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const inProgress = inProgressLocal && inProgressLocal
      .find((receita) => receita.id === id);
    if (doneRecipes) {
      setDisabled(true);
    }
    if (inProgress) {
      setDisabled(false);
      setBtnName(false);
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
      disabled={ disabled }
      className="startRecipe-btn"
      data-testid="start-recipe-btn"
      onClick={ () => { handleStartClickBtn(); } }
    >
      { btnName ? 'Iniciar Receita' : 'Continuar Receita' }
    </button>
  );
}

export default ButtonStartRecipe;
