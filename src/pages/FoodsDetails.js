import React, { useEffect, useState } from 'react';
import FetchApi from '../services/ApiFetch';
import ShareBtn from '../components/ShareBtn';
import FavoriteBtn from '../components/FavoriteBtn';

export default function FoodsDetails(props) {
  const { match: { params: { id } } } = props;
  const [details, setDetails] = useState();
  const [mealIngredients, setMealIngredients] = useState();
  const [mealMeasure, setMealMeasure] = useState();

  useEffect(() => {
    async function fetchApi() {
      const results = await FetchApi('themealdb', null, null, ['details', id]);
      console.log(results.meals);
      setDetails(results.meals);
    }
    fetchApi();
  }, []);

  useEffect(() => {
    if (details) {
      const ingredients = [];
      const measure = [];
      const obj = details[0];
      Object.keys(obj).forEach((item) => {
        if (item.includes('strIngredient')) {
          ingredients.push(obj[item]);
        }
        if (item.includes('strMeasure')) {
          measure.push(obj[item]);
        }
      });
      const filteredIngredients = ingredients
        .filter((item2) => (
          item2 !== '' && item2 !== null));
      setMealIngredients(filteredIngredients);
      const filteredMeasures = measure
        .filter((item2) => (
          item2 !== '' && item2 !== 'null'));
      setMealMeasure(filteredMeasures);
    }
  }, [details]);

  function renderDetails() {
    return (
      <div className="details-body">
        <img alt="logo" src={ details[0].strMealThumb } data-testid="recipe-photo" />
        <h3 data-testid="recipe-title">{ details[0].strMeal }</h3>
        <div className="details-btn-container">
          <ShareBtn />
          <FavoriteBtn />
        </div>
        <h4 data-testid="recipe-category">
          Category:
          { details[0].strCategory }
        </h4>
        <h4>Ingredients:</h4>
        { mealIngredients ? mealIngredients.map((item, index) => (
          <h5
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { `${item} - ${mealMeasure[index]}` }
          </h5>
        )) : '' }
        <h4>Instructions:</h4>
        <h5>{ details[0].strInstructions }</h5>
        <h4>Vídeo</h4>
        { details ? <iframe
          width="560"
          height="315"
          src={ `https://www.youtube.com/embed/${details[0].strYoutube.split('=')[1]}` }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write;
          encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        /> : '' }
      </div>
    );
  }

  return (
    <div className="details-container">
      { details ? renderDetails() : 'Loading...'}
    </div>
  );
}
