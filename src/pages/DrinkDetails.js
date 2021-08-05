import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getDrinkDetail } from '../services/theCockTailAPI';
import { getMealRecomendations } from '../services/theMealAPI';
import Recommendations from '../components/Recommendations';
import VerifyStart from '../components/VerifyStart';
import ShareButton from '../components/ShareButton';
import FavoriteButton from '../components/FavoriteButton';

const DrinkDetails = (props) => {
  const [drinkData, setdrinkData] = useState([]);
  const [recomendedFood, setRecomendedFood] = useState([]);
  const { match: { params: { id } } } = props;

  const maxResult = 6;

  useEffect(() => {
    const getDataDrinkDetail = async () => {
      const data = await getDrinkDetail(id);
      setdrinkData(...data);
    };
    getDataDrinkDetail();
  }, [id]);

  useEffect(() => {
    const fetchRecomended = async () => {
      const recomendedArray = await getMealRecomendations();
      setRecomendedFood(recomendedArray);
    };
    fetchRecomended();
  }, []);

  const {
    strDrink,
    strDrinkThumb,
    strCategory,
    strInstructions,
    strAlcoholic,
  } = drinkData;
  const maxIngredients = 20;

  function listIngredients() {
    const list = [];
    for (let index = 1; index <= maxIngredients; index += 1) {
      if (drinkData[`strIngredient${index}`]) {
        list.push(
          `${drinkData[`strIngredient${index}`]} - ${drinkData[`strMeasure${index}`]}`,
        );
      }
    }
    return list;
  }

  function renderDetails() {
    return (
      <section>
        <img data-testid="recipe-photo" src={ strDrinkThumb } alt={ strDrink } />
        <h2 data-testid="recipe-title">{ strDrink }</h2>
        <ShareButton link={ window.location.href } />
        <FavoriteButton recipeData={ drinkData } type="bebida" />
        <h4 data-testid="recipe-category">{ `${strCategory} | ${strAlcoholic}` }</h4>
        <ol>

          {
            listIngredients().map((ingredient, index) => (
              <li
                key={ index }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                { `${ingredient}` }
              </li>
            ))
          }
        </ol>
        <p data-testid="instructions">{strInstructions}</p>
        <Recommendations recommendations={ recomendedFood.slice(0, maxResult) } />
        <VerifyStart id={ id } />
      </section>
    );
  }

  return (
    <div>{ drinkData && renderDetails() }</div>
  );
};

DrinkDetails.propTypes = {
  match: PropTypes.shape(PropTypes.any).isRequired,
};

export default DrinkDetails;
