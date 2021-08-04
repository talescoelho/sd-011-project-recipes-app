import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ExploreIngredients from '../components/ExploreIngredients';

function ExploreDrinkByIngredient() {
  return (
    <div>
      <Header title="Explorar Ingredientes" />
      <ExploreIngredients foodOrDrink="Bebidas" />
      <Footer />
    </div>
  );
}

export default ExploreDrinkByIngredient;
