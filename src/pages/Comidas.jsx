import React, { useContext } from 'react';

import Header from '../components/Header';
import CategoryFilters from '../components/CategoryFilters';
import FoodCard from '../components/FoodCard';
import '../styles/Comidas.css';
import MealsContext from '../context/MealsContext';

function Comidas() {
  const { mealsRecipes } = useContext(MealsContext);

  return (
    <div className="comidasPageContainer">
      <Header title="Comidas" showSearchIcon />
      <CategoryFilters />
      <div className="foodRecipesContainer">
        {
          mealsRecipes.map(
            (recipe, index) => <FoodCard key={ index } recipe={ recipe } />,
          )
        }
      </div>
    </div>
  );
}

export default Comidas;
