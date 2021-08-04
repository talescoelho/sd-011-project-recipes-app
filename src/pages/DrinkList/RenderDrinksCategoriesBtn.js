import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useLocation } from 'react-router';
import { fetchSearchBtnIngredients } from '../../redux/actions/searchBarActions';

function RenderDrinksCategoriesBtn({ filterByIngredients }) {
  const [categoryBtn, setCategoryBtn] = useState(undefined);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchCategoryList = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
      const json = await response.json();
      setCategoryBtn(json);
    };
    fetchCategoryList();
  }, []);

  const handleRenderBtn = () => {
    const maxLength = 5;

    if (categoryBtn) {
      const renderBtn = categoryBtn.drinks.map((category, index) => {
        if (index < maxLength) {
          return (
            <button
              type="button"
              data-testid={ `${category.strCategory}-category-filter` }
              key={ index }
              onClick={ () => filterByIngredients(category.strCategory, pathname) }
            >
              { category.strCategory }
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
});

export default connect(null, mapDispatchToProps)(RenderDrinksCategoriesBtn);

RenderDrinksCategoriesBtn.propTypes = {
  filterByIngredients: PropTypes.func.isRequired,
};
