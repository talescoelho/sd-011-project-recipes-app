import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/StartRecipeBtn.css';
import { useHistory, useLocation } from 'react-router-dom';
import handleLocation from '../helpers/handleLocation';

function ButtonStartRecipe({ id }) {
  const history = useHistory();
  const location = useLocation();
  const [disabled, setDisabled] = useState(false);
  const [btnName, setBtnName] = useState(true);

  const handleObjectKey = () => {
    const type = handleLocation(location);
    let key = '';
    if (type === 'comidas') key = 'meals';
    if (type === 'bebidas') key = 'cocktails';
    return key;
  };

  const handleLocalStorage = (recipeId) => {
    const key = handleObjectKey();
    const doneRecipesLocal = JSON.parse(localStorage.getItem('doneRecipes'));
    const inProgressLocal = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (doneRecipesLocal[key] && doneRecipesLocal[key][recipeId]) {
      setDisabled(true);
    }
    if (inProgressLocal && inProgressLocal[key][recipeId]) {
      setDisabled(false);
      setBtnName(false);
    }
  };

  useEffect(() => {
    handleLocalStorage(id);
  }, [id]);

  const handleStartClickBtn = () => {
    const type = handleLocation(location);
    history.push(`/${type}/${id}/in-progress`);
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

ButtonStartRecipe.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ButtonStartRecipe;
