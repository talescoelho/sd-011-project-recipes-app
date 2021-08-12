import React from 'react';
import Header from '../components/Header';
import RecipeDoneCard from '../components/RecipeDoneCard';
import { getFromStorage } from '../helpers/utils';

function RecipesDone() {
  const recipesDone = getFromStorage('doneRecipes');

  return (
    <>
      <Header withSearch={ false } pageTitle="Receitas Feitas" />
      <main>
        <section>
          <button type="button" data-testid="filter-by-all-btn">All</button>
          <button type="button" data-testid="filter-by-food-btn">Food</button>
          <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
        </section>
        <section>
          {
            recipesDone && recipesDone.map((recipe, index) => (
              <RecipeDoneCard key={ index } recipe={ recipe } count={ index } />
            ))
          }
        </section>
      </main>
    </>
  );
}

export default RecipesDone;
