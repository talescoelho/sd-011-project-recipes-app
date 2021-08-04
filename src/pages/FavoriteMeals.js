import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from '../components/FavBtnFavoritePage';
import ShareBtnFav from '../components/ShareBtnFav';

function FavoriteMeals() {
  const getFavoriteLocalStorage = () => {
    const Local = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (Local) {
      return Local.filter(({ type }) => type === 'comida').map((item, index) => (
        <div key={ index }>
          <span
            data-testid={ `${index}-horizontal-top-text` }
          >
            {item.alcoholicOrNot}
          </span>
          <h2 data-testid={ `${index}-horizontal-name` }>
            {' '}
            {item.name}
          </h2>
          <Link to={ `/comidas/${item.id}` }>
            <img
              src={ item.image }
              alt={ item.name }
              data-testid={ `${index}-horizontal-image` }
            />
          </Link>
          <Link to="/receitas-favoritas">
            {FavoriteButton(item.id, index)}
          </Link>
          <div>
            {ShareBtnFav(`comidas/${item.id}`, index)}
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

export default FavoriteMeals;
