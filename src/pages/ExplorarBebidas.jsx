import React from 'react';
import { Link } from 'react-router-dom';
import ButtonSurpriseMe from '../components/ButtonSurpriseMe';
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
        <button type="button">
          Por Ingredientes
        </button>
      </Link>
      <ButtonSurpriseMe />
      <Footer />
    </div>
  );
}

export default ExplorarBebidas;
