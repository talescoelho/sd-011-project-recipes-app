import React, { useState, useEffect } from 'react';
import copy from 'clipboard-copy';
import { useHistory, Link } from 'react-router-dom';
import '../styles/DetailsRecipe.css';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import Button from 'react-bootstrap/Button';

export default function DetailsRecipe() {
  const [recipesDetails, setRecipesDetails] = useState({});
  const [drinkRecipeId, setDrinkRecipeId] = useState('');
  const [mealRecipeId, setMealRecipeId] = useState('');
  const [copyText, setCopyText] = useState('');
  const [buttonHiddenClass, setButtonHiddenClass] = useState('hiddenButton');
  const [buttonText, setButtonText] = useState('Continuar Receita');
  const [favorites, setFavorites] = useState( whiteHeartIcon );

  const [recipesRecommendation, setRecipesRecommendation] = useState({});
  const history = useHistory();
  const { pathname } = history.location;
  const recipesSelectedId = pathname.split('/')[2];
  
  console.log(drinkRecipeId);
  // console.log(setMealRecipeId);

  const fetchAPI = async (URL) =>  {
    const API = await fetch(URL);
    const data = await API.json();
    return data;
  }

  useEffect(() => {
    const getApiDetailsRecipesFood = async () => {
      const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipesSelectedId}`;
      const requestFood = await fetchAPI(URL);
      const responseFood = await requestFood.meals;
      setRecipesDetails(responseFood[0]);
      setMealRecipeId(recipesSelectedId);
      console.log(responseFood)
    };
    getApiDetailsRecipesFood();
  }, [setMealRecipeId, setRecipesDetails, recipesSelectedId]);

  useEffect(() => {
    const getApiDetailsRecipesDrink = async () => {
      const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;
      const requestDrink = await fetchAPI(URL);
      const responseDrink = await requestDrink.meals;
      // setRecipesDetails(responseDrink[0]);
      console.log(responseDrink);
    };
    
    console.log(getApiDetailsRecipesDrink);
  }, []);

  const getNull = (measure) => {
    if (measure === null) {
      return '';
    }
    return `- ${measure}`;
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
      const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`
      const requestDrink = await fetchAPI(URL);
      const responseDrink = await requestDrink.drinks;
      console.log(responseDrink);
      setRecipesRecommendation(responseDrink);
    };
    recommendationFetch();
  }, []);

  useEffect(() => {
    if (!localStorage.doneRecipes) localStorage.doneRecipes = JSON.stringify([]);
    const doneRecipesLCstorage = JSON.parse(localStorage.doneRecipes)
      .filter((item) => item.id === recipesSelectedId);
    if (doneRecipesLCstorage.length >= 1) {
      setButtonHiddenClass('hiddenButton-hidden');
    } else {
      setButtonHiddenClass('hiddenButton');
    }
  }, [recipesSelectedId]);

  const handleClickCopy = () => {
    copy(window.location.href);
    setCopyText('Link Copiado!');
    setInterval(() => setCopyText(''), 2000);
  }

  const handleClickFavorites = () => {
    if (favorites === whiteHeartIcon) {
      setFavorites(blackHeartIcon);
      localStorage.favoriteRecipes = JSON.stringify([]);
      const storageFavorite = JSON.parse(localStorage.favoriteRecipes);
      const storageFavoriteUpdate = storageFavorite.concat({
          id: recipesDetails.idMeal,
          type: 'comida',
          area: recipesDetails.strArea,
          category: recipesDetails.strCategory,
          alcoholicOrNot: '',
          name: recipesDetails.strMeal,
          image: recipesDetails.strMealThumb,
      })
      localStorage.favoriteRecipes = JSON.stringify(storageFavoriteUpdate)
    } else {
      setFavorites(whiteHeartIcon);
      const storageFavorite = JSON.parse(localStorage.favoriteRecipes);
      const storageFavoriteUpdate = storageFavorite
        .filter((item) => item.id != recipesSelectedId);
        localStorage.favoriteRecipes = JSON.stringify(storageFavoriteUpdate);
    }
  }

  return (
    <div className="container">
      <div className="containerDetailsFood">
        <img
          className="recipes-img"
          data-testid="recipe-photo"
          alt="recipes-food"
          src={ recipesDetails.strMealThumb }
        />
        <div data-testid="recipe-title" className="h2teste">
            <h2>{recipesDetails.strMeal}</h2>
            <div className="buttons-share-favorite">
              <button
                data-testid="share-btn"
                type="button"
                onClick={ handleClickCopy }
              >
                <img data-testid="share-btn" src={ shareIcon } alt="share" />
              </button>
              <button
                data-testid="favorite-btn"
                type="button"
                className="buttons-heart-favorite"
                onClick={ handleClickFavorites }
              >
                <img data-testid="favorite-btn" src={ favorites } alt="favorite" />
              </button>
            </div>
        </div>
        
        <p>{copyText}</p>
        <p data-testid="recipe-category">{recipesDetails.strCategory}</p>
      </div>
      
      <h4>Ingredients</h4>
      <div>
        {getIngredients(recipesDetails)}
      </div>
      <h4>Instructions</h4>
      <p data-testid="instructions">{recipesDetails.strInstructions}</p>
      <video className="video" data-testid="video" width="750" height="500" controls>
        <source width="100" src={ recipesDetails.strYoutube } type="video/mp4" />
        <track src={ recipesDetails.strYoutube } kind="captions" />
      </video>
      <div>
        <h4>Recomendadas</h4>
      </div>
      <section className="recomend-container">
       
        {
          recipesRecommendation && recipesRecommendation.length && recipesRecommendation
            .filter((_, indexFilter) => indexFilter < 6)
            .map((drinks, index) => (
              <div
                data-testid={ `${index}-recomendation-card` }
                key={ index }
                className=""
              >
                <p>{drinks.strAlcoholic}</p>
                <h4
                  data-testid={ `${index}-recomendation-title` }
                >
                  {drinks.strDrink}
                </h4>
                <Link
                  onClick={ () => setDrinkRecipeId(drinks.idDrink) }
                  to={ `/bebidas/${drinks.idDrink}` }
                >
                  <img
                    className="recomend-img"
                    data-testid={ `${index}-card-img` }
                    src={ drinks.strDrinkThumb }
                    alt={ drinks.strDrink }
                  />
                </Link>
              </div>
            ))
        }
      </section>
      <Link to={ `/comidas/${recipesSelectedId}/in-progress`}>
        <Button
          className={ buttonHiddenClass }
          type="button"
          data-testid="start-recipe-btn"
          variant="success"
          // onClick={  }
        >
        { buttonText }
        </Button>
      </Link>
      
    </div>
  );
}
