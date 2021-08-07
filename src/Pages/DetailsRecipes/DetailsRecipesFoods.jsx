import React, { useEffect, useContext } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import copy from 'clipboard-copy';
import MainContext from '../../Context/MainContext';
import IngredientsFoods from '../../Components/IngredientsFoods';
import { getDrinksInitial, copyLink } from '../../Services/ApiDrink';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import './scroll.css';

function DetailsRecipesFoods() {
  const location = useLocation();
  const { idFoods, setIdFoods, idFoodsAPI, setIdFoodsAPI,
    newDataDrinks, setNewDataDrinks, setDoneRecipes, show,
    setStartButton, count,
    setShow /* , setCount /* , selected */ } = useContext(MainContext);
  let isFavorite = false;

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
  // * ===================================================================================
  setDoneRecipes(JSON.stringify([{
    id: idFoodsAPI.idMeal,
    type: 'comida',
    area: idFoodsAPI.strArea,
    category: idFoodsAPI.strCategory,
    alcoholicOrNot: '',
    name: idFoodsAPI.strMeal,
    image: idFoodsAPI.strMealThumb,
    doneDate: idFoodsAPI.dateModified,
    tags: idFoodsAPI.strTags,
  }]));
  // # ======================será?????======================================================================================
  // const [doneRecipesNew, setDoneRecipesNew] = useState([]);
  // setDoneRecipesNew(...doneRecipesNew, JSON.parse(localStorage.getItem('doneRecipes')));
  // useEffect(() => {
  //   if (doneRecipesNew[0].id === idFoods) {
  //     setCount(true);
  //   }
  // }, [doneRecipesNew, idFoods, setCount]);

  const handleFavorite = () => {
    // * ainda não implementei
    isFavorite ? isFavorite = false : isFavorite = true;
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
        onClick={ () => copyLink(copy, setShow, 'comidas', idFoods) }
      >
        Compartilhar
      </button>
      <p>{ show && 'Link copiado!'}</p>
      <img
        src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
        onClick={ () => handleFavorite }
        data-testid="favorite-btn"
        alt="favorite icon"
      />
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
      <NavLink to={ `/comidas/${idFoods}/in-progress` }>
        <button
          type="button"
          data-testid="start-recipe-btn"
          className="fixed-btn"
          onClick={ () => setStartButton(true) }
          hidden={ count }
        >
          Iniciar receita
        </button>
      </NavLink>
    </div>
  );
}

export default DetailsRecipesFoods;
