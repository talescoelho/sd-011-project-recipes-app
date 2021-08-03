import React from 'react';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';

const FoodExplore = () => {
  document.title = 'Explorar Comidas';
  return (
    <div>
      <Header />
      Sou página de exploração de comidas.
      <FooterMenu />
    </div>
  );
};

export default FoodExplore;
