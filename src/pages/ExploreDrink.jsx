import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const ExploreDrink = () => (
  <>
    <Link to="/explorar/bebidas/ingredientes">
      <Button
        type="submit"
        data-testid="explore-by-ingredient"
        variant="light"
        size="lg"
      >
        Por Ingredientes
      </Button>
    </Link>
    <Link to="/bebidas">
      <Button
        type="submit"
        data-testid="explore-surprise"
        variant="light"
        size="lg"
      >
        Me Surpreenda!
      </Button>
    </Link>
  </>
);

export default ExploreDrink;
