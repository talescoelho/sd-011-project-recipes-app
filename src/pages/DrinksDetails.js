import React, { useEffect, useState } from 'react';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import getMealById from '../services/getMealById';
import randomRecipe from '../services/randomRecipe';
import StartRecipeButton from '../components/StartRecipeButton';

function DrinksDetails(props) {
  const [drink, setDrink] = useState('');
  const [recomMeal, setRecomMeal] = useState('');
  // const history = useHistory();
  const { match: { params: { id } } } = props;
  // console.log(meal);

  useEffect(() => {
    const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    const getMealDetails = async () => {
      const { drinks } = await getMealById(endpoint);
      setDrink(drinks[0]);
    };

    const getRandomMeal = async () => {
      const { meals } = await randomRecipe('themealdb');
      setRecomMeal(meals);
    };

    getMealDetails();
    getRandomMeal();
  }, []);

  function renderDetails() {
    return (
      <div>
        <img
          data-testid="recipe-photo"
          alt="somefood"
          src={ drink.strDrinkThumb }
          height="350px"
        />
        <div>
          <h3 data-testid="recipe-title">{ drink.strDrink }</h3>
          <input
            type="image"
            alt="someText"
            data-testid="share-btn"
            src={ shareIcon }
          />
          <input
            type="image"
            alt="someText"
            data-testid="favorite-btn"
            src={ blackHeartIcon }
          />
        </div>
        <p data-testid="recipe-category">{ drink.strAlcoholic }</p>
      </div>
    );
  }

  function createIngredArray() {
    const ingredArray = Object.entries(drink)
      .filter((key) => key[0].includes('strIngredient'));
    const ingredList = [];
    ingredArray.forEach((item) => ingredList.push(item[1]));
    return ingredList;
  }

  function createMeasuArray() {
    const measureArray = Object.entries(drink)
      .filter((key) => key[0].includes('strMeasure'));
    const measureList = [];
    measureArray.forEach((item) => measureList.push(item[1]));
    return measureList;
  }

  function renderIngredList() {
    const ingredList = createIngredArray();
    const measureList = createMeasuArray();

    return (
      <ul>
        {ingredList.map((ingred, index) => {
          if (ingred) {
            return (
              <li
                key={ index }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                {`${ingred} - ${measureList[index]}`}
              </li>
            );
          }
        })}
      </ul>
    );
  }

  function renderInstructions() {
    return (
      <p
        data-testid="instructions"
      >
        { drink.strInstructions }
      </p>
    );
  }

  function renderRecomendations() {
    const maxLength = 6;
    return (
      recomMeal.map((recipe, index) => {
        if (index < maxLength) {
          return (
            <div
              key={ recipe.strMeal }
              data-testid={ `${index}-recomendation-card` }
            >
              <img
                src={ recipe.strMealThumb }
                alt={ recipe.strMeal }
                height="100px"
                width="100px"
              />
              <h5>{ recipe.strMeal }</h5>
            </div>
          );
        }
        return null;
      })
    );
  }

  return (
    <div>
      {drink && renderDetails()}
      {drink && renderIngredList()}
      {drink && renderInstructions()}
      {recomMeal && renderRecomendations()}
      <StartRecipeButton type="bebidas" id={ id } />
    </div>
  );
}

export default DrinksDetails;
