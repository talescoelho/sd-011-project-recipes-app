import React from 'react';
import Header from '../components/Header';
import LowerMenu from '../components/LowerMenu';

export default function ExplorarBebida() {
  return (
    <div>
      <Header lupa={ false } text="Explorar Bebidas" />
      <LowerMenu />
    </div>
  );
}
