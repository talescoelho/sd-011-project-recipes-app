import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Foods, Cocktails } from '../services';

export default function CategoriesButtons({ type }) {
  const [categories, setCategories] = useState([]);
  const five = 5;

  useEffect(() => {
    async function asyncFunc() {
      if (type.includes('Comidas')) setCategories(await Foods.categories);
      if (type.includes('Bebidas')) setCategories(await Cocktails.categories);
    }
    asyncFunc();
  }, [type]);
  return (
    <div>
      {
        categories.slice(0, five).map(({ strCategory }, index) => (
          <button
            type="button"
            key={ index }
            data-testid={ `${strCategory}-category-filter` }
          >
            { strCategory }
          </button>
        ))
      }
    </div>
  );
}

CategoriesButtons.propTypes = {
  type: PropTypes.string.isRequired,
};
