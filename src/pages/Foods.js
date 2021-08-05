import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductsDisplay from '../components/ProductsDisplay';

function Foods() {
  return (
    <main>
      <Header title="Comidas" />
      <ProductsDisplay />
      <Footer />
    </main>
  );
}

export default Foods;
