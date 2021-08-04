import React from 'react';
import FooterMenu from '../../components/FooterMenu';
import Header from '../../components/Header';

const ExploreFoodByArea = () => {
  document.title = 'Explorar Origem';
  return (
    <div>
      <Header />
      Sou página de exploração por area.
      <FooterMenu />
    </div>
  );
};

export default ExploreFoodByArea;
