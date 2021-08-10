import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import IngredientCard from '../components/IngredientCard';
import Footer from '../components/Footer';
import { fetchCocktailsIngredients } from '../services/cocktailAPI';

function ExplorerDrinksIngredients() {
  const [ingredientList, setIngredientList] = useState([]);
  const maxIngredients = 12;

  useEffect(() => {
    async function getIngredients() {
      const ingredients = await fetchCocktailsIngredients();
      setIngredientList(ingredients.slice(0, maxIngredients));
    }
    getIngredients();
  }, []);

  return (
    <div>
      <Header title="Explorar Ingredientes" recipeType="drinks" />
      { ingredientList.map((ingredient, index) => (
        <Link
          to="/bebidas"
          key={ index }
        >
          <IngredientCard
            ingredient={ ingredient }
            index={ index }
            recipeType="drinks"
          />
        </Link>
      ))}
      <Footer />
    </div>
  );
}

export default ExplorerDrinksIngredients;
