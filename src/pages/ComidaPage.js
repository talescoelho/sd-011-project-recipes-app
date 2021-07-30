import React, { useContext } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import AppContext from '../context/AppContext';

export default function ComidaPage() {
  const { showInput } = useContext(AppContext);
  return (
    <div>
      <Header text="Comidas" lupa />
      {showInput && <SearchBar type="food" />}
    </div>
  );
}
