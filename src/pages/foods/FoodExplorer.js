import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SearchBarProvider } from '../../context/SearchBar';

export default function FoodExplorer() {
  return (
    <>
      <SearchBarProvider>
        <Header title="Explorar Comidas" search={ false } />
      </SearchBarProvider>
      <Footer />
    </>
  );
}
