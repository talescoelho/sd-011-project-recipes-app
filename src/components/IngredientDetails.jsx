import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../context/AppContext';

function IngredientDetails() {
  const { idDetails } = useContext(AppContext);
  const [ingredients, setIngredients] = useState({ ingredient: [] });
  console.log('Details', idDetails[0]);
  const {
    strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5,
    strIngredient6, strIngredient7, strIngredient8, strIngredient9,
    strIngredient10, strIngredient11, strIngredient12, strIngredient13,
    strIngredient14, strIngredient15, strMeasure1, strMeasure2,
    strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7,
    strMeasure8, strMeasure9,
    strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15,
  } = idDetails[0];

  useEffect(() => {
    if (ingredients.ingredient !== null) {
      setIngredients({ ingredient: [
        `${strIngredient1} - ${strMeasure1}`,
        `${strIngredient2} - ${strMeasure2}`,
        `${strIngredient3} - ${strMeasure3}`,
        `${strIngredient4} - ${strMeasure4}`,
        `${strIngredient5} - ${strMeasure5}`,
        `${strIngredient6} - ${strMeasure6}`,
        `${strIngredient7} - ${strMeasure7}`,
        `${strIngredient8} - ${strMeasure8}`,
        `${strIngredient9} - ${strMeasure9}`,
        `${strIngredient10} - ${strMeasure10}`,
        `${strIngredient11} - ${strMeasure11}`,
        `${strIngredient12} - ${strMeasure12}`,
        `${strIngredient13} - ${strMeasure13}`,
        `${strIngredient14} - ${strMeasure14}`,
        `${strIngredient15} - ${strMeasure15}`,
      ] });
    }
  }, []);

  console.log('ingredient', ingredients);

  return (
    <>
      <h3>Ingredients</h3>
      <ul>
        {ingredients.ingredient.length >= 1
        && ingredients.ingredient
          .map((item, index) => (
            <li
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              {item}
            </li>))}
      </ul>
      <h3>Instructions</h3>
      <p data-testid="instructions">{idDetails[0].strInstructions}</p>
    </>
  );
}

export default IngredientDetails;
