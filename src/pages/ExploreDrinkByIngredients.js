import React from 'react';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';

export default function ExploreDrinkByIngredients() {
  const pageTitle = {
    pageName: 'Explorar Ingredientes',
    setIcon: false,
  };
  return (
    <div>
      <Header value={ pageTitle } />
      FOODS
      <FooterMenu />
    </div>
  );
}
