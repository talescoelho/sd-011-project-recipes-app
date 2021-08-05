import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Explore() {
  return (
    <>
      <Header withSearch={ false } pageTitle="Explorar" />
      <br />
      <main>
        <h1>Tela de Explorar</h1>
      </main>
      <Footer />
    </>
  );
}

export default Explore;
