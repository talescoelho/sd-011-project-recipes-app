import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function FavoriteRecipes() {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

  const [favoriteRecipe] = useState(favoriteRecipes);
  const [filter, setFilter] = useState('all');

  function clickFilter({ target }) {
    const { value } = target;
    setFilter(value);
  }

  function filterRecipes() {
    if (filter === 'all') return favoriteRecipe;
    if (filter !== 'all') {
      return favoriteRecipe.filter((recipe) => recipe.type === filter);
    }
  }
  const filteredRecipes = filterRecipes();

  return (
    <div>
      <Header title="Receitas Favoritas" />
      <button
        value="all"
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ (e) => clickFilter(e) }
      >
        All
      </button>
      <button
        value="comida"
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ (e) => clickFilter(e) }
      >
        Food
      </button>
      <button
        value="bebida"
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ (e) => clickFilter(e) }
      >
        Drinks
      </button>
      {
        favoriteRecipe ? filteredRecipes.map((item, index) => {
          if (item.type === 'comida') {
            return (
              <section key={ index }>
                <Link to={ `/${item.type}s/${item.id}` }>
                  <img
                    data-testid={ `${index}-horizontal-image` }
                    alt={ `recipe ${item.name}` }
                    src={ item.image }
                  />
                  <span data-testid={ `${index}-horizontal-top-text` }>
                    { `${item.area} - ${item.category}` }
                  </span>
                  <span data-testid={ `${index}-horizontal-name` }>{ item.name }</span>
                </Link>
                <button
                  type="button"
                >
                  <img
                    data-testid={ `${index}-horizontal-share-btn` }
                    alt="share"
                    src={ shareIcon }
                  />
                </button>
                <button
                  type="button"
                >
                  <img
                    data-testid={ `${index}-horizontal-favorite-btn` }
                    src={ blackHeartIcon }
                    alt="favorite"
                  />
                </button>
              </section>
            );
          }
          return (
            <section key={ index }>
              <Link to={ `/${item.type}s/${item.id}` }>
                <img
                  data-testid={ `${index}-horizontal-image` }
                  alt={ `recipe ${item.name}` }
                  src={ item.image }
                />
                <span data-testid={ `${index}-horizontal-top-text` }>
                  { item.alcoholicOrNot }
                </span>
                <span data-testid={ `${index}-horizontal-name` }>{ item.name }</span>
              </Link>
              <button
                type="button"
              >
                <img
                  data-testid={ `${index}-horizontal-share-btn` }
                  alt="share"
                  src={ shareIcon }
                />
              </button>
              <button
                type="button"
              >
                <img
                  data-testid={ `${index}-horizontal-favorite-btn` }
                  src={ blackHeartIcon }
                  alt="favorite"
                />
              </button>
            </section>
          );
        }) : ''
      }
    </div>
  );
}

export default FavoriteRecipes;
