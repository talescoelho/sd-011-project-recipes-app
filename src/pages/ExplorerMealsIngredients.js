import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import IngredientCard from '../components/IngredientCard';
import Footer from '../components/Footer';
import { fetchMealsIngredients } from '../services/meailAPI';

function ExplorerMealsIngredients() {
  const [ingredientList, setIngredientList] = useState([]);
  const maxIngredients = 12;

  useEffect(() => {
    async function getIngredients() {
      const ingredients = await fetchMealsIngredients();
      setIngredientList(ingredients.slice(0, maxIngredients));
    }
    getIngredients();
  }, []);

  return (
    <div>
      <Header title="Explorar Ingredientes" recipeType="drinks" />
      { ingredientList.map((ingredient, index) => (
        <Link
          to="/comidas"
          key={ index }
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
