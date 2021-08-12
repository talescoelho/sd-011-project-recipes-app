import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from '../components/FavoriteButton';
import SharedButton from '../components/SharedButton';
import Header from '../components/Header';

function ReceitasFavoritas() {
  const [filter, setFilter] = useState('all');

  const cardsFavorites = () => {
    const doneFavorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const filted = doneFavorites
      .filter(({ type }) => type === filter || filter === 'all');

    return filted
      .map(({ image, category, name, area, alcoholicOrNot, type, id }, index) => (
        <div key={ index }>
          <Link to={ `/${type}s/${id}` }>
            <img
              src={ image }
              data-testid={ `${index}-horizontal-image` }
              alt="card recipe done"
              style={ { width: 25 } }
            />
          </Link>

          <div>
            <h6
              data-testid={ `${index}-horizontal-top-text` }
            >
              {`${area} - ${category}`}
            </h6>
            <Link to={ `/${type}s/${id}` }>
              <h5 data-testid={ `${index}-horizontal-name` }>{name}</h5>
            </Link>

            <h6 data-testid="1-horizontal-top-text">
              {alcoholicOrNot}
            </h6>

            <FavoriteButton
              reload
              id={ id }
              dataTest={ `${index}-horizontal-favorite-btn` }
              style={ { width: 25 } }

            />

            <SharedButton
              path={ `http://localhost:3000/${type}s/${id}` }
              dataTest={ `${index}-horizontal-share-btn` }
              style={ { width: 25 } }

            />
          </div>

        </div>
      ));
  };

  return (
    <div id="page-drinks">
      <Header title="Receitas Favoritas" />

      <div>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => setFilter('all') }
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => setFilter('comida') }
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => setFilter('bebida') }
        >
          Drinks
        </button>
      </div>

      {localStorage.getItem('favoriteRecipes') && cardsFavorites()}
    </div>

  );
}

export default ReceitasFavoritas;
