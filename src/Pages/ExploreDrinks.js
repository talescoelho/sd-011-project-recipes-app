import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function ExploreDrinks() {
  return (
    <div>
      <Header title="Explorar Bebidas" />
      <button
        data-testid="explore-by-ingredient"
        type="button"
      >
        Por Ingredientes
      </button>
      <button
        data-testid="explore-surprise"
        type="button"
      >
        Me Surpreenda!
      </button>
      <Footer />
    </div>
  );
}
