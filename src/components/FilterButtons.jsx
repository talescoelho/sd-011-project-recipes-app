import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchFoodCategory, getFilteredFoodList } from '../services/FoodAPI';
import { getFoodCard } from '../Redux/actions/index';

export default function FilterButtons({ type }) {
  const [filters, setFilters] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const categories = await fetchFoodCategory(type);
      setFilters(categories);
    })();
  }, [type]);

  const handleFilterButton = async (category) => {
    const filtered = await getFilteredFoodList(category, type);
    console.log(filtered);
    dispatch(getFoodCard(filtered));
  };

  const filterButtons = () => filters.map((categoryName) => (
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
