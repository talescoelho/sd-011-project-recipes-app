import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FoodCard from '../components/FoodCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/comidas.css';
import { fetchCategorieFoodFilterAction, fetchFoodAction } from '../redux/actions';

function Foods(props) {
  const [categories, setCategories] = useState({});
  const categoriesLength = 5;

  const fetchComidas = (endPointFetch, setState) => {
    fetch(endPointFetch)
      .then((resolve) => resolve.json())
      .then((response) => setState(response));
  };

  useEffect(() => {
    fetchComidas('https://www.themealdb.com/api/json/v1/1/list.php?c=list', setCategories);
  }, []);

  if (!categories.meals) {
    return <div>Carregando...</div>;
  }

  function handleChange(target, strCategory) {
    const { searchAllCategory, searchCategory } = props;
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach((checkbox) => {
      if (target.id !== checkbox.id) {
        checkbox.checked = false;
      }
    });
    if (target.checked) {
      if (strCategory === 'All') {
        searchAllCategory();
      } else {
        searchCategory(strCategory);
      }
    } else {
      searchAllCategory();
    }
  }

  return (
    <div>
      <Header title="Comidas" />
      <label htmlFor="All">
        <input
          data-testid="All-category-filter"
          id="All"
          type="checkbox"
          name="category"
          value="All"
          onClick={ ({ target }) => handleChange(target, 'All') }
        />
        All
      </label>
      {
        categories.meals.filter((_, index) => index < categoriesLength)
          .map((category, index) => (
            <label key={ index } htmlFor={ category.strCategory }>
              <input
                data-testid={ `${category.strCategory}-category-filter` }
                id={ category.strCategory }
                type="checkbox"
                name="category"
                value={ category.strCategory }
                onClick={ ({ target }) => handleChange(target, category.strCategory) }
              />
              { category.strCategory }
            </label>
          ))
      }
      <FoodCard />
      <Footer />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  searchCategory: (category) => dispatch(fetchCategorieFoodFilterAction(category)),
  searchAllCategory: (category) => dispatch(fetchFoodAction(category)),
});

Foods.propTypes = {
  searchAllCategory: PropTypes.func,
  searchCategory: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Foods);
