import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useParams, useLocation } from 'react-router-dom';

function StartButton() {
  const history = useHistory();
  const { id } = useParams();
  const { pathname } = useLocation();

  const numberOfVerification = -1;
  const getDrinksDetails = pathname.indexOf('bebidas') > numberOfVerification;

  return getDrinksDetails ? (
    <Button
      style={ {
        position: 'fixed',
        bottom: '0',
        width: '100%',
        fontWeight: '700',
      } }
      variant="success"
      data-testid="start-recipe-btn"
      onClick={ () => history.push(`/bebidas/${id}/in-progress`) }
    >
      Iniciar Receita
    </Button>
  )
    : (
      <Button
        style={ {
          position: 'fixed',
          bottom: '0',
          width: '100%',
          fontWeight: '700',
        } }
        variant="success"
        data-testid="start-recipe-btn"
        onClick={ () => history.push(`/comidas/${id}/in-progress`) }
      >
        Iniciar Receita
      </Button>
    );
}

export default StartButton;
