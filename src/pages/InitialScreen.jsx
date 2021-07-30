import React from 'react';
import Header from '../components/Header';
import SearchBarProvider from '../context/searchBarProvider';
import Footer from '../components/Footer';

export default function Foods({ type }) {
  const showSearchButton = true;

  return (
    <SearchBarProvider>
      <Header pageName={ type } showSearchButton={ showSearchButton } />
      { type }
      <Footer />
    </SearchBarProvider>
  );
}
