import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import IngredientInput from '../components/IngredientInput';
import Loading from '../components/Loading';
import { searchById } from '../services/index';
import '../styles/RecipesInProgress.css';
// import ButtonFavoriteRecipe from '../components/ButtonFavoriteRecipe';

function ReceitasEmProgresso() {
  const [currentRecipe, setCurrentRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { pathname } = useLocation();
  const recipeId = pathname.split('/')[2];
  const recipeType = pathname.split('/')[1] === 'comidas' ? 'meals' : 'cocktails';

  // RECUPERA OS INGREDIENTES DO LS;
  const INGREDIENTS = JSON.parse(localStorage.getItem('inProgressRecipes'));
  // SALVAR LOCALMENTE PARA ALTERAR;
  const [inProgressIngredients, setInProgressIngredients] = useState(INGREDIENTS[recipeType][recipeId]);
  // const ingredientsOfRecipe = inProgressIngredients[recipeType][recipeId];

  useEffect(() => {
    setInProgressIngredients(INGREDIENTS[recipeType][recipeId]);
    const fetchRecipeById = async (id, type) => {
      const recipe = await searchById(id, type);
      return setCurrentRecipe(recipe);
    };
    // alterar o type aqui
    fetchRecipeById(recipeId, 'comidas');
  }, []);
  useEffect(() => {
    console.log(currentRecipe)
    console.log(isLoading)
    setIsLoading(false);
  }, [currentRecipe]);

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
      <button type="button">
        Share
      </button>
      {/* <ButtonFavoriteRecipe /> */}
      <p
        data-testid="recipe-category"
      >
        { currentRecipe.category }
      </p>
      {/* OS INGREDIENTES -> data-testid=${index}-ingredient-step */}
      <ul>
        {
          inProgressIngredients.map(
            (ingredient, index) => (
              <IngredientInput
                key={ index }
                ingredient={ ingredient }
                inProgressIngredients={ inProgressIngredients }
                setInProgressIngredients={ setInProgressIngredients }
              />
            ),
          )
        }
      </ul>
      <p data-testid="instructions">
        { currentRecipe.instructions }
      </p>
      <button
        type="button"
        data-testid="finish-recipe-btn"
      >
        Finalizar Receitas
      </button>
    </div>
  );
}

export default ReceitasEmProgresso;
