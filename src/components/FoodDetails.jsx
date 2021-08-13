import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFood } from '../services/FoodAPI';
import CardsDrinks from './CardsDrinks';
import CardsFood from './CardsFood';
import {
  showRecipe,
  isRecipeInProgress,
} from '../services/RecipesLocalStorage';
import ShareBtn from './ShareBtn';
import FavoriteBtn from './FavoriteBtn';
import ShowFrame from './foodDetailsPage/ShowFrame';
import TravelButtons from './Buttons/TravelButtons';

export default function FoodDetails({ type }) {
  const recipes = useSelector((state) => state.recipes);
  const { singleFood } = recipes;
  const dispatch = useDispatch();
  const { id } = useParams();
  const lStFoods = {
    drinks: 'cocktails',
    meals: 'meals',
  };

  const fd = lStFoods[type];

  useEffect(() => {
    dispatch(fetchFood({ id, type }));
  }, [id, type, dispatch]);

  function listIngredients(item) {
    const ingredient = Object.entries(item).filter(([key,
      value]) => key.includes('Ingredient') && value);

    return ingredient.map((el, i) => {
      const msr = item[`strMeasure${el[0].replace(/\D/g, '')}`];

      return (
        <li
          data-testid={ `${i}-ingredient-name-and-measure` }
          key={ `${i}-ingrname-id` }
        >
          {msr ? `${el[1]} - ${msr || ''}` : `${el[1]}`}
        </li>);
    });
  }

  const buttonName = () => (
    isRecipeInProgress({ id, fd }) ? 'Continuar Receita' : 'Iniciar Receita');

  if (singleFood) {
    const { strMealThumb, strDrinkThumb,
      strDrink, strMeal, strInstructions, strCategory, strAlcoholic } = singleFood;

    const path = {
      meals: `/comidas/${id}/in-progress`,
      drinks: `/bebidas/${id}/in-progress`,
    };

    return (

      <main className="food-details">
        <TravelButtons>
          <div data-testid="0-recipe-card">
            <img
              className="imgreceita"
              data-testid="recipe-photo"
              src={ strMealThumb || strDrinkThumb }
              alt="img"
            />
            <h1 data-testid="recipe-title">{strMeal || strDrink}</h1>
            <ShareBtn />
            <FavoriteBtn />
            <p data-testid="recipe-category">{strAlcoholic}</p>
            <p data-testid="instructions">{strInstructions}</p>
            <p data-testid="recipe-category">
              Categoria:
              {strCategory}
            </p>
            <ul>
              {listIngredients(singleFood)}
            </ul>
            <h2>Recommended Cards</h2>
            {type === 'meals' && ShowFrame(singleFood)}
          </div>
          <div>
            { type === 'drinks' && (<CardsFood />)}
            {type === 'meals' && (<CardsDrinks />)}
          </div>
          {showRecipe(id) ? (
            <Link
              to={ path[type] }
              className="btnstart btn btn-primary"
              type="button"
              data-testid="start-recipe-btn"
            >
              {buttonName()}
            </Link>
          ) : ('') }
        </TravelButtons>
      </main>

    );
  }
  return 'Loading...';
}

FoodDetails.propTypes = {
  type: propTypes.string.isRequired,
};
