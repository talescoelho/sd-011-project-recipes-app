import React from 'react';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';

export default function FoodsByLocal() {
  const pageTitle = {
    pageName: 'Explorar Origem',
    setIcon: true,
  };
  return (
    <div>
      <Header value={ pageTitle } />
      FOODS
      <FooterMenu />
    </div>
  );
}
