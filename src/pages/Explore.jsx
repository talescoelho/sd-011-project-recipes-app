import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Explore() {
  const name = 'Explorar';
  const showSearchButton = false;
  return (
    <div>
      <Header pageName={ name } showSearchButton={ showSearchButton } />
      Explore
      <Footer />
    </div>
  );
}
