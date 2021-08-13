import React from 'react';
import Header from '../components/Header';
import '../styles/Ingredients.css';
import Footer from '../components/Footer';
import FoodIngredients from '../components/FoodIngredients';

export default function DrinkIngredients() {
  return (
    <div>
      <Header pageName="Explorar Ingredientes" />
      <h1>Explore Drink Ingredients</h1>
      <FoodIngredients type="drinks" />
      <Footer />
    </div>
  );
}
