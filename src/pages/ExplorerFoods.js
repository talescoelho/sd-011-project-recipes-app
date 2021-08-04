import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ExplorerFoods() {
  return (
    <main>
      <Header haveSearchBtn={ false } title="Explorar Comidas" />
      <Footer />
    </main>
  );
}
