import PropTypes from 'prop-types';
import React, { useEffect, useState, useContext } from 'react';
import { Foods, Cocktails } from '../services';
import SearchBarContext from '../context/searchBarContext';

export default function CategoriesButtons({ type }) {
  const [categories, setCategories] = useState([]);
  const { setData, setKeyRedirect } = useContext(SearchBarContext);
  // const [checked, setChecked] = useState(false);
  const five = 5;

  async function allCategories() {
    setKeyRedirect(false);
    if (type.includes('Comidas')) setData(await Foods.searchName(''));
    if (type.includes('Bebidas')) setData(await Cocktails.searchName(''));
  }

  async function onClick({ target }, strCategory) {
    if (target.onChecked) {
      allCategories();
      target.onChecked = false;
    } else {
      setKeyRedirect(false);
      if (type.includes('Comidas')) setData(await Foods.searchCategory(strCategory));
      if (type.includes('Bebidas')) setData(await Cocktails.searchCategory(strCategory));
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
    <div className="btn-group d-flex flex-wrap mb-3">
      <button
        className="btn btn-light btn-sm border"
        data-testid="All-category-filter"
        type="button"
        onClick={ () => allCategories() }
        onChecked={ false }
      >
        All
      </button>
      {
        categories.slice(0, five).map(({ strCategory }, index) => (
          <button
            className="btn btn-light btn-sm border"
            type="button"
            key={ index }
            onChecked={ false }
            data-testid={ `${strCategory}-category-filter` }
            value={ strCategory }
            onClick={ (e) => onClick(e, strCategory) }
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
