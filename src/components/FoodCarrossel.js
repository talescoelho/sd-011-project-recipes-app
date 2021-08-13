import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function FoodCarrossel({ recomendation }) {
  const history = useHistory();
  const [recomendations, setRecomendations] = useState();
  const [showRecomendations, setShowRecomendations] = useState();
  const [startPosition, setStartPosition] = useState(2);

  useEffect(() => {
    setRecomendations(recomendation);
    if (recomendation) {
      setShowRecomendations([recomendation[0].strMeal, recomendation[1].strMeal]);
      console.log(recomendation.length)
    }
  }, [recomendation]);

  function imgClickHandler(id) {
    history.push(`/comidas/${id}`);
    window.location.reload();
  }

  function nextImg() {
    const disney = 3;
    setStartPosition(startPosition + 2);
    if (startPosition >= disney) setStartPosition(0);
    setShowRecomendations([recomendation[startPosition].strMeal, recomendation[startPosition + 1].strMeal]);
    console.log('cliquei no mais')
  }

  function renderMealCarrossel() {
    return (
      <div className="container-carrossel">
        { recomendations ? recomendations
          .map((item, index) => (
            <div key={ index } className="carrossel-item">
              <button
                className={ showRecomendations.some((item2) => item2 === item.strMeal) ? 'showImgCarrossel' : 'hideImgCarrossel' }
                type="button"
                onClick={ () => imgClickHandler(item.idMeal) }
              >
                <img alt="logo" src={ item.strMealThumb } width="100px" data-testid={ `${index}-recomendation-card` } />
              </button>
            </div>
          )) : 'loading'}
        <div className="button-foward">
          <button type="button" onClick={ nextImg }>
            {'>'}
          </button>
        </div>
      </div>
    );
  }

  return (
    recomendation ? renderMealCarrossel() : 'loading...'
  );
}

export default FoodCarrossel;
