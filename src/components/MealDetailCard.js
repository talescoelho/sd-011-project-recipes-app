import React, { useEffect, useState } from 'react';
import ButtonToProgress from './ButtonToProgress';
import ButtonShare from './ButtonShare';
import Recommended from './Recommended';
import RenderVideo from './RenderVideo';

function MealDetailCard() {
  const [mealDetail, setMealDetail] = useState([]);
  const [rec, setRec] = useState([]);
  const [data, setData] = useState([]);

  const path = window.location.pathname.split('/')[2];

  const foodToDetail = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  const foodRecomend = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  useEffect(() => {
    const getUrlMeal = async () => {
      const meal = await fetch(`${foodToDetail}${window.location.pathname
        .split('/')[2]}`);
      const response = meal.json().then((res) => setMealDetail(res.meals[0]));
      return response;
    };
    const getRecomend = async () => {
      const recomend = await fetch(`${foodRecomend}`);
      const resRecom = recomend.json().then((res) => setRec(res.meals));
      return resRecom;
    };

    getRecomend();
    getUrlMeal();
  }, [path]);

  const {
    idMeal,
    strArea,
    strCategory,
    strInstructions,
    strMeal,
    strMealThumb,
    strYoutube,
  } = mealDetail;

  console.log((rec.meals));
  console.log((idMeal));

  const objIngred = Object.entries(mealDetail).map((e) => {
    if (e[0].includes('strIngredient') && e[1] !== '') {
      return e[1];
    }
    return undefined;
  }).filter((i) => i !== undefined);

  const objMeasure = Object.entries(mealDetail).map((e) => {
    if (e[0].includes('strMeasure') && e[1] !== ' ') {
      return e[1];
    }
    return undefined;
  }).filter((i) => i !== undefined);

  const callData = () => {
    setData([mealDetail]);

    return data;
  };

  return (
    <div>
      <h3 data-testid="recipe-title">{strMeal}</h3>
      <img data-testid="recipe-photo" width="150px" src={ strMealThumb } alt="tumb" />
      <h4>{strArea}</h4>
      <h4 data-testid="recipe-category">{strCategory}</h4>
      <div style={ { display: 'flex', justifyContent: 'space-around' } }>
        <button type="button" data-testid="share-btn">Gostei</button>
        <ButtonShare path={ window.location.href } />
      </div>
      <table>
        <tbody>
          <tr>
            <td>
              { objIngred.map((e, i) => (
                <div
                  data-testid={ `${i + 1}-${e}-${objMeasure[i]}` }
                  key={ i }
                >
                  {objMeasure[i] !== undefined ? `${e} - ${objMeasure[i]}` : `${e}`}
                </div>
              )) }
            </td>
          </tr>
        </tbody>
      </table>
      <h6 data-testid="instructions">{strInstructions}</h6>
      { strYoutube
        && <RenderVideo
          src={ strYoutube }
          title={ `Recipe ${strMeal}` }
          id="video"
        />}
      <div>
        <Recommended value={ rec } type="meal" />
      </div>
      <ButtonToProgress data={ callData } />
    </div>
  );
}

export default MealDetailCard;
