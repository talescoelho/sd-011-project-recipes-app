import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ShareButton from '../components/ShareButton';
import blackHeart from '../images/blackHeartIcon.svg';
import '../styles/favorite.css';

export default function FavoritedRevenues() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    if (localStorage.favoriteRecipes) {
      const favoriteRecipe = JSON.parse(localStorage.getItem('favoriteRecipes'));
      setRecipe(favoriteRecipe);
    }
  }, []);

  function removeFavorite(id) {
    setRecipe(recipe.filter((value) => value.id !== id));
    localStorage.setItem('favoriteRecipes', JSON.stringify(recipe
      .filter((value) => value.id !== id)));
  }

  function filterFavorites(filter) {
    const favoriteRecipe = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (filter === 'All') {
      setRecipe(favoriteRecipe);
    } else {
      setRecipe(favoriteRecipe.filter((value) => value.type === filter));
    }
  }

  return (
    <div>
      <Header title="Receitas Favoritas" searchIcon />
      <div className="filter-buttons">
        <button
          type="button"
          onClick={ () => filterFavorites('All') }
          data-testid="filter-by-all-btn"
        >
          All
        </button>
        <button
          type="button"
          onClick={ () => filterFavorites('comida') }
          data-testid="filter-by-food-btn"
        >
          Food
        </button>
        <button
          type="button"
          onClick={ () => filterFavorites('bebida') }
          data-testid="filter-by-drink-btn"
        >
          Drinks
        </button>
      </div>
      <div className="container-favorite-recipe">
        {
          recipe.map((value, index) => (
            <div
              key={ index }
              className="favorite-recipe-card"
            >
              <Link to={ `/${value.alcoholicOrNot ? 'bebidas' : 'comidas'}/${value.id}` }>
                <img
                  src={ value.image }
                  data-testid={ `${index}-horizontal-image` }
                  alt={ value.name }
                />
              </Link>
              <div>
                <div>
                  {
                    value.area ? (
                      <span
                        className="recipe-text"
                        data-testid={ `${index}-horizontal-top-text` }
                      >
                        { `${value.area} - ${value.category}` }
                      </span>
                    )
                      : (
                        <span
                          className="recipe-text"
                          data-testid={ `${index}-horizontal-top-text` }
                        >
                          { value.alcoholicOrNot }
                        </span>
                      )
                  }
                </div>
                <Link
                  to={ `/${value.alcoholicOrNot ? 'bebidas'
                    : 'comidas'}/${value.id}` }
                >
                  <h3 data-testid={ `${index}-horizontal-name` }>
                    { value.name }
                  </h3>
                </Link>
                <div className="container-btns">
                  <ShareButton
                    dataTestId={ `${index}-horizontal-share-btn` }
                    urlLink={ `http://localhost:3000/${value.alcoholicOrNot ? 'bebidas' : 'comidas'}/${value.id}` }
                  />
                  <button
                    className="remove-favorite-btn"
                    data-testid={ `${index}-horizontal-favorite-btn` }
                    onClick={ () => removeFavorite(value.id) }
                    type="button"
                    src={ blackHeart }
                  >
                    <img
                      data-testid="favorite-btn"
                      src={ blackHeart }
                      alt="coração preenchido"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
