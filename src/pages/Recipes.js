import React from 'react';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';

const recipesQuantity = 12;

function Recipes() {
  const recipes = new Array(recipesQuantity).fill('temp');

  return (
    <>
      <header>
        <h1 data-testid="page-title">Tela Principal de Receitas</h1>
        <button type="button" data-testid="profile-top-btn">Profile</button>
        <button type="button" data-testid="search-top-btn">Search</button>
      </header>
      <main data-testid="recipes-page">
        {
          recipes.map((_, index) => <RecipeCard key={ index } index={ index } />)
        }
      </main>
      <Footer />
    </>
  );
}

export default Recipes;
