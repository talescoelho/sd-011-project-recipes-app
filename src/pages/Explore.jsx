import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/Explore.css';

export default function Explore() {
  return (
    <div>
      <Header pageName="Explorar" />
      <div className="explore-buttons">
        <Link to="/explorar/comidas">
          <button data-testid="explore-food" type="button" className="explore-button">
            Explorar Comidas
          </button>
        </Link>
        <Link to="/explorar/bebidas">
          <button data-testid="explore-drinks" type="button" className="explore-button">
            Explorar Bebidas
          </button>
        </Link>
      </div>
    </div>
  );
}
