import React, { useState, useContext, useEffect } from 'react';

import { useLocation, useHistory } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import Header from '../components/Header';
import CategoryFilters from '../components/CategoryFilters';
import FoodCard from '../components/FoodCard';
import Loading from '../components/Loading';
import Footer from '../components/Footer';

import '../styles/Comidas.css';
import { searchByIngredient } from '../services';

function Comidas() {
  const NUMBER_OF_CARDS = 12;
  const { pathname } = useLocation();
  const type = pathname === '/bebidas' ? 'drinks' : 'meals';
  const title = type === 'drinks' ? 'Bebidas' : 'Comidas';
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const { isLoading,
    dataRecipes,
    setRecipeType } = useContext(RecipesContext);
  const { route } = useState(pathname);

  // useEffect(() => {
  //   const searchRecipesByIngredient = async () => {
  //     const { meals } = await searchByIngredient(jhonata, pathname);
  //     setDataRecipes(meals);
  //     console.log(jhonata);
  //   };
  //   searchRecipesByIngredient();
  // }, [jhonata]);

  useEffect(() => {
    setRecipeType(route);
    console.log(dataRecipes);
  }, [route, setRecipeType]);

  useEffect(() => {
    console.log(dataRecipes);
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
            : filteredRecipes.slice(0, NUMBER_OF_CARDS).map(
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
