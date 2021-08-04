import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ExploreIngredients from '../components/ExploreIngredients';

function ExploreFoodByIngredient() {
  return (
    <div>
      <Header title="Explorar Ingredientes" />
      <ExploreIngredients foodOrDrink="Comidas" />
      <Footer />
    </div>
  );
}

export default ExploreFoodByIngredient;
