import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import FavoriteCards from '../components/FavoriteCards';

export default function Favorites() {
  const [favoriteRecipe, setfavoriteRecipe] = useState([]);
  const [filter, setFilter] = useState('all');
  const [fetching, setfetching] = useState(true);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    if (localStorage.favoriteRecipes && fetching) {
      const listFromLS = JSON.parse(localStorage.favoriteRecipes);
      setfavoriteRecipe(listFromLS);
      setfetching(false);
    }
  }, [fetching]);
  useEffect(() => {
    setUpdate(false);
    setfavoriteRecipe(JSON.parse(localStorage.favoriteRecipes));
  }, [update]);
  useEffect(() => {
    if (localStorage.favoriteRecipes) {
      if (filter === 'all') {
        setfavoriteRecipe(JSON.parse(localStorage.favoriteRecipes));
      } if (filter === 'food') {
        const doneRecipesFromLS = JSON.parse(localStorage.favoriteRecipes);
        const foodFoneRecipes = doneRecipesFromLS
          .filter((recipe) => recipe.type === 'comida');
        setfavoriteRecipe(foodFoneRecipes);
        console.log('dentroDoIfFodao 2');
      } if (filter === 'drink') {
        const doneRecipesFromLS = JSON.parse(localStorage.favoriteRecipes);
        const drinkDoneRecipes = doneRecipesFromLS
          .filter((recipe) => recipe.type === 'bebida');
        setfavoriteRecipe(drinkDoneRecipes);
        console.log('dentroDoIfFodao 3');
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
        <FavoriteCards list={ favoriteRecipe } func={ setUpdate } />
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
