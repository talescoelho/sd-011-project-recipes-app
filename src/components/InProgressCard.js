import React, { useContext, useEffect, useState } from 'react';
import { RecipesContext } from '../context/RecipesContext';

function InProgressCard() {
  const [mealDetail, setMealDetail] = useState([]);
  const [drinkDetail, setDrinkDetail] = useState([]);
  const { inProgress } = useContext(RecipesContext);

  const foodToDetail = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  const drinkToDetail = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

  useEffect(() => {
    const getUrlMeal = async () => {
      const meal = await fetch(
        `${foodToDetail}${window.location.pathname.split('/')[2]}`,
      );
      const response = meal.json().then((res) => setMealDetail(res.meals[0]));
      return response;
    };
    const getUrlDrink = async () => {
      const drink = await fetch(`${drinkToDetail}${inProgress.Drink}`);
      const response = drink.json().then((res) => setDrinkDetail(res.drinks[0]));
      return response;
    };
    getUrlMeal();
    getUrlDrink();
  }, [inProgress]);

  const {
    idMeal,
    strArea,
    strCategory,
    strInstructions,
    strMeal,
    strMealThumb,
  } = mealDetail;

  const objIngred = Object.entries(mealDetail).map((e) => {
    if (e[0].includes('strIngredient') && e[1] !== '') {
      return e[1];
    }
    return undefined;
  }).filter((i) => i !== undefined);

  const objMeasure = Object.entries(mealDetail).map((e) => {
    if (e[0].includes('strMeasure') && e[1] !== ' ') {
      return e[1];
    }
    return undefined;
  }).filter((i) => i !== undefined);

  console.log(window.location.pathname.split('/')[2]);

  return (
    <div>
      <h3>{strMeal}</h3>
      <img width="150px" src={ strMealThumb } alt="tumb" />
      <h4>{strArea}</h4>
      <h4>{strCategory}</h4>
      <h6>{strInstructions}</h6>
      <table>
        <tbody>
          <tr>
            <td>
              {
                objMeasure.map((e, i) => <div key={ i }>{e}</div>)
              }
            </td>
            <td>
              {
                objIngred.map((e, i) => <div key={ i }>{e}</div>)
              }
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default InProgressCard;
