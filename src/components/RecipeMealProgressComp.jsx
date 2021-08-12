import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function RecipeMealProgressComp({ propsMealProgress }) {
  const {
    recipesSelectedId,
    setFavorited,
    handleChangeCheck,
    checkBox,
    recipeProgress,
    ingredientChecked,
    favorited,
  } = propsMealProgress;

  const handleFavoriteClick = () => {
    if (!favorited) {
      setFavorited(blackHeartIcon);
      const favoriteStorage = JSON.parse(localStorage.favoriteRecipes);
      const newFavoriteStorage = favoriteStorage.concat({
        id: recipeProgress.idMeal,
        type: 'comida',
        area: recipeProgress.strArea,
        category: recipeProgress.strCategory,
        alcoholicOrNot: '',
        name: recipeProgress.strMeal,
        image: recipeProgress.strMealThumb,
      });
      localStorage.favoriteRecipes = JSON.stringify(newFavoriteStorage);
    } else {
      setFavorited();
      const favoriteStorage = JSON.parse(localStorage.favoriteRecipes);
      const newFavoriteStorage = favoriteStorage.filter(
        (recipe) => recipe.id !== recipesSelectedId,
      );
      localStorage.favoriteRecipes = JSON.stringify(newFavoriteStorage);
    }
  };
  return (
    <div>
      (
      <div>
        <h2 data-testid="recipe-title">{recipeProgress.strMeal}</h2>
        <img
          src={ recipeProgress.strMealThumb }
          data-testid="recipe-photo"
          className="recipes-img"
          alt={ recipeProgress.strMeal }
          width="100px"
        />
        <button data-testid="share-btn" type="button">
          <img src={ shareIcon } alt="share icon" />
        </button>
        <button
          data-testid="favorite-btn"
          type="button"
          onClick={ handleFavoriteClick }
        >
          <img src={ favorited ? blackHeartIcon : whiteHeartIcon } alt="favorite icon" />
        </button>
        <p data-testid="recipe-category">{recipeProgress.strCategory}</p>
        <h3>Ingredients</h3>
        {checkBox.map((itens, key) => (
          <label
            htmlFor={ key }
            data-testid={ `${key}-ingredient-step` }
            className={ ingredientChecked.includes(itens) ? 'risk' : 'norisk' }
            key={ key }
          >
            <input
              type="checkbox"
              checked={ ingredientChecked.includes(itens) }
              value={ itens }
              id={ key }
              onClick={ (e) => handleChangeCheck(e) }
            />
            {itens}
          </label>))}

        <p data-testid="instructions">{recipeProgress.strInstructions}</p>
        <Link to="/receitas-feitas">
          <button
            type="button"
            data-testid="finish-recipe-btn"
          >
            Finalizar Receita
          </button>
        </Link>
      </div>
    </div>
  );
}

RecipeMealProgressComp.propTypes = {
  propsMealProgress: PropTypes.shape({
    recipesSelectedId: PropTypes.string,
    setFavorited: PropTypes.func,
    handleChangeCheck: PropTypes.func,
    checkBox: PropTypes.arrayOf(PropTypes.string),
    recipeProgress: PropTypes.objectOf(PropTypes.string),
    ingredientChecked: PropTypes.arrayOf(PropTypes.string),
    favorited: PropTypes.bool,
  }).isRequired,
};
