import React, { useContext } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import AppContext from '../context/AppContext';

export default function BebidaPage() {
  const { showInput } = useContext(AppContext);
  return (
    <div>
      <Header text="Bebidas" lupa />
      {showInput && <SearchBar type="drink" />}
    </div>
  );
}
