import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { apiDetailsId } from '../service/apiDetailsId';
import RecomendationDrink from '../components/Detail/RecomendationDrink';
import RecomendationMeal from '../components/Detail/RecomendationMeal';

function RecipesId({ match }) {
  const { params, path } = match;
  const { id } = params;
  const typeDrinkorMeal = path.split('/')[1];
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
    video: '',
    update: true,
  });

  const { title, imgThumb, category,
    instructions, video, update, ingredient } = detail;

  function getReduxMealsOrDrinks() {
    if (drinks !== undefined) {
      const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strInstructions, strVideo,
        strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5,
        strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5 } = drinks[0];
      setDetail({
        idItem: idDrink,
        title: strDrink,
        imgThumb: strDrinkThumb,
        category: strAlcoholic,
        instructions: strInstructions,
        video: strVideo,
        ingredient: [
          `${strIngredient1} ${strMeasure1}`, `${strIngredient2} ${strMeasure2}`,
          `${strIngredient3} ${strMeasure3}`, `${strIngredient4} ${strMeasure4}`,
          `${strIngredient5} ${strMeasure5}`],
        update: false,
      });
    }
    if (meals !== undefined) {
      const { idMeal, strMeal, strMealThumb, strCategory, strInstructions, strYoutube,
        strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5,
        strIngredient6, strIngredient7, strIngredient8, strMeasure1, strMeasure2,
        strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7,
        strMeasure8 } = meals[0];
      setDetail({
        idItem: idMeal,
        title: strMeal,
        imgThumb: strMealThumb,
        category: strCategory,
        instructions: strInstructions,
        ingredient: [
          `${strIngredient1} ${strMeasure1}`, `${strIngredient2} ${strMeasure2}`,
          `${strIngredient3} ${strMeasure3}`, `${strIngredient4} ${strMeasure4}`,
          `${strIngredient5} ${strMeasure5}`, `${strIngredient6} ${strMeasure6}`,
          `${strIngredient7} ${strMeasure7}`, `${strIngredient8} ${strMeasure8}`],
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
      dispatch(await apiDetailsId(
        typeDrinkorMeal === 'comidas' ? 'meals' : 'drinks', id,
      ));
    }
    getApi();
  }, [dispatch, id, typeDrinkorMeal]);

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
      { typeDrinkorMeal === 'comidas'
        ? <RecomendationDrink recomendInverse="meals" />
        : <RecomendationMeal recomendInverse="drinks" /> }
      <button type="button" data-testid="start-recipe-btn">Iniciar</button>
    </div>
  );
}

export default RecipesId;

RecipesId.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
