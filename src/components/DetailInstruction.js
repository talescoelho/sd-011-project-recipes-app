import React, { useContext } from 'react';
import { useLocation } from 'react-router';
import { Card } from 'react-bootstrap';
import MyContext from '../context/MyContext';

function DetailInstruction() {
  const { drinkDetails } = useContext(MyContext);
  const { foodDetails } = useContext(MyContext);

  const { pathname } = useLocation();

  const numberOfVerification = -1;
  const getDrinksDetails = pathname.indexOf('bebidas') > numberOfVerification;

  return getDrinksDetails ? (
    <Card style={ { width: '18rem' } }>
      <Card.Title>Instructions</Card.Title>
      <Card.Text data-testid="instructions">{drinkDetails.strInstructions}</Card.Text>
    </Card>
  ) : (
    <Card>
      <Card.Title>Instructions</Card.Title>
      <p data-testid="instructions">{foodDetails.strInstructions}</p>
    </Card>
  );
}

export default DetailInstruction;
