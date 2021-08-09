import React from 'react';
import Footer from '../components/common/Footer';

import Header from '../components/Header/Header';

const SearchDrinksByIngredients = () => (
  <>
    <Header
      page="Explorar Ingredientes"
      showSearchBtn={ false }
    />
    <div>Explorar Bebidas Por Ingredientes</div>
    <Footer />
  </>
);

export default SearchDrinksByIngredients;
