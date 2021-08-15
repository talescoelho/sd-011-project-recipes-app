import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ExplorerDrinks() {
  return (
    <main>
      <Header haveSearchBtn={ false } title="Explorar Bebidas" />
      <Link to="/explorar/comidas/ingredientes">
        <button type="button" data-testid="explore-by-ingredient">
          Por Ingredientes
        </button>
      </Link>
      <Link to="/explorar/bebidas">
        <button type="button" data-testid="explore-surprise">
          Explorar Bebidas
        </button>
      </Link>
      <Footer />
    </main>
  );
}
