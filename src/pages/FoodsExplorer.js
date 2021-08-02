import React from 'react';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';

export default function FoodsExplorer() {
  const pageTitle = {
    pageName: 'Explorar Comidas',
    setIcon: false,
  };
  return (
    <div>
      <Header value={ pageTitle } />
      Explorar Comidas
      <FooterMenu />
    </div>
  );
}
