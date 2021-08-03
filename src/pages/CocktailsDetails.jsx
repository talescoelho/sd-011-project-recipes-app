import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Cocktails } from '../services';
import Ingredients from '../components/Ingredients';
import Recommendations from '../components/Recommendations';

export default function CocktailsDetails() {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function asyncFunction() {
      const results = await Cocktails.getById(id);
      setRecipe(results[0]);
    }
    asyncFunction();
  }, [id, setRecipe]);
  if (recipe) {
    const { strDrink, strAlcoholic, strInstructions, strDrinkThumb } = recipe;
    return (
      <div>
        <img data-testid="recipe-photo" src={ strDrinkThumb } alt={ strDrink } />
        <h2 data-testid="recipe-title">{ strDrink }</h2>
        <h3 data-testid="recipe-category">{ strAlcoholic }</h3>
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
