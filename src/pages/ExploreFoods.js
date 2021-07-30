import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function ExploreFoods() {
  return (
    <div>
      <h1>My Explore Foods Page</h1>
      <Header title="Explorar Comidas" />

      <Link to="/explorar/comidas/ingredientes">
        <button type="button" data-testid="explore-by-ingredient">
          Por Ingredientes
        </button>
      </Link>
      <br />
      <button type="button" data-testid="explore-by-area">
        Por Local de Origem
      </button>
      <br />
      <button type="button" data-testid="explore-surprise">
        Me Surpreenda!
      </button>

      <Footer />
    </div>
  );
}

export default ExploreFoods;
