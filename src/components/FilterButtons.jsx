import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFoodCategory, getFilteredFoodList } from '../services/FoodAPI';

export default function FilterButtons({ type }) {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const { categories } = recipes;

  useEffect(() => {
    dispatch(fetchFoodCategory(type));
  }, [dispatch, type]);

  const handleFilterButton = (selectedCategory) => {
    const cat = recipes.filteredCategory === selectedCategory ? 'All' : selectedCategory;
    dispatch(getFilteredFoodList(cat, type));
  };

  const replaced = {
    drinks: {
      'Milk / Float / Shake': 'Milk Shake',
      'Other/Unknown': 'Others',
      'Ordinary Drink': 'Ordinary',
      All: 'All',
      Cocktail: 'Cocktail',
      Cocoa: 'Cocoa',
    },
  };

  const filterButtons = () => categories[type].map((categoryName) => {
    const repl = type === 'drinks' ? replaced[type][categoryName] : categoryName;
    return (
      <Button
        key={ categoryName }
        onClick={ () => handleFilterButton(categoryName) }
        data-testid={ `${categoryName}-category-filter` }
        className="filter-button"
      >
        {repl}
      </Button>);
  });

  return (
    <div className="filter-buttons">
      {filterButtons()}
    </div>

  );
}

FilterButtons.propTypes = {
  type: PropTypes.string.isRequired,
};
