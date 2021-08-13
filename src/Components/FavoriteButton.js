import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import MyContext from '../Context/MyContext';

function FavoriteBtn({ id, type, area, category, alcoholicOrNot, name, image, index }) {
  const {
    isFavorite, setIsFavorite,
  } = useContext(MyContext);
  // const recipeId = id;

  // useEffect(() => {
  //   localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  // }, [favoriteRecipes.length, favoriteRecipes, isFavorite]);

  const setUnfavorite = () => {
    setIsFavorite(!isFavorite);

    const recipeDetails = {
      id,
      type,
      area,
      category,
      alcoholicOrNot,
      name,
      image,
    };
    const storageFavorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    JSON.stringify(
      localStorage.setItem('favoriteRecipes', [...storageFavorites, recipeDetails]),
    );
  };

  // const setButton = () => {
  //   const getLocalStr = JSON.parse(localStorage.getItem('favoriteRecipes'));
  //   let checkLocalStr;

  //   if (getLocalStr !== null) {
  //     checkLocalStr = Object.values(getLocalStr)
  //       .find(({ id: strId }) => strId === recipeId);
  //   }
  // };

  return (
    <div>
      <button
        type="button"
        data-testid={ `${index}-horizontal-favorite-btn` }
        onClick={ setUnfavorite }
      >
        <img
          data-testid="favorite-btn"
          src={ !isFavorite ? whiteHeartIcon : blackHeartIcon }
          alt="set favorite"
        />
      </button>
    </div>
  );
}

FavoriteBtn.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string),
}.isRequired;

export default FavoriteBtn;
