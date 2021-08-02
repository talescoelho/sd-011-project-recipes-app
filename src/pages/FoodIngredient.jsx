import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const FoodIngredient = () => (
  <>
    <Link to="/explorar/comidas">
      <Button
        type="submit"
        data-testid="explore-food"
        variant="light"
        size="lg"
      >
        Explorar Comidas
      </Button>
    </Link>
    <Link to="/explorar/bebidas">
      <Button
        type="submit"
        data-testid="explore-drinks"
        variant="light"
        size="lg"
      >
        Explorar Bebidas
      </Button>
    </Link>
  </>
);
export default FoodIngredient;
