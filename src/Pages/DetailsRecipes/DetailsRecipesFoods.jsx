import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import MainContext from '../../Context/MainContext';
import IngredientsFoods from '../../Components/IngredientsFoods';
import { getDrinksInitial } from '../../Services/ApiDrink';
import './scroll.css';

function DetailsRecipesFoods() {
  const location = useLocation();
  const { idFoods, setIdFoods, idFoodsAPI, setIdFoodsAPI,
    newDataDrinks, setNewDataDrinks,
    setStartButton, count /* , selected */ } = useContext(MainContext);

  async function fetchDrinksInitial() {
    const drinksInitialAPI = await getDrinksInitial();
    setNewDataDrinks(drinksInitialAPI.drinks);
  }

  useEffect(() => {
    fetchDrinksInitial();
  }, []);
  console.log(newDataDrinks);

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

  const getYoutubeUrl = ({ strYoutube }) => {
    if (strYoutube) {
      const youtubeVideoId = strYoutube.split('?v=', 2)[1];
      const iframeLink = `https://www.youtube.com/embed/${youtubeVideoId}`;
      return iframeLink;
    }
  };
  // ! Limita a quantidade de recomendação
  const magicNumber = 6;

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
      <ul className="scrollmenu">
        { newDataDrinks.map((drink, index) => index < magicNumber && (
          <li
            data-testid={ `${index}-recomendation-card` }
            key={ index }
          >
            <p
              data-testid={ `${index}-recomendation-title` }
              key={ index }
            >
              { drink.strDrink }
              { console.log(drink.strDrink) }
            </p>
          </li>
        )) }
      </ul>
      {/* //!=======================Recomendation Cards============================ */}
      <button
        type="button"
        data-testid="start-recipe-btn"
        className="fixed-btn"
        // #teste - não funcionou
        onClick={ () => setStartButton(true) }
        hidden={ count }
      >
        Iniciar receita
      </button>
    </div>
  );
}

export default DetailsRecipesFoods;
