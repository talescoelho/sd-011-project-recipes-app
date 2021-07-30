import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ExploreFoods() {
  const name = 'Explorar Comidas';
  const showSearchButton = false;
  return (
    <div>
      <Header pageName={ name } showSearchButton={ showSearchButton } />
      ExploreFoods
      <Footer />
    </div>
  );
}
