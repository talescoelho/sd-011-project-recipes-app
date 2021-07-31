import React from 'react';
import useDetailsFetch from '../hooks/useDetailsFetch';
import useRecomendedItemsFetch from '../hooks/useRecomendedItemsFetch';

export default function DetailsFoods() {
  const { data, request } = useDetailsFetch();
  const { recomendedData, requestRecomendedApi } = useRecomendedItemsFetch();
  const [ingredients, setIngredients] = React.useState([]);
  const [measures, setMeasures] = React.useState([]);
  const [recomendedDrinks, setRecomendedDrinks] = React.useState([]);

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
  }, [request, requestRecomendedApi]);

  React.useEffect(() => {
    if (data && recomendedData) {
      const maxRecomendedItems = 6;
      const dataKeys = Object.keys(data.meals[0]);
      setIngredients(dataKeys.filter((key) => key.includes('strIngredient')));
      setMeasures(dataKeys.filter((key) => key.includes('strMeasure')));
      const onlySix = recomendedData.drinks.filter((_, index) => (
        index < maxRecomendedItems
      ));
      setRecomendedDrinks(onlySix);
    }
  }, [data, recomendedData]);

  if (!data || !recomendedData) return <p>Loading...</p>;

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
      <iframe
        title={ data.meals[0].strMeal }
        data-testid="video"
        src={ data.meals[0].strYoutube }
        width="420"
        height="345"
      />
      <div className="div-scroll">
        {recomendedDrinks.map((recomended, index) => (
          <div
            data-testid={ `${index}-recomendation-card` }
            key={ index }
            style={ { width: '100px', height: '100px', margin: '10px 5px' } }
          >
            <img
              src={ recomended.strDrinkThumb }
              alt={ recomended.strDrink }
              width="90px"
              height="90px"
            />
            <h6>{ recomended.strCategory }</h6>
            <h3
              data-testid={ `${index}-recomendation-title` }
            >
              { recomended.strDrink }
            </h3>
          </div>
        ))}
      </div>
      <button data-testid="share-btn" type="button">share</button>
      <button data-testid="favorite-btn" type="button">favorite</button>
      <button data-testid="start-recipe-btn" type="button">Start</button>
    </main>
  );
}
