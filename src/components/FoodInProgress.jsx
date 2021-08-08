import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Form, ThemeProvider } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import useLocalStorage from 'use-local-storage-state';
import _ from 'lodash';
import { fetchFood } from '../services/FoodAPI';
import CardsDrinks from './CardsDrinks';
import CardsFood from './CardsFood';
import ShareBtn from './ShareBtn';
import FavoriteBtn from './FavoriteBtn';
import { isRecipeDone } from '../services/RecipesLocalStorage';

export default function FoodInProgress({ type }) {
  const [local, setLocal] = useLocalStorage('inProgressRecipes', []);
  const [check, setCheck] = useState();
  const recipes = useSelector((state) => state.recipes);
  const food = recipes.cards;
  const dispatch = useDispatch();
  const { id } = useParams();
  const foodType = {
    meals: 'meals',
    drinks: 'cocktails',
  };
  const fd = foodType[type];

  useEffect(() => {
    const idObj = _.get(local, `${fd}.${id}`);
    if (!check && idObj.length) {
      setCheck(idObj);
    }
    if (check && check !== idObj) {
      const temp = _.cloneDeep(local);
      _.set(temp, `${fd}.${id}`, check);
      console.log(temp);
      setLocal(temp);
    }
  }, [check, local, id, fd, setLocal]);

  const handleCheckBox = (e) => {
    const { name, checked } = e.target;
    if (!check) {
      return setCheck([name]);
    }
    return checked
      ? setCheck([...check, name]) : setCheck([...check.filter((el) => el !== name)]);
  };

  useEffect(() => {
    dispatch(fetchFood({ id, type }));
  }, [id, type, dispatch]);

  function listIngredients(item) {
    const ingredient = Object.entries(item).filter(([key,
      value]) => key.includes('Ingredient') && value);

    return ingredient.map((el, i) => {
      const msr = item[`strMeasure${el[0].replace(/\D/g, '')}`];
      const innerText = msr ? `${el[1]} - ${msr || ''}` : `${el[1]}`;
      return (
        <div key={ el } data-testid={ `${i}-ingredient-step` }>
          <Form.Check
            name={ innerText }
            checked={ check ? check.includes(innerText) : false }
            onChange={ (e) => handleCheckBox(e) }
            className="mx-3"
            type="checkbox"
            id={ `default-${type}` }
            label={ innerText }
          />
        </div>

      );
    });
  }

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
        <ShareBtn />
        <FavoriteBtn />
        <p>{strAlcoholic}</p>
        <p data-testid="instructions">{strInstructions}</p>
        <p data-testid="recipe-category">
          Categoria:
          {strCategory}
        </p>
        <Form className="m-3">{listIngredients(food)}</Form>
        <h3 className="text-center">Recommended Cards</h3>

      </div>
      <div>
        { type === 'drinks' && (<CardsFood />)}
        {type === 'meals' && (<CardsDrinks />)}
      </div>

      <Button
        disabled={ isRecipeDone(id) }
        className="btnstart"
        type="button"
        data-testid="finish-recipe-btn"
      >
        Finalizar receita
      </Button>

    </main>
  );
}

FoodInProgress.propTypes = {
  type: propTypes.string.isRequired,
};
// const newObj = { ...check };
// const idObj = _.get(check, `${fd}.${id}`);

// if (checked) {
//   _.set(newObj, `${fd}.${id}`, [...idObj, name]);
//   setCheck(newObj);
// }
// if (!checked) {
//   _.set(newObj, `${fd}.${id}`, (idObj.filter((el) => el !== name)));
//   setCheck(newObj);
// }
