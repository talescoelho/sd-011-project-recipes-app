import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getDrinkByID } from '../Services/ApiDrink';

function DrinkProgress(props) {
  const [drinkById, setDrinkById] = useState([]);
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

  drinkById.filter((ingredient) => {
    const ingredients = [ingredient.match('strIngredient')];
    console.log(ingredients);
  });


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
          <h4 data-testid="recipe-category">
            { item.strCategory }
          </h4>
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
