import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import MyContext from '../Context/MyContext';

function FavoriteBtn({ id, type, area, category, alcoholicOrNot, name, image, index }) {
  const {
    favoriteRecipes, setFavRecipes, isFavorite, setIsFavorite,
  } = useContext(MyContext);
  const recipeId = id;

  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  }, [favoriteRecipes.length, favoriteRecipes, isFavorite]);

  const setFavorite = () => {
    const recipeDetails = {
      id,
      type,
      area,
      category,
      alcoholicOrNot,
      name,
      image,
    };
    setFavRecipes((prevRecipes) => [...prevRecipes, recipeDetails]);
    
    setIsFavorite(true);
  };

  const setUnfavorite = () => {
    const removeFav = favoriteRecipes.filter(({ id: favId }) => favId !== recipeId);
    setFavRecipes(removeFav);
    setIsFavorite(false);
  };

  const setButton = () => {
    const getLocalStr = JSON.parse(localStorage.getItem('favoriteRecipes'));
    let checkLocalStr;

    if (getLocalStr !== null) {
      checkLocalStr = Object.values(getLocalStr)
        .find(({ id: strId }) => strId === recipeId);
    }

    if (checkLocalStr || isFavorite) {
      return (
        <button
          type="button"
          src={ blackHeartIcon }
          data-testid={ `${index}-horizontal-favorite-btn` }
          onClick={ setUnfavorite }
        >
          <img
            data-testid="favorite-btn"
            src={ blackHeartIcon }
            alt="set favorite"
          />
        </button>
      );
    }
    if (!isFavorite) {
      return (
        <button
          type="button"
          src={ whiteHeartIcon }
          data-testid={ `${index}-horizontal-favorite-btn` }
          onClick={ setFavorite }
        >
          <img
            data-testid="favorite-btn"
            src={ whiteHeartIcon }
            alt="set favorite"
          />
        </button>
      );
    }
  };

  return (
    <>
      {
        setButton()
      }
    </>
  );
}

FavoriteBtn.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string),
}.isRequired;

export default FavoriteBtn;