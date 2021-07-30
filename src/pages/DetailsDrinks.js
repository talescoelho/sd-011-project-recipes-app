import React from 'react';
import useFetch from '../hooks/useFetch';

export default function DetailsDrinks() {
  const { data, request } = useFetch();
  const [ingredients, setIngredients] = React.useState([]);
  const [measures, setMeasures] = React.useState([]);

  React.useEffect(() => {
    function fetchDrinkApi() {
      const mockDrinkId = 178319;
      request(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${mockDrinkId}`);
    }
    fetchDrinkApi();
  }, [request]);

  React.useEffect(() => {
    if (data) {
      const dataKeys = Object.keys(data.drinks[0]);
      setIngredients(dataKeys.filter((key) => key.includes('strIngredient')));
      setMeasures(dataKeys.filter((key) => key.includes('strMeasure')));
    }
  }, [data]);

  if (!data) return <p>Loading...</p>;

  return (
    <main>
      <img
        data-testid="recipe-photo"
        src={ data.drinks[0].strDrinkThumb }
        alt={ data.drinks[0].strDrink }
        width="100px"
        height="100px"
      />
      <h1 data-testid="recipe-title">{ data.drinks[0].strDrink }</h1>
      <button data-testid="share-btn" type="button">share</button>
      <button data-testid="favorite-btn" type="button">favorite</button>
      <h4 data-testid="recipe-category">{ data.drinks[0].strCategory }</h4>
      { measures.map((measure, index) => (
        <span
          key={ index }
          data-testid={ `${index}-ingredient-name-and-measure` }
        >
          { data.drinks[0][measure] }
        </span>
      )) }
      <span data-testid="instructions">{ data.drinks[0].instructions }</span>
      {ingredients.map((ingredient, index) => (
        <span
          key={ index }
          data-testid={ `${index}-recomendation-card` }
        >
          { data.drinks[0][ingredient] }
        </span>
      ))}
      <button data-testid="start-recipe-btn" type="button">Start</button>
    </main>
  );
}
