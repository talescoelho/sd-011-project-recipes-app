import React from 'react';
import { Link } from 'react-router-dom';

function ExplorarBebidas() {
  return (
    <div>
      <h1>Explorar Bebidas</h1>
      <Link
        to="/explorar/bebidas/ingredientes"
        data-testid="explore-by-ingredient"
      >
        Por Ingredientes
      </Link>
      {/* <Link to="/explorar/comidas" data-testid="explore-surprise">Me Surpreenda</Link> */}
    </div>
  );
}

export default ExplorarBebidas;
