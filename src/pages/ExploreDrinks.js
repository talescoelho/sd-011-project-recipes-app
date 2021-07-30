import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreDrinks() {
  return (
    <div>
      <h1>My Explore Drinks Page</h1>
      <Header title="Explorar Bebidas" />

      <Link to="/explorar/bebidas/ingredientes">
        <button type="button" data-testid="explore-by-ingredient">
          Por Ingredientes
        </button>
      </Link>
      <br />

      <button type="button" data-testid="explore-surprise">
        Me Surpreenda!
      </button>

      <Footer />
    </div>
  );
}

export default ExploreDrinks;
