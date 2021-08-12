import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import IngredientCard from '../components/IngredientCard';
import Footer from '../components/Footer';
import { fetchMealsIngredients, fetchMealsByIngredient } from '../services/meailAPI';

function ExplorerMealsIngredients() {
  const { setMealsData } = useContext(RecipesContext);
  const [ingredientList, setIngredientList] = useState([]);
  const maxIngredients = 12;

  useEffect(() => {
    async function getIngredients() {
      const ingredients = await fetchMealsIngredients();
      setIngredientList(ingredients.slice(0, maxIngredients));
    }
    getIngredients();
  }, []);

  const handleClickLink = async (ingredient) => {
    const response = await fetchMealsByIngredient(ingredient);
    setMealsData(response.slice(0, maxIngredients));
  };

  return (
    <div>
      <Header title="Explorar Ingredientes" recipeType="drinks" />
      { ingredientList.map((ingredient, index) => (
        <Link
          to="/comidas"
          key={ index }
          onClick={ () => handleClickLink(ingredient.strIngredient) }
        >
          <IngredientCard
            ingredient={ ingredient }
            index={ index }
            recipeType="meals"
          />
        </Link>
      ))}
      <Footer />
    </div>
  );
}

export default ExplorerMealsIngredients;
