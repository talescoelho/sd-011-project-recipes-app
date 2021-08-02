import React from 'react';
import Header from '../../components/Header';
import { SearchBarProvider } from '../../context/SearchBar';
import Footer from '../../components/Footer';

export default function DrinkExplorer() {
  return (
    <>
      <SearchBarProvider>
        <Header title="Explorar Bebidas" search={ false } />
      </SearchBarProvider>
      <Footer />
    </>
  );
}
