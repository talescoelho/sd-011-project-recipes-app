import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

import ButtonSurpriseMe from '../components/ButtonSurpriseMe';

function ExplorarComidas() {
  return (
    <div>
      <Header title="Explorar Comidas" />
      <div>
        <Link
          to="/explorar/comidas/ingredientes"
          data-testid="explore-by-ingredient"
        >
          <button type="button">
            Por Ingredientes
          </button>
        </Link>
        <Link
          to="/explorar/comidas/area"
          data-testid="explore-by-area"
        >
          <button type="button">
            Por Local de Origem
          </button>
        </Link>
      </div>
      <ButtonSurpriseMe />
      <Footer />
    </div>
  );
}

export default ExplorarComidas;
