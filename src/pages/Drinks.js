import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import RecipeCard from '../components/RecipeCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoriesBar from '../components/CategoriesBar';

function Drinks() {
  const { drinksData } = useContext(RecipesContext);

  // useEffect(() => {

  // }, []);

  return (
    <>
      { drinksData.length === 1
        && <Redirect to={ `/bebidas/${drinksData[0].idDrink}` } /> }
      <Header title="Bebidas" recipeType="drinks" searchButton />
      <CategoriesBar recipeType="bebidas" />
      <div className="container my-5">
        <div className="row px-5 gallery-work">
          { drinksData !== [] && drinksData.map((recipe, index) => (
            <div className="col-md-4 my-3" key={ recipe.idDrink }>
              <Link to={ `/bebidas/${recipe.idDrink}` }>
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

export default Drinks;
