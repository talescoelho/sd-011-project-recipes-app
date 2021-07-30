import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreFoods() {
  return (
    <div>
      <h1>My Explore Foods Page</h1>
      <Header title="Explorar Comidas" />

      <button data-testid="explore-by-ingredient"> 
        Por Ingredientes
      </button>
      <br />
      <button data-testid="explore-by-area">
        Por Local de Origem
      </button>
      <br/>
      <button data-testid="explore-surprise">
        Me Surpreenda!
      </button>

      <Footer />
    </div>
  );
}

export default ExploreFoods;
