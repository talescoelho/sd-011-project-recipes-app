import React from 'react';
import Header from '../components/Header';
import '../styles/Ingredients.css';
import Footer from '../components/Footer';
import FoodIngredients from '../components/FoodIngredients';

export default function MealtIngredients() {
  return (
    <>
      <Header pageName="Explorar Ingredientes" />
      <h1>Explore Mealt Ingredients</h1>
      <FoodIngredients type="meals" />
      <Footer />
    </>
  );
}
