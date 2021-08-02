import React from 'react';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Footer from '../../components/Footer';
import { SearchBarProvider } from '../../context/SearchBar';

export default function FoodExplorer() {
  return (
    <>
      <Header title="Explorar Comidas" search={ false } />
      <SearchBarProvider>
        <SearchBar fetchType="thecocktaildb" />
      </SearchBarProvider>
      <Footer />
    </>
  );
}
