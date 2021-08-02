import React from 'react';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import { SearchBarProvider } from '../../context/SearchBar';
import Footer from '../../components/Footer';

export default function DrinkExplorerByIngredients() {
  return (
    <>
      <Header title="Explorar Ingredientes" search={ false } />
      <SearchBarProvider>
        <SearchBar fetchType="thecocktaildb" />
      </SearchBarProvider>
      <Footer />
    </>
  );
}
