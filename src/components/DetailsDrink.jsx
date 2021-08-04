import React, { useState, useEffect } from 'react';
import copy from 'clipboard-copy';
import { useHistory } from 'react-router-dom';
import '../styles/DetailsRecipe.css';
import * as api from '../services/API';
import DetailsDrinkComp from './DetailsDrinkComp';

export default function DetailsDrink() {
  const [recipesDetails, setRecipesDetails] = useState({});
  const [setRecipeId] = useState('');
  const [copyText, setCopyText] = useState('');
  const [buttonHiddenClass, setButtonHiddenClass] = useState('hiddenButton');
  const [buttonText] = useState('Continuar Receita');
  const [favorite, setFavorite] = useState(false);
  const [recipesRecommendation, setRecipesRecommendation] = useState({});

  const history = useHistory();
  const { pathname } = history.location;
  const recipesDrinkSelectedId = pathname.split('/')[2];

  useEffect(() => {
    const getApiDetailsRecipesDrink = async () => {
      const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipesDrinkSelectedId}`;
      const requestDrink = await api.fetchAPI(URL);
      const responseDrink = await requestDrink.drinks;
      setRecipesDetails(responseDrink[0]);
      console.log(responseDrink);
    };
    getApiDetailsRecipesDrink();
  }, [setRecipesDetails, recipesDrinkSelectedId]);

  const getNull = (drink) => {
    if (drink === null) {
      return '';
    }
    return `- ${drink}`;
  };

  const getIngredients = (recipe) => {
    // O método Object.entries() retorna uma array dos próprios pares  [key, value] enumeráveis de um dado objeto.
    // referência: https://www.youtube.com/watch?v=HCpXOv1KkJE
    const ingredients = Object.entries(recipe)
      .filter((key) => (key[1] === null ? false : key[0].includes('strIngredient')));
    const measures = Object.entries(recipe)
      .filter((key) => (key[0].includes('strMeasure')));

    return ingredients.filter((recipes) => recipes[1] !== '')
      .map((ingredient, index) => (
        <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
          { `${ingredient[1]} ${getNull(measures[index][1])}` }
        </li>
      ));
  };

  useEffect(() => {
    const recommendationFetch = async () => {
      const requestFood = await api.fetchAPI('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const responseFood = await requestFood.meals;
      setRecipesRecommendation(responseFood);
    };
    recommendationFetch();
  }, []);

  useEffect(() => {
    if (!localStorage.doneRecipes) localStorage.doneRecipes = JSON.stringify([]);
    const doneRecipesLCstorage = JSON.parse(localStorage.doneRecipes)
      .filter((item) => item.id === recipesDrinkSelectedId);
    if (doneRecipesLCstorage.length >= 1) {
      setButtonHiddenClass('hiddenButton-hidden');
    } else {
      setButtonHiddenClass('hiddenButton');
    }
  }, [recipesDrinkSelectedId]);

  const handleClickCopy = () => {
    copy(window.location.href);
    setCopyText('Link copiado!');
    setInterval(() => setCopyText(''), '2000');
    console.log(window.location.href);
  };

  useEffect(() => {
    const retriveFavoties = () => {
      const atualStorage = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
      return setFavorite(atualStorage.some((item) => item.id === recipesDrinkSelectedId));
    };
    retriveFavoties();
  }, [recipesDrinkSelectedId]);

  const handleClickFavorites = () => {
    const favoriteObj = [
      {
        id: recipesDetails.idDrink,
        type: 'bebida',
        area: recipesDetails.strArea,
        category: recipesDetails.strCategory,
        alcoholicOrNot: recipesDetails.strAlcoholic,
        name: recipesDetails.strDrink,
        image: recipesDetails.strDrinkThumb,
      },
    ];
    const stgFavorite = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    if (favorite) {
      const rmFavorite = stgFavorite.filter((item) => item.id !== recipesDrinkSelectedId);
      const rmvFavoriteStringfy = JSON.stringify(rmFavorite);
      setFavorite(false);
      localStorage.setItem('favoriteRecipes', rmvFavoriteStringfy);
    } else {
      setFavorite(true);
      const newRecipeStringfy = JSON.stringify([
        ...favoriteObj,
        ...stgFavorite,
      ]);
      localStorage.setItem('favoriteRecipes', newRecipeStringfy);
    }
  };

  const propsDrink = {
    recipesDetails,
    handleClickCopy,
    handleClickFavorites,
    favorite,
    copyText,
    getIngredients,
    recipesRecommendation,
    setRecipeId,
    buttonHiddenClass,
    buttonText,
    recipesDrinkSelectedId,
  };

  return (
    <div className="container">
      <DetailsDrinkComp propsDrink={ propsDrink } />
    </div>
  );
}
