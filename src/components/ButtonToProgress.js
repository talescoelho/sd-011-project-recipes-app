import React, { useEffect, useState } from 'react';
import Proptypes from 'prop-types';
import { Redirect } from 'react-router-dom';

function ButtonToProgress({ data }) {
  const [toRedirect, setToRedirect] = useState(false);
  const [progress, setProgress] = useState(false);
  const [start, setStart] = useState(true);
  const path = window.location.pathname.split('/')[2];
  const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  useEffect(() => {
    if (inProgress === null) {
      return localStorage.setItem('inProgressRecipes', JSON.stringify({
        concktails: [],
        meals: [],
      }));
    }
    if (Object.keys(inProgress.cocktails).find((e) => (e === path))) {
      setProgress(true);
      setStart(false);
    }
    if (Object.keys(inProgress.meals).find((e) => (e === path))) {
      setProgress(true);
      setStart(false);
    }
    console.log('start antes', start);
    if (doneRecipes === null) {
      return localStorage.setItem('doneRecipes', JSON.stringify([{}]));
    }
    if (doneRecipes.find((e) => (e.id === parseInt(path, 10)))) {
      setStart(false);
    }
    console.log('start', start);
  }, [path, start]);

  const handleClick = () => setToRedirect(true);

  const startButton = () => {
    const btn = (
      <div>
        <button type="button" onClick={ handleClick }>
          Iniciar Receita
        </button>
        {
          toRedirect
            && <Redirect
              to={ `/comidas/${window.location.pathname.split('/')[2]}/in-progress` }
              data={ data }
            />
        }
      </div>
    );
    return btn;
  };

  const keepingButton = () => {
    const btn = (
      <div>
        <button type="button" onClick={ handleClick }>
          Continuar Receita
        </button>
        {
          toRedirect
            && <Redirect
              to={ `/comidas/${window.location.pathname.split('/')[2]}/in-progress` }
              data={ data }
            />
        }
      </div>
    );
    return btn;
  };

  return (
    <>
      { progress && keepingButton() }
      { start && startButton() }
    </>
  );
}

ButtonToProgress.propTypes = {
  data: Proptypes.arrayOf(Proptypes.object).isRequired,
};

export default ButtonToProgress;
