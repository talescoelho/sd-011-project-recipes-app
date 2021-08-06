import React, { useEffect, useState } from 'react';
import ShareButton from '../components/ShareButton';
import FavoriteButton from '../components/FavoriteButton';
import StartButton from '../components/StartButton';
import useDetailsFetch from '../hooks/useDetailsFetch';
import useRecomendedItemsFetch from '../hooks/useRecomendedItemsFetch';

export default function Details() {
  const { data, request } = useDetailsFetch();
  const { recomendedData, requestRecomendedApi } = useRecomendedItemsFetch();
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [recomendedDrinks, setRecomendedDrinks] = useState([]);
  const idReceita = window.location.pathname.split('/')[2];
  const [foodType, setFoodType] = useState('meals');
  const [storageType, setStorageType] = useState('meals');
  const [food, setFood] = useState('Meal');
  const [recomendedFood, setRecomendedFood] = useState('Drink');
  const [recomendedType, setRecomendedType] = useState('drinks');
  const [type, setType] = useState('comidas');
  const locationPathName = window.location.pathname.split('/')[1];

  useEffect(() => {
    if (locationPathName === 'bebidas') {
      setFoodType('drinks');
      setStorageType('cocktails');
      setFood('Drink');
      setRecomendedFood('Meal');
      setRecomendedType('meals');
      setType('bebidas');
      request(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceita}`);
      requestRecomendedApi('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    } else {
      request(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idReceita}`);
      requestRecomendedApi('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    }
  }, [idReceita, locationPathName, request, requestRecomendedApi]);

  useEffect(() => {
    if (data && data[foodType] && recomendedData) {
      const maxRecomendedItems = 6;
      const dataKeys = Object.keys(data[foodType][0]);
      setIngredients(dataKeys.filter((key) => key.includes('strIngredient')));
      setMeasures(dataKeys.filter((key) => key.includes('strMeasure')));
      const onlySix = recomendedData[recomendedType].filter((_, index) => (
        index < maxRecomendedItems
      ));
      setRecomendedDrinks(onlySix);
    }
  }, [data, foodType, recomendedData, recomendedType]);

  if (!(data && data[foodType]) || !recomendedData) return <p>Loading...</p>;

  const items = { idReceita, type, data, foodType };

  return (
    <main>
      <img
        data-testid="recipe-photo"
        src={ data[foodType][0][`str${food}Thumb`] }
        alt={ data[foodType][0][`str${food}`] }
        width="100px"
        height="100px"
      />
      <h1 data-testid="recipe-title">{ data[foodType][0][`str${food}`] }</h1>
      <h4 data-testid="recipe-category">
        { data[foodType][0].strAlcoholic || data[foodType][0].strCategory }
      </h4>
      { ingredients.filter((value) => data[foodType][0][value] !== ' ')
        .filter((ingrediente) => data[foodType][0][ingrediente])
        .map((ingredient, index) => (
          <p
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { `${data[foodType][0][ingredient]} - ${
              data[foodType][0][measures[index]]}` }
          </p>
        )) }
      <span data-testid="instructions">{ data[foodType][0].strInstructions }</span>
      { data.meals && <iframe
        title={ data[foodType][0][`str${food}`] }
        data-testid="video"
        src={ `https://www.youtube.com/embed/${data[foodType][0].strYoutube.split('=')[1]}` }
        width="420"
        height="345"
      /> }
      <div className="div-scroll">
        {recomendedDrinks.map((recomended, index) => (
          <div
            data-testid={ `${index}-recomendation-card` }
            key={ index }
            style={ { width: '100px', height: '100px', margin: '10px 5px' } }
          >
            <img
              src={ recomended[`str${recomendedFood}Thumb`] }
              alt={ recomended[`str${recomendedFood}`] }
              width="90px"
              height="90px"
            />
            <h6>{ recomended.strCategory }</h6>
            <h3
              data-testid={ `${index}-recomendation-title` }
            >
              { recomended[`str${recomendedFood}`] }
            </h3>
          </div>
        ))}
      </div>
      <ShareButton />
      <FavoriteButton items={ items } />
      <StartButton
        page={ type }
        idReceita={ idReceita }
        storageType={ storageType }
      />
    </main>
  );
}
