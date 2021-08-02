import React from 'react';
import LowerMenu from '../components/LowerMenu';
import Header from '../components/Header';

export default function ExploreMeals() {
  return (
    <div>
      <Header title="Explorar Comidas" renderButton />
      <LowerMenu />
    </div>
  );
}
