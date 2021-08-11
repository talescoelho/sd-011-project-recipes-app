import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExplorerFoodIngredient() {
  const headerProps = {
    title: 'Explorar Ingredientes',
    enableSearchButton: true,
    enableProfileButton: true,
  };

  const [listIngredients, setListIngredients] = useState('');

  const maxCardsOnPage = 12;
  const ingredientsLimited = listIngredients.slice(0, maxCardsOnPage);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
      .then((response) => response.json())
      .then((result) => setListIngredients(result.meals));
  }, []);

  console.log(ingredientsLimited);

  const imageIngredientUrl = 'https://www.themealdb.com/images/ingredients/';

  return (
    <div>
      <Header props={ headerProps } />
      {ingredientsLimited && ingredientsLimited.map((listIngredient, index) => {
        // const ingredientNoSpace = listIngredient.strIngredient.replace(/( )+/g, '%20');

        console.log(`${imageIngredientUrl}${listIngredient.strIngredient}-Small.png`);
        return (
          <div data-testid={ `${index}-ingredient-card` } key={ index }>
            <img
              data-testid={ `${index}-card-img` }
              src={ `${imageIngredientUrl}${listIngredient.strIngredient}-Small.png` }
              alt={ listIngredient.strIngredient }
            />
            <h1 data-testid={ `${index}-card-name` }>{listIngredient.strIngredient}</h1>
          </div>
        );
      })}
      <Footer />
    </div>
  );
}

export default ExplorerFoodIngredient;
