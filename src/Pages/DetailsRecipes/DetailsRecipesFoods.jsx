import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import MainContext from '../../Context/MainContext';
import IngredientsFoods from '../../Components/IngredientsFoods';

function DetailsRecipesFoods() {
  const location = useLocation();
  const { idFoods, setIdFoods, idFoodsAPI, setIdFoodsAPI,
    setDataRandomDrinks, dataRandomDrinks, newDataDrinks,
    setNewDataDrinks } = useContext(MainContext);

  useEffect(() => {
    const URL = location.pathname;
    const id = URL.replace('/comidas/', '');
    setIdFoods(id);
  }, [location, setIdFoods]);

  useEffect(() => {
    const getAPIById = async () => {
      const endpoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idFoods}`;
      const { meals } = await fetch(endpoint).then((data) => data.json());
      setIdFoodsAPI(meals[0]);
    };
    getAPIById();
  }, [idFoods, setIdFoodsAPI]);

  useEffect(() => {
    const getAPIRandomly = async () => {
      const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
      const { drinks } = await fetch(endpoint).then((data) => data.json());
      setDataRandomDrinks(drinks[0].strDrink);
    };
    getAPIRandomly();
  }, [setDataRandomDrinks]);
  console.log(dataRandomDrinks);

  useEffect(() => {
    const getAPIByName = async () => {
      const endp = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${dataRandomDrinks}`;
      const { drinks } = await fetch(endp).then((data) => data.json());
      setNewDataDrinks(drinks);
    };
    getAPIByName();
  }, [dataRandomDrinks, setNewDataDrinks]);
  console.log(newDataDrinks);

  const getYoutubeUrl = ({ strYoutube }) => {
    if (strYoutube) {
      const youtubeVideoId = strYoutube.split('?v=', 2)[1];
      const iframeLink = `https://www.youtube.com/embed/${youtubeVideoId}`;
      return iframeLink;
    }
  };

  return (
    <div>
      <img
        width="320"
        src={ idFoodsAPI.strMealThumb }
        alt={ `Comida selecionada: ${idFoodsAPI.strMeal}` }
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">
        {idFoodsAPI.strMeal}
      </h1>
      <button
        type="button"
        data-testid="share-btn"
      >
        compartilhar
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
      >
        favoritar
      </button>
      <p data-testid="recipe-category">
        {idFoodsAPI.strCategory}
      </p>
      <IngredientsFoods />
      <p data-testid="instructions">
        {idFoodsAPI.strInstructions}
      </p>
      <iframe
        data-testid="video"
        width="280"
        src={ getYoutubeUrl(idFoodsAPI) }
        title="YouTube video player"
        allowFullScreen
      />
      {/* //!===========================Implementar=============================== */}
      { newDataDrinks.map((drink, i) => (
        <li
          data-testid={ `${i}-recomendation-card` }
          key={ i }
        >
          { drink.strDrink }
        </li>
      )) }
      {/* //!=======================Recomendation Cards============================ */}
      <button
        type="button"
        data-testid="start-recipe-btn"
      >
        Iniciar receita
      </button>
    </div>
  );
}

export default DetailsRecipesFoods;
