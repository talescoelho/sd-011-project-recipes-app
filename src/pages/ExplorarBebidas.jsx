import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExplorarBebidas() {
  return (
    <div>
      <Header title="Explorar Bebidas" />
      <Link
        to="/explorar/bebidas/ingredientes"
        data-testid="explore-by-ingredient"
      >
        Por Ingredientes
      </Link>
      <Link
        to="/explorar/comidas"
        data-testid="explore-surprise"
      >
        Me Surpreenda!
      </Link>
      <Footer />
    </div>
  );
}

export default ExplorarBebidas;
