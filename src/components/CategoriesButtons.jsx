import PropTypes from 'prop-types';
import React, { useEffect, useState, useContext } from 'react';
import { Foods, Cocktails } from '../services';
import SearchBarContext from '../context/searchBarContext';

export default function CategoriesButtons({ type }) {
  const [categories, setCategories] = useState([]);
  const { setData, setKeyRedirect } = useContext(SearchBarContext);
  const five = 5;

  async function onClick({ target }) {
    if (target.onChecked) {
      if (type.includes('Comidas')) setData(await Foods.searchName(''));
      if (type.includes('Bebidas')) setData(await Cocktails.searchName(''));
      setKeyRedirect(false);
    } else {
      if (type.includes('Comidas')) setData(await Foods.searchCategory(target.value));
      if (type.includes('Bebidas')) setData(await Cocktails.searchCategory(target.value));
      setKeyRedirect(false);
      target.onChecked = true;
    }
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
            onChecked={ false }
            data-testid={ `${strCategory}-category-filter` }
            value={ strCategory }
            onClick={ (e) => onClick(e) }
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
