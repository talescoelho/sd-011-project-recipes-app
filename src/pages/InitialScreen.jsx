import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Foods({ type }) {
  const showSearchButton = true;
  return (
    <div>
      <Header pageName={ type } showSearchButton={ showSearchButton } />
      { type }
      <Footer />
    </div>
  );
}
