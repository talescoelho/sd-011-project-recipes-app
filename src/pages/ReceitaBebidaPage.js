import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ShareFavBtn from '../components/ShareFavBtn';

export default function ReceitaBebidaPage(props) {
  const [drinkDetails, setDrinkDetails] = useState();
  const [drinkIngredients, setDrinkIngredients] = useState();
  const location = useLocation();
  const DRINK_DETAILS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
  const FOOD_RECOMENDATIONS = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  const recommendedRecipes = [
    'receita 1',
    'receita 2',
    'receita 3',
  ];

  useEffect(() => {
    const foodId = location.pathname.split('/')[2];
    fetch(DRINK_DETAILS_URL + foodId)
      .then((response) => response.json())
      .then((data) => setDrinkDetails(data));
  }, []);

  function ingredientsDetailsRender() {
    const array = [];
    const level1 = Object.values(drinkDetails);
    const level2 = Object.values(level1[0]);
    Object.keys(level2[0]).forEach((key) => {
      array.push(`${key}: ${level2[0][key]}`);
    });
    const test2 = array.filter((item) => item.includes('strIngredient'));
    const test3 = test2.map((item) => item.split(': ')[1]);
    const test4 = test3.filter((item) => item !== 'null');
    return setDrinkIngredients(test4);
  }

  useEffect(() => {
    if (drinkDetails) { return ingredientsDetailsRender(); }
  }, [drinkDetails]);

  const foodRecomendations = async () => {
    const response = await fetch(FOOD_RECOMENDATIONS);
    const data = await response.json();
    return data.drinks;
  };
  foodRecomendations();

  function renderDrinks() {
    return (
      <div>
        <p>{ drinkDetails.idDrink }</p>
        <img
          src={ drinkDetails.drinks[0].strDrinkThumb }
          alt="foto"
          data-testid="recipe-photo"
        />
        <h1 data-testid="recipe-title">{ drinkDetails.drinks[0].strDrink }</h1>
        <ShareFavBtn url={ props.match.url } />
        <h5 data-testid="recipe-category">{ drinkDetails.drinks[0].strCategory }</h5>
        <p data-testid="recipe-category">{ drinkDetails.drinks[0].strAlcoholic }</p>

        <div>
          <h3>Ingredients</h3>
          <ul>
            { drinkIngredients ? drinkIngredients.map((item, index) => (
              <p
                key={ index }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                { item }
              </p>)) : '' }
          </ul>
        </div>
        <div>
          <h3>Instructions</h3>
          <p data-testid="instructions">
            { drinkDetails.drinks[0].strInstructions }
          </p>
        </div>
        <div>
          <h3>Receitas recomendadas</h3>
          <ul>
            {recommendedRecipes.map((name, index) => (
              <li
                key={ index }
                data-testid={ `${index}-recomendation-card` }
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
        <Button data-testid="start-recipe-btn">Iniciar Receita</Button>
      </div>
    );
  }
  return (
    <div>
      { drinkDetails ? renderDrinks() : <p>Loading...</p> }
    </div>
  );
}
