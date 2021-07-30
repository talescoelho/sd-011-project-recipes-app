import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import '../css/RecipeCards.css';
import RecipeAppContext from '../context/RecipeAppContext';

function RecipeCards() {
  const { drinksList, foodsList } = useContext(RecipeAppContext);
  const history = useHistory();

  useEffect(() => {
    if (foodsList === null || drinksList === null) {
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    } else if (drinksList.length === 1) {
      history.push(`/bebidas/${drinksList[0].idDrink}`);
    } else if (foodsList.length === 1) {
      history.push(`/comidas/${foodsList[0].idMeal}`);
    }
  }, [drinksList, foodsList]);

  const renderDrinkCards = () => {
    const maxLength = 11;
    const list = drinksList.map((recipe, index) => {
      if (index <= maxLength) {
        return (
          <div className="card-container" data-testid={ `${index}-recipe-card` }>
            <img
              src={ recipe.strDrinkThumb }
              data-testid={ `${index}-card-img` }
              alt={ `${recipe.strDrink}` }
              height="100px"
              width="100px"
            />
            <p
              key={ recipe.idDrink }
              data-testid={ `${index}-card-name` }
            >
              {recipe.strDrink}
            </p>
          </div>
        );
      }
      return null;
    });
    return list;
  };

  const renderFoodCards = () => {
    const maxLength = 11;
    const list = foodsList.map((recipe, index) => {
      if (index <= maxLength) {
        return (
          <div className="card-container" data-testid={ `${index}-recipe-card` }>
            {console.log(`${index}-recipe-card`)}
            <img
              src={ recipe.strMealThumb }
              data-testid={ `${index}-card-img` }
              alt={ `${recipe.strMeal}` }
              height="100px"
              width="100px"
            />
            <p
              key={ recipe.idMeal }
              data-testid={ `${index}-card-name` }
            >
              {recipe.strMeal}
            </p>
          </div>
        );
      }
      return null;
    });
    return list;
  };

  return (
    <div className="library-card-container">
      {drinksList && renderDrinkCards()}
      {foodsList && renderFoodCards()}
    </div>
  );
}

export default RecipeCards;
