/* eslint-disable react/jsx-max-depth */
import React from 'react';
import FoodCard from '../components/FoodCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Main.css';
import '../styles/Cards.css';
import FilterButtons from '../components/FilterButtons';

export default function Home() {
  return (
    <>
      <Header pageName="Comidas" renderButton />
      <main className="food-page">
        <FilterButtons type="meals" />
        <FoodCard type="meals" />
      </main>
      <Footer />
    </>
  );
}
