import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import FavoriteCard from '../components/FavoriteCard';

export default function FavouriteRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [filter, setFilter] = useState('all');
  useEffect(() => {
    if (!localStorage.favoriteRecipes) {
      localStorage.setItem('favoriteRecipes', '[]');
    }
    const localStore = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (filter === 'all') {
      setRecipes(localStore);
    } else {
      const filterRecipes = localStore.filter((element) => element.type === filter);
      setRecipes(filterRecipes);
    }
  }, [filter]);
  if (recipes.length === 0) {
    return (
      <>
        <Header title="Receitas Favoritas" />
        <h2> Nenhum favorito </h2>
      </>
    );
  }
  return (
    <div>
      <Header title="Receitas Favoritas" />
      Receitas Favoritas
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

      { recipes.map((element, index) => (
        <FavoriteCard recipe={ element } index={ index } key={ index } />
      )) }
    </div>
  );
}
