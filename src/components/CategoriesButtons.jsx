import PropTypes from 'prop-types';
import React, { useEffect, useState, useContext } from 'react';
import { Foods, Cocktails } from '../services';
import SearchBarContext from '../context/searchBarContext';

export default function CategoriesButtons({ type }) {
  const [categories, setCategories] = useState([]);
  const { setData } = useContext(SearchBarContext);
  const five = 5;

  async function onClick({ target }) {
    if (type.includes('Comidas')) setData(await Foods.searchCategory(target.value));
    if (type.includes('Bebidas')) setData(await Cocktails.searchCategory(target.value));
    console.log(await Cocktails.searchCategory(target.value));
  }

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
            value={ strCategory }
            onClick={ onClick }
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
