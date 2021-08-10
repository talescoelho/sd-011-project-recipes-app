import React, { useEffect, useContext, useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import copy from 'clipboard-copy';
import MainContext from '../../Context/MainContext';
import IngredientsDrinks from '../../Components/IngredientsDrinks';
import { getFoodsInitial, copyLink } from '../../Services/ApiFood';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import './scroll.css';

function DetailsRecipesFoods() {
  const location = useLocation();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [favoriteRecipes] = useState([]);

  const { idDrinks, setIdDrinks, idDrinksAPI, setIdDrinksAPI, newDataFoods,
    /* setCount, */ setDoneRecipes, show, setShow,
    setNewDataFoods, count, setStartButton } = useContext(MainContext);

  async function fetchFoodsInitial() {
    const foodsInitialAPI = await getFoodsInitial();
    setNewDataFoods(foodsInitialAPI.meals);
  }

  useEffect(() => {
    fetchFoodsInitial();
  }, []);
  console.log(newDataFoods);

  useEffect(() => {
    const URL = location.pathname;
    const id = URL.replace('/bebidas/', '');
    setIdDrinks(id);
  }, [location, setIdDrinks]);

  useEffect(() => {
    const getAPIById = async () => {
      const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrinks}`;
      const { drinks } = await fetch(endpoint).then((data) => data.json());
      setIdDrinksAPI(drinks[0]);
    };
    getAPIById();
  }, [idDrinks, setIdDrinksAPI]);

  // ! Limita a quantidade de recomendação
  const magicNumber = 6;
  // * ===================================================================================
  setDoneRecipes(JSON.stringify([{
    id: idDrinksAPI.idDrink,
    type: 'bebida',
    area: '',
    category: idDrinksAPI.strCategory,
    alcoholicOrNot: idDrinksAPI.strAlcoholic,
    name: idDrinksAPI.strDrink,
    image: idDrinksAPI.strDrinkThumb,
    doneDate: idDrinksAPI.dateModified,
    tags: idDrinksAPI.strTags,
  }]));
  // # ===================================================================================
  // const [doneRecipesNew, setDoneRecipesNew] = useState([]);
  // setDoneRecipesNew(JSON.parse(localStorage.getItem('doneRecipes')));
  // useEffect(() => {
  //   if (doneRecipesNew[0].id === idDrinks) {
  //     setCount(true);
  //   }
  // }, [doneRecipesNew, idDrinks, setCount]);

  useEffect(() => {
    const handleFavorite = () => {
      const infoItem = [{
        id: idDrinksAPI.idDrink,
        type: 'bebida',
        area: '',
        category: idDrinksAPI.strCategory,
        alcoholicOrNot: idDrinksAPI.strAlcoholic,
        name: idDrinksAPI.strDrink,
        image: idDrinksAPI.strDrinkThumb,
      }];
      if (isFavorite) {
        const infoInLocal = JSON.parse(localStorage.getItem('favoriteRecipes'));
        if (infoInLocal) {
          const SomaDEArraysComOStorage = infoItem.concat(infoInLocal);
          const verify = JSON.stringify(SomaDEArraysComOStorage);
          const ApiCoolDown = idDrinksAPI
            && localStorage.setItem('favoriteRecipes', verify);
          // setIsClicked(false);
          return ApiCoolDown;
        }
        if (!infoInLocal) {
          const verify = JSON.stringify(infoItem);
          const ApiCoolDown = idDrinksAPI
            && localStorage.setItem('favoriteRecipes', verify);
          // setIsClicked(false);
          return ApiCoolDown;
        }
      } else {
        const infoInLocal = JSON.parse(localStorage.getItem('favoriteRecipes'));
        if (infoInLocal) {
          const newFavoriteRecipes = infoInLocal
            .filter((item) => item.id !== idDrinksAPI.idDrink);
          localStorage.setItem('favoriteRecipes', JSON.stringify(newFavoriteRecipes));
        }
      }
    };
    handleFavorite();
  }, [isFavorite]);
  // }, [favoriteRecipes, idDrinksAPI.idDrink, idDrinksAPI.strAlcoholic,
  //   idDrinksAPI.strCategory, idDrinksAPI.strDrink,
  //   idDrinksAPI.strDrinkThumb, isClicked, idDrinksAPI]);

  // !altera ao clicar
  // useEffect(() => {
  //   const handleColoredHeart = () => {
  //     const favoriteStorage = localStorage.getItem('favoriteRecipes');
  //     if (isClicked && favoriteStorage && favoriteStorage.includes(idDrinks)) {
  //       setIsFavorite(true);
  //     }
  //   };
  //   handleColoredHeart();
  // }, [idDrinks, setIsFavorite, isClicked]);

  // !altera ao atualizar a pagina
  const handleColoredHeart = () => {
    // console.log('01');
    // const favoriteStorage = localStorage.getItem('favoriteRecipes');
    // if (favoriteStorage && favoriteStorage.includes(idDrinks)) {
    //   setIsFavorite(true);
    //   console.log('02');
    // }
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    // handleColoredHeart();
  }, []);

  useEffect(() => {
    console.log(isFavorite);
  }, [isFavorite]);

  // ? pergunta que não quer calar, como "despreencher" o coração ? ;-;

  return (
    <div>
      <img
        width="320"
        src={ idDrinksAPI.strDrinkThumb }
        alt={ `Comida selecionada: ${idDrinksAPI.strDrink}` }
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">
        {idDrinksAPI.strDrink}
      </h1>
      <h2 data-testid="recipe-category">
        {idDrinksAPI.strAlcoholic}
      </h2>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ () => copyLink(copy, setShow, 'bebidas', idDrinks) }
      >
        Compartilhar
      </button>
      <p>{ show && 'Link copiado!'}</p>
      <button
        type="button"
        onClick={ () => handleColoredHeart() }
      >
        <img
          src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
          alt="favorite icon"
        />
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
        onClick={ () => handleColoredHeart() }
      >
        Favoritar
      </button>
      <p>
        {idDrinksAPI.strCategory}
      </p>
      <IngredientsDrinks />
      {/* //!===========================Implementar=============================== */}
      <ul className="scrollmenu">
        { newDataFoods.map((food, i) => i < magicNumber && (
          <li
            data-testid={ `${i}-recomendation-card` }
            key={ i }
          >
            <p data-testid={ `${i}-recomendation-title` }>
              { food.strMeal }
            </p>
          </li>
        )) }
      </ul>
      {/* //!=======================Recomendation Cards============================ */}
      <NavLink to={ `/bebidas/${idDrinks}/in-progress` }>
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
