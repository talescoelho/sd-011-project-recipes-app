import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';

function Drinks() {
  const { recipesData } = useContext(RecipesContext);

  return (
    <div>
      <SearchBar />
      { recipesData !== [] && recipesData.map((recipe, index) => (
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
    </div>
  );
}

export default Drinks;
