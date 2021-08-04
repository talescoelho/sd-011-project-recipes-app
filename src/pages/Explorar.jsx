import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Explorar.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Explorar() {
  return (
    <div>
      <Header title="Explorar" />
      <div className="explorer-buttons-container">
        <Link
          to="/explorar/comidas"
          data-testid="explore-food"
          className="food-button"
        >
          <button
            type="button"
          >
            Explorar Comidas
          </button>
        </Link>
        <Link
          to="/explorar/bebidas"
          data-testid="explore-drinks"
          className="drink-button"
        >
          <button
            type="button"
          >
            Explorar Bebidas
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Explorar;
