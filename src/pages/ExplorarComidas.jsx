import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/ExplorarComidas.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExplorarComidas() {
  return (
    <div>
      <Header title="Explorar Comidas" />
      <div>
        <Link
          to="/explorar/comidas/ingredientes"
          data-testid="explore-by-ingredient"
          className="button-ingredients"
        >
          <button
            type="button"
          >
            Por Ingredientes
          </button>
        </Link>
        <Link
          to="/explorar/comidas/area"
          data-testid="explore-by-area"
          className="button-place-origin"
        >
          <button
            type="button"
          >
            Por Local de Origem
          </button>
        </Link>
      </div>
      <Link
        to="/explorar/comidas"
        data-testid="explore-surprise"
        className="button-surprise-me"
      >
        <button
          type="button"
        >
          Me Surpreenda!
        </button>
      </Link>
      <Footer />
    </div>
  );
}

export default ExplorarComidas;
