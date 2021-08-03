import React from 'react';
import Header from '../../components/Header';
import { SearchBarProvider } from '../../context/SearchBar';
import Footer from '../../components/Footer';

export default function DrinkExplorerByIngredients() {
  return (
    <>
      <SearchBarProvider>
        <Header title="Explorar Ingredientes" search={ false } />
      </SearchBarProvider>
      <Footer />
    </>
  );
}
