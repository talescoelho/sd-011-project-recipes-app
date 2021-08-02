import React from 'react';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Footer from '../../components/Footer';
import { SearchBarProvider } from '../../context/SearchBar';

export default function FoodExplorerByIngredients() {
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
