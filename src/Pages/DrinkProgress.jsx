import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getDrinkByID } from '../Services/ApiDrink';

function DrinkProgress(props) {
  const [drinkById, setDrinkById] = useState([]);
  const [drinkIngredient, setDrinkIngredient] = useState([]);
  const [button, setButton] = useState(false);
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
          if (item.includes(`strIngredient${index}`) && item[1]) {
            data.push(Object.values(item).splice(1, 1));
          }
        }
        return data;
      });
      console.log(data);
      setDrinkIngredient(data);
    });
  }, [drinkById]);

  function ingredientsChecked() {
    let sum = 0;
    const checkeds = document.getElementsByTagName('input');
    for (let index = 0; index < checkeds.length; index += 1) {
      if (checkeds[index].checked === true) {
        sum += 1;
        // console.log(sum);
        if (sum === checkeds.length) {
          setButton(true);
        } else setButton(false);
      }
    }
    return button;
  }

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
                  data-testid={ `${i}-ingredient-step` }
                  key={ i }
                >
                  <label
                    htmlFor={ i }
                  >
                    <input
                      id={ i }
                      type="checkbox"
                      onChange={ () => ingredientsChecked() }
                    />
                    { Object.values(ingredient) }
                  </label>
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
          disabled={ !button }
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
