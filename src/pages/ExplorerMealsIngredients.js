import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import IngredientCard from '../components/IngredientCard';
import Footer from '../components/Footer';
import { fetchMealsIngredients, fetchMealsByIngredient } from '../services/meailAPI';
import Loading from '../components/Loading';

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

  if (ingredientList.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <Header title="Explorar Ingredientes" recipeType="drinks" />
      <div className="container my-5">
        <div className="row px-5 gallery-work">
          { ingredientList.map((ingredient, index) => (
            <div className="col-md-4 my-3" key={ index }>
              <Link
                to="/comidas"
                onClick={ () => handleClickLink(ingredient.strIngredient) }
              >
                <IngredientCard
                  ingredient={ ingredient }
                  index={ index }
                  recipeType="meals"
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

export default ExplorerMealsIngredients;
