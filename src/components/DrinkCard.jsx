import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import getFood from '../services/SearchRecipe';
import { getFoodCard } from '../Redux/actions/index';

export default function DrinkCard() {
  const history = useHistory();
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const { cards, formInfo } = recipes;

  useEffect(() => {
    (async () => {
      const drink = await getFood(formInfo, 'drinks');
      dispatch(getFoodCard(drink));
    })();
  }, [formInfo]);

  const getCards = () => {
    if (cards) {
      return cards.map((item, index) => {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strCategory } = item;
        return (
          <Card key={ index } data-testid={ `${index}-recipe-card` }>
            <Card.Header>{strCategory}</Card.Header>
            <Card.Img
              variant="top"
              src={ strDrinkThumb }
              data-testid={ `${index}-card-img` }
            />
            <Card.Body>
              <Card.Title data-testid={ `${index}-card-name` }>{strDrink}</Card.Title>
              <Card.Text>{strAlcoholic}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                className="card-button "
                onClick={ () => history.push(`/bebidas/${idDrink}`) }
                variant="primary"
              >
                Ver receita
              </Button>
            </Card.Footer>
          </Card>
        );
      });
    }
  };

  return (
    <div className="food-cards">{getCards()}</div>
  );
}
