import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExplorerFood() {
  const headerProps = {
    title: 'Explorar Comidas',
    enableSearchButton: true,
    enableProfileButton: true,
  };
  return (
    <div>
      <Header props={ headerProps } />
      <Link to="/explorar/comidas/ingredientes">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          Por Ingredientes
        </button>
      </Link>
      <Link to="/explorar/comidas/area">
        <button
          type="button"
          data-testid="explore-by-area"
        >
          Por Local de Origem
        </button>
      </Link>
      <Link to="/explorar/comidas/">
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

export default ExplorerFood;
