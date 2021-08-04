import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import FavoriteButton from '../components/FavBtnFavoritePage';
import ShareBtnFav from '../components/ShareBtnFav';
import Favorite from '../components/Favorite';

export default function RecipeFavorite() {
  const [typeFilter, setTypeFilter] = useState('');
  const [filterFavorite, setFilterFavorite] = useState(false);

  const setTypeFavorite = ({ target }) => {
    const { value } = target;
    setTypeFilter(value);
    setFilterFavorite(true);
  };

  const allFavorites = () => {
    setFilterFavorite(false);
  };

  const getFavoriteLocalStorage = () => {
    const Local = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (Local) {
      return Local.map((item, index) => (
        <div key={ index }>
          <span
            data-testid={ `${index}-horizontal-top-text` }
          >
            { item.type === 'bebida'
              ? `${item.alcoholicOrNot}` : `${item.area} - ${item.category}`}
          </span>
          <Link to={ `/bebidas/${item.id}` }>
            <h2 data-testid={ `${index}-horizontal-name` }>
              {' '}
              {item.name}
            </h2>
          </Link>
          <img
            src={ item.image }
            alt={ item.name }
            data-testid={ `${index}-horizontal-image` }
          />
          <Link to="/receitas-favoritas">
            {FavoriteButton(item.id, index)}
          </Link>
          <div>
            {ShareBtnFav(`${item.type}/${item.id}`, index)}
          </div>

        </div>));
    }
  };

  return (
    <div>
      <Header title="Receitas Favoritas" />
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ allFavorites }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        value="comida"
        onClick={ setTypeFavorite }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        value="bebida"
        onClick={ setTypeFavorite }
      >
        Drinks
      </button>
      <div>
        {filterFavorite ? Favorite(typeFilter) : getFavoriteLocalStorage()}
      </div>

    </div>
  );
}
