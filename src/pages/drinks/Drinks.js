import React from 'react';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import { SearchBarProvider } from '../../context/SearchBar';
import Footer from '../../components/Footer';

export default function Drinks() {
  return (
    <>
      <Header />
      <SearchBarProvider>
        <SearchBar fetchType="thecocktaildb" />
      </SearchBarProvider>
      <h3>Drinks</h3>
      <Footer />
    </>
  );
}
