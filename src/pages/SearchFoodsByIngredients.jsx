import React from 'react';
import Footer from '../components/common/Footer';

import Header from '../components/Header/Header';

const SearchFoodsByIngredients = () => (
  <>
    <Header
      page="Explorar Ingredientes"
      showSearchBtn={ false }
    />
    <div>Explorar Comidas Por Ingredientes</div>
    <Footer />
  </>
);

export default SearchFoodsByIngredients;
