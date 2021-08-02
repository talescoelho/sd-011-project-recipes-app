import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import { SearchBarProvider } from '../context/SearchBar';

export default function Explorer() {
  return (
    <>
      <Header />
      <SearchBarProvider>
        <SearchBar fetchType="thecocktaildb" />
      </SearchBarProvider>
      <h3>Explorer</h3>
      <Footer />
    </>
  );
}
