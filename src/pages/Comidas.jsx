import React from 'react';

import CategoryFilters from '../components/CategoryFilters';
import FoodCard from '../components/FoodCard';
import '../styles/Comidas.css';

function Comidas() {
  return (
    <>
      <CategoryFilters />
      <div className="foodRecipesContainer">
        <FoodCard />
        <FoodCard />
      </div>
    </>
  );
}

export default Comidas;
