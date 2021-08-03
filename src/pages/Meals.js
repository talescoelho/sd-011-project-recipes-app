import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import RecipeCard from '../components/RecipeCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoriesBar from '../components/CategoriesBar';

function Meals() {
  const { mealsData } = useContext(RecipesContext);

  return (
    <div>
      { mealsData.length === 1
        && <Redirect to={ `/comidas/${mealsData[0].idMeal}` } /> }
      <Header title="Comidas" recipeType="meals" searchButton />
      <CategoriesBar recipeType="meals" />
      { mealsData !== [] && mealsData.map((recipe, index) => (
        <Link
          to={ `/comidas/${recipe.idMeal}` }
          key={ recipe.idMeal }
        >
          <RecipeCard
            recipe={ recipe }
            index={ index }
          />
        </Link>
      )) }
      <Footer />
    </div>
  );
}

export default Meals;
