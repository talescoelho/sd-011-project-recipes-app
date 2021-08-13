import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import useLocalStorage from 'use-local-storage-state';
import _ from 'lodash';
import produce from 'immer';
import { fetchFood } from '../services/FoodAPI';
import CardsDrinks from './CardsDrinks';
import CardsFood from './CardsFood';
import ShareBtn from './ShareBtn';
import FavoriteBtn from './FavoriteBtn';
import { addDoneRecipe } from '../services/RecipesLocalStorage';
import IngredientChecklist from './FoodInProgress/IngredientChecklist';

export default function FoodInProgress({ type }) {
  const history = useHistory();
  const recipes = useSelector((state) => state.recipes);
  const food = recipes.singleFood;
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchFood({ id, type }));
  }, [id, type, dispatch]);

  const handleDoneRecipe = () => {
    addDoneRecipe({ item: food });
    history.push('/receitas-feitas');
  };

  if (food) {
    const { strMealThumb, strDrinkThumb,
      strDrink, strMeal, strInstructions, strCategory, strAlcoholic } = food;
    return (
      <main className="food-details">
        <div>
          <img
            className="imgreceita"
            data-testid="recipe-photo"
            src={ strMealThumb || strDrinkThumb }
            alt="img"
          />
          <h1 data-testid="recipe-title">{strMeal || strDrink}</h1>
          <ShareBtn type="inProgress" />
          <FavoriteBtn />
          <IngredientChecklist />
          <p>{strAlcoholic}</p>
          <p data-testid="instructions">{strInstructions}</p>
          <p data-testid="recipe-category">
            Categoria:
            {strCategory}
          </p>
          <h3 className="text-center">Recommended Cards</h3>
        </div>
        <div>
          { type === 'drinks' && (<CardsFood />)}
          {type === 'meals' && (<CardsDrinks />)}
        </div>

        <Button
          // disabled={ !(check && check.length === ingredientList.length) }
          className="btnstart"
          type="button"
          data-testid="finish-recipe-btn"
          onClick={ handleDoneRecipe }
        >
          Finalizar receita
        </Button>

      </main>
    );
  }
  return (
    <div className="loading">Loading&#8230;</div>);
}
FoodInProgress.propTypes = {
  type: propTypes.string.isRequired,
};
