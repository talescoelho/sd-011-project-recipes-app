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
    const cat = recipes.selectedCategory === selectedCategory ? 'All' : selectedCategory;
    dispatch(getFilteredFoodList(cat, type));
  };

  const filterButtons = () => categories[type].map((categoryName) => (
    <Button
      key={ categoryName }
      onClick={ () => handleFilterButton(categoryName) }
      data-testid={ `${categoryName}-category-filter` }
      className="filter-button"
    >
      {categoryName}
    </Button>
  ));

  return (
    <div className="filter-buttons">
      {filterButtons()}
    </div>

  );
}

FilterButtons.propTypes = {
  type: PropTypes.string.isRequired,
};
