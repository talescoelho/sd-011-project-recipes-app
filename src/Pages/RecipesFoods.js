import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './RecipesFoods.css';

export default function RecipesFood() {
  return (
    <div>
      <Header className="title" title="Comidas" searchIconAppears />
      <Footer />
    </div>
  );
}
