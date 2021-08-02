import React, { useState } from 'react';
import Header from '../components/Header';
import DoneFavRecipesCard from '../components/DoneFavRecipesCard';

function RecipesDone() {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  const [filteredRecipes, setFilteredRecipes] = useState(doneRecipes);

  const handleFilterButtons = (event) => {
    const { innerText } = event.target;
    if (innerText === 'Food') {
      setFilteredRecipes(doneRecipes.filter(({ type }) => type === 'comida'));
    }
    if (innerText === 'Drinks') {
      setFilteredRecipes(doneRecipes.filter(({ type }) => type === 'bebida'));
    }
    if (innerText === 'All') {
      setFilteredRecipes(doneRecipes);
    }
  };

  return (
    <div>
      <Header title="Receitas Feitas" />
      <nav>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ handleFilterButtons }
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ handleFilterButtons }
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ handleFilterButtons }
        >
          Drinks
        </button>
      </nav>
      <div>
        { filteredRecipes.map((recipe, index) => (
          <DoneFavRecipesCard
            key={ recipe.id }
            recipe={ recipe }
            index={ index }
            done
          />
        )) }
      </div>
    </div>
  );
}

export default RecipesDone;
