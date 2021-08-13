import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import {
  addRecipeIdInLocalStorage,
  addIngredientsInRecipeId,
  addDoneRecipeInLocalStorage,
} from '../helpers/manipulateLocalStorage';
import { searchById } from '../services/index';
import ButtonFavoriteRecipe from '../components/ButtonFavoriteRecipe';
import IngredientInput from '../components/IngredientInput';
import ButtonShare from '../components/ButtonShare';

function ReceitasEmProgresso() {
  const history = useHistory();
  const { pathname } = useLocation();
  const recipeId = pathname.split('/')[2];
  const recipeType = pathname.split('/')[1] === 'comidas' ? 'meals' : 'cocktails';
  const type = recipeType === 'meals' ? 'comidas' : 'bebidas';

  const [
    inProgressIngredients,
    setInProgressIngredients] = useState(false);
  const [newRender, setNewRender] = useState(false);
  const [progressOfRecipe, setProgressOfRecipe] = useState(true);
  const [currentRecipe, setCurrentRecipe] = useState(false);
  const [favorite, setFavorite] = useState(false);
  // const [linkCopy, setLinkCopy] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (!localStorage.getItem('inProgressRecipes')) {
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        cocktails: {},
        meals: {},
      }));
    }
    const localStorageRecipe = JSON.parse(localStorage
      .getItem('inProgressRecipes'))[recipeType][recipeId];
    if (!localStorageRecipe) {
      addRecipeIdInLocalStorage(recipeType, recipeId);
    }
    const fetchRecipeById = async (id, typeOfRecipes) => {
      const recipe = await searchById(id, typeOfRecipes);
      setCurrentRecipe(recipe);
    };
    fetchRecipeById(recipeId, type);
  }, []);

  useEffect(() => {
<<<<<<< HEAD
    const localStorageRecipe = JSON.parse(localStorage.getItem('inProgressRecipes'))[recipeType][recipeId];
=======
    const localStorageRecipe = JSON.parse(localStorage
      .getItem('inProgressRecipes'))[recipeType][recipeId];
>>>>>>> 53bc1179d3635cb0eb216207d86061481712cfa5
    setInProgressIngredients(localStorageRecipe);
    if (inProgressIngredients) {
      setProgressOfRecipe(inProgressIngredients.some((item) => !item.includes('done')));
    }
  }, [newRender]);

  useEffect(() => {
    const localStorageRecipe = JSON.parse(localStorage
      .getItem('inProgressRecipes'))[recipeType][recipeId];
    if (currentRecipe && localStorageRecipe.length === 0) {
      addIngredientsInRecipeId(currentRecipe, recipeType, recipeId);
      setNewRender(!newRender);
      setIsLoading(false);
    }
    if (inProgressIngredients) setIsLoading(false);
  }, [currentRecipe]);

  // const handleShareBtn = (foodType, id) => {
  //   const hostURL = window.location.origin;
  //   if (foodType === 'meals') {
  //     navigator.clipboard.writeText(`${hostURL}/comidas/${id}`);
  //   }
  //   if (foodType === 'cocktails') {
  //     navigator.clipboard.writeText(`${hostURL}/bebidas/${id}`);
  //   }
  //   return <LinkCopy />;
  // };

  // const handleLinkMessage = () => {
  //   setLinkCopy(true);
  // };

  const handleDoneRecipe = (recipe) => {
    addDoneRecipeInLocalStorage(recipe);
    return history.push('/receitas-feitas');
  };

  return (
    <div>
      <img
        src={ currentRecipe.imgUrl }
        alt=""
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">
        { currentRecipe.title }
      </h1>
      {/* <button
        type="button"
        onClick={ () => { handleShareBtn(recipeType, recipeId); handleLinkMessage(); } }
        data-testid="share-btn"
      >
        Share
      </button> */}
      {/* { linkCopy && <LinkCopy /> } */}
      <ButtonShare recipe={ { recipeType, recipeId } } />
      <ButtonFavoriteRecipe
        recipes={ currentRecipe }
        favorite={ favorite }
        setFavorite={ setFavorite }
      />
      <p
        data-testid="recipe-category"
      >
        { currentRecipe.category }
      </p>
      <ul>
        { isLoading
          ? 'isLoading '
          : inProgressIngredients.map(
            (ingredient, index) => (
              <IngredientInput
                key={ index }
                ingredient={ ingredient }
                inProgressIngredients={ inProgressIngredients }
                setNewRender={ setNewRender }
                newRender={ newRender }
                index={ index }
                id={ recipeId }
                type={ recipeType }
              />
            ),
          )}
      </ul>
      <p data-testid="instructions">
        { currentRecipe.instructions }
      </p>
      <button
        type="button"
        data-testid="finish-recipe-btn"
        disabled={ progressOfRecipe }
        onClick={ () => handleDoneRecipe(currentRecipe) }
      >
        Finalizar Receitas
      </button>
    </div>
  );
}

export default ReceitasEmProgresso;
