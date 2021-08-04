import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from '../components/FavBtnFavoritePage';
import ShareBtnFav from '../components/ShareBtnFav';

function FavoriteDrinks() {
  const getFavoriteLocalStorage = () => {
    const Local = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (Local) {
      return Local.map((item, index) => (
        <div key={ index }>
          <span
            data-testid={ `${index}-horizontal-top-text` }
          >
            {`${item.area} - ${item.category}`}
          </span>
          <h2 data-testid={ `${index}-horizontal-name` }>
            {' '}
            {item.name}
          </h2>
          <img
            src={ item.image }
            alt={ item.name }
            data-testid={ `${index}-horizontal-image` }
          />
          <Link to="/receitas-favoritas">
            {FavoriteButton(item.id, index)}
          </Link>
          <div>
            {ShareBtnFav(`http://localhost:3000/comidas/${item.id}`, index)}
          </div>

        </div>));
    }
  };
  return (
    <div>
      {getFavoriteLocalStorage()}
    </div>
  );
}

export default FavoriteDrinks;
