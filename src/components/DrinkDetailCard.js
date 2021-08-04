import React, { useEffect, useState } from 'react';
import ButtonToProgress from './ButtonToProgress';
import Recommended from './Recommended';
import RenderVideo from './RenderVideo';

function DrinkDetailCard() {
  const [drinkDetail, setDrinkDetail] = useState([]);
  const [rec, setRec] = useState([]);
  const [data, setData] = useState([]);

  const path = window.location.pathname.split('/')[2];

  const drinkToDetail = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
  const drinkRecommend = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  useEffect(() => {
    const getUrlDrink = async () => {
      const drink = await fetch(`${drinkToDetail}${window.location.pathname
        .split('/')[2]}`);
      const response = drink.json().then((res) => setDrinkDetail(res.drinks[0]));
      return response;
    };
    const getRecomend = async () => {
      const recomend = await fetch(`${drinkRecommend}`);
      const resRecom = recomend.json().then((res) => setRec(res.drinks));
      return resRecom;
    };

    getRecomend();
    getUrlDrink();
  }, [path]);

  const {
    idDrink,
    strAlcoholic,
    strCategory,
    strInstructions,
    strDrink,
    strDrinkThumb,
    strYoutube,
  } = drinkDetail;

  console.log(idDrink);

  const objIngred = Object.entries(drinkDetail).map((e) => {
    if (e[0].includes('strIngredient') && (e[1] !== null)) {
      return e[1];
    }
    return undefined;
  }).filter((i) => i !== undefined);

  const objMeasure = Object.entries(drinkDetail).map((e) => {
    if (e[0].includes('strMeasure') && (e[1] !== null)) {
      return e[1];
    }
    return undefined;
  }).filter((i) => i !== undefined);

  const callData = () => {
    setData([drinkDetail]);

    return data;
  };

  return (
    <div>
      <h3 data-testid="recipe-title">{strDrink}</h3>
      <img data-testid="recipe-photo" width="150px" src={ strDrinkThumb } alt="tumb" />
      <h4 data-testid="recipe-category">{strCategory}</h4>
      <p>{strAlcoholic}</p>
      <div style={ { display: 'flex', justifyContent: 'space-around' } }>
        <button type="button" data-testid="share-btn">Gostei</button>
        <button type="button" data-testid="share-btn">Share</button>
      </div>
      <table>
        <tbody>
          <tr>
            <td>
              { objIngred.map((e, i) => {
                if (e !== null) {
                  return (
                    <div
                      data-testid={ `${i + 1}-${e}-${objMeasure[i]}` }
                      key={ i }
                    >
                      {objMeasure[i] !== undefined ? `${e} - ${objMeasure[i]}` : `${e}`}
                    </div>
                  );
                }
                return undefined;
              }) }
            </td>
          </tr>
        </tbody>
      </table>
      <h6>{strInstructions}</h6>
      { strYoutube
        && <RenderVideo
          src={ strYoutube }
          title={ `Recipe ${strDrink}` }
          id="video"
        />}
      <div>
        <Recommended value={ rec } type="drink" />
      </div>
      <ButtonToProgress data={ callData } />
    </div>
  );
}

export default DrinkDetailCard;
