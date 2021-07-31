import React from 'react';
import { Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import useDetailsFetch from '../hooks/useDetailsFetch';
import useRecomendedItemsFetch from '../hooks/useRecomendedItemsFetch';

export default function DetailsDrinks() {
  const { data, request } = useDetailsFetch();
  const { recomendedData, requestRecomendedApi } = useRecomendedItemsFetch();
  const [ingredients, setIngredients] = React.useState([]);
  const [measures, setMeasures] = React.useState([]);
  const [recomendedFoods, setRecomendedFoods] = React.useState([]);
  const [recipeExists, setRecipeExists] = React.useState(false);
  const [inProgressRecipes, setInProgressRecipes] = React.useState(false);
  const [copiedText, setCopiedText] = React.useState(false);
  const idReceita = '178319';

  function verifyDoneRecipes(id) {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    if (doneRecipes && doneRecipes.find((recipes) => recipes.id === id)) {
      setRecipeExists(true);
    }
  }

  function verifyProgressRecipes(id) {
    const progressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (progressRecipes && progressRecipes.cocktails[id]) {
      console.log(progressRecipes);
      setInProgressRecipes(true);
    }
  }

  React.useEffect(() => {
    function fetchDrinkApi() {
      request(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceita}`);
    }
    function fetchFoodRecomendedApi() {
      requestRecomendedApi('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    }
    fetchDrinkApi();
    fetchFoodRecomendedApi();
    verifyDoneRecipes(idReceita);
    verifyProgressRecipes(idReceita);
  }, [request, requestRecomendedApi]);

  React.useEffect(() => {
    if (data && recomendedData) {
      const maxRecomendedItems = 6;
      const dataKeys = Object.keys(data.drinks[0]);
      setIngredients(dataKeys.filter((key) => key.includes('strIngredient')));
      setMeasures(dataKeys.filter((key) => key.includes('strMeasure')));
      const onlySix = recomendedData.meals.filter((_, index) => (
        index < maxRecomendedItems
      ));
      setRecomendedFoods(onlySix);
    }
  }, [data, recomendedData]);

  if (!data || !recomendedData) return <p>Loading...</p>;

  function copyUrl() {
    const seconds = 2000;
    setCopiedText(true);
    copy(window.location.href);
    setTimeout(() => {
      setCopiedText(false);
    }, seconds);
  }

  return (
    <main>
      <img
        data-testid="recipe-photo"
        src={ data.drinks[0].strDrinkThumb }
        alt={ data.drinks[0].strDrink }
        width="100px"
        height="100px"
      />
      <h1 data-testid="recipe-title">{ data.drinks[0].strDrink }</h1>
      <h4 data-testid="recipe-category">{ data.drinks[0].strAlcoholic }</h4>
      { measures.filter((ingrediente) => data.drinks[0][ingrediente])
        .map((measure, index) => (
          <p
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { `${data.drinks[0][ingredients[index]]} - ${data.drinks[0][measure]}` }
          </p>
        )) }
      <span data-testid="instructions">{ data.drinks[0].strInstructions }</span>
      <div className="div-scroll">
        {recomendedFoods.map((recomended, index) => (
          <div
            data-testid={ `${index}-recomendation-card` }
            key={ index }
            style={ { width: '100px', height: '100px', margin: '10px 5px' } }
          >
            <img
              src={ recomended.strMealThumb }
              alt={ recomended.strMeal }
              width="90px"
              height="90px"
            />
            <h6>{ recomended.strCategory }</h6>
            <h3 data-testid={ `${index}-recomendation-title` }>{ recomended.strMeal }</h3>
          </div>
        ))}
      </div>
      {copiedText ? <p>Link copiado!</p> : null}
      <button
        data-testid="share-btn"
        type="button"
        onClick={ copyUrl }
      >
        share
      </button>
      <button data-testid="favorite-btn" type="button">favorite</button>
      {recipeExists ? null
        : (
          <Link to={ `/bebidas/${idReceita}/in-progress` }>
            <button
              className="btnFixed"
              data-testid="start-recipe-btn"
              type="button"
            >
              Iniciar receita
            </button>
          </Link>
        )}

      {inProgressRecipes ? (
        <button
          className="btnFixed"
          data-testid="start-recipe-btn"
          type="button"
        >
          Continuar Receita
        </button>
      ) : null}
    </main>
  );
}
