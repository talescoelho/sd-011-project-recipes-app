import React, { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import { addRecipeIsDone } from '../functions';

function ButtonFinish() {
  const { ingredientsListRecipe, task, enableFinish,
    setEnableFinish, recipeDetail: recipe } = useContext(RecipesContext);
  const history = useHistory();
  const url = history.location.pathname;
  const { id } = useParams();

  const getRecipe = async () => {
    const recipeInProgress = await JSON.parse(localStorage.getItem('inProgressRecipes'))
    || {};
    if (recipeInProgress.meals[id] !== undefined
      || recipeInProgress.cocktails[id] !== undefined) {
      const listChecked = recipeInProgress.cocktails[id] || recipeInProgress.meals[id];
      if (ingredientsListRecipe.length === listChecked.length) {
        setEnableFinish(false);
      } else {
        setEnableFinish(true);
      }
    }
  };

  useEffect(() => {
    getRecipe();
  });

  useEffect(() => {
    getRecipe();
  }, [task]);

  const finish = () => {
    addRecipeIsDone(recipe, url);
    history.push('/receitas-feitas');
  };

  return (
    <div className="container-start-button">
      <button
        onClick={ finish }
        data-testid="finish-recipe-btn"
        className="button-finish"
        type="button"
        disabled={ enableFinish }
      >
        Finalizar Receita
      </button>
    </div>

  );
}

export default ButtonFinish;
