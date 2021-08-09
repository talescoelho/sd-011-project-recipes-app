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
    <>
      <Header title="Receitas Feitas" />
      <div className="container category-bar">
        <button
          className="category-bar-button"
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ handleFilterButtons }
        >
          All
        </button>
        <button
          className="category-bar-button"
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ handleFilterButtons }
        >
          Food
        </button>
        <button
          className="category-bar-button"
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ handleFilterButtons }
        >
          Drinks
        </button>
      </div>
      <div className="container my-5">
        <div className="row px-5 gallery-work">
          { filteredRecipes.map((recipe, index) => (
            <div className="col-md-4 my-3" key={ recipe.id }>
              <DoneFavRecipesCard
                recipe={ recipe }
                index={ index }
                done
              />
            </div>
          )) }
        </div>
      </div>
    </>
  );
}

export default RecipesDone;
