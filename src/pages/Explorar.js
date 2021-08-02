import React from 'react';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import LowerMenu from '../components/LowerMenu';

export default function Explorar() {
  return (
    <div>
      <Header text="Explorar" lupa={ false } />
      <LowerMenu />
    </div>
  );
}
