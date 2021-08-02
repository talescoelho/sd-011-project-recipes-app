import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../redux/slices/fetchReceitas';

function CategoryButtons() {
  const { typeRecipe, categories } = useSelector((state) => state.fetchReceitas);
  const dispatch = useDispatch();
  const LIMIT_CATEGORIES = 5;

  useEffect(() => {
    console.log('Quantas vezes aparece');
    const URL = typeRecipe === 'drinks'
      ? 'www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
      : 'https://www.themealdb.com/api/json/v1/1/categories.php';
    dispatch(getRecipes(URL));
  }, [typeRecipe, dispatch]);

  return (
    <nav>
      {categories.slice(0, LIMIT_CATEGORIES).map(({ strCategory }, index) => (
        <button
          type="button"
          key={ index }
          data-testid={ `${strCategory}-category-filter` }
        >
          { strCategory }
        </button>
      ))}
    </nav>
  );
}

export default CategoryButtons;
