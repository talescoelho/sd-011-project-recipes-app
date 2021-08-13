import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import IngredientCard from '../components/IngredientCard';
import Footer from '../components/Footer';
import { fetchCocktailsIngredients,
  fetchCocktailsByIngredient } from '../services/cocktailAPI';

function ExplorerDrinksIngredients() {
  const { setDrinksData } = useContext(RecipesContext);
  const [ingredientList, setIngredientList] = useState([]);
  const maxIngredients = 12;

  useEffect(() => {
    async function getIngredients() {
      const ingredients = await fetchCocktailsIngredients();
      setIngredientList(ingredients.slice(0, maxIngredients));
    }
    getIngredients();
  }, []);

  const handleClickLink = async (ingredient) => {
    const response = await fetchCocktailsByIngredient(ingredient);
    setDrinksData(response.slice(0, maxIngredients));
  };

  return (
    <>
      <Header title="Explorar Ingredientes" recipeType="drinks" />
      <div className="container my-5">
        <div className="row px-5 gallery-work">
          { ingredientList.map((ingredient, index) => (
            <div className="col-md-4 my-3" key={ index }>
              <Link
                to="/bebidas"
                onClick={ () => handleClickLink(ingredient.strIngredient1) }
              >
                <IngredientCard
                  ingredient={ ingredient }
                  index={ index }
                  recipeType="drinks"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ExplorerDrinksIngredients;
