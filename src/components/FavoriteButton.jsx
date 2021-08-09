import React, { useState } from 'react';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function FavoriteButton() {
  // Set do state inicial do favorito como false (como é iniciado o botão)
  const [fav, setFav] = useState(false);

  const handleClick = () => {
    if (!fav) {
      setFav(true);
    } else {
      setFav(false);
    }
  };

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
