import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Foods, Cocktails } from '../services';

const six = 6;
export default function Recommendations({ type }) {
  const [itens, setItens] = useState();
  useEffect(() => {
    const asyncFunc = async () => {
      if (type.includes('Comida')) setItens(await Foods.searchName(''));
      if (type.includes('Bebidas')) setItens(await Cocktails.searchName(''));
    };
    asyncFunc();
  }, [type]);

  return (itens) ? (
    <div className="carousel">
      {
        itens.slice(0, six).map((element, index) => (
          <div
            key={ index }
            className="carousel-item"
            data-testid={ `${index}-recomendation-card` }
          >
            <img src={ element.strMealThumb } alt={ element.strMeal } />
            <p data-testid={ `${index}-recomendation-title` }>{ element.strMeal }</p>
          </div>
        ))
      }
    </div>
  ) : <p>Loading ...</p>;
}

Recommendations.propTypes = {
  type: PropTypes.string.isRequired,
};
