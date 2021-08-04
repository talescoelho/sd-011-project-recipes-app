import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function toList(line) {
  const ingredientList = new Array(20).fill().map((_, i) => {
    const ingredientKey = `strIngredient${i + 1}`;
    const measureKey = `strMeasure${i + 1}`;
    console.table({ ingredientKey: line[ingredientKey], measureKey: line[measureKey] });
    return [line[ingredientKey], line[measureKey]];
  }).filter(([ingredient, measure]) => {
    if (ingredient && measure) {
      return [ingredient, measure];
    }
  });
  return { ...line, ingredientList };
}

function FoodInProgress({ match }) {
  const { id } = match.params;
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((result) => result.json())
      .then((result) => {
        console.log({ result });
        setIngredients(result.meals);
      });
  }, [id]);

  return (
    <div>
      {ingredients && ingredients.map(toList)
        .map(({ ingredientList, ...meal }, index) => {
          if (ingredientList) {
            return (
              <div key={ index }>
                <img data-testid="recipe-photo" src={ meal.strMealThumb } alt="" />
                <p data-testid="recipe-title">{meal.strMeal}</p>
                <p data-testid="recipe-category">{meal.strCategory}</p>
                <button type="button" data-testid="share-btn">share</button>
                <button type="button" data-testid="favorite-btn">favorite</button>
                {ingredientList.map(([ingredient, measure], i) => (
                  <div key={ i } data-testid={ `${i}-ingredient-step` }>
                    <span>{ingredient}</span>
                    :
                    <span>{ measure }</span>
                    <input type="checkbox" />
                  </div>
                ))}
                <p>instructions:</p>
                <p data-testid="instructions">{meal.strInstructions}</p>
                <Link to="/receitas-feitas" data-testid="finish-recipe-btn">finish</Link>
                <br />
              </div>
            );
          }
        })}
    </div>
  );
}

FoodInProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default FoodInProgress;
