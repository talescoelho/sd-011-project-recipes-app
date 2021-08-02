import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/Explorar.css';

const Explorar = () => (
  <div className="explorar-container">
    <h1>Explorar</h1>
    <Link to="/explorar/bebidas" data-testid="explore-drinks">Explorar Bebidas</Link>
    <Link to="/explorar/comidas" data-testid="explore-food">Explorar Comidas</Link>
    <Footer />
  </div>
);

export default Explorar;
