import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import apiDetailsId from '../service/apiDetailsId';

function RecipesId({ match: { params: { id } } }) {
  const dispatch = useDispatch();
  const { dataApi } = useSelector(({ detailsId }) => detailsId);
  const { drinks } = dataApi;
  const { meals } = dataApi;

  const [detail, setDetail] = useState({
    idItem: 0,
    title: '',
    imgThumb: '',
    category: '',
    instructions: '',
    instructionsIT: '',
    ingredient: [],
    recomendation: [],
    video: '',
    update: true,
  });

  const { idItem, title, imgThumb, category,
    instructions, video, update, ingredient, recomendation } = detail;

  function getReduxMealsOrDrinks() {
    if (drinks !== undefined) {
      const { idDrink, strDrink, strDrinkThumb,
        strCategory, strInstructions, strVideo,
        strIngredient1, strIngredient2,
        strIngredient3, strIngredient4, strIngredient5,
        strIngredient6, strIngredient7,
        strMeasure1, strMeasure2,
        strMeasure3, strMeasure4,
        strMeasure5 } = drinks[0];
      setDetail({
        idItem: idDrink,
        title: strDrink,
        imgThumb: strDrinkThumb,
        category: strCategory,
        instructions: strInstructions,
        video: strVideo,
        ingredient: [strIngredient1, strIngredient2,
          strIngredient3, strIngredient4, strIngredient5,
          strIngredient6, strIngredient7],
        recomendation: [strMeasure1, strMeasure2,
          strMeasure3, strMeasure4,
          strMeasure5],
        update: false,
      });
    }
    if (meals !== undefined) {
      const { idMeal, strMeal, strMealThumb,
        strCategory, strInstructions, strYoutube,
        strIngredient1, strIngredient2,
        strIngredient3, strIngredient4, strIngredient5,
        strIngredient6, strIngredient7,
        strMeasure1, strMeasure2,
        strMeasure3, strMeasure4,
        strMeasure5 } = meals[0];
      setDetail({
        idItem: idMeal,
        title: strMeal,
        imgThumb: strMealThumb,
        category: strCategory,
        instructions: strInstructions,
        ingredient: [strIngredient1, strIngredient2,
          strIngredient3, strIngredient4, strIngredient5,
          strIngredient6, strIngredient7],
        recomendation: [strMeasure1, strMeasure2,
          strMeasure3, strMeasure4,
          strMeasure5],
        video: strYoutube,
        update: false,
      });
    }
  }

  if (update === true) {
    getReduxMealsOrDrinks();
  }

  useEffect(() => {
    async function getApi() {
      dispatch(await apiDetailsId('drink', id));
    }
    getApi();
  }, [dispatch, id]);

  return (
    <div>
      <img data-testid="recipe-photo" src={ imgThumb } alt={ title } />
      <h1 data-testid="recipe-title">{ title }</h1>
      <button data-testid="share-btn" type="button">Compartilhar</button>
      <button data-testid="favorite-btn" type="button">Favorito</button>
      <span data-testid="recipe-category">{ category }</span>
      { ingredient.map((item, index) => (
        <span
          data-testid={ `${index}-ingredient-name-and-measure` }
          key={ index }
        >
          { item }
        </span>
      )) }

      <span data-testid="instructions">{ instructions }</span>
      { video && <div data-testid="video">{ video }</div> }
      <div data-testid={ `${idItem}-recomendation-card` }>Recomendações</div>
      { recomendation.map((item, index) => (
        <span
          data-testid={ `${index}-recomendation-card` }
          key={ index }
        >
          { item }
        </span>
      )) }
      <button type="button" data-testid="start-recipe-btn">Iniciar</button>
    </div>
  );
}

export default RecipesId;

RecipesId.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
