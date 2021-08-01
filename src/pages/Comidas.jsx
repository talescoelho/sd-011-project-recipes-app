import React, { useState, useContext, useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import Header from '../components/Header';
import CategoryFilters from '../components/CategoryFilters';
import FoodCard from '../components/FoodCard';
import Loading from '../components/Loading';

import '../styles/Comidas.css';
import Footer from '../components/Footer';

function Comidas() {
  const { pathname } = useLocation();
  const type = pathname === '/bebidas' ? 'drinks' : 'meals';
  const title = type === 'drinks' ? 'Bebidas' : 'Comidas';

  const { isLoading, dataRecipes, setRecipeType } = useContext(RecipesContext);
  const { route } = useState(pathname);
  // const [isLoading, setIsLoading] = useState(true);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  // useEffect(() => {
  //   console.log('isLoading: ', isLoading);
  // }, [isLoading]);

  useEffect(() => {
    // setIsLoading(true);
    setRecipeType(route);
  }, [route, setRecipeType]);

  useEffect(() => {
    // const ONE_SECOND = 500;
    // setIsLoading(false);
    // Foi necessário o timeout, pois estava executando antes o effect, VERIFICAR O PQ;
    // setTimeout(() => {
    // }, ONE_SECOND);
    setFilteredRecipes(dataRecipes);
  }, [dataRecipes, filteredRecipes]);

  return (
    <div className="comidasPageContainer">
      <Header title={ title } showSearchIcon />
      <CategoryFilters />
      <div className="foodRecipesContainer">
        {
          isLoading === true
            ? <Loading />
            : filteredRecipes.map(
              (recipe, index) => (<FoodCard
                key={ index }
                recipe={ recipe }
                type={ type }
                index={ index }
              />
              ),
            )
        }
        <Footer />
      </div>
    </div>
  );
}

export default Comidas;
