import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreDrinks() {
  return (
    <div>
      <h1>My Explore Drinks Page</h1>
      <Header title="Explorar Bebidas" />

      <button data-testid="explore-by-ingredient"> 
        Por Ingredientes
      </button>
      <br />
      <button data-testid="explore-surprise">
        Me Surpreenda!
      </button>

      <Footer />
    </div>
  );
}

export default ExploreDrinks;
