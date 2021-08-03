import React from 'react';
import Header from '../../components/Header';
import { SearchBarProvider } from '../../context/SearchBar';
import Footer from '../../components/Footer';

export default function FoodExplorerByCountry() {
  return (
    <>
      <SearchBarProvider>
        <Header title="Explorar Origem" search fetchType="themealdb" />
      </SearchBarProvider>
      <Footer />
    </>
  );
}
