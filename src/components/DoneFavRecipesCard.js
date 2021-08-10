import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function DoneFavRecipesCard({ recipe, index, done, fav, removeFromFavorites }) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = ({ id, type }) => {
    const url = `http://localhost:3000/${type}s/${id}`;
    // funcao que copia URL utilizando biblioteca clipboard-copy ainda em teste
    copy(url);
    setIsCopied(true);
    const time = 2000;
    setTimeout(setIsCopied, time, false);
  };

  return (
    <div className="card border border-danger">

      <div className="card-img-top">
        <Link to={ `/${recipe.type}s/${recipe.id}` }>
          <img
            className="img-fluid"
            src={ recipe.image }
            alt={ recipe.name }
            data-testid={ `${index}-horizontal-image` }
          />
        </Link>
      </div>

      <div className="card-inner">
        <Link to={ `/${recipe.type}s/${recipe.id}` }>
          <h2 className="title-recipe" data-testid={ `${index}-horizontal-name` }>
            { recipe.name }
          </h2>
        </Link>
        <h3
          className="text-center subtitle"
          data-testid={ `${index}-horizontal-top-text` }
        >
          { recipe.alcoholicOrNot || `${recipe.area} - ${recipe.category}` }
        </h3>

        <div className="d-flex justify-content-around">
          { done && (
            recipe.tags.map((tag, i) => (
              <span
                className="recipe-tag"
                key={ i }
                data-testid={ `${index}-${tag}-horizontal-tag` }
              >
                {tag}
              </span>
            )))}
        </div>
      </div>

      <div className="d-flex justify-content-around align-items-center my-3">
        { done && (
          <span
            className="recipe-tag"
            data-testid={ `${index}-horizontal-done-date` }
          >
            { recipe.doneDate }
          </span>)}

        <button type="button" onClick={ () => copyToClipboard(recipe) }>
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
      </div>
      { isCopied && <p className="alert alert-success" role="alert">Link copiado!</p>}
    </div>
  );
}

DoneFavRecipesCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  done: PropTypes.bool.isRequired,
  fav: PropTypes.bool.isRequired,
  removeFromFavorites: PropTypes.func.isRequired,
};

export default DoneFavRecipesCard;
