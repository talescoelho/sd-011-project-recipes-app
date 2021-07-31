import React from 'react';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Footer from '../../components/Footer';
import { Provider } from '../../context/SearchBar';

function Foods() {
  return (
    <div>
      <Header title="Comidas" search />
      <Provider>
        <SearchBar fetchType="themealdb" />
      </Provider>
      <Footer />
    </div>
  );
}

export default Foods;
