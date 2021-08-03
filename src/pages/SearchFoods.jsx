import React from 'react';
import Footer from '../components/common/Footer';

import Header from '../components/Header/Header';

const SearchFoods = () => (
  <>
    <Header
      page="Explorar Comidas"
      showSearchBtn={ false }
    />
    <div>Explorar Comidas</div>
    <Footer />
  </>
);

export default SearchFoods;
