import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Ingredients() {
  const name = 'Explorar Ingredientes';
  return (
    <div>
      <Header pageName={ name } />
      Ingredientes
      <Footer />
    </div>
  );
}
