import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Main.css';
import '../styles/Cards.css';
import FilterButtons from '../components/FilterButtons';
import FoodCard from '../components/FoodCard';

export default function Bebidas() {
  return (
    <>
      <Header pageName="Bebidas" renderButton />
      <main className="food-page">
        <FilterButtons type="drinks" />
        <FoodCard type="drinks" />
      </main>
      <Footer />
    </>
  );
}
