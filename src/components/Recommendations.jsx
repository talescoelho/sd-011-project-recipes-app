import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Foods, Cocktails, getIds } from '../services';

const six = 6;
export default function Recommendations({ type }) {
  const [items, setItems] = useState();
  useEffect(() => {
    const asyncFunc = async () => {
      if (type === 'comida') setItems(await Foods.searchName(''));
      if (type === 'bebida') setItems(await Cocktails.searchName(''));
    };
    asyncFunc();
  }, [type]);

  return (items) ? (
    <div className="carousel">
      {
        items.slice(0, six).map((element, index) => {
          const { image, name } = getIds(type, element);
          return (
            <div
              key={ index }
              className="carouselItem"
              data-testid={ `${index}-recomendation-card` }
            >
              <img src={ image } alt={ name } />
              <p data-testid={ `${index}-recomendation-title` }>{ name }</p>
            </div>
          );
        })
      }
    </div>
  ) : <p>Loading ...</p>;
}

Recommendations.propTypes = {
  type: PropTypes.string.isRequired,
};
