import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ExploreDynamic({ type }) {
  const showSearchButton = false;
  return (
    <div>
      <Header pageName={ type } showSearchButton={ showSearchButton } />
      { type }
      <Footer />
    </div>
  );
}
