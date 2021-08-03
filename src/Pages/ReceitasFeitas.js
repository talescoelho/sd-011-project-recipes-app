import React from 'react';
import Header from '../components/Header';
import CardFiltered from '../components/CardFiltered';

function ReceitasFeitas() {
  const doneRecipes = localStorage.getItem('doneRecipes');
  const recipesToMap = doneRecipes === null ? [] : JSON.parse(doneRecipes);

  return (
    <div>
      <Header title="Receitas Feitas" />
      <div>
        <button type="button" data-testid="filter-by-all-btn">All</button>
        <button type="button" data-testid="filter-by-food-btn">Food</button>
        <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
      </div>
      {recipesToMap.map((recipe, index) => (
        <CardFiltered
          key={ recipe.id }
          image={ recipe.image }
          index={ index }
          category={ recipe.category }
          recipeName={ recipe.name }
          recipeDate={ recipe.doneDate }
          recipeTags={ recipe.tags }
        />))}
    </div>

  );
}

export default ReceitasFeitas;
