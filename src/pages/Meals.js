import React from 'react';
import FoodCard from '../components/FoodCard';
import LowerMenu from '../components/LowerMenu';
import Header from '../components/Header';
import MealCategoryButton from '../components/MealCategoryButton';

export default function Meals() {
  return (
    <div>
      <Header title="Comidas" renderSearchBar />

      <MealCategoryButton />
      <FoodCard />
      <LowerMenu path="/bebidas" />
    </div>
  );
}
