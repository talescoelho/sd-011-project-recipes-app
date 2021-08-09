import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Explorer() {
  return (
    <div>
      <Header title="Explorar" />
      <div className="container">
        <div>
          <Link to="/explorar/comidas">
            <button
              className="category-bar-button"
              type="button"
              data-testid="explore-food"
            >
              Explorar Comidas
            </button>
          </Link>
        </div>
        <div>
          <Link to="/explorar/bebidas">
            <button
              className="category-bar-button"
              type="button"
              data-testid="explore-drinks"
            >
              Explorar Bebidas
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Explorer;
