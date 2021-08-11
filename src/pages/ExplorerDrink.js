import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExplorerDrink() {
  const headerProps = {
    title: 'Explorar Bebidas',
    enableSearchButton: true,
    enableProfileButton: true,
  };
  return (
    <div>
      <Header props={ headerProps } />
      <Link to="/explorar/comidas">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          Por Ingredientes
        </button>
      </Link>
      <Link to="/explorar/bebidas">
        <button
          type="button"
          data-testid="explore-surprise"
        >
          Me Surpreenda!
        </button>
      </Link>
      <Footer />
    </div>
  );
}

export default ExplorerDrink;
