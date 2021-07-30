import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ExploreCocktails() {
  const name = 'Explorar Bebidas';
  return (
    <div>
      <Header pageName={ name } />
      ExploreCocktails
      <Footer />
    </div>
  );
}
