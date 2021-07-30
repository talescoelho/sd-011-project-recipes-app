import React from 'react';
import { Link } from 'react-router-dom';

const Explorar = () => (
  <div>
    <h1>Explorar</h1>
    <Link to="/explorar/bebidas" data-testid="explore-drinks">Explorar Bebidas</Link>
    <Link to="/explorar/comidas" data-testid="explore-food">Explorar Comidas</Link>
  </div>
);

export default Explorar;
