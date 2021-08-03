import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import { caseFavoriteRecipesNull, caseRemoveFavorite } from '../service/localStorage';
import FavoriteButton from './FavoriteButton';

function ShareAndFavorite({
  favorite,
  share,
  testFavorite,
  testShare, comidasOuBebidas, id, data }) {
  const [favorited, setFavorited] = useState(false);
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const [copiado, setCopiado] = useState(false);
  useEffect(() => {
    const limitCopy = 5000;
    setTimeout(() => setCopiado(false), limitCopy);
  });

  useEffect(() => {
    if (favoriteRecipes !== null) {
      favoriteRecipes.map((recipe) => recipe.id === id && setFavorited(true));
    }
  }, [favoriteRecipes, id]);

  async function handleFavorite() {
    setFavorited(!favorited);
    let newFavorite = [];
    if (favorited) {
      return caseRemoveFavorite(favorited, id);
    }
    if (favoriteRecipes) {
      if (comidasOuBebidas === 'comidas') {
        newFavorite = [
          ...favoriteRecipes,
          {
            id: data[0].idMeal,
            type: 'comida',
            area: data[0].strArea,
            category: data[0].strCategory,
            alcoholicOrNot: '',
            name: data[0].strMeal,
            image: data[0].strMealThumb,
          },
        ];
      } else {
        newFavorite = [
          ...favoriteRecipes,
          {
            id: data[0].idDrink,
            type: 'bebida',
            area: '',
            category: data[0].strCategory,
            alcoholicOrNot: data[0].strAlcoholic,
            name: data[0].strDrink,
            image: data[0].strDrinkThumb,
          },
        ];
      }

      localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorite));
    } else {
      caseFavoriteRecipesNull(comidasOuBebidas, data);
    }
  }

  return (
    <div>
      {favorite && (
        <FavoriteButton
          onClick={ handleFavorite }
          testFavorite={ testFavorite }
          favorited={ favorited }
        />
      )}
      {share && (
        <button
          type="button"
          src={ shareIcon }
          data-testid={ testShare }
          onClick={ () => {
            copy(`http://localhost:3000/${comidasOuBebidas}/${id}`);
            setCopiado(true);
          } }
        >
          <img src={ shareIcon } alt="heart" />
        </button>
      )}
      {copiado && (<p>Link copiado!</p>)}
    </div>
  );
}

ShareAndFavorite.propTypes = {
  comidasOuBebidas: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  share: PropTypes.bool.isRequired,
  testFavorite: PropTypes.string.isRequired,
  testShare: PropTypes.string.isRequired,
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default ShareAndFavorite;
