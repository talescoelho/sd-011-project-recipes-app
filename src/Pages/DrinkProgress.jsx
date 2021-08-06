import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getDrinkByID } from '../Services/ApiDrink';

function DrinkProgress(props) {
  const [drinkById, setDrinkById] = useState([]);
  const [drinkIngredient, setDrinkIngredient] = useState([]);
  const { match } = props;
  const { id } = match.params;

  async function fetchDrinkByID() {
    const drinkByIdAPI = await getDrinkByID(id);
    setDrinkById(drinkByIdAPI.drinks);
  }

  useEffect(() => {
    fetchDrinkByID();
  }, []);

  console.log(drinkById);

  useEffect(() => {
    drinkById.forEach((ingredient) => {
      const data = [];
      const number = 15;
      Object.entries(ingredient).filter((item) => {
        for (let index = 0; index <= number; index += 1) {
          if (item.includes(`strIngredient${index}`)) {
            data.push(item);
          }
        }
        return data;
      });
      console.log(data);
      setDrinkIngredient(data);
    });
  }, [drinkById]);

  return (
    <div>
      { drinkById.map((item, index) => (
        <div key={ index }>
          <img
            data-testid="recipe-photo"
            src={ item.strDrinkThumb }
            alt={ `Drink ${item.strDrink}` }
            width="80"
          />
          <h2 data-testid="recipe-title">
            { item.strDrink }
          </h2>
          <h3 data-testid="recipe-category">
            { item.strCategory }
          </h3>
          <ul>
            {
              drinkIngredient.map((ingredient, i) => (
                <li
                  key={ i }
                >
                  { Object.values(ingredient) }
                </li>
              ))
            }
          </ul>
          <p data-testid="instructions">
            { item.strInstructions }
          </p>
        </div>
      )) }
      <div>
        <button
          type="button"
          data-testid="finish-recipe-btn"
        >
          Finish
        </button>
        <button
          type="button"
          data-testid="favorite-btn"
        >
          Favorite
        </button>
        <button
          type="button"
          data-testid="share-btn"
        >
          Share
        </button>
      </div>
    </div>
  );
}

DrinkProgress.propTypes = {
  match: PropTypes.object,
  params: PropTypes.shape({
    id: PropTypes.number,
  }),
}.isRequired;

export default DrinkProgress;
