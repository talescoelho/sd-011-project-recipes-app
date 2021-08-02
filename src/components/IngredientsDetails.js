import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipes } from '../redux/slices/fetchReceitas';
import './IngredientsDetails.css';

function IngredientsDetails() {
  const { data } = useSelector((state) => state.fetchReceitas);
  const dispatch = useDispatch();

  const { pathname } = window.location;
  const currentURL = pathname.split('/')[2];

  const recipeTypeDictionary = useCallback(() => ({
    comidas: 'themealdb',
    bebidas: 'thecocktaildb',
  }), []);

  useEffect(() => {
    const URL = `https://www.${recipeTypeDictionary()[currentURL]}.com/api/json/v1/1/list.php?i=list`;
    dispatch(getRecipes(URL));
    console.log('useEffect');
  }, [dispatch, currentURL, recipeTypeDictionary]);

  if (data.length !== 0) {
    const limitCards = 12;
    let ingredientKey = 'strIngredient';
    let recipeType = data.meals;
    if (currentURL === 'bebidas') {
      recipeType = data.drinks;
      ingredientKey = 'strIngredient1';
    }

    return (
      <section className="ingredients-container">
        {recipeType.slice(0, limitCards).map((ingredient, index) => (
          <div
            data-testid={ `${index}-ingredient-card` }
            key={ index }
            className="ingredient-card"
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ `https://www.${recipeTypeDictionary()[currentURL]}.com/images/ingredients/${ingredient[ingredientKey]}-Small.png` }
              alt={ ingredient[ingredientKey] }
            />
            <p
              data-testid={ `${index}-card-name` }
            >
              {ingredient[ingredientKey]}
            </p>
          </div>
        ))}
      </section>
    );
  }
  return null;
}

export default IngredientsDetails;
