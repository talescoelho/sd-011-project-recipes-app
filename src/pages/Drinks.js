import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import RecipeCard from '../components/RecipeCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Drinks() {
  const { drinksData } = useContext(RecipesContext);

  // useEffect(() => {

  // }, []);

  return (
    <div>
      <Header title="Bebidas" recipeType="drinks" searchButton />
      { drinksData !== [] && drinksData.map((recipe, index) => (
        <Link
          to={ `/bebidas/${recipe.idDrink}` }
          key={ recipe.idDrink }
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

export default Drinks;
