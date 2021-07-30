import React from 'react';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import { Provider } from '../../context/SearchBar';

function Foods() {
  return (
    <div>
      <Header />
      <Provider>
        <SearchBar />
      </Provider>
    </div>
  );
}

export default Foods;
