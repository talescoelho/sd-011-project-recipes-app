import React from 'react';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Footer from '../../components/Footer';
import { Provider } from '../../context/SearchBar';

function Foods() {
  return (
    <div>
      <Header />
      <Provider>
        <SearchBar fetchType="themealdb" />
      </Provider>
      <h3>Foods</h3>
      <Footer />
    </div>
  );
}

export default Foods;
