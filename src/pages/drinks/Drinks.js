import React from 'react';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import { Provider } from '../../context/SearchBar';

export default function Drinks() {
  return (
    <>
      <Header />
      <Provider>
        <SearchBar fetchType="thecocktaildb" />
      </Provider>
    </>
  );
}
