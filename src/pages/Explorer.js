import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import { Provider } from '../context/SearchBar';
import Footer from '../components/Footer';

export default function Explorer() {
  return (
    <>
      <Header title="Explorar" search={ false } />
      <Provider>
        <SearchBar fetchType="thecocktaildb" />
      </Provider>
      <Footer />
    </>
  );
}
