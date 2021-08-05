import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

export default function ExploreInitial() {
  return (
    <div className="explore-section">
      <Header />
      <Link to="/explorar/comidas">
        <h2 data-testid="explore-food">Explorar Comidas</h2>
      </Link>
      <Link to="/explorar/bebidas">
        <h2 data-testid="explore-drinks">Explorar Bebidas</h2>
      </Link>
    </div>
  );
}
