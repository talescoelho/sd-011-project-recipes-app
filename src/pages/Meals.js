import React from 'react';
import FoodCard from '../components/FoodCard';
import LowerMenu from '../components/LowerMenu';
import MealCategoryButton from '../components/MealCategoryButton';

export default function Meals() {
  return (
    <div>
      <h2>Food Page</h2>
      <MealCategoryButton />
      <FoodCard />
      <LowerMenu path="/bebidas" />
    </div>
  );
}
