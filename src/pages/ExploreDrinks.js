import React from 'react';
import { Link } from 'react-router-dom';
import LowerMenu from '../components/LowerMenu';
import Header from '../components/Header';

export default function ExploreDrinks() {
  return (
    <div>
      <Header title="Explorar Bebidas" renderButton />
      <Link
        data-testid="explore-by-ingredient"
        to="/explorar/bebidas/ingredientes"
      >
        Por Ingredientes
      </Link>
      <Link
        data-testid="explore-surprise"
        to="/bebidas/178319"
      >
        Me Surpreenda!
      </Link>
      <LowerMenu />
    </div>
  );
}
