import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer'
import './RecipesFoods.css';

export default function RecipesFood() {
  return (
    <div>
      <Header className="title" title="Comidas" searchIconAppears />
      <h2 className="title">Tela principal de comidas</h2>
      
      <Footer />
    </div>
  );
}
