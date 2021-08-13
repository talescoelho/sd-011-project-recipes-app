import React from 'react';
import { getFromStorage } from '../helpers/utils';
import Header from '../components/Header';
import RecipeDoneFilters from '../components/RecipeDoneFilters';
import FavoriteRecipeCard from '../components/FavoriteRecipeCard';

function FavoriteRecipes() {
  const [filter, setFilter] = React.useState('all');

  const favoriteRecipes = getFromStorage('favoriteRecipes');

  return (
    <>
      <Header withSearch={ false } pageTitle="Receitas Favoritas" />
      <main>
        <RecipeDoneFilters setFilter={ setFilter } />
        <p>{ `Filtro selecionado: ${filter}` }</p>
        <section>
          {
            favoriteRecipes && favoriteRecipes.map((recipe, index) => (
              <FavoriteRecipeCard key={ index } recipe={ recipe } count={ index } />
            ))
          }
        </section>
      </main>
    </>
  );
}

export default FavoriteRecipes;
