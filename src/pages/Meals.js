import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';

function Meals() {
  const { recipesData } = useContext(RecipesContext);

  return (
    <div>
      <SearchBar />
      { recipesData !== [] && recipesData.map((recipe, index) => (
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
