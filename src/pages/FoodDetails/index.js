import PropTypes from 'prop-types';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
// import blackHeartIcon from '../../images/blackHeartIcon.svg';

const FoodDetails = ({ match }) => {
  const { id } = match.params;
  const { data, request } = useFetch();
  const { data: drinksData, request: requestDrinks } = useFetch();

  React.useEffect(() => {
    request(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  }, [request, id]);

  React.useEffect(() => {
    requestDrinks('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  }, [requestDrinks]);

  if (!data || !drinksData) {
    return null;
  }

  const { meals } = data;
  const meal = meals[0];
  const { strMealThumb, strYoutube, strMeal, strCategory, strInstructions } = meal;

  const entries = Object.entries(meal);
  const ingredients = entries.filter(([value]) => value
    .includes('strIngredient')).filter(([, value]) => value !== '' && value !== null);
  const ingredientsQuantity = entries.filter(([value]) => value
    .includes('strMeasure')).filter(([, value]) => value !== '' && value !== null);

  const { drinks } = drinksData;
  const numberOfDrinks = 6;
  const filteredDrinks = drinks.filter((value, index) => index < numberOfDrinks);

  return (
    <div>
      <img
        className="top-img"
        src={ strMealThumb }
        alt={ `${strMeal}` }
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">{ strMeal }</h1>
      <img src={ shareIcon } alt="" data-testid="share-btn" />
      <img src={ whiteHeartIcon } alt="" data-testid="favorite-btn" />
      <h2 data-testid="recipe-category">{ strCategory }</h2>
      Ingredients
      <ul>
        { ingredients.map(([, value], index) => (
          <li
            key={ value }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { `${value} -${ingredientsQuantity[index][1]}` }
          </li>
        ))}
      </ul>
      Instructions
      <p data-testid="instructions">{ strInstructions }</p>
      <iframe data-testid="video" src={ strYoutube } title="description" />
      Recommended
      <div className="div-scroll">
        { filteredDrinks.map((drink, index) => {
          const { strDrinkThumb, strCategory: strAlcoholic, strDrink } = drink;
          return (
            <div
              className="recomendation-card"
              key={ index }
              data-testid={ `${index}-recomendation-card` }
            >
              <img className="img-card" src={ strDrinkThumb } alt={ strDrink } />
              <p>{ strAlcoholic }</p>
              <h3 data-testid={ `${index}-recomendation-title` }>{ strDrink }</h3>
            </div>
          );
        }) }
      </div>
      <button
        className="start-btn"
        data-testid="start-recipe-btn"
        type="button"
      >
        Iniciar Receita
      </button>
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
