import React from 'react';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import { SearchBarProvider } from '../../context/SearchBar';

export default function Drinks() {
  return (
    <>
      <Header />
      <SearchBarProvider>
        <SearchBar fetchType="thecocktaildb" />
      </SearchBarProvider>
    </>
  );
}
