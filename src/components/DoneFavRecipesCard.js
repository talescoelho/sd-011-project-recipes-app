import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function DoneFavRecipesCard({ recipe, index, done, fav }) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    // funcao que copia URL utilizando biblioteca clipboard-copy
    setIsCopied(true);
    setTimeout(setIsCopied(false), time);
  };

  const removeFromFavorites = (id) => {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    newFavorites = favoriteRecipes.filter((favRecipe) => favRecipe.id !== id);
    localStorage.setItem('avoriteRecipes', JSON.stringify(newFavorites));
  };

  return (
    <div>
      <Link to={ `/${recipe.type}s/${recipe.id}` }>
        <img
          src={ recipe.image }
          alt={ recipe.name }
          data-testid={ `${index}-horizontal-image` }
        />
      </Link>
      <p data-testid={ `${index}-horizontal-top-text` }>
        { recipe.alcoholicOrNot || `${recipe.area} - ${recipe.category}` }
      </p>
      <Link to={ `/${recipe.type}s/${recipe.id}` }>
        <h4 data-testid={ `${index}-horizontal-name` }>
          { recipe.name }
        </h4>
      </Link>
      { done && (
        <p data-testid={ `${index}-horizontal-done-date` }>
          { recipe.doneDate }
        </p>) }
      <button
        type="button"
        onClick={ copyToClipboard }
      >
        <img
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
          alt="Compartilhar receita"
        />
      </button>
      { fav && (
        <button
          type="button"
          onClick={ () => removeFromFavorites(recipe.id) }
        >
          <img
            data-testid={ `${index}-horizontal-favorite-btn` }
            src={ blackHeartIcon }
            alt="Desfavoritar receita"
          />
        </button>)}
      { isCopied && <p>Link copiado!</p>}
      { done && (recipe.tags.map((tag, tagIndex) => tagIndex > 2 && (
        <p data-testid={ `${index}-${tag}-horizontal-tag` }>
          { tag }
        </p>
      ))) }
    </div>
  );
}

DoneFavRecipesCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  done: PropTypes.bool.isRequired,
  fav: PropTypes.bool.isRequired,
};

export default DoneFavRecipesCard;
