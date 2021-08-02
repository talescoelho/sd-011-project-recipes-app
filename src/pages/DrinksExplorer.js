import React from 'react';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';

export default function DrinksExplorer() {
  const pageTitle = {
    pageName: 'Explorar Bebidas',
    setIcon: false,
  };
  return (
    <div>
      <Header value={ pageTitle } />
      Explorar Bebidas
      <FooterMenu />
    </div>
  );
}
