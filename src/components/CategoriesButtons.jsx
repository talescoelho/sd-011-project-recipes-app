import PropTypes from 'prop-types';
import React, { useEffect, useState, useContext } from 'react';
import { Foods, Cocktails } from '../services';
import SearchBarContext from '../context/searchBarContext';

export default function CategoriesButtons({ type }) {
  const [categories, setCategories] = useState([]);
  const { setData, setKeyRedirect } = useContext(SearchBarContext);
  const [checked, setChecked] = useState(false);
  const five = 5;

  async function onClick(strCategory) {
    if (checked) {
      setKeyRedirect(false);
      if (type.includes('Comidas')) setData(await Foods.searchName(''));
      if (type.includes('Bebidas')) setData(await Cocktails.searchName(''));
      setChecked(false);
    } else {
      setKeyRedirect(false);
      if (type.includes('Comidas')) setData(await Foods.searchCategory(strCategory));
      if (type.includes('Bebidas')) setData(await Cocktails.searchCategory(strCategory));
      setChecked(true);
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
            data-testid={ `${strCategory}-category-filter` }
            value={ strCategory }
            onClick={ () => onClick(strCategory) }
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
