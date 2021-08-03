import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import ShareAndFavorite from './ShareAndFavorite';

function FavoriteRecipeCard({
  src, name, index, text, area, comidaOuBebida, id, forceUpdate }) {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const comidasOuBebidas = comidaOuBebida === 'comida' ? 'comidas' : 'bebidas';
  return (
    <div>
      {comidaOuBebida === 'comida' ? (
        <div>
          <div>
            <Link to={ `/comidas/${id}` }>
              <img
                src={ src }
                alt={ name }
                data-testid={ `${index}-horizontal-image` }
                width="40px"
                height="40px"
              />
            </Link>
          </div>
          <div>
            <p data-testid={ `${index}-horizontal-top-text` }>
              {area}
              {' '}
              -
              {' '}
              {text}
            </p>
            <Link to={ `/comidas/${id}` }>
              <h2 data-testid={ `${index}-horizontal-name` }>{name}</h2>
            </Link>
            <ShareAndFavorite
              share
              favorite
              data={ favoriteRecipes }
              testFavorite={ `${index}-horizontal-favorite-btn` }
              testShare={ `${index}-horizontal-share-btn` }
              comidasOuBebidas={ comidasOuBebidas }
              id={ id }
              forceUpdate={ forceUpdate }
            />
          </div>
        </div>
      ) : (
        <div>
          <div>
            <Link to={ `/bebidas/${id}` }>
              <img
                src={ src }
                alt={ name }
                data-testid={ `${index}-horizontal-image` }
                width="40px"
                height="40px"
              />
            </Link>
          </div>
          <div>
            <p data-testid={ `${index}-horizontal-top-text` }>
              {text}
            </p>
            <Link to={ `/bebidas/${id}` }>
              <h2 data-testid={ `${index}-horizontal-name` }>{name}</h2>
            </Link>
            <ShareAndFavorite
              data={ favoriteRecipes }
              share
              favorite
              testFavorite={ `${index}-horizontal-favorite-btn` }
              testShare={ `${index}-horizontal-share-btn` }
              comidasOuBebidas={ comidasOuBebidas }
              id={ id }
              forceUpdate={ forceUpdate }
            />
          </div>
        </div>
      )}
    </div>
  );
}

FavoriteRecipeCard.propTypes = {
  area: PropTypes.string.isRequired,
  comidaOuBebida: PropTypes.string.isRequired,
  forceUpdate: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default FavoriteRecipeCard;
