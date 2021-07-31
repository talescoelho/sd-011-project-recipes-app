import React, { useState, useContext, useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import CategoryFilters from '../components/CategoryFilters';
import FoodCard from '../components/FoodCard';
import '../styles/Comidas.css';
import MealsContext from '../context/MealsContext';

function Comidas() {
  const { pathname } = useLocation();
  const type = pathname === '/bebidas' ? 'drinks' : 'meals';
  const { dataRecipes, recipeType } = useContext(MealsContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  useEffect(() => {
    const ONE_SECOND = 1000;
    // Foi necessário o timeout, pois estava executando antes o effect, VERIFICAR O PQ;
    setTimeout(() => {
      setIsLoading(false);
    }, ONE_SECOND);
    console.log(dataRecipes, recipeType, type);
  }, [dataRecipes]);

  return (
    <div className="comidasPageContainer">
      <Header title={ recipeType } showSearchIcon />
      <CategoryFilters />
      <div className="foodRecipesContainer">
        {
          isLoading === true
            ? 'carregando'
            : dataRecipes.map(
              (recipe, index) => (<FoodCard
                key={ index }
                recipe={ recipe }
                type={ type }
                index={ index }
              />
              ),
            )
        }
      </div>
    </div>
  );
}

export default Comidas;
