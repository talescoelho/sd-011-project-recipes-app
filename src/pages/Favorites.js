import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import FavoriteCards from '../components/FavoriteCards';

export default function Favorites() {
  const [favoriteRecipe, setfavoriteRecipe] = useState([]);
  const [filter, setFilter] = useState('all');
  const [fetching, setfetching] = useState(true);

  useEffect(() => {
    if (localStorage.favoriteRecipes && fetching) {
      const listFromLS = JSON.parse(localStorage.favoriteRecipes);
      setfavoriteRecipe(listFromLS);
      setfetching(false);
    }
  }, [fetching]);

  useEffect(() => {
    console.log(favoriteRecipe);
  }, [favoriteRecipe]);

  useEffect(() => {
    if (localStorage.doneRecipes) {
      const doneRecipesFromLS = JSON.parse(localStorage.doneRecipes);
      if (filter === 'all') {
        setfavoriteRecipe(JSON.parse(localStorage.doneRecipes));
      } if (filter === 'food') {
        const foodFoneRecipes = doneRecipesFromLS
          .filter((recipe) => recipe.type === 'comida');
        setfavoriteRecipe(foodFoneRecipes);
      } if (filter === 'drink') {
        const drinkDoneRecipes = doneRecipesFromLS
          .filter((recipe) => recipe.type === 'bebida');
        setfavoriteRecipe(drinkDoneRecipes);
      }
    }
  }, [filter]);

  function renderFavorites() {
    return (
      <div className="details-body">
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
            onClick={ () => setFilter('food') }
          >
            Food
          </button>
          <button
            type="button"
            data-testid="filter-by-drink-btn"
            onClick={ () => setFilter('drink') }
          >
            Drinks
          </button>
        </div>
        <FavoriteCards list={ favoriteRecipe } />
      </div>
    );
  }
  return (
    <main>
      <Header haveSearchBtn={ false } title="Receitas Favoritas" />
      { favoriteRecipe ? renderFavorites() : '' }
    </main>
  );
}
