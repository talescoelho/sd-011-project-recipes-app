import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Foods, Cocktails } from '../services';

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
    <div>
      {
        itens.map((element, index) => (
          <div key={ index }>
            <img src={ element.strMealThumb } alt={ element.strMeal } />
            <p>{ element.strMeal }</p>
          </div>
        ))
      }
    </div>
  ) : <p>Loading ...</p>;
}

Recommendations.propTypes = {
  type: PropTypes.string.isRequired,
};
