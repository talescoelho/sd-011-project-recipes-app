import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Badge } from 'react-bootstrap';
import ShareFavBtn from '../components/ShareFavBtn';

export default function ReceitaBebidaPage(props) {
  const [drinkDetails, setDrinkDetails] = useState();
  const location = useLocation();
  const DRINK_DETAILS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
  const ingredients = [
    // 'white flour',
    // 'salt',
    // 'yeast',
    // 'butter',
  ];

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

  function renderDrinks() {
    return (
      <div>
        <p>{ drinkDetails.idDrink }</p>
        <img
          src={ drinkDetails.drinks[0].strDrinkThumb }
          alt="foto"
          data-testid="recipe-photo"
        />
        <h1 data-testid="recipe-title">Nome da receita</h1>
        <ShareFavBtn url={ props.match.url } />
        <Badge data-testid="recipe-category">Categoria</Badge>

        <div>
          <h3>Ingredients</h3>
          <ul>
            {ingredients.map((name, index) => (
              <li
                key={ index }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Instructions</h3>
          <p
            data-testid="instructions"
          >
            Aqui as instruções de como fazer essa receitinha maravilhosa
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
