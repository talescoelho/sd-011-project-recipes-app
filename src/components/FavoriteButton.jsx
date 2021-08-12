import React, { useState } from 'react';
import PropTypes from 'prop-types';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function FavoriteButton({ data }) {
  // Set do state inicial do favorito como false (como é iniciado o botão)
  const favoritedRecipes = JSON.parse(
    localStorage.getItem('favoriteRecipes'),
  );
  function isFavorited() {
    if (favoritedRecipes !== null) {
      return favoritedRecipes.some((e) => e.id === data.id);
    }
    return false;
  }
  const [fav, setFav] = useState(false);

  const handleClick = () => {
    if (favoritedRecipes !== null && !fav) {
      setFav(true);
      favoritedRecipes.push(data);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favoritedRecipes));
    }
    if ((fav && favoritedRecipes !== null)) {
      setFav(false);
      localStorage.setItem(
        'favoriteRecipes',
        JSON.stringify(favoritedRecipes.filter((e) => e.id !== data.id)),
      );
    }
    if (favoritedRecipes === null) {
      setFav(true);
      localStorage.setItem('favoriteRecipes', JSON.stringify([data]));
    }
  };
  if (isFavorited() && !fav) {
    setFav(true);
    return (
      <input
        type="image"
        data-testid="favorite-btn"
        src={ fav ? blackHeartIcon : whiteHeartIcon }
        onClick={ () => handleClick() }
        alt="favorite icon"
      />
    );
  }
  // A tag image não aceita um onClick como atributo. Para solucionar isso, foi criada uma tag input do tipo image (thanks Douglas <3);
  return (
    <input
      type="image"
      data-testid="favorite-btn"
      src={ fav ? blackHeartIcon : whiteHeartIcon }
      onClick={ () => handleClick() }
      alt="favorite icon"
    />
  );
}

export default FavoriteButton;

FavoriteButton.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};
