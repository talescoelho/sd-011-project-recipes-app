import React from 'react';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';

const recipesQuantity = 12;

function Recipes() {
  const recipes = new Array(recipesQuantity).fill('temp');

  return (
    <>
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
