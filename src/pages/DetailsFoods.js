import React from 'react';
import useDetailsFetch from '../hooks/useDetailsFetch';
import useRecomendedItemsFetch from '../hooks/useRecomendedItemsFetch';

export default function DetailsFoods() {
  const { data, request } = useDetailsFetch();
  const { recomendedData, requestRecomendedApi } = useRecomendedItemsFetch();
  const [ingredients, setIngredients] = React.useState([]);
  const [measures, setMeasures] = React.useState([]);

  React.useEffect(() => {
    function fetchFoodApi() {
      const mockFoodId = 52771;
      request(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mockFoodId}`);
    }
    function fetchDrinkRecomendedApi() {
      requestRecomendedApi('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    }
    fetchFoodApi();
    fetchDrinkRecomendedApi();
  }, [request]);

  React.useEffect(() => {
    if (data) {
      const dataKeys = Object.keys(data.meals[0]);
      setIngredients(dataKeys.filter((key) => key.includes('strIngredient')));
      setMeasures(dataKeys.filter((key) => key.includes('strMeasure')));
    }
  }, [data]);

  if (!data || !recomendedData) return <p>Loading...</p>;

  const mockRecomendationCard = ['recomendation 1',
    'recomendation 2', 'recomendation 3', 'recomendation 4'];

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
      <h4 data-testid="recipe-category">{ data.meals[0].strCategory }</h4>
      { measures.filter((ingrediente) => data.meals[0][ingrediente])
        .map((measure, index) => (
          <p
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { `${data.meals[0][ingredients[index]]} - ${data.meals[0][measure]}` }
          </p>
        )) }
      <span data-testid="instructions">{ data.meals[0].strInstructions }</span>
      {mockRecomendationCard.map((recomended, index) => (
        <p
          data-testid={ `${index}-recomendation-card` }
          key={ index }
        >
          { recomended }
        </p>
      ))}
      <iframe
        title={ data.meals[0].strMeal }
        data-testid="video"
        src={ data.meals[0].strYoutube }
        width="420"
        height="345"
      />
      <button data-testid="share-btn" type="button">share</button>
      <button data-testid="favorite-btn" type="button">favorite</button>
      <button data-testid="start-recipe-btn" type="button">Start</button>
    </main>
  );
}
