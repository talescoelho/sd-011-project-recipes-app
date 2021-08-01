import React from 'react';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import { SearchBarProvider } from '../../context/SearchBar';
import Footer from '../../components/Footer';


function Foods() {
  return (
    <div>
      <Header />
      <SearchBarProvider>
        <SearchBar fetchType="themealdb" />
      </SearchBarProvider>
      <h3>Foods</h3>
      <Footer />
    </div>
  );
}

export default Foods;
