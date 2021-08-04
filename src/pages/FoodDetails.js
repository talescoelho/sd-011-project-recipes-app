import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMealDetail } from '../services/theMealAPI';
import { getDrinkRecomendations } from '../services/theCockTailAPI';
import Recommendations from '../components/Recommendations';

const FoodDetails = (props) => {
  const [foodData, setfoodData] = useState({ strYoutube: '' });
  const [recomendedDrink, setRecomendedDrink] = useState([]);
  const { match: { params: { id } } } = props;

  const maxResult = 6;

  useEffect(() => {
    const getFoodDetail = async () => {
      const data = await getMealDetail(id);
      setfoodData(...data);
    };
    getFoodDetail();
  }, [id]);

  useEffect(() => {
    const fetchRecomended = async () => {
      const recomendedArray = await getDrinkRecomendations();
      setRecomendedDrink(recomendedArray);
      console.log(recomendedArray);
    };
    fetchRecomended();
  }, []);

  const {
    strMeal,
    strMealThumb,
    strCategory,
    strInstructions,
    strYoutube,
  } = foodData;
  const maxIngredients = 20;

  function listIngredients() {
    const list = [];
    for (let index = 1; index <= maxIngredients; index += 1) {
      if (foodData[`strIngredient${index}`]) {
        list.push(
          `${foodData[`strIngredient${index}`]} - ${foodData[`strMeasure${index}`]}`,
        );
      }
    }
    return list;
  }

  function getVideoTag() {
    const index = 32;
    const videoStr = strYoutube.slice(index);
    return videoStr;
  }

  function renderDetails() {
    return (
      <section>
        <img data-testid="recipe-photo" src={ strMealThumb } alt={ strMeal } />
        <h2 data-testid="recipe-title">{ strMeal }</h2>
        <button type="button" data-testid="share-btn">Compartilhar</button>
        <button type="button" data-testid="favorite-btn">Favoritar</button>
        <h4 data-testid="recipe-category">{ strCategory }</h4>
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
        <iframe
          width="560"
          height="315"
          src={ `https://www.youtube.com/embed/${getVideoTag()}` }
          title="YouTube video player"
          frameBorder="0"
          data-testid="video"
          allow="accelerometer;
          autoplay; clipboard-write;
          encrypted-media; gyroscope;
          picture-in-picture"
          allowFullScreen
        />
        <Recommendations recommendations={ recomendedDrink.slice(0, maxResult) } />
        <button
          className="start-btn"
          type="button"
          data-testid="start-recipe-btn"
        >
          Iniciar Receita

        </button>
      </section>
    );
  }

  return (
    <div>{ foodData && renderDetails() }</div>
  );
};

FoodDetails.propTypes = {
  match: PropTypes.shape(PropTypes.any).isRequired,
};

export default FoodDetails;
