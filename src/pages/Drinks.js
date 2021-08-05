import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductsDisplay from '../components/ProductsDisplay';

export default function Drinks() {
  return (
    <main>
      <Header title="Bebidas" />
      <ProductsDisplay />
      <Footer />
    </main>
  );
}
