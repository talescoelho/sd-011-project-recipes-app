import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../css/RecipeInProgress.css';
import { useHistory } from 'react-router';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

const copy = require('clipboard-copy');

function DrinksRecipeInProgress({ match: { params: { id } } }) {
  const [drinkInProgress, setDrinkInProgress] = useState('');
  const [loading, setIsLoading] = useState(true);
  const [finalListIngredients, setFinalListIngredients] = useState();
  const [classNameIngredients, setClassNameIngredients] = useState([]);
  const [statusIngredients, setStatusIngredients] = useState([]);
  const [click, setClick] = useState(false);
  const [favoriteIcon, setFavoriteIcon] = useState(whiteHeartIcon);
  const [hasChecked, setHasChecked] = useState(false);
  const [statusEndRecipeButton, setStatusEndRecipeButton] = useState(true);
  const [countCheckIngredList, setCountCheckIngredList] = useState(0);
  const [numberIngredients, setNumberIngredients] = useState(0);

  const history = useHistory();
  const ingredListClass = [];

  useEffect(() => {
    const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    const getDrinkDetails = async () => {
      const response = await fetch(endpoint);
      const data = await response.json();
      const { drinks } = data;
      setDrinkInProgress(drinks[0]);

      // Cria a Lista de Ingredientes
      const ingredArray = Object.entries(drinks[0])
        .filter((key) => key[0].includes('strIngredient'));
      const ingredList = [];
      ingredArray.forEach((item) => ingredList.push(item[1]));
      setFinalListIngredients(ingredList);

      ingredList.forEach((item) => {
        if (item !== null && item !== '') ingredListClass.push('notChecked');
      });
      setNumberIngredients(ingredListClass.length);

      if (!localStorage.getItem('inProgressRecipes')) {
        const arrayStatus = [];
        ingredList.forEach((item) => {
          if (item !== null && item !== '') arrayStatus.push(false);
        });
        setStatusIngredients(arrayStatus);
      } else {
        let countYesChecked = 0;
        const statusIngredSaved = JSON.parse(localStorage.getItem('inProgressRecipes'));
        const valueStatusSaved = Object.values(statusIngredSaved);
        valueStatusSaved.forEach((item, index) => {
          if (item) {
            countYesChecked += 1;
            ingredListClass[index] = 'yesChecked';
          }
        });
        setCountCheckIngredList(countYesChecked);
        setStatusIngredients(statusIngredSaved);
      }

      // Lógica ver se aquela receita é ou não favorita, se não for favorita setFavoriteIcon(whiteHeartIcon)
      if (localStorage.getItem('favoriteRecipes')) {
        const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
        const isFavorite = favoriteRecipes.some((recipe) => recipe.id === id);
        if (isFavorite) setFavoriteIcon(blackHeartIcon);
      }

      setClassNameIngredients(ingredListClass);
      setIsLoading(false);
    };
    getDrinkDetails();
  }, []);

  useEffect(() => {
    if (hasChecked) {
      localStorage.setItem('inProgressRecipes', JSON.stringify(statusIngredients));
    }
  }, [statusIngredients]);

  useEffect(() => {
    if (countCheckIngredList === numberIngredients && numberIngredients !== 0) {
      setStatusEndRecipeButton(false);
    }
    if (countCheckIngredList < numberIngredients) setStatusEndRecipeButton(true);
  }, [countCheckIngredList]);

  function copyLink(index) {
    copy(`http://localhost:3000/bebidas/${index}`);
    setClick(true);
  }

  function checkList(index) {
    setHasChecked(true);
    if (statusIngredients[index] === true) {
      setStatusIngredients((prev) => ({ ...prev, [index]: false }));
      setClassNameIngredients((prev) => ({ ...prev, [index]: 'notChecked' }));
      const newCount = countCheckIngredList - 1;
      setCountCheckIngredList(newCount);
    }
    if (statusIngredients[index] === false) {
      setStatusIngredients((prev) => ({ ...prev, [index]: true }));
      setClassNameIngredients((prev) => ({ ...prev, [index]: 'yesChecked' }));
      const newCount = countCheckIngredList + 1;
      setCountCheckIngredList(newCount);
    }
  }

  function statusIcon({ idDrink, strCategory, strAlcoholic, strDrink, strDrinkThumb }) {
    if (favoriteIcon === whiteHeartIcon) {
      setFavoriteIcon(blackHeartIcon);
      let favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
      if (!favoriteRecipes) favoriteRecipes = [];
      const newFavoriteRecipes = [
        ...favoriteRecipes,
        {
          id: idDrink,
          type: 'bebida',
          area: '',
          category: strCategory,
          alcoholicOrNot: strAlcoholic,
          name: strDrink,
          image: strDrinkThumb,
        },
      ];
      localStorage.setItem('favoriteRecipes', JSON.stringify(newFavoriteRecipes));
    }
    if (favoriteIcon === blackHeartIcon) {
      setFavoriteIcon(whiteHeartIcon);
      const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const newFavRecipes = favoriteRecipes.filter((recipe) => recipe.id !== idDrink);
      localStorage.setItem('favoriteRecipes', JSON.stringify(newFavRecipes));
    }
  }

  function createIngredArray() {
    const finalList = finalListIngredients.map((ingredient, index) => {
      if (ingredient) {
        return (
          <li
            key={ index }
            data-testid={ `${index}-ingredient-step` }
            className={ classNameIngredients[index] }
          >
            {ingredient}
            <input
              type="checkbox"
              id={ index }
              checked={ statusIngredients[index] }
              onClick={ (event) => checkList(event.target.id) }
            />
          </li>
        );
      }
      return null;
    });
    return (
      <ul>{ finalList }</ul>
    );
  }

  function renderCardRecipe({ strDrinkThumb, strDrink, strCategory, strInstructions }) {
    return (
      <div>
        <img
          src={ strDrinkThumb }
          alt={ strDrink }
          width="360px"
          height="300px"
          data-testid="recipe-photo"
        />
        <h3 data-testid="recipe-title">{ strDrink }</h3>
        {' '}
        <br />
        <input
          type="image"
          data-testid="share-btn"
          src={ shareIcon }
          alt="compartilhar"
          onClick={ () => copyLink(id) }
        />
        {' '}
        <br />
        <input
          type="image"
          data-testid="favorite-btn"
          src={ favoriteIcon }
          alt="botão favoritar"
          onClick={ () => statusIcon(drinkInProgress) }
        />
        {' '}
        <br />
        <p data-testid="recipe-category">{ strCategory }</p>
        <span>
          { createIngredArray() }
        </span>
        <p data-testid="instructions">{ strInstructions }</p>
        <button
          type="button"
          data-testid="finish-recipe-btn"
          disabled={ statusEndRecipeButton }
          onClick={ () => history.push('/receitas-feitas') }
        >
          Finalizar Receita
        </button>
      </div>
    );
  }

  return (
    <div>
      <span>
        { click ? <p>Link copiado!</p> : null }
        { loading ? <p>Carregando...</p> : renderCardRecipe(drinkInProgress)}
      </span>
    </div>
  );
}

DrinksRecipeInProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default DrinksRecipeInProgress;
