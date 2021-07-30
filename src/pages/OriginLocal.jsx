import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function OriginLocal() {
  const name = 'Explorar Origem';
  const showSearchButton = true;
  return (
    <div>
      <Header pageName={ name } showSearchButton={ showSearchButton } />
      Local de Origem
      <Footer />
    </div>
  );
}
