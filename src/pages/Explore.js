import React from 'react';
import { Link } from 'react-router-dom';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';

const Explore = () => (
  <>
    <Header title="Explorar" />
    <Link to="/explorar/comidas">
      <button type="button" data-testid="explore-food">Explorar Comidas</button>
    </Link>
    <Link to="/explorar/bebidas">
      <button type="button" data-testid="explore-drinks">Explorar Bebidas</button>
    </Link>
    <FooterMenu />
  </>

);

export default Explore;
