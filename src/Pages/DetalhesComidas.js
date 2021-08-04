import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RenderRecomendations from '../components/RenderRecomendations';
import {
  getRecipes,
  setInput } from '../redux/slices/fetchReceitas';

function DetalhesComidas() {
  const { data, loading, input } = useSelector((state) => state.fetchReceitas);
  const [recipeType, setRecipeType] = useState('');
  const [recipe, setRecipe] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const { pathname } = window.location;
    const recipeURL = pathname.split('/')[1];
    // const responseObj = recipeURL === 'comidas'
    //   ? foodDetails
    //   : drinkDetails;
    // setResponse(responseObj);
    const recipeId = pathname.split('/')[2];
    const action = recipeURL === 'comidas'
      ? 'foodDetails'
      : 'drinkDetails';
    dispatch(setInput(recipeId));
    console.log(input);
    dispatch(getRecipes(action));
    setRecipeType(recipeURL);
    dispatch(getRecipes('drinks'));
  }, [dispatch]);

  useEffect(() => {
    if (recipeType !== '' && (Object.keys(data).length > 0)) {
      const recipeObj = recipeType === 'comidas'
        ? data.meals[0]
        : data.drinks[0];
      setRecipe(recipeObj);
    }
  }, [recipeType, data]);

  const getIngredients = (array, startIng, endIng, empty) => {
    const newArray = array.slice(startIng, endIng).filter((ing) => ing !== empty);
    return newArray.map((ingredient, index) => (
      <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
        { ingredient }
      </li>
    ));
  };

  if (Object.keys(recipe).length === 0 && loading) {
    return <p>Loading..</p>;
  }

  const nine = 9;
  const twentyeigth = 28;
  // const twentynine = 29;
  // const fourtynine = 49;
  return (
    <div>
      <img
        src={ recipe.strMealThumb }
        alt={ recipe.strMeal }
        data-testid="recipe-photo"
        width="30px"
      />
      <h3 data-testid="recipe-title">{ recipe.strMeal }</h3>
      <button type="button" data-testid="share-btn">
        Compartilhar
      </button>
      <button type="button" data-testid="favorite-btn">
        Favoritar
      </button>
      <h5 data-testid="recipe-category">{ recipe.strCategory }</h5>
      <ol>
        { getIngredients(Object.values(recipe), nine, twentyeigth, '') }
      </ol>
      {/* <ol>
        { getIngredients(Object.values(recipe), twentynine, fourtynine, ' ') }
      </ol> */}
      <p data-testid="instructions">{ recipe.strInstructions }</p>
      <iframe
        width="200"
        height="150"
        title={ recipe.strMeal }
        src={ recipe.strYoutube }
        data-testid="video"
      />
      <button type="button" data-testid="start-recipe-btn">Iniciar</button>
      <RenderRecomendations typeReco="bebidas" />
    </div>
  );
}

export default DetalhesComidas;
