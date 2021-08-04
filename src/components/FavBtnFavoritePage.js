import React from 'react';
import PropTypes from 'prop-types';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function FavBtn(data, indexFavorite) {
  // const [render, setRender] = useState(false);
  const removeFavorite = () => {
    const favorites = JSON.parse(localStorage.favoriteRecipes);
    console.log(data);

    const newFavorites = favorites.filter((index) => index.id !== data);
    console.log(newFavorites);
    localStorage.favoriteRecipes = JSON.stringify(newFavorites);
  };

  return (
    <button type="button" onClick={ removeFavorite }>
      <img
        src={ blackHeartIcon }
        data-testid={ `${indexFavorite}-horizontal-favorite-btn` }
        alt="favorite icon"
      />
    </button>
  );
}

FavBtn.propTypes = {
  data: PropTypes.object,
  type: PropTypes.string,
}.isRequired;

export default FavBtn;
