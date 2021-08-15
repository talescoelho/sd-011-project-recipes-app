import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

export default function Favorites() {
  const [favoriteRecipe, setfavoriteRecipe] = useState([]);
  const [filter, setFilter] = useState('all');
  const [fetching, setfetching] = useState(true);
  const [setList] = useState([]);
  useEffect(() => {
    if (localStorage.favoriteRecipes && fetching) {
      const listFromLS = localStorage.favoriteRecipes;
      setfavoriteRecipe(listFromLS);
      setfetching(false);
    }
  }, [fetching]);

  useEffect(() => {
    if (localStorage.doneRecipes) {
      const doneRecipesFromLS = JSON.parse(localStorage.doneRecipes);
      if (filter === 'all') {
        setList(JSON.parse(localStorage.doneRecipes));
      } if (filter === 'food') {
        const foodFoneRecipes = doneRecipesFromLS
          .filter((recipe) => recipe.type === 'comida');
        setList(foodFoneRecipes);
      } if (filter === 'drink') {
        const drinkDoneRecipes = doneRecipesFromLS
          .filter((recipe) => recipe.type === 'bebida');
        setList(drinkDoneRecipes);
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
