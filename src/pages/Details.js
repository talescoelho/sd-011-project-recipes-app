import React, { useEffect } from 'react';
import ShareButton from '../components/ShareButton';
import FavoriteButton from '../components/FavoriteButton';
import ContinueButton from '../components/ContinueButton';
import StartButton from '../components/StartButton';
import useDetailsFetch from '../hooks/useDetailsFetch';
import useRecomendedItemsFetch from '../hooks/useRecomendedItemsFetch';

function addFavorite(idReceita, type, data, foodType) {
  const food = {
    id: idReceita,
    type,
    area: data[foodType][0].strArea || '',
    category: data[foodType][0].strCategory || '',
    alcoholicOrNot: data[foodType][0].strAlcoholic || '',
    name: data[foodType][0].strMeal || data[foodType][0].strDrink,
    image: data[foodType][0].strMealThumb || data[foodType][0].strDrinkThumb,
  };
  if (!localStorage.favoriteRecipes) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([food]));
  } else {
    const favoriteLocalStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (favoriteLocalStorage.some((value) => value.id === idReceita)) {
      const favorite = favoriteLocalStorage.filter((value) => value.id !== idReceita);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favorite));
    } else {
      localStorage.setItem('favoriteRecipes', JSON
        .stringify([...favoriteLocalStorage, food]));
    }
  }
}

function verifyDoneRecipes(id, setRecipeExists) {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  if (doneRecipes && doneRecipes.find((recipes) => recipes.id === id)) {
    setRecipeExists(true);
  }
}

export default function Details() {
  const { data, request } = useDetailsFetch();
  const { recomendedData, requestRecomendedApi } = useRecomendedItemsFetch();
  const [ingredients, setIngredients] = React.useState([]);
  const [measures, setMeasures] = React.useState([]);
  const [recomendedDrinks, setRecomendedDrinks] = React.useState([]);
  const [recipeExists, setRecipeExists] = React.useState(false);
  const [inProgressRecipes, setInProgressRecipes] = React.useState(false);
  const idReceita = window.location.pathname.split('/')[2];
  let foodType = 'meals';
  let food = 'Meal';
  let recomendedFood = 'Drink';
  let recomendedType = 'drinks';
  let type = 'comida';
  let mainEndPoint = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  let recomendedEndPoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  if (window.location.pathname.split('/')[1] === 'bebidas') {
    foodType = 'drinks';
    food = 'Drink';
    recomendedFood = 'Meal';
    recomendedType = 'meals';
    type = 'bebida';
    mainEndPoint = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
    recomendedEndPoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  }

  useEffect(() => {
    function fetchFoodApi() {
      request(`${mainEndPoint}${idReceita}`);
    }
    function fetchDrinkRecomendedApi() {
      requestRecomendedApi(recomendedEndPoint);
    }
    fetchFoodApi();
    fetchDrinkRecomendedApi();
    verifyDoneRecipes(idReceita, setRecipeExists);
    if (localStorage.inProgressRecipes) {
      const progressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
      if (progressRecipes && progressRecipes[foodType][idReceita]) {
        setInProgressRecipes(true);
      }
    }
  }, [foodType, idReceita, mainEndPoint,
    recomendedEndPoint, request, requestRecomendedApi]);

  React.useEffect(() => {
    if (data && recomendedData) {
      const maxRecomendedItems = 6;
      const dataKeys = Object.keys(data[foodType][0]);
      setIngredients(dataKeys.filter((key) => key.includes('strIngredient')));
      setMeasures(dataKeys.filter((key) => key.includes('strMeasure')));
      const onlySix = recomendedData[recomendedType].filter((_, index) => (
        index < maxRecomendedItems
      ));
      setRecomendedDrinks(onlySix);
    }
  }, [data, foodType, recomendedData, recomendedType]);

  if (!data || !recomendedData) return <p>Loading...</p>;

  const videoId = data.meals && data[foodType][0].strYoutube.split('=')[1];

  const items = { idReceita, type, data, foodType };

  return (
    <main>
      <img
        data-testid="recipe-photo"
        src={ data[foodType][0][`str${food}Thumb`] }
        alt={ data[foodType][0][`str${food}`] }
        width="100px"
        height="100px"
      />
      <h1 data-testid="recipe-title">{ data[foodType][0][`str${food}`] }</h1>
      <h4 data-testid="recipe-category">{ data[foodType][0].strCategory }</h4>
      { ingredients.filter((value) => data[foodType][0][value] !== ' ')
        .filter((ingrediente) => data[foodType][0][ingrediente])
        .map((ingredient, index) => (
          <p
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { `${data[foodType][0][ingredient]} - ${
              data[foodType][0][measures[index]]}` }
          </p>
        )) }
      <span data-testid="instructions">{ data[foodType][0].strInstructions }</span>
      { data.meals && <iframe
        title={ data[foodType][0][`str${food}`] }
        data-testid="video"
        src={ `https://www.youtube.com/embed/${videoId}` }
        width="420"
        height="345"
      /> }
      <div className="div-scroll">
        {recomendedDrinks.map((recomended, index) => (
          <div
            data-testid={ `${index}-recomendation-card` }
            key={ index }
            style={ { width: '100px', height: '100px', margin: '10px 5px' } }
          >
            <img
              src={ recomended[`str${recomendedFood}Thumb`] }
              alt={ recomended[`str${recomendedFood}`] }
              width="90px"
              height="90px"
            />
            <h6>{ recomended.strCategory }</h6>
            <h3
              data-testid={ `${index}-recomendation-title` }
            >
              { recomended[`str${recomendedFood}`] }
            </h3>
          </div>
        ))}
      </div>
      <ShareButton />
      <FavoriteButton items={ items } addFavorite={ addFavorite } />
      <ContinueButton inProgressRecipes={ inProgressRecipes } />
      <StartButton page="comidas" idReceita={ idReceita } recipeExists={ recipeExists } />
    </main>
  );
}
