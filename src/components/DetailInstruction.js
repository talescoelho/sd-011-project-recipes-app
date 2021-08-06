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
    <Card style={ { padding: '10px' } }>
      <Card.Title>Instructions</Card.Title>
      <Card.Text data-testid="instructions">{drinkDetails.strInstructions}</Card.Text>
    </Card>
  ) : (
    <Card style={ { padding: '10px' } }>
      <Card.Title>Instructions</Card.Title>
      <Card.Text data-testid="instructions">{foodDetails.strInstructions}</Card.Text>
    </Card>
  );
}

export default DetailInstruction;
