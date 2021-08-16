import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import RecipeCard from '../components/RecipeCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoriesBar from '../components/CategoriesBar';
import Loading from '../components/Loading';

function Meals() {
  const { mealsData, currentCategory } = useContext(RecipesContext);

  if (mealsData.length === 1 && currentCategory === 'All') {
    return <Redirect to={ `/comidas/${mealsData[0].idMeal}` } />;
  }

  if (mealsData.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <Header title="Comidas" recipeType="meals" searchButton />
      <CategoriesBar recipeType="meals" />
      <div className="container my-5">
        <div className="row px-5 gallery-work">
          { mealsData !== [] && mealsData.map((recipe, index) => (
            <div className="col-md-4 my-3" key={ recipe.idMeal }>
              <Link to={ `/comidas/${recipe.idMeal}` }>
                <RecipeCard recipe={ recipe } index={ index } />
              </Link>
            </div>
          )) }
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Meals;
