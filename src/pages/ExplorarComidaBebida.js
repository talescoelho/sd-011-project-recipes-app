import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import MenuInferior from '../components/MenuInferior';

function Explorar() {
  function LocationAtual() {
    const location = useLocation();
    return location.pathname;
  }

  return (
    <div>
      <Header
        showButton={ false }
        title={ LocationAtual() === '/explorar/bebidas'
          ? 'Explorar Bebidas'
          : 'Explorar Comidas' }
      />
      <Link to="/explorar/comidas">
        <button type="button" data-testid="explore-by-ingredient">
          Por Ingredientes
        </button>
      </Link>
      <Link to="/explorar/bebidas">
        <button type="button" data-testid="explore-by-area">
          Por Local de Origem
        </button>
      </Link>
      <Link to="/explorar/bebidas">
        <button type="button" data-testid="explore-surprise">
          Me Surpreenda!
        </button>
      </Link>
      <MenuInferior />
    </div>
  );
}

export default Explorar;
