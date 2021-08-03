import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Foods } from '../services';
import Ingredients from '../components/Ingredients';
import Recommendations from '../components/Recommendations';
import ShareButton from '../components/ShareButton';
import FavoriteButton from '../components/FavoriteButton';

export default function FoodDetails() {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function asyncFunction() {
      const results = await Foods.getById(id);
      setRecipe(results[0]);
    }
    asyncFunction();
  }, [id, setRecipe]);
  if (recipe) {
    const { strMeal, strCategory, strInstructions, strMealThumb } = recipe;
    return (
      <div>
        <img data-testid="recipe-photo" src={ strMealThumb } alt={ strMeal } />
        <h2 data-testid="recipe-title">{ strMeal }</h2>
        <h3 data-testid="recipe-category">{ strCategory }</h3>
        <ShareButton />
        <FavoriteButton recipe={ recipe } drinkOrFood="comida" />
        <Ingredients recipe={ recipe } />
        <div>
          <h3>Instructions</h3>
          <p data-testid="instructions">{ strInstructions }</p>
        </div>
        <Recommendations type="Comida" />
      </div>
    );
  }

  return <p>Loading ...</p>;
}
