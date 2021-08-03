import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import FoodSurprise from '../services/FoodSurprise';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreDrink() {
  const history = useHistory();

  const handleClickDrink = async () => {
    const foodAleatory = await FoodSurprise('drinks');

    const { idDrink } = foodAleatory[0];

    history.push(`/bebidas/${idDrink}`);
  };

  return (
    <main>
      <Header />
      <Form>
        <Form.Group>
          <Button
            data-testid="explore-by-ingredient"
            onClick={ handleClickDrink }
          >
            Por Ingredientes
          </Button>
          <Button
            data-testid="explore-surprise"
            onClick={ handleClickDrink }
          >
            Me Surpeenda!
          </Button>
        </Form.Group>
      </Form>
      <Footer />
    </main>

  );
}

export default ExploreDrink;
