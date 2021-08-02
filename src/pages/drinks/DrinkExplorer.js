import React from 'react';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import { SearchBarProvider } from '../../context/SearchBar';
import Footer from '../../components/Footer';

export default function DrinkExplorer() {
  return (
    <>
      <Header title="Explorar Bebidas" search={ false } />
      <SearchBarProvider>
        <SearchBar fetchType="thecocktaildb" />
      </SearchBarProvider>
      <Footer />
    </>
  );
}
