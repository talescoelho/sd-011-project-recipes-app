import PropTypes from 'prop-types';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import './styles.css';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
// import blackHeartIcon from '../../images/blackHeartIcon.svg';

const FoodDetails = ({ match }) => {
  const { id } = match.params;
  const { data, request } = useFetch();
  const { data: mealsData, request: requestMeals } = useFetch();

  React.useEffect(() => {
    request(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  }, [request, id]);

  React.useEffect(() => {
    requestMeals('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  }, [requestMeals]);

  if (!data || !mealsData) {
    return null;
  }

  const { drinks } = data;
  const drink = drinks[0];
  console.log(drink);
  const { strDrinkThumb, strDrink, strAlcoholic, strInstructions } = drink;
  const entries = Object.entries(drink);
  const ingredients = entries.filter(([value]) => value
    .includes('strIngredient')).filter(([, value]) => value !== '' && value !== null);
  const ingredientsQuantity = entries.filter(([value]) => value
    .includes('strMeasure')).filter(([, value]) => value !== '' && value !== null);
  const { meals } = mealsData;
  const numberOfMeals = 6;
  const filteredMeals = meals.filter((value, index) => index < numberOfMeals);
  console.log(ingredients);
  console.log(ingredientsQuantity);
  console.log(filteredMeals);
  return (
    <div>
      <img
        src={ strDrinkThumb }
        alt={ `${strDrink}` }
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">{ strDrink }</h1>
      <img src={ shareIcon } alt="" data-testid="share-btn" />
      <img src={ whiteHeartIcon } alt="" data-testid="favorite-btn" />
      <h2 data-testid="recipe-category">{ strAlcoholic }</h2>
      Ingredients
      <ul>
        { ingredients.map(([name, value], index) => {
          const quantity = drink[`strMeasure${name.split('strIngredient')[1]}`];
          if (quantity === null || quantity === '') {
            return (
              <li
                key={ value }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                { value }
              </li>
            );
          }
          return (
            <li
              key={ value }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { `${value} -${drink[`strMeasure${name.split('strIngredient')[1]}`]}` }
            </li>
          );
        })}
      </ul>
      Instructions
      <p data-testid="instructions">{ strInstructions }</p>
      Recommended
      <div className="div-scroll">
        { filteredMeals.map((meal, index) => {
          const { strMealThumb, strCategory: mealCategory, strMeal } = meal;
          return (
            <div key={ index } data-testid={ `${index}-recomendation-card` }>
              <img src={ strMealThumb } alt={ strMeal } />
              <p>{ mealCategory }</p>
              <h3>{ strMeal }</h3>
            </div>
          );
        }) }
      </div>
      <button data-testid="start-recipe-btn" type="button">Start Recipe</button>
    </div>
  );
};

FoodDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default FoodDetails;
