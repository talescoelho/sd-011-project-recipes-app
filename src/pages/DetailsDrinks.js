import React from 'react';
import useDetailsFetch from '../hooks/useDetailsFetch';
import useRecomendedItemsFetch from '../hooks/useRecomendedItemsFetch';

export default function DetailsDrinks() {
  const { data, request } = useDetailsFetch();
  const { recomendedData, requestRecomendedApi } = useRecomendedItemsFetch();
  const [ingredients, setIngredients] = React.useState([]);
  const [measures, setMeasures] = React.useState([]);

  React.useEffect(() => {
    function fetchDrinkApi() {
      const mockDrinkId = 178319;
      request(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${mockDrinkId}`);
    }
    function fetchFoodRecomendedApi() {
      requestRecomendedApi('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    }
    fetchDrinkApi();
    fetchFoodRecomendedApi();
  }, [request, requestRecomendedApi]);

  React.useEffect(() => {
    if (data) {
      const dataKeys = Object.keys(data.drinks[0]);
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
        src={ data.drinks[0].strDrinkThumb }
        alt={ data.drinks[0].strDrink }
        width="100px"
        height="100px"
      />
      <h1 data-testid="recipe-title">{ data.drinks[0].strDrink }</h1>
      <h4 data-testid="recipe-category">{ data.drinks[0].strAlcoholic }</h4>
      { measures.filter((ingrediente) => data.drinks[0][ingrediente])
        .map((measure, index) => (
          <p
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { `${data.drinks[0][ingredients[index]]} - ${data.drinks[0][measure]}` }
          </p>
        )) }
      <span data-testid="instructions">{ data.drinks[0].strInstructions }</span>
      {mockRecomendationCard.map((recomendation, index) => (
        <p
          key={ index }
          data-testid={ `${index}-recomendation-card` }
        >
          { recomendation }
        </p>
      ))}
      <button data-testid="share-btn" type="button">share</button>
      <button data-testid="favorite-btn" type="button">favorite</button>
      <button data-testid="start-recipe-btn" type="button">Start</button>
    </main>
  );
}
