import React, { useState, useEffect } from 'react';
import CardsExplore from '../components/CardsExplore';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { fetchIngredientesListDrink } from '../Services/Data';

function ExploreDrinksByIgrediente() {
  const [ingredientesListDrink, setIngredientesListDrink] = useState([]);

  const renderCards = () => (<CardsExplore
    ingredientesList={ ingredientesListDrink }
  />);

  const getDataButton = () => {
    fetchIngredientesListDrink(setIngredientesListDrink);
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

export default ExploreDrinksByIgrediente;
