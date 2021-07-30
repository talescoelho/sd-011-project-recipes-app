import React from 'react';
import FoodCard from '../components/FoodCard';
import LowerMenu from '../components/LowerMenu';

export default function Meals() {
  return (
    <div>
      <h2>Food Page</h2>
      <FoodCard />
      <LowerMenu path="/bebidas" />
    </div>
  );
}
