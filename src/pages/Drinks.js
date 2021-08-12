import React from 'react';
import DrinkCard from '../components/DrinkCard';
import DrinkCategoryButton from '../components/DrinkCategoryButton';
import LowerMenu from '../components/LowerMenu';
import Header from '../components/Header';

export default function Drinks() {
  return (
    <div>
      <Header title="Bebidas" />
      <DrinkCategoryButton />
      <DrinkCard />
      <LowerMenu path="/comidas" />
    </div>
  );
}
