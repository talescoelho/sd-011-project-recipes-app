import React from 'react';
import LowerMenu from '../components/LowerMenu';
import Header from '../components/Header';

export default function Drinks() {
  return (
    <div>
      <Header title="Bebidas" />
      <LowerMenu path="/comidas" />
    </div>
  );
}
