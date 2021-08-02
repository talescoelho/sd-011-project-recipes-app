import React from 'react';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import { Provider } from '../../context/SearchBar';
import Footer from '../../components/Footer';

export default function FoodExplorerByIngredients() {
  return (
    <>
      <Header title="Explorar Ingredientes" search={ false } />
      <Provider>
        <SearchBar fetchType="thecocktaildb" />
      </Provider>
      <h3>Food Explorer by Ingredients</h3>
      <Footer />
    </>
  );
}
