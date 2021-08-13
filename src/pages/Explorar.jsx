import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Explorar.css';

const Explorar = () => (
  <div className="explorar-container">
    <Header title="Explorar" />
    <div>
      <Link
        to="/explorar/comidas"
        data-testid="explore-food"
      >
        <button type="button">
          Explorar Comidas
        </button>
      </Link>
    </div>
    <div>
      <Link
        to="/explorar/bebidas"
        data-testid="explore-drinks"
      >
        <button type="button">
          Explorar Bebidas
        </button>
      </Link>
    </div>
    <Footer />
  </div>
);

export default Explorar;
