import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import SearchBarContext from './searchBarContext';
import { Foods, Cocktails } from '../services';

const twelve = 12;
export default function SearchBarProvider({ children, type }) {
  const [data, setData] = useState([]);
  const [keyRedirect, setKeyRedirect] = useState(true);
  const ingredient = useSelector((state) => state.recipes.ingredient);
  console.log(ingredient);

  const recipes = (data) ? data.slice(0, twelve) : [];
  useEffect(() => {
    const asyncFunc = async () => {
      if (type.includes('omida')) {
        if (ingredient) {
          setData(await Foods.searchIngredients(ingredient));
        } else {
          setData(await Foods.searchName(''));
        }
      } else if (ingredient) {
        setData(await Cocktails.searchIngredients(ingredient));
      } else {
        setData(await Cocktails.searchName(''));
      }
    };
    asyncFunc();
  }, [type, ingredient]);

  return (
    <SearchBarContext.Provider
      value={ { data, setData, recipes, keyRedirect, setKeyRedirect } }
    >
      { children }
    </SearchBarContext.Provider>
  );
}

SearchBarProvider.propTypes = {
  children: PropTypes.isRequired,
  type: PropTypes.string.isRequired,
};
