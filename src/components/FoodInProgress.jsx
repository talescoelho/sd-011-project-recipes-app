import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import useLocalStorage from 'use-local-storage-state';
import _ from 'lodash';
import { fetchFood } from '../services/FoodAPI';
import CardsDrinks from './CardsDrinks';
import CardsFood from './CardsFood';
import ShareBtn from './ShareBtn';
import FavoriteBtn from './FavoriteBtn';

export default function FoodInProgress({ type }) {
  const history = useHistory();
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
  const [local, setLocal] = useLocalStorage('inProgressRecipes', { [fd]: { [id]: [] } });

  const ingredientList = Object.entries(food).filter(([key,
    value]) => value && key.match(/Ingredient/));

  useEffect(() => {
    const idObj = _.get(local, `${fd}.${id}`);

    if (!idObj) {
      const newLocal = _.set({ ...local }, `${fd}.${id}`, []);
      setLocal(newLocal);
      console.log('vrau');
    }

    if (!check && idObj && idObj.length) {
      setCheck(idObj);
    }

    if (check && check !== idObj) {
      const temp = _.cloneDeep(local);
      _.set(temp, `${fd}.${id}`, check);
      setLocal(temp);
    }
  }, [check, local, id, fd, setLocal]);

  const handleCheckBox = (e) => {
    document.querySelectorAll('input[type=checkbox]')[0].scrollIntoView();
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
      const innertext = msr ? `${el[1]} - ${msr || ''}` : `${el[1]}`;
      const checkstatus = () => check && check.includes(innertext);
      const styleObj = { textDecoration: checkstatus() ? 'line-through' : 'none' };
      return (
        <div
          key={ el }
          data-testid={ `${i}-ingredient-step` }
        >
          <label
            htmlFor={ `ingredient${i}` }
            style={ styleObj }
          >
            <input
              id={ `ingredient${i}` }
              type="checkbox"
              name={ innertext }
              checked={ check ? check.includes(innertext) : false }
              onChange={ (e) => handleCheckBox(e) }
              className="mx-3"
            />
            {innertext}
          </label>
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
        <ShareBtn type="inProgress" />
        <FavoriteBtn />
        <Form className="m-3">{listIngredients(food)}</Form>
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
        disabled={ !(check && check.length === ingredientList.length) }
        className="btnstart"
        type="button"
        data-testid="finish-recipe-btn"
        onClick={ () => history.push('/receitas-feitas') }
      >
        Finalizar receita
      </Button>

    </main>
  );
}

FoodInProgress.propTypes = {
  type: propTypes.string.isRequired,
};
