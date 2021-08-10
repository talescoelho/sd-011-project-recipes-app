import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function DrinkInProgress({ match }) {
  const { id } = match.params;
  const [ingredients, setIngredients] = useState([]);
  const [checked, setChecked] = useState({});

  useEffect(() => {
    const cached = localStorage.getItem('checkings');
    const parsed = JSON.parse(cached);
    if (parsed) setChecked(parsed);
  }, []);

  useEffect(() => {
    localStorage.setItem('checkings', JSON.stringify(checked));
  }, [checked]);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((result) => result.json())
      .then((result) => {
        setIngredients(result.drinks);
      });
  }, [id]);

  function toList(line) {
    const magicNumber = 20;
    const ingredientList = new Array(magicNumber).fill().map((_, i) => {
      const ingredientKey = `strIngredient${i + 1}`;
      const measureKey = `strMeasure${i + 1}`;
      return [line[ingredientKey], line[measureKey]];
    }).filter(([ingredient, measure]) => {
      if (ingredient && measure) {
        return [ingredient, measure];
      }
      return null;
    });
    return { ...line, ingredientList };
  }

  return (
    <div>
      {ingredients && ingredients.map(toList)
        .map(({ ingredientList, ...drink }, index) => (
          <div key={ index }>
            <img data-testid="recipe-photo" src={ drink.strDrinkThumb } alt="" />
            <p data-testid="recipe-title">{drink.strMeal}</p>
            <p data-testid="recipe-category">{drink.strCategory}</p>
            <button type="button" data-testid="share-btn">share</button>
            <button type="button" data-testid="favorite-btn">favorite</button>
            {ingredientList.map(([ingredient, measure], i) => (
              <div key={ i } data-testid={ `${i}-ingredient-step` }>
                <span>{ingredient}</span>
                :
                <span>{ measure }</span>
                <input
                  type="checkbox"
                  checked={ checked[i.toString()] }
                  onClick={ (event) => setChecked({ ...checked,
                    [i]: event.target.checked }) }
                />
              </div>
            ))}
            <p>instructions:</p>
            <p data-testid="instructions">{drink.strInstructions}</p>
            <Link to="/receitas-feitas" data-testid="finish-recipe-btn">finish</Link>
            <br />
          </div>
        ))}
    </div>
  );
}

DrinkInProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default DrinkInProgress;
