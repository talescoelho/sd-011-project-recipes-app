import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function ButtonToProgress({data}) {
  const [toRedirect, setToRedirect] = useState(false);

  const handleClick = () => {
    return setToRedirect(true);
  }

  return (
    <div>
      <button type="button" onClick={ handleClick }>
        Iniciar Receita
      </button>
      {
        toRedirect &&
          <Redirect 
            to={`/comidas/${window.location.pathname.split("/")[2]}/in-progress`}
            data={ data }
          />
      }
    </div>
  );
}

export default ButtonToProgress;
