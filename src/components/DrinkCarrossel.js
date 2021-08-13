import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function DrinkCarrossel({ recomendation }) {
  const history = useHistory();
  const [recomendations, setRecomendations] = useState();

  useEffect(() => {
    setRecomendations(recomendation);
    console.log(recomendation);
  }, [recomendation]);

  function imgClickHandler(id) {
    history.push(`/comidas/${id}`);
    window.location.reload();
  }

  function renderDrinkCarrossel() {
    return (
      <div>
        <h3>Recomendações:</h3>
        <div className="container-carrossel">
          { recomendations ? recomendations
            .map((item, index) => (
              <button
                data-testid={ `${index}-recomendation-card` }
                key={ index }
                type="button"
                onClick={ () => imgClickHandler(item.idMeal) }
              >
                <img
                  alt="logo"
                  src={ item.strMealThumb }
                  width="140px"
                />
                <h3 data-testid={ `${index}-recomendation-title` }>{item.strMeal}</h3>
              </button>
            )) : 'loading'}
        </div>
      </div>
    );
  }

  return (
    recomendation ? renderDrinkCarrossel() : 'loading...'
  );
}

export default DrinkCarrossel;
