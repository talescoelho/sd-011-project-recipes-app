import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import getFood from '../services/SearchRecipe';

export default function FoodCard({ type }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const number = 12;
  const recipes = useSelector((state) => state.recipes);
  const { cards, formInfo, selectedCategory } = recipes;

  const middle = {
    meals: 'comidas',
    drinks: 'bebidas',
  };

  useEffect(() => {
    const getCards = () => {
      if (!cards.length || formInfo || selectedCategory !== type) {
        dispatch(getFood(formInfo, type));
      }
    };

    getCards();
  },

  [formInfo, dispatch, type, cards.length, selectedCategory]);

  useEffect(() => {
    if (cards.length === 1) {
      const thinkTime = 1500;
      const route = {
        meals: 'comidas',
        drinks: 'bebidas',
      };
      setTimeout(() => {
        history.push(`/${route[type]}/${cards[0].idMeal || cards[0].idDrink}`);
      }, thinkTime);
    }
  }, [cards, history, type]);

  const cardsToRender = (cardsRender) => (
    cardsRender.map(({ idMeal, strMeal, strMealThumb,
      strCategory, strTags, idDrink, strDrink, strDrinkThumb, strAlcoholic,
    }, index) => (
      index < number ? (
        <Link
          to={ `/${middle[type]}/${idMeal || idDrink}` }
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
