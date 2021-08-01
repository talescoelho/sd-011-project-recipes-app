import React from 'react';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import { SearchBarProvider } from '../../context/SearchBar';

function Foods() {
  return (
    <div>
      <Header />
      <SearchBarProvider>
        <SearchBar fetchType="themealdb" />
      </SearchBarProvider>
    </div>
  );
}

export default Foods;
