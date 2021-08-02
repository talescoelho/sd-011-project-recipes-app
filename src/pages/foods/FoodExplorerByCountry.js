import React from 'react';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import { SearchBarProvider } from '../../context/SearchBar';
import Footer from '../../components/Footer';

export default function FoodExplorerByCountry() {
  return (
    <>
      <Header title="Explorar Origem" search />
      <SearchBarProvider>
        <SearchBar fetchType="thecocktaildb" />
      </SearchBarProvider>
      <h3>Food Explorer by Country</h3>
      <Footer />
    </>
  );
}
