import React from 'react';
import Footer from '../components/Footer';
import HeaderDrink from '../components/HeaderDrink';

function exploreDrinkIngredients() {
  return (
    <div>
      <HeaderDrink title="Explorar Ingredientes" search={ false } />
      Explore drink ingredients
      <Footer />
    </div>
  );
}

export default exploreDrinkIngredients;
