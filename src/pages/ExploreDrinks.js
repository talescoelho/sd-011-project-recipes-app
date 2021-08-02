import React from 'react';
import LowerMenu from '../components/LowerMenu';
import Header from '../components/Header';

export default function ExploreDrinks() {
  return (
    <div>
      <Header title="Explorar Bebidas" renderButton />
      <LowerMenu />
    </div>
  );
}
