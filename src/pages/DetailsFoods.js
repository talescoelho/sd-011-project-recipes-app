import React from 'react';
import useFetch from '../hooks/useFetch';

export default function DetailsFoods() {
  const { data, request } = useFetch();
  const [ingredients, setIngredients] = React.useState([]);
  const [measures, setMeasures] = React.useState([]);

  React.useEffect(() => {
    function fetchFoodApi() {
      const mockFoodId = 52771;
      request(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mockFoodId}`);
    }
    fetchFoodApi();
  }, [request]);

  React.useEffect(() => {
    if (data) {
      const dataKeys = Object.keys(data.meals[0]);
      setIngredients(dataKeys.filter((key) => key.includes('strIngredient')));
      setMeasures(dataKeys.filter((key) => key.includes('strMeasure')));
    }
  }, [data]);

  if (!data) return <p>Loading...</p>;

  return (
    <main>
      <img
        data-testid="recipe-photo"
        src={ data.meals[0].strMealThumb }
        alt={ data.meals[0].strMeal }
        width="100px"
        height="100px"
      />
      <h1 data-testid="recipe-title">{ data.meals[0].strMeal }</h1>
      <button data-testid="share-btn" type="button">share</button>
      <button data-testid="favorite-btn" type="button">favorite</button>
      <h4 data-testid="recipe-category">{ data.meals[0].strCategory }</h4>
      { measures.map((measure, index) => (
        <span
          key={ index }
          data-testid={ `${index}-ingredient-name-and-measure` }
        >
          { data.meals[0][measure] }
        </span>
      )) }
      <span data-testid="instructions">{ data.meals[0].instructions }</span>
      <iframe
        title={ data.meals[0].strMeal }
        data-testid="video"
        src={ data.meals[0].strYoutube }
        width="420"
        height="345"
      />
      {ingredients.map((ingredient, index) => (
        <span
          key={ index }
          data-testid={ `${index}-recomendation-card` }
        >
          { data.meals[0][ingredient] }
        </span>
      ))}
      <button data-testid="start-recipe-btn" type="button">Start</button>
    </main>
  );
}
