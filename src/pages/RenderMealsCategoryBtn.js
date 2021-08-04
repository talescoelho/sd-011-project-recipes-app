import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useLocation } from 'react-router';
import { fetchSearchBtnIngredients, clearData } from '../redux/actions/searchBarActions';

function RenderMealsCategoriesBtn({ filterByIngredients, clearMealsData }) {
  const [categoryBtn, setCategoryBtn] = useState(undefined);
  const [toggleMeals, setToggleMeals] = useState('');
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchCategoryList = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
      const json = await response.json();
      setCategoryBtn(json);
    };
    fetchCategoryList();
  }, []);

  useEffect(() => {
    if (toggleMeals) {
      filterByIngredients(toggleMeals, pathname);
    } else {
      clearMealsData();
    }
  }, [toggleMeals, clearMealsData, pathname, filterByIngredients]);

  const handleClick = ({ target }) => {
    if (target.value === toggleMeals) {
      setToggleMeals('');
    } else {
      setToggleMeals(target.value);
    }
  };

  const handleRenderBtn = () => {
    const maxLength = 5;

    if (categoryBtn) {
      const renderBtn = categoryBtn.meals.map(({ strCategory }, index) => {
        if (index < maxLength) {
          return (
            <button
              type="button"
              data-testid={ `${strCategory}-category-filter` }
              value={ strCategory }
              onClick={ (e) => handleClick(e) }
            >
              { strCategory }
            </button>
          );
        }
        return null;
      });
      return renderBtn;
    }
  };
  return (
    <div>
      { handleRenderBtn() }
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  filterByIngredients: (searchIngredient,
    pathname) => dispatch(fetchSearchBtnIngredients(searchIngredient, pathname)),
  clearMealsData: () => dispatch(clearData()),
});

export default connect(null, mapDispatchToProps)(RenderMealsCategoriesBtn);

RenderMealsCategoriesBtn.propTypes = {
  filterByIngredients: PropTypes.func.isRequired,
  clearMealsData: PropTypes.func.isRequired,
};
