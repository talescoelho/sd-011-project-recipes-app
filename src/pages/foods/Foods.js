import React from 'react';
import Header from '../../components/Header';
import { SearchBarProvider } from '../../context/SearchBar';
import Footer from '../../components/Footer';

export default function Foods() {
  return (
    <main>
      <SearchBarProvider>
        <Header title="Explorar Bebidas" search fetchType="thecocktaildb" />
      </SearchBarProvider>

      <Footer />
    </main>
  );
}
