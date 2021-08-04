import React, { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import getFood from '../services/SearchRecipe';

export default function FoodCard({ type }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const number = 12;
  const recipes = useSelector((state) => state.recipes);
  const { cards, formInfo, selectedCategory } = recipes;

  const middle = type === 'meals' ? 'comidas' : 'bebidas';

  useEffect(() => {
    (() => (!cards.length ? dispatch(getFood(formInfo, type)) : null))();
  },
  [formInfo, dispatch, type, cards.length]);

  const cardsToRender = (cardsRender) => (
    cardsRender.map(({ idMeal, strMeal, strMealThumb,
      strCategory, strTags, idDrink, strDrink, strDrinkThumb, strAlcoholic,
    }, index) => (
      index < number ? (
        <Link
          to={ `/${middle}/${idMeal || idDrink}` }
          key={ index }
          data-testid={ `${index}-recipe-card` }
        >
          <Card>
            <Card.Header>{strCategory || selectedCategory}</Card.Header>
            <Card.Img
              variant="top"
              src={ strMealThumb || strDrinkThumb }
              data-testid={ `${index}-card-img` }
            />
            <Card.Body>
              <Card.Title data-testid={ `${index}-card-name` }>
                {strMeal
              || strDrink}
              </Card.Title>
              <Card.Text>{strTags || strAlcoholic}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                className="card-button"
                onClick={ () => history.push(`/${middle}/${idMeal || idDrink}`) }
                variant="primary"
              >
                Ver receita
              </Button>
            </Card.Footer>
          </Card>
        </Link>) : null)));

  const getCards = () => {
    if (cards) {
      return cardsToRender(cards);
    }
  };

  return <div className="food-cards">{getCards()}</div>;
}

FoodCard.propTypes = {
  type: propTypes.string.isRequired,
};
