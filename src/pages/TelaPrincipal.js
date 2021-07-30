import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getCategories from '../services/getCategories';
import Header from '../components/Header';
import MealsCards from '../components/MealsCards';
import DrinksCards from '../components/DrinksCards';

import { drinks } from '../mock/drinks';
import { meals } from '../mock/meals';

const mockData = { drinks, meals };
export default function TelaPrincipal({ type }) {
  let data = [];
  if (type === 'meal') {
    data = mockData.meals;
  } else {
    data = mockData.drinks;
  }

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getCategories(type);
      if (type === 'meal') setCategories(response.meals);
      else setCategories(response.drinks);
    };
    fetchCategories();
  }, [type]);

  const filteredData = data;

  const categoryLimit = 5;
  return (
    <div>
      <Header
        title={ type === 'meal' ? 'Comidas' : 'Bebidas' }
        type={ type }
        showButton
      />
      <div>
        {
          categories.map(({ strCategory }, index) => (
            index < categoryLimit
              ? (
                <button
                  type="button"
                  key={ strCategory }
                  data-testid={ `${strCategory}-category-filter` }
                >
                  {strCategory}
                </button>
              )
              : null
          ))
        }
      </div>
      {
        type === 'meal'
          ? <MealsCards meals={ filteredData } />
          : <DrinksCards drinks={ filteredData } />
      }
    </div>
  );
}

TelaPrincipal.propTypes = {
  type: PropTypes.string,
}.isRequired;
