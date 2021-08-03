import React from 'react';
import DrinkCard from '../components/DrinkCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Main.css';
import '../styles/Cards.css';
import FilterButtons from '../components/FilterButtons';

export default function Bebidas() {
  return (
    <>
      <Header pageName="Bebidas" renderButton />
      <main>
        <FilterButtons type="drinks" />
        <DrinkCard />
      </main>
      <Footer />
    </>
  );
}
