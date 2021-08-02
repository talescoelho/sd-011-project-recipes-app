import React from 'react';
import Header from '../../components/Header';
import { SearchBarProvider } from '../../context/SearchBar';
import Footer from '../../components/Footer';

export default function FoodExplorerByCountry() {
  return (
    <>
      <SearchBarProvider>
        <Header title="Explorar Bebidas" search fetchType="thecocktaildb" />
      </SearchBarProvider>
      <h3>Food Explorer by Country</h3>
      <Footer />
    </>
  );
}
