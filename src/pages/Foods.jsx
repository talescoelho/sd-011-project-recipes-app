import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Foods() {
  const name = 'Comidas';
  const showSearchButton = true;
  return (
    <div>
      <Header pageName={ name } showSearchButton={ showSearchButton } />
      Comidas
      <Footer />
    </div>
  );
}
