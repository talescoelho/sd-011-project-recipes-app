import React, { useState, useEffect } from 'react';

function RenderDrinks() {
  const [receiveDrinksRecipes, setReceiveDrinksRecipes] = useState(undefined);

  useEffect(() => {
    const fetchRenderDrinks = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const json = await response.json();
      setReceiveDrinksRecipes(json);
    };
    fetchRenderDrinks();
  }, []);

  if (!receiveDrinksRecipes) return <p>Carregando...</p>;
  const maxLength = 12;
  const filterRecipes = receiveDrinksRecipes.drinks
    .filter((item, index) => index < maxLength);
  return (
    <div>
      { filterRecipes.map((drink, index) => (
        <div key={ index }>
          <h1
            data-testid={ `${index}-card-name` }
          >
            { drink.strDrink }
          </h1>
          <img
            src={ drink.strDrinkThumb }
            alt={ drink.idDrink }
            data-testid={ `${index}-card-img` }
          />
          <h2 data-testid={ `${index}-recipe-card` }>{ drink.strInstructions }</h2>
        </div>
      )) }
    </div>
  );
}

export default RenderDrinks;
