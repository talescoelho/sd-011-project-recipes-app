import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';

function ButtonToProgress() {
  const [toRedirect, setToRedirect] = useState(false);

  const handleClick = () => setToRedirect(true);

  return (
    <div>
      <button type="button" onClick={ handleClick }>
        Iniciar Receita
      </button>
      {
        toRedirect
          && <Redirect
            to={ `/comidas/${window.location.pathname.split('/')[2]}/in-progress` }
          />
      }
    </div>
  );
}

export default ButtonToProgress;

ButtonToProgress.propTypes = {
  data: PropTypes.object,
}.isRequired;
