import React from 'react';
import DrinkCard from '../components/DrinkCard';
import DrinkCategoryButton from '../components/DrinkCategoryButton';
import LowerMenu from '../components/LowerMenu';

export default function Drinks() {
  return (
    <div>
      <h2>Drink Page</h2>
      <DrinkCategoryButton />
      <DrinkCard />
      <LowerMenu path="/comidas" />
    </div>
  );
}
