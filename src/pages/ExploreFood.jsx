import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import FoodSurprise from '../services/FoodSurprise';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreFood() {
  const history = useHistory();

  const handleClickMeal = async () => {
    const foodAleatory = await FoodSurprise('meals');

    const { idMeal } = foodAleatory[0];

    history.push(`/comidas/${idMeal}`);
  };

  return (
    <main>

      <Header />
      <Form>
        <Form.Group>
          <Button
            data-testid="explore-by-ingredient"
            onClick={ () => {
              history.push('/explorar/comidas/ingredientes');
            } }
          >
            Por Ingredientes
          </Button>
          <Button
            data-testid="explore-by-area"
            onClick={ () => {
              history.push('/explorar/comidas/area');
            } }
          >
            Por Local de Origem
          </Button>
          <Button
            data-testid="explore-surprise"
            onClick={ handleClickMeal }
          >
            Me Surpreenda!
          </Button>
        </Form.Group>
      </Form>
      <Footer />
    </main>
  );
}

export default ExploreFood;
