import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import IngredientsList from './IngredientList';
import ShareIcon from '../images/shareIcon.svg';
import whiteHearth from '../images/whiteHeartIcon.svg';
import blackHearth from '../images/blackHeartIcon.svg';
import RecipesContext from '../context/RecipesContext';

const getLocalStorage = () => {
  const localItems = JSON.parse(localStorage.getItem('favoriteRecipes'));
  return localItems || [];
};
function RecipeDetails({ url }) {
  const URL = window.location.href;
  const [share, setShare] = useState(false);
  const [favIcon, setFavIcon] = useState(false);
  const { recipeDetail: recipe, setIngredientsRecipeList } = useContext(RecipesContext);
  const itemValidation = (item) => {
    if (item !== null && item !== '' && item !== undefined) {
      return true;
    }
    return false;
  };

  // acrescentar ao localstorage o estado do favIcon
  useEffect(() => {
    const ONE_SEC = 1500;
    const timeout = setInterval(() => {
      setShare(false);
    }, ONE_SEC);
    return () => clearInterval(timeout);
  }, [share]);

  const getListOfIngredients = () => {
    const limit = 20;
    const listAux = [];
    for (let index = 1; index <= limit; index += 1) {
      const ingredient = recipe[`strIngredient${index}`];
      const measure = recipe[`strMeasure${index}`];
      if (itemValidation(ingredient) && itemValidation(measure)) {
        const item = `${ingredient} ${measure}`;
        listAux.push(item);
      }
    }
    setIngredientsRecipeList(listAux);
  };

  useEffect(() => {
    getListOfIngredients();
  }, [recipe]);

  useEffect(() => {
    const localItems = getLocalStorage()[0];
    if (!localItems) {
      return;
    }
    setFavIcon(localItems.fav);
  }, []);

  const handleClick = () => {
    const id = recipe.idMeal || recipe.idDrink;
    const localItems = getLocalStorage();
    if (localItems.length) {
      console.log(localItems[0].id);
      const newLocalStorage = localItems.filter((item) => item.id !== id);
      localStorage.setItem('favoriteRecipes', JSON.stringify(newLocalStorage));
      setFavIcon(!favIcon);
    } else {
      setFavIcon(!favIcon);
      const type = url.replace(/\//ig, '').replace(/[0-9]/g, '');
      const {
        idMeal,
        idDrink,
        strCategory,
        strAlcoholic,
        // strDrink,
        strMeal,
        // strDrinkThumb,
        strMealThumb,
        strArea } = recipe;
      const newItem = {
        id: idMeal || idDrink,
        type,
        fav: true,
        area: strArea || '',
        category: strCategory || '',
        alcoholicOrNot: strAlcoholic || '',
        strMeal,
        strMealThumb,
      };
      localStorage.setItem('favoriteRecipes', JSON.stringify([newItem]));
    }
  };
  console.log(recipe);

  return (
    <article>
      <div>
        <img
          data-testid="recipe-photo"
          src={ recipe.strMealThumb || recipe.strDrinkThumb }
          alt={ recipe.strMeal || recipe.strDrink }
        />
        <h2 data-testid="recipe-title">{ recipe.strMeal || recipe.strDrink }</h2>
        <h3 data-testid="recipe-category">
          { recipe.strYoutube ? recipe.strCategory : recipe.strAlcoholic }
        </h3>
        <div className="buttons">
          <button
            type="button"
            onClick={
              () => { navigator.clipboard.writeText(URL); setShare(!share); }
            }
          >
            <img data-testid="share-btn" src={ ShareIcon } alt="Share Icon" />
          </button>
          <button type="button" onClick={ handleClick }>
            <img
              data-testid="favorite-btn"
              src={ favIcon ? blackHearth : whiteHearth }
              alt="Fav Icon"
            />
          </button>
          <div>
            <h4>{share && 'Link copiado!'}</h4>
          </div>
        </div>
        <IngredientsList />
        <h2>
          Instructions
        </h2>
        <p data-testid="instructions">{ recipe.strInstructions }</p>
      </div>
    </article>
  );
}

RecipeDetails.propTypes = {
  url: PropTypes.string.isRequired,
}.isRequired;

export default RecipeDetails;
