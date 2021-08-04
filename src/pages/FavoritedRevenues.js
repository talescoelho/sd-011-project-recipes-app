import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ShareButton from '../components/ShareButton';
import blackHeart from '../images/blackHeartIcon.svg';
import '../styles/favorite.css';

export default function FavoritedRevenues() {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    if (localStorage.favoriteRecipes) {
      const favoriteRecipe = JSON.parse(localStorage.getItem('favoriteRecipes'));
      setRecipe(favoriteRecipe);
    }
  }, []);

  console.log(recipe);
  if (!recipe) {
    return (<p>Carregando</p>);
  }

  function removeFavorite(id) {
    console.log(id);
    setRecipe(recipe.filter((value) => value.id !== id));
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
      <Header title="Receitas Favoritas" search={ false } />
      <div className="filter-buttons">
        <button
          type="button"
          onClick={ () => filterFavorites('All') }
        >
          All
        </button>
        <button
          type="button"
          onClick={ () => filterFavorites('comida') }
        >
          Food
        </button>
        <button
          type="button"
          onClick={ () => filterFavorites('bebidas') }
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
              <img src={ value.image } alt={ value.name } />
              <div>
                <div>
                  {
                    value.area ? (
                      <span className="recipe-text">
                        { `${value.area} - ${value.category}` }
                      </span>
                    )
                      : (
                        <span className="recipe-text">
                          { value.alcoholicOrNot }
                        </span>
                      )
                  }
                </div>
                <h1>
                  { value.name }
                </h1>
                <div className="container-btns">
                  <ShareButton />
                  <button
                    className="remove-favorite-btn"
                    onClick={ () => removeFavorite(value.id) }
                    type="button"
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
      <Footer />
    </div>
  );
}
