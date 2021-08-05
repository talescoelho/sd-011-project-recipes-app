import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMealDetail } from '../services/theMealAPI';
import { getDrinkRecomendations } from '../services/theCockTailAPI';
import shareIcon from '../images/shareIcon.svg';
import Recommendations from '../components/Recommendations';
import VerifyStart from '../components/VerifyStart';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const FoodDetails = (props) => {
  const [foodData, setfoodData] = useState({ strYoutube: '' });
  const [recomendedDrink, setRecomendedDrink] = useState([]);
  const [copy, setCopy] = useState(false);
  const favoriteRecipes = JSON.parse(
    localStorage.getItem('favoriteRecipes'),
  ) || [{ id: '' }];
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

  function shareLink() {
    setCopy(true);
    return navigator.clipboard.writeText(window.location.href);
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
        <button
          type="button"
          data-testid="share-btn"
          onClick={ () => shareLink() }
        >
          {copy ? (
            <span>Link copiado!</span>
          ) : (<img src={ shareIcon } alt="Compartilhar" />)}
        </button>
        <button type="button">
          <img
            src={ favoriteRecipes.some(
              (favorite) => favorite.id === id,
            ) ? blackHeartIcon : whiteHeartIcon }
            alt="Favorite"
            data-testid="favorite-btn"
          />
        </button>
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
      </section>
    );
  }

  return (
    <div>
      { foodData && renderDetails() }
      <VerifyStart id={ id } />
    </div>
  );
};

FoodDetails.propTypes = {
  match: PropTypes.shape(PropTypes.any).isRequired,
};

export default FoodDetails;
