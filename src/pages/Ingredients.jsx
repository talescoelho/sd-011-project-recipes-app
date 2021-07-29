import React from 'react';
import Header from '../components/Header';

export default function Ingredients() {
  const name = 'Explorar Ingredientes';
  return (
    <div>
      <Header pageName={ name } />
      Ingredientes
    </div>
  );
}
