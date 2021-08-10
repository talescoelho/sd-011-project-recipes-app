import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../css/RecipeInProgress.css';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

const copy = require('clipboard-copy');

function FoodsRecipeInProgress({ match: { params: { id } } }) {
  const [mealInProgress, setMealInProgress] = useState('');
  const [loading, setIsLoading] = useState(true);
  const [finalListIngredients, setFinalListIngredients] = useState();
  const [classNameIngredients, setClassNameIngredients] = useState([]);
  const [statusIngredients, setStatusIngredients] = useState([]);
  const [click, setClick] = useState(false);
  const [favoriteIcon, setFavoriteIcon] = useState(whiteHeartIcon);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    const endpoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const getMealDetails = async () => {
      const response = await fetch(endpoint);
      const data = await response.json();
      const { meals } = data;
      setMealInProgress(meals[0]);

      // Cria a Lista de Ingredientes
      const ingredArray = Object.entries(meals[0])
        .filter((key) => key[0].includes('strIngredient'));
      const ingredList = [];
      ingredArray.forEach((item) => ingredList.push(item[1]));
      setFinalListIngredients(ingredList);

      // Faz um Array de Length igual o Length da Lista de ingredientes, só que cada elemento do array
      // É igual a uma string 'notChecked', que será a classe inicial dos checkboxs
      // O controle é feito pelo index, ingredList na posição X, tem uma classe ingredListClass na posição X
      const ingredListClass = [];
      ingredList.forEach((item) => {
        if (item !== null && item !== '') ingredListClass.push('notChecked');
      });

      if (!localStorage.getItem('inProgressRecipes')) {
        const arrayStatus = [];
        ingredList.forEach((item) => {
          if (item !== null && item !== '') arrayStatus.push(false);
        });
        setStatusIngredients(arrayStatus);
      } else {
        const statusIngredientsSaved = JSON.parse(localStorage.getItem('inProgressRecipes'));
        const valueStatusSaved = Object.values(statusIngredientsSaved);
        valueStatusSaved.forEach((item, index) => {
          if (item) ingredListClass[index] = 'yesChecked';
        });
        setStatusIngredients(statusIngredientsSaved);
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
    getMealDetails();
  }, []);

  useEffect(() => {
    if (hasChecked) {
      localStorage.setItem('inProgressRecipes', JSON.stringify(statusIngredients));
    }
  }, [statusIngredients]);

  function copyLink(id) {
    copy(`http://localhost:3000/comidas/${id}`);
    setClick(true);
  }

  function checkList(index) {
    setHasChecked(true);
    if (statusIngredients[index] === true) {
      setStatusIngredients((prev) => ({ ...prev, [index]: false }));
      setClassNameIngredients((prev) => ({ ...prev, [index]: 'notChecked' }));
    }
    if (statusIngredients[index] === false) {
      setStatusIngredients((prev) => ({ ...prev, [index]: true }));
      setClassNameIngredients((prev) => ({ ...prev, [index]: 'yesChecked' }));
    }
  }

  function createIngredArray() {
    const finalList = finalListIngredients.map((ingredient, index) => {
      if (ingredient !== '' && ingredient !== null) {
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
  
  function changeStatusIcon() {
    if (favoriteIcon === whiteHeartIcon) setFavoriteIcon(blackHeartIcon)
    if (favoriteIcon === blackHeartIcon) setFavoriteIcon(whiteHeartIcon)
  }

  function renderCardRecipe({ strMealThumb, strMeal, strCategory, strInstructions }) {
    return (
      <div>
        <img
          src={ strMealThumb }
          alt={ strMeal }
          width="360px"
          height="300px"
          data-testid="recipe-photo"
        />
        <h3 data-testid="recipe-title">{ strMeal }</h3>
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
          onClick={ () => changeStatusIcon() }
        />
        {' '}
        <br />
        <p data-testid="recipe-category">{ strCategory }</p>
        <span>
          { createIngredArray() }
        </span>
        <p data-testid="instructions">{ strInstructions }</p>
        <button type="button" data-testid="finish-recipe-btn">Finalizar Receita</button>
      </div>
    );
  }

  return (
    <div>
      <span> { click ? <p>Link copiado!</p> : null } </span>
      <span>{ loading ? <p>Carregando...</p> : renderCardRecipe(mealInProgress) }</span>
    </div>
  );
}

FoodsRecipeInProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default FoodsRecipeInProgress;
