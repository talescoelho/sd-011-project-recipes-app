import React from 'react';
import { useHistory } from 'react-router-dom';

function ByIngredient() {
  const history = useHistory();
  const path = window.location.pathname.split('/')[2];
  return (
    <button
      type="button"
      onClick={ () => history.push(`/explorar/${path}/ingredientes`) }
    >
      Por ingredients
    </button>
  );
}

export default ByIngredient;
