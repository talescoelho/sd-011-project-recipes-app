import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import shareImage from '../images/shareIcon.svg';

// import '../styles/RecipeConcluded.css';
import LinkCopy from './LinkCopy';

function FavoriteRecipeCard({ recipe, index }) {
  console.log(recipe);
  const { id,
    type,
    area,
    category,
    alcoholicOrNot,
    image,
    name } = recipe;

  const history = useHistory();
  const HandleRedirect = (recipeId) => {
    if (type === 'comida') history.push(`comidas/${recipeId}`);
    if (type === 'bebida') history.push(`bebidas/${recipeId}`);
  };

  const handleShareBtn = () => {
    const DONE_RECIPES_LENGTH = -15;
    const url = window.location.href.slice(DONE_RECIPES_LENGTH);
    navigator.clipboard.writeText(url);
    return <LinkCopy />;
  };

  return (
    <div className="RecipeConcludedContainer">
      <img
        src={ image }
        alt="Recipe"
        data-testid={ `${index}-horizontal-image` }
        onClick={ () => HandleRedirect(id) }
        aria-hidden="true"
      />
      <div className="RecipeInfoConcluded">
        <span data-testid={ `${index}-horizontal-top-text` }>
          { type === 'comida' ? area : '' }
          { ' - ' }
          { type === 'comida' ? category : alcoholicOrNot }
        </span>
        <p
          className="RecipesFoodName"
          data-testid={ `${index}-horizontal-name` }
        >
          { name }
        </p>
        <button
          className="shareBTN"
          type="button"
          data-testid={ `${index}-horizontal-share-btn` }
          onClick={ () => handleShareBtn() }
        >
          <img src={ shareImage } alt="Compartilhar" />
        </button>
      </div>
    </div>
  );
}

FavoriteRecipeCard.propTypes = {
  recipe: PropTypes.objectOf(String),
  index: PropTypes.number,
}.isRequired;

export default FavoriteRecipeCard;
