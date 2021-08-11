import React from 'react';
import Footer from '../components/Footer';
import HeaderFood from '../components/HeaderDrink';

function exploreFoodIngredients() {
  return (
    <div>
      <HeaderFood title="Explorar Ingredientes" search={ false } />
      Explore food ingredients
      <Footer />
    </div>
  );
}

export default exploreFoodIngredients;
