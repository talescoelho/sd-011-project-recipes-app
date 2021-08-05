import React, { useContext } from 'react';
import { useLocation } from 'react-router';
import { Card, ListGroup } from 'react-bootstrap';
import MyContext from '../context/MyContext';

function DetailIngredient() {
  const { foodIngredients } = useContext(MyContext);
  const { drinkIngredients } = useContext(MyContext);
  const { pathname } = useLocation();

  const numberOfVerification = -1;
  const getDrinksDetails = pathname.indexOf('bebidas') > numberOfVerification;

  return getDrinksDetails ? (
    <Card>
      <Card.Title>Ingredients</Card.Title>
      <ListGroup>
        {drinkIngredients.map((item, index) => (
          <ListGroup.Item
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {item}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  ) : (
    <Card>
      <Card.Title>Ingredients</Card.Title>
      <ListGroup>
        {foodIngredients.map((item, index) => (
          <ListGroup.Item
            key={ `${index}F` }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {item}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}

export default DetailIngredient;
