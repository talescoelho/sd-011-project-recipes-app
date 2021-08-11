import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function exploreFoodIngredients() {
  return (
    <div>
      <Header title="Explorar Ingredientes" search={ false } />
      Explore food ingredients
      <Footer />
    </div>
  );
}

export default exploreFoodIngredients;
