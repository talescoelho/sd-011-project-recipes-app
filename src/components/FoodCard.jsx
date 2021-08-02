import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import getFood from '../services/SearchRecipe';

export default function FoodCard() {
  const [name, setName] = useState();
  const [foodList, setFoodList] = useState();
  const history = useHistory();
  const recipes = useSelector((state) => state.recipes);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const sendUserName = () => {
    dispatch({ type: 'SEND_USER_INFO', payload: name });
  };

  const { data, formInfo } = recipes;

  useEffect(() => {
    (async () => {
      const food = formInfo && (await getFood(formInfo));
      setFoodList(food);
    })();
  }, [formInfo]);

  const getCards = () => {
    if (foodList) {
      return foodList.map((item, index) => {
        const { idMeal, strMeal, strMealThumb } = item;
        return (
          <Card key={ index }>
            <Card.Img variant="top" src={ strMealThumb } />
            <Card.Body>
              <Card.Title>{strMeal}</Card.Title>
              <Button
                onClick={ () => history.push(`/comidas/${idMeal}`) }
                variant="primary"
              >
                Ver receita
              </Button>
            </Card.Body>
          </Card>
        );
      });
    }
  };

  return (
    <div>
      <input type="text" onChange={ (e) => setName(e.target.value) } />
      <Button onClick={ sendUserName }>CLIQUE AQUI</Button>
      {getCards()}
    </div>);
}
