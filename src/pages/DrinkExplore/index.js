import React from 'react';
import FooterMenu from '../../components/FooterMenu';
import Header from '../../components/Header';

const DrinkExplore = () => {
  document.title = 'Explorar Bebidas';
  return (
    <div>
      <Header />
      Sou página de exploração de bebidas.
      <FooterMenu />
    </div>
  );
};
export default DrinkExplore;
