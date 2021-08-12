import React, { useState, useEffect } from 'react';
import CardsExplore from '../components/CardsExplore';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { fetchIngredientesList } from '../Services/Data';

function ExploreMealsByIgrediente() {
  const [ingredientesListMeal, setIngredientesListMeal] = useState([]);

  const renderCards = () => (<CardsExplore
    ingredientesList={ ingredientesListMeal }
    drink={ false }
  />);

  const getDataButton = () => {
    fetchIngredientesList(setIngredientesListMeal);
  };

  useEffect(getDataButton, []);

  return (
    <div>
      <Header title="Explorar Ingredientes" />
      {renderCards()}
      <Footer />
    </div>
  );
}

export default ExploreMealsByIgrediente;
