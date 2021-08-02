import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const ExploreFood = () => (
  <>
    <Link to="/comidas">
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
        data-testid="explore-by-area"
        variant="light"
        size="lg"
      >
        Por Local de Origem
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

export default ExploreFood;
