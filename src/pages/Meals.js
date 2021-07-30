import React from 'react';
import LowerMenu from '../components/LowerMenu';
import Header from '../components/Header';

export default function Meals() {
  return (
    <div>
      <h2>Food Page</h2>
      <Header title="Comidas" />
      <LowerMenu path="/bebidas" />
    </div>
  );
}
