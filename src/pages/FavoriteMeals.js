import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from '../components/FavBtnFavoritePage';
import ShareBtn from '../components/ShareBtn';

function FavoriteMeals() {
  const getFavoriteLocalStorage = () => {
    const Local = JSON.parse(localStorage.getItem('favoriteRecipes'));
     if (Local) {
      return Local.map((item, index) => (
        <div key={ index }>
          <span data-testid={ `${index}-horizontal-top-text` }>{`${item.area} - ${item.category}`}</span>
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
            {FavoriteButton(item.id)}
          </Link>
          {console.log(`http://localhost:3000/comidas/${item.id}`)}
          <div data-testid={ `${index}-horizontal-share-btn` }>
            {ShareBtn(`http://localhost:3000/comidas/${item.id}`)}
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
