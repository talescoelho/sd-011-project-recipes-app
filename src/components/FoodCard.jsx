import React, { useCallback, useEffect, useMemo } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import _ from 'lodash';
import getFood from '../services/SearchRecipe';

export default function FoodCard({ type }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const number = 12;
  const recipes = useSelector((state) => state.recipes);
  const { cards, formInfo, selectedCategory } = recipes;

  const redirect = useMemo(() => {
    const obj = {
      meals: 'comidas',
      drinks: 'bebidas',
    };
    return obj[type];
  }, [type]);

  useEffect(() => {
    const getCards = () => {
      if (!cards[type].length || formInfo || selectedCategory !== type) {
      // if (formInfo) {
        dispatch(getFood(formInfo, type));
      }
    };

    getCards();
  },

  [cards, dispatch, formInfo, selectedCategory, type]);

  const getId = useCallback(
    () => _.find(_.find(cards[type]), (v, k) => /id/i.test(k)), [cards, type],
  );

  useEffect(() => {
    if (cards[type].length === 1) {
      history.push(`/${redirect}/${getId()}`);
    }
  }, [cards, getId, history, redirect, type]);

  const cardsToRender = (cardsRender) => (
    cardsRender.map(({ idMeal, strMeal, strMealThumb,
      strCategory, strTags, idDrink, strDrink, strDrinkThumb, strAlcoholic,
    }, index) => (
      index < number ? (
        <Link
          to={ `/${redirect}/${idMeal || idDrink}` }
          key={ index }
        >
          <Card data-testid={ `${index}-recipe-card` }>
            <Card.Header>{strCategory}</Card.Header>
            <Card.Img
              variant="top"
              src={ strMealThumb || strDrinkThumb }
              data-testid={ `${index}-card-img` }
            />
            <Card.Body style={ { boxSizing: 'border-box' } }>
              <Card.Title data-testid={ `${index}-card-name` }>
                {strMeal
              || strDrink}
              </Card.Title>
              <Card.Text>{strTags || strAlcoholic}</Card.Text>
            </Card.Body>
            <Card.Footer />
          </Card>
        </Link>) : null)));

  const getCards = () => {
    if (cards) {
      return cardsToRender(cards[type]);
    }
  };

  return (
    <div className="food-cards">{getCards()}</div>
  );
}

FoodCard.propTypes = {
  type: propTypes.string.isRequired,
};
