import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import DoneRecipeCard from '../components/DoneRecipeCard';

export default function DoneRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    if (!localStorage.doneRecipes) {
      localStorage.setItem('doneRecipes', '[]');
    }
    const doneRecipes = JSON.parse(localStorage.doneRecipes);
    if (filter === 'all') {
      setRecipes(doneRecipes);
    } else {
      const filterRecipes = doneRecipes.filter((element) => element.type === filter);
      setRecipes(filterRecipes);
    }
  }, [filter]);

  return (
    <div>
      <Header title="Receitas Feitas" />
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
      {
        recipes.map((element, index) => (
          <DoneRecipeCard recipe={ element } key={ index } index={ index } />))
      }
    </div>
  );
}
